import { CommonTokenStream, Parser, Token, ANTLRErrorListener } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree";
import { PredictionMode } from "antlr4ts/atn";
import { SQLCore, SQLDialect } from "../SQLCore";
import { CodeCompletionCore } from "antlr4-c3/out";
import { AutocompleteOption, SimpleSQLTokenizer, AutocompleteOptionType } from "../Model";
import { MySQLGrammar, PLpgSQLGrammar, PlSQLGrammar, TSQLGrammar } from "../grammar-output";
import { ErrorListener, IError } from "../ErrorHandler/ErrorListener";

/**
 * inputCtx
 *
 * inputStream
 *
 * lexer
 *
 * tokens Stream
 *
 * parser
 *
 *
 * SYNTAX ERROR
 * add listener after lexer and parser
 * get result after do parse
 *
 *
 * AUTO-COMPLETE
 * get core after
 */

type ParseResult = {
	tokens: CommonTokenStream;
	parser: Parser;
	parseTree: ParseTree;
	errorListener: ErrorListener;
};

export class SQLAutocomplete {
	dialect: SQLDialect;
	errorListener: ErrorListener;
	SQLCore: SQLCore;

	tableInfo: {
		tableNames: string[];
		columnNames: string[];
	};

	constructor(dialect: SQLDialect, errorListener?: ErrorListener, tableInfo?: { tableNames?: string[]; columnNames?: string[] }) {
		this.dialect = dialect;
		this.SQLCore = new SQLCore(this.dialect);
		this.errorListener = errorListener ? errorListener : new ErrorListener();
		if (tableInfo?.tableNames != null) {
			this.tableInfo.tableNames.push(...tableInfo.tableNames);
		}
		if (tableInfo?.columnNames != null) {
			this.tableInfo.columnNames.push(...tableInfo.columnNames);
		}
	}

	parse(inputCtx: string, atIndex?: number): ParseResult {
		if (atIndex != null) {
			// Remove everything after the index we want to get suggestions for,
			// it's not needed and keeping it in may impact which token gets selected for prediction
			inputCtx = inputCtx.substring(0, atIndex);
		}

		const tokens = this._getTokens(inputCtx, this.errorListener);
		const parser = this._getParser(tokens, this.errorListener);
		const parseTree = this._getParseTree(parser);

		return {
			tokens,
			parser,
			parseTree,
			errorListener: this.errorListener,
		};
	}

	autoComplete(inputCtx: string, atIndex?: number): AutocompleteOption[] {
		const { tokens, parser } = this.parse(inputCtx);
		const core = new CodeCompletionCore(parser); // antlr4-c3

		const preferredRulesTable = this._getPreferredRulesForTable();
		const preferredRulesColumn = this._getPreferredRulesForColumn();
		const preferredRuleOptions = [preferredRulesTable, preferredRulesColumn];
		const ignoreTokens = this._getTokensToIgnore();
		core.ignoredTokens = new Set(ignoreTokens);
		let indexToAutocomplete = inputCtx.length;
		if (atIndex !== null && atIndex !== undefined) {
			indexToAutocomplete = atIndex;
		}
		const simpleSQLTokenizer = new SimpleSQLTokenizer(inputCtx, this._tokenizeWhitespace());
		const allTokens = new CommonTokenStream(simpleSQLTokenizer);
		const tokenIndex = this._getTokenIndexAt(allTokens.getTokens(), inputCtx, indexToAutocomplete);

		if (tokenIndex === null) {
			return [];
		}

		const token: any = allTokens.getTokens()[tokenIndex];
		const tokenString = this._getTokenString(token, inputCtx, indexToAutocomplete);
		tokens.fill(); // Needed for CoreCompletionCore to process correctly, see: https://github.com/mike-lischke/antlr4-c3/issues/42
		const suggestions: AutocompleteOption[] = [];
		// Depending on the SQL grammar, we may not get both Tables and Column rules,
		// even if both are viable options for autocompletion
		// So, instead of using all preferredRules at once, we'll do them separate
		let isTableCandidatePosition = false;
		let isColumnCandidatePosition = false;
		for (const preferredRules of preferredRuleOptions) {
			core.preferredRules = new Set(preferredRules);
			const candidates = core.collectCandidates(tokenIndex);
			for (const candidateToken of candidates.tokens) {
				let candidateTokenValue = parser.vocabulary.getDisplayName(candidateToken[0]);
				if (this.dialect === SQLDialect.MYSQL && candidateTokenValue.endsWith("_SYMBOL")) {
					candidateTokenValue = candidateTokenValue.substring(0, candidateTokenValue.length - 7);
				}
				if (candidateTokenValue.startsWith("'") && candidateTokenValue.endsWith("'")) {
					candidateTokenValue = candidateTokenValue.substring(1, candidateTokenValue.length - 1);
				}
				let followOnTokens = candidateToken[1];
				for (const followOnToken of followOnTokens) {
					let followOnTokenValue = parser.vocabulary.getDisplayName(followOnToken);
					if (followOnTokenValue.startsWith("'") && followOnTokenValue.endsWith("'")) {
						followOnTokenValue = followOnTokenValue.substring(1, followOnTokenValue.length - 1);
					}
					if (!(followOnTokenValue.length === 1 && /[^\w\s]/.test(followOnTokenValue))) {
						candidateTokenValue += " ";
					}
					candidateTokenValue += followOnTokenValue;
				}
				if (tokenString.length === 0 || (candidateTokenValue.startsWith(tokenString.toUpperCase()) && suggestions.find(option => option.value === candidateTokenValue) === undefined)) {
					suggestions.push(new AutocompleteOption(candidateTokenValue, AutocompleteOptionType.KEYWORD));
				}
			}
			for (const rule of candidates.rules) {
				if (preferredRulesTable.includes(rule[0])) {
					isTableCandidatePosition = true;
				}
				if (preferredRulesColumn.includes(rule[0])) {
					isColumnCandidatePosition = true;
				}
			}
		}
		if (isTableCandidatePosition) {
			for (const tableName of this.tableInfo.tableNames) {
				if (tableName.toUpperCase().startsWith(tokenString.toUpperCase())) {
					suggestions.unshift(new AutocompleteOption(tableName, AutocompleteOptionType.TABLE));
				}
			}
			if (suggestions.length === 0 || suggestions[0].optionType !== AutocompleteOptionType.TABLE) {
				// If none of the table options match, still identify this as a potential table location
				suggestions.unshift(new AutocompleteOption(null, AutocompleteOptionType.TABLE));
			}
		}
		if (isColumnCandidatePosition) {
			for (const columnName of this.tableInfo.columnNames) {
				if (columnName.toUpperCase().startsWith(tokenString.toUpperCase())) {
					suggestions.unshift(new AutocompleteOption(columnName, AutocompleteOptionType.COLUMN));
				}
			}
			if (suggestions.length === 0 || suggestions[0].optionType !== AutocompleteOptionType.COLUMN) {
				// If none of the column options match, still identify this as a potential column location
				suggestions.unshift(new AutocompleteOption(null, AutocompleteOptionType.COLUMN));
			}
		}

		return suggestions;
	}

	validate(inputCtx: string): IError[] {
		const { errorListener } = this.parse(inputCtx);
		const errors = errorListener.getErrors();
		return errors;
	}

	setTableNames(tableNames: string[]): void {
		if (tableNames !== null && tableNames !== undefined) {
			this.tableInfo.tableNames = [...tableNames];
		}
	}

	setColumnNames(columnNames: string[]): void {
		if (columnNames !== null && columnNames !== undefined) {
			this.tableInfo.columnNames = [...columnNames];
		}
	}

	_getTokens(inputCtx: string, errorListener?: ANTLRErrorListener<any>): CommonTokenStream {
		const tokens = this.SQLCore.getTokens(inputCtx, errorListener);
		return tokens;
	}

	_getParser(tokens: CommonTokenStream, errorListener?: ANTLRErrorListener<any>): Parser {
		let parser = this.SQLCore.getParser(tokens, errorListener);
		parser.interpreter.setPredictionMode(PredictionMode.LL);
		return parser;
	}

	_getParseTree(parser: Parser): ParseTree {
		return this.SQLCore.getParseTree(parser);
	}

	_tokenizeWhitespace() {
		if (this.dialect === SQLDialect.TSQL) {
			return false; // TSQL grammar SKIPs whitespace
		} else if (this.dialect === SQLDialect.PLSQL) {
			return true;
		} else if (this.dialect === SQLDialect.PLpgSQL) {
			return true;
		} else if (this.dialect === SQLDialect.MYSQL) {
			return true;
		} else if (this.dialect === SQLDialect.SQLite) {
			return true;
		}
		return true;
	}

	_getPreferredRulesForTable(): number[] {
		if (this.dialect === SQLDialect.TSQL) {
			return [TSQLGrammar.TSqlParser.RULE_table_name, TSQLGrammar.TSqlParser.RULE_table_name_with_hint, TSQLGrammar.TSqlParser.RULE_full_table_name, TSQLGrammar.TSqlParser.RULE_table_source];
		} else if (this.dialect === SQLDialect.MYSQL) {
			return [MySQLGrammar.MultiQueryMySQLParser.RULE_tableRef, MySQLGrammar.MultiQueryMySQLParser.RULE_fieldIdentifier];
		} else if (this.dialect === SQLDialect.PLSQL) {
			return [PlSQLGrammar.PlSqlParser.RULE_tableview_name, PlSQLGrammar.PlSqlParser.RULE_table_element];
		} else if (this.dialect === SQLDialect.PLpgSQL) {
			return [PLpgSQLGrammar.PLpgSQLParser.RULE_schema_qualified_name, PLpgSQLGrammar.PLpgSQLParser.RULE_indirection_var];
		}
		return [];
	}

	_getPreferredRulesForColumn(): number[] {
		if (this.dialect === SQLDialect.TSQL) {
			return [TSQLGrammar.TSqlParser.RULE_column_elem, TSQLGrammar.TSqlParser.RULE_column_alias, TSQLGrammar.TSqlParser.RULE_full_column_name, TSQLGrammar.TSqlParser.RULE_output_column_name, TSQLGrammar.TSqlParser.RULE_column_declaration];
		} else if (this.dialect === SQLDialect.MYSQL) {
			return [MySQLGrammar.MultiQueryMySQLParser.RULE_columnRef];
		} else if (this.dialect === SQLDialect.PLSQL) {
			return [PlSQLGrammar.PlSqlParser.RULE_column_name, PlSQLGrammar.PlSqlParser.RULE_general_element];
		} else if (this.dialect === SQLDialect.PLpgSQL) {
			return [PLpgSQLGrammar.PLpgSQLParser.RULE_indirection_var, PLpgSQLGrammar.PLpgSQLParser.RULE_indirection_identifier];
		}
		return [];
	}

	_getTokensToIgnore(): number[] {
		if (this.dialect === SQLDialect.TSQL) {
			return [TSQLGrammar.TSqlParser.DOT, TSQLGrammar.TSqlParser.COMMA, TSQLGrammar.TSqlParser.ID, TSQLGrammar.TSqlParser.LR_BRACKET, TSQLGrammar.TSqlParser.RR_BRACKET];
		} else if (this.dialect === SQLDialect.MYSQL) {
			return [
				MySQLGrammar.MultiQueryMySQLParser.DOT_SYMBOL,
				MySQLGrammar.MultiQueryMySQLParser.COMMA_SYMBOL,
				MySQLGrammar.MultiQueryMySQLParser.SEMICOLON_SYMBOL,
				MySQLGrammar.MultiQueryMySQLParser.IDENTIFIER,
				MySQLGrammar.MultiQueryMySQLParser.OPEN_PAR_SYMBOL,
				MySQLGrammar.MultiQueryMySQLParser.CLOSE_PAR_SYMBOL,
				MySQLGrammar.MultiQueryMySQLParser.OPEN_CURLY_SYMBOL,
				MySQLGrammar.MultiQueryMySQLParser.CLOSE_CURLY_SYMBOL,
			];
		} else if (this.dialect === SQLDialect.PLSQL) {
			return [
				PlSQLGrammar.PlSqlParser.PERIOD,
				PlSQLGrammar.PlSqlParser.COMMA,
				PlSQLGrammar.PlSqlParser.SEMICOLON,
				PlSQLGrammar.PlSqlParser.DOUBLE_PERIOD,
				PlSQLGrammar.PlSqlParser.IDENTIFIER,
				PlSQLGrammar.PlSqlParser.LEFT_PAREN,
				PlSQLGrammar.PlSqlParser.RIGHT_PAREN,
			];
		} else if (this.dialect === SQLDialect.PLpgSQL) {
			return [
				PLpgSQLGrammar.PLpgSQLParser.DOT,
				PLpgSQLGrammar.PLpgSQLParser.COMMA,
				PLpgSQLGrammar.PLpgSQLParser.SEMI_COLON,
				PLpgSQLGrammar.PLpgSQLParser.DOUBLE_DOT,
				PLpgSQLGrammar.PLpgSQLParser.Identifier,
				PLpgSQLGrammar.PLpgSQLParser.LEFT_PAREN,
				PLpgSQLGrammar.PLpgSQLParser.RIGHT_PAREN,
				PLpgSQLGrammar.PLpgSQLParser.LEFT_BRACKET,
				PLpgSQLGrammar.PLpgSQLParser.RIGHT_BRACKET,
			];
		}
		return [];
	}

	_getTokenIndexAt(tokens: any[], fullString: string, offset: number): number | null {
		if (tokens.length === 0) {
			return null;
		}
		let i: number = 0;
		let lastNonEOFToken: number | null = null;
		while (i < tokens.length) {
			const token = tokens[i];
			if (token.type !== Token.EOF) {
				lastNonEOFToken = i;
			}
			if (token.start > offset) {
				if (i === 0) {
					return null;
				}
				return i - 1;
			}
			i++;
		}
		// If we didn't find the token above and the last
		// character in the autocomplete is whitespace,
		// start autocompleting for the next token
		if (/\s$/.test(fullString)) {
			return i - 1;
		}
		return lastNonEOFToken;
	}

	_getTokenString(token: any, fullString: string, offset: number): string {
		if (token !== null && token.type !== Token.EOF) {
			let stop = token.stop;
			if (offset < stop) {
				stop = offset;
			}
			return fullString.substring(token.start, stop + 1);
		}
		return "";
	}
}
