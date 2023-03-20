// Generated from ./SQLiteParser.g4 by grammar-output 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SQLiteParserListener } from "./SQLiteParserListener";

export class SQLiteParser extends Parser {
	public static readonly SCOL = 1;
	public static readonly DOT = 2;
	public static readonly OPEN_PAR = 3;
	public static readonly CLOSE_PAR = 4;
	public static readonly COMMA = 5;
	public static readonly ASSIGN = 6;
	public static readonly STAR = 7;
	public static readonly PLUS = 8;
	public static readonly MINUS = 9;
	public static readonly TILDE = 10;
	public static readonly PIPE2 = 11;
	public static readonly DIV = 12;
	public static readonly MOD = 13;
	public static readonly LT2 = 14;
	public static readonly GT2 = 15;
	public static readonly AMP = 16;
	public static readonly PIPE = 17;
	public static readonly LT = 18;
	public static readonly LT_EQ = 19;
	public static readonly GT = 20;
	public static readonly GT_EQ = 21;
	public static readonly EQ = 22;
	public static readonly NOT_EQ1 = 23;
	public static readonly NOT_EQ2 = 24;
	public static readonly ABORT_ = 25;
	public static readonly ACTION_ = 26;
	public static readonly ADD_ = 27;
	public static readonly AFTER_ = 28;
	public static readonly ALL_ = 29;
	public static readonly ALTER_ = 30;
	public static readonly ANALYZE_ = 31;
	public static readonly AND_ = 32;
	public static readonly AS_ = 33;
	public static readonly ASC_ = 34;
	public static readonly ATTACH_ = 35;
	public static readonly AUTOINCREMENT_ = 36;
	public static readonly BEFORE_ = 37;
	public static readonly BEGIN_ = 38;
	public static readonly BETWEEN_ = 39;
	public static readonly BY_ = 40;
	public static readonly CASCADE_ = 41;
	public static readonly CASE_ = 42;
	public static readonly CAST_ = 43;
	public static readonly CHECK_ = 44;
	public static readonly COLLATE_ = 45;
	public static readonly COLUMN_ = 46;
	public static readonly COMMIT_ = 47;
	public static readonly CONFLICT_ = 48;
	public static readonly CONSTRAINT_ = 49;
	public static readonly CREATE_ = 50;
	public static readonly CROSS_ = 51;
	public static readonly CURRENT_DATE_ = 52;
	public static readonly CURRENT_TIME_ = 53;
	public static readonly CURRENT_TIMESTAMP_ = 54;
	public static readonly DATABASE_ = 55;
	public static readonly DEFAULT_ = 56;
	public static readonly DEFERRABLE_ = 57;
	public static readonly DEFERRED_ = 58;
	public static readonly DELETE_ = 59;
	public static readonly DESC_ = 60;
	public static readonly DETACH_ = 61;
	public static readonly DISTINCT_ = 62;
	public static readonly DROP_ = 63;
	public static readonly EACH_ = 64;
	public static readonly ELSE_ = 65;
	public static readonly END_ = 66;
	public static readonly ESCAPE_ = 67;
	public static readonly EXCEPT_ = 68;
	public static readonly EXCLUSIVE_ = 69;
	public static readonly EXISTS_ = 70;
	public static readonly EXPLAIN_ = 71;
	public static readonly FAIL_ = 72;
	public static readonly FOR_ = 73;
	public static readonly FOREIGN_ = 74;
	public static readonly FROM_ = 75;
	public static readonly FULL_ = 76;
	public static readonly GLOB_ = 77;
	public static readonly GROUP_ = 78;
	public static readonly HAVING_ = 79;
	public static readonly IF_ = 80;
	public static readonly IGNORE_ = 81;
	public static readonly IMMEDIATE_ = 82;
	public static readonly IN_ = 83;
	public static readonly INDEX_ = 84;
	public static readonly INDEXED_ = 85;
	public static readonly INITIALLY_ = 86;
	public static readonly INNER_ = 87;
	public static readonly INSERT_ = 88;
	public static readonly INSTEAD_ = 89;
	public static readonly INTERSECT_ = 90;
	public static readonly INTO_ = 91;
	public static readonly IS_ = 92;
	public static readonly ISNULL_ = 93;
	public static readonly JOIN_ = 94;
	public static readonly KEY_ = 95;
	public static readonly LEFT_ = 96;
	public static readonly LIKE_ = 97;
	public static readonly LIMIT_ = 98;
	public static readonly MATCH_ = 99;
	public static readonly NATURAL_ = 100;
	public static readonly NO_ = 101;
	public static readonly NOT_ = 102;
	public static readonly NOTNULL_ = 103;
	public static readonly NULL_ = 104;
	public static readonly OF_ = 105;
	public static readonly OFFSET_ = 106;
	public static readonly ON_ = 107;
	public static readonly OR_ = 108;
	public static readonly ORDER_ = 109;
	public static readonly OUTER_ = 110;
	public static readonly PLAN_ = 111;
	public static readonly PRAGMA_ = 112;
	public static readonly PRIMARY_ = 113;
	public static readonly QUERY_ = 114;
	public static readonly RAISE_ = 115;
	public static readonly RECURSIVE_ = 116;
	public static readonly REFERENCES_ = 117;
	public static readonly REGEXP_ = 118;
	public static readonly REINDEX_ = 119;
	public static readonly RELEASE_ = 120;
	public static readonly RENAME_ = 121;
	public static readonly REPLACE_ = 122;
	public static readonly RESTRICT_ = 123;
	public static readonly RETURNING_ = 124;
	public static readonly RIGHT_ = 125;
	public static readonly ROLLBACK_ = 126;
	public static readonly ROW_ = 127;
	public static readonly ROWS_ = 128;
	public static readonly SAVEPOINT_ = 129;
	public static readonly SELECT_ = 130;
	public static readonly SET_ = 131;
	public static readonly TABLE_ = 132;
	public static readonly TEMP_ = 133;
	public static readonly TEMPORARY_ = 134;
	public static readonly THEN_ = 135;
	public static readonly TO_ = 136;
	public static readonly TRANSACTION_ = 137;
	public static readonly TRIGGER_ = 138;
	public static readonly UNION_ = 139;
	public static readonly UNIQUE_ = 140;
	public static readonly UPDATE_ = 141;
	public static readonly USING_ = 142;
	public static readonly VACUUM_ = 143;
	public static readonly VALUES_ = 144;
	public static readonly VIEW_ = 145;
	public static readonly VIRTUAL_ = 146;
	public static readonly WHEN_ = 147;
	public static readonly WHERE_ = 148;
	public static readonly WITH_ = 149;
	public static readonly WITHOUT_ = 150;
	public static readonly FIRST_VALUE_ = 151;
	public static readonly OVER_ = 152;
	public static readonly PARTITION_ = 153;
	public static readonly RANGE_ = 154;
	public static readonly PRECEDING_ = 155;
	public static readonly UNBOUNDED_ = 156;
	public static readonly CURRENT_ = 157;
	public static readonly FOLLOWING_ = 158;
	public static readonly CUME_DIST_ = 159;
	public static readonly DENSE_RANK_ = 160;
	public static readonly LAG_ = 161;
	public static readonly LAST_VALUE_ = 162;
	public static readonly LEAD_ = 163;
	public static readonly NTH_VALUE_ = 164;
	public static readonly NTILE_ = 165;
	public static readonly PERCENT_RANK_ = 166;
	public static readonly RANK_ = 167;
	public static readonly ROW_NUMBER_ = 168;
	public static readonly GENERATED_ = 169;
	public static readonly ALWAYS_ = 170;
	public static readonly STORED_ = 171;
	public static readonly TRUE_ = 172;
	public static readonly FALSE_ = 173;
	public static readonly WINDOW_ = 174;
	public static readonly NULLS_ = 175;
	public static readonly FIRST_ = 176;
	public static readonly LAST_ = 177;
	public static readonly FILTER_ = 178;
	public static readonly GROUPS_ = 179;
	public static readonly EXCLUDE_ = 180;
	public static readonly TIES_ = 181;
	public static readonly OTHERS_ = 182;
	public static readonly DO_ = 183;
	public static readonly NOTHING_ = 184;
	public static readonly IDENTIFIER = 185;
	public static readonly NUMERIC_LITERAL = 186;
	public static readonly BIND_PARAMETER = 187;
	public static readonly STRING_LITERAL = 188;
	public static readonly BLOB_LITERAL = 189;
	public static readonly SINGLE_LINE_COMMENT = 190;
	public static readonly MULTILINE_COMMENT = 191;
	public static readonly SPACES = 192;
	public static readonly UNEXPECTED_CHAR = 193;
	public static readonly RULE_parse = 0;
	public static readonly RULE_sql_stmt_list = 1;
	public static readonly RULE_sql_stmt = 2;
	public static readonly RULE_alter_table_stmt = 3;
	public static readonly RULE_analyze_stmt = 4;
	public static readonly RULE_attach_stmt = 5;
	public static readonly RULE_begin_stmt = 6;
	public static readonly RULE_commit_stmt = 7;
	public static readonly RULE_rollback_stmt = 8;
	public static readonly RULE_savepoint_stmt = 9;
	public static readonly RULE_release_stmt = 10;
	public static readonly RULE_create_index_stmt = 11;
	public static readonly RULE_indexed_column = 12;
	public static readonly RULE_create_table_stmt = 13;
	public static readonly RULE_column_def = 14;
	public static readonly RULE_type_name = 15;
	public static readonly RULE_column_constraint = 16;
	public static readonly RULE_signed_number = 17;
	public static readonly RULE_table_constraint = 18;
	public static readonly RULE_foreign_key_clause = 19;
	public static readonly RULE_conflict_clause = 20;
	public static readonly RULE_create_trigger_stmt = 21;
	public static readonly RULE_create_view_stmt = 22;
	public static readonly RULE_create_virtual_table_stmt = 23;
	public static readonly RULE_with_clause = 24;
	public static readonly RULE_cte_table_name = 25;
	public static readonly RULE_recursive_cte = 26;
	public static readonly RULE_common_table_expression = 27;
	public static readonly RULE_delete_stmt = 28;
	public static readonly RULE_delete_stmt_limited = 29;
	public static readonly RULE_detach_stmt = 30;
	public static readonly RULE_drop_stmt = 31;
	public static readonly RULE_expr = 32;
	public static readonly RULE_raise_function = 33;
	public static readonly RULE_literal_value = 34;
	public static readonly RULE_value_row = 35;
	public static readonly RULE_values_clause = 36;
	public static readonly RULE_insert_stmt = 37;
	public static readonly RULE_returning_clause = 38;
	public static readonly RULE_upsert_clause = 39;
	public static readonly RULE_pragma_stmt = 40;
	public static readonly RULE_pragma_value = 41;
	public static readonly RULE_reindex_stmt = 42;
	public static readonly RULE_select_stmt = 43;
	public static readonly RULE_join_clause = 44;
	public static readonly RULE_select_core = 45;
	public static readonly RULE_factored_select_stmt = 46;
	public static readonly RULE_simple_select_stmt = 47;
	public static readonly RULE_compound_select_stmt = 48;
	public static readonly RULE_table_or_subquery = 49;
	public static readonly RULE_result_column = 50;
	public static readonly RULE_join_operator = 51;
	public static readonly RULE_join_constraint = 52;
	public static readonly RULE_compound_operator = 53;
	public static readonly RULE_update_stmt = 54;
	public static readonly RULE_column_name_list = 55;
	public static readonly RULE_update_stmt_limited = 56;
	public static readonly RULE_qualified_table_name = 57;
	public static readonly RULE_vacuum_stmt = 58;
	public static readonly RULE_filter_clause = 59;
	public static readonly RULE_window_defn = 60;
	public static readonly RULE_over_clause = 61;
	public static readonly RULE_frame_spec = 62;
	public static readonly RULE_frame_clause = 63;
	public static readonly RULE_simple_function_invocation = 64;
	public static readonly RULE_aggregate_function_invocation = 65;
	public static readonly RULE_window_function_invocation = 66;
	public static readonly RULE_common_table_stmt = 67;
	public static readonly RULE_order_by_stmt = 68;
	public static readonly RULE_limit_stmt = 69;
	public static readonly RULE_ordering_term = 70;
	public static readonly RULE_asc_desc = 71;
	public static readonly RULE_frame_left = 72;
	public static readonly RULE_frame_right = 73;
	public static readonly RULE_frame_single = 74;
	public static readonly RULE_window_function = 75;
	public static readonly RULE_offset = 76;
	public static readonly RULE_default_value = 77;
	public static readonly RULE_partition_by = 78;
	public static readonly RULE_order_by_expr = 79;
	public static readonly RULE_order_by_expr_asc_desc = 80;
	public static readonly RULE_expr_asc_desc = 81;
	public static readonly RULE_initial_select = 82;
	public static readonly RULE_recursive_select = 83;
	public static readonly RULE_unary_operator = 84;
	public static readonly RULE_error_message = 85;
	public static readonly RULE_module_argument = 86;
	public static readonly RULE_column_alias = 87;
	public static readonly RULE_keyword = 88;
	public static readonly RULE_name = 89;
	public static readonly RULE_function_name = 90;
	public static readonly RULE_schema_name = 91;
	public static readonly RULE_table_name = 92;
	public static readonly RULE_table_or_index_name = 93;
	public static readonly RULE_column_name = 94;
	public static readonly RULE_collation_name = 95;
	public static readonly RULE_foreign_table = 96;
	public static readonly RULE_index_name = 97;
	public static readonly RULE_trigger_name = 98;
	public static readonly RULE_view_name = 99;
	public static readonly RULE_module_name = 100;
	public static readonly RULE_pragma_name = 101;
	public static readonly RULE_savepoint_name = 102;
	public static readonly RULE_table_alias = 103;
	public static readonly RULE_transaction_name = 104;
	public static readonly RULE_window_name = 105;
	public static readonly RULE_alias = 106;
	public static readonly RULE_filename = 107;
	public static readonly RULE_base_window_name = 108;
	public static readonly RULE_simple_func = 109;
	public static readonly RULE_aggregate_func = 110;
	public static readonly RULE_table_function_name = 111;
	public static readonly RULE_any_name = 112;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "sql_stmt_list", "sql_stmt", "alter_table_stmt", "analyze_stmt", 
		"attach_stmt", "begin_stmt", "commit_stmt", "rollback_stmt", "savepoint_stmt", 
		"release_stmt", "create_index_stmt", "indexed_column", "create_table_stmt", 
		"column_def", "type_name", "column_constraint", "signed_number", "table_constraint", 
		"foreign_key_clause", "conflict_clause", "create_trigger_stmt", "create_view_stmt", 
		"create_virtual_table_stmt", "with_clause", "cte_table_name", "recursive_cte", 
		"common_table_expression", "delete_stmt", "delete_stmt_limited", "detach_stmt", 
		"drop_stmt", "expr", "raise_function", "literal_value", "value_row", "values_clause", 
		"insert_stmt", "returning_clause", "upsert_clause", "pragma_stmt", "pragma_value", 
		"reindex_stmt", "select_stmt", "join_clause", "select_core", "factored_select_stmt", 
		"simple_select_stmt", "compound_select_stmt", "table_or_subquery", "result_column", 
		"join_operator", "join_constraint", "compound_operator", "update_stmt", 
		"column_name_list", "update_stmt_limited", "qualified_table_name", "vacuum_stmt", 
		"filter_clause", "window_defn", "over_clause", "frame_spec", "frame_clause", 
		"simple_function_invocation", "aggregate_function_invocation", "window_function_invocation", 
		"common_table_stmt", "order_by_stmt", "limit_stmt", "ordering_term", "asc_desc", 
		"frame_left", "frame_right", "frame_single", "window_function", "offset", 
		"default_value", "partition_by", "order_by_expr", "order_by_expr_asc_desc", 
		"expr_asc_desc", "initial_select", "recursive_select", "unary_operator", 
		"error_message", "module_argument", "column_alias", "keyword", "name", 
		"function_name", "schema_name", "table_name", "table_or_index_name", "column_name", 
		"collation_name", "foreign_table", "index_name", "trigger_name", "view_name", 
		"module_name", "pragma_name", "savepoint_name", "table_alias", "transaction_name", 
		"window_name", "alias", "filename", "base_window_name", "simple_func", 
		"aggregate_func", "table_function_name", "any_name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'.'", "'('", "')'", "','", "'='", "'*'", "'+'", "'-'", 
		"'~'", "'||'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'<'", "'<='", 
		"'>'", "'>='", "'=='", "'!='", "'<>'", "'ABORT'", "'ACTION'", "'ADD'", 
		"'AFTER'", "'ALL'", "'ALTER'", "'ANALYZE'", "'AND'", "'AS'", "'ASC'", 
		"'ATTACH'", "'AUTOINCREMENT'", "'BEFORE'", "'BEGIN'", "'BETWEEN'", "'BY'", 
		"'CASCADE'", "'CASE'", "'CAST'", "'CHECK'", "'COLLATE'", "'COLUMN'", "'COMMIT'", 
		"'CONFLICT'", "'CONSTRAINT'", "'CREATE'", "'CROSS'", "'CURRENT_DATE'", 
		"'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'DATABASE'", "'DEFAULT'", "'DEFERRABLE'", 
		"'DEFERRED'", "'DELETE'", "'DESC'", "'DETACH'", "'DISTINCT'", "'DROP'", 
		"'EACH'", "'ELSE'", "'END'", "'ESCAPE'", "'EXCEPT'", "'EXCLUSIVE'", "'EXISTS'", 
		"'EXPLAIN'", "'FAIL'", "'FOR'", "'FOREIGN'", "'FROM'", "'FULL'", "'GLOB'", 
		"'GROUP'", "'HAVING'", "'IF'", "'IGNORE'", "'IMMEDIATE'", "'IN'", "'INDEX'", 
		"'INDEXED'", "'INITIALLY'", "'INNER'", "'INSERT'", "'INSTEAD'", "'INTERSECT'", 
		"'INTO'", "'IS'", "'ISNULL'", "'JOIN'", "'KEY'", "'LEFT'", "'LIKE'", "'LIMIT'", 
		"'MATCH'", "'NATURAL'", "'NO'", "'NOT'", "'NOTNULL'", "'NULL'", "'OF'", 
		"'OFFSET'", "'ON'", "'OR'", "'ORDER'", "'OUTER'", "'PLAN'", "'PRAGMA'", 
		"'PRIMARY'", "'QUERY'", "'RAISE'", "'RECURSIVE'", "'REFERENCES'", "'REGEXP'", 
		"'REINDEX'", "'RELEASE'", "'RENAME'", "'REPLACE'", "'RESTRICT'", "'RETURNING'", 
		"'RIGHT'", "'ROLLBACK'", "'ROW'", "'ROWS'", "'SAVEPOINT'", "'SELECT'", 
		"'SET'", "'TABLE'", "'TEMP'", "'TEMPORARY'", "'THEN'", "'TO'", "'TRANSACTION'", 
		"'TRIGGER'", "'UNION'", "'UNIQUE'", "'UPDATE'", "'USING'", "'VACUUM'", 
		"'VALUES'", "'VIEW'", "'VIRTUAL'", "'WHEN'", "'WHERE'", "'WITH'", "'WITHOUT'", 
		"'FIRST_VALUE'", "'OVER'", "'PARTITION'", "'RANGE'", "'PRECEDING'", "'UNBOUNDED'", 
		"'CURRENT'", "'FOLLOWING'", "'CUME_DIST'", "'DENSE_RANK'", "'LAG'", "'LAST_VALUE'", 
		"'LEAD'", "'NTH_VALUE'", "'NTILE'", "'PERCENT_RANK'", "'RANK'", "'ROW_NUMBER'", 
		"'GENERATED'", "'ALWAYS'", "'STORED'", "'TRUE'", "'FALSE'", "'WINDOW'", 
		"'NULLS'", "'FIRST'", "'LAST'", "'FILTER'", "'GROUPS'", "'EXCLUDE'", "'TIES'", 
		"'OTHERS'", "'DO'", "'NOTHING'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN", 
		"STAR", "PLUS", "MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2", "GT2", 
		"AMP", "PIPE", "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", "NOT_EQ2", 
		"ABORT_", "ACTION_", "ADD_", "AFTER_", "ALL_", "ALTER_", "ANALYZE_", "AND_", 
		"AS_", "ASC_", "ATTACH_", "AUTOINCREMENT_", "BEFORE_", "BEGIN_", "BETWEEN_", 
		"BY_", "CASCADE_", "CASE_", "CAST_", "CHECK_", "COLLATE_", "COLUMN_", 
		"COMMIT_", "CONFLICT_", "CONSTRAINT_", "CREATE_", "CROSS_", "CURRENT_DATE_", 
		"CURRENT_TIME_", "CURRENT_TIMESTAMP_", "DATABASE_", "DEFAULT_", "DEFERRABLE_", 
		"DEFERRED_", "DELETE_", "DESC_", "DETACH_", "DISTINCT_", "DROP_", "EACH_", 
		"ELSE_", "END_", "ESCAPE_", "EXCEPT_", "EXCLUSIVE_", "EXISTS_", "EXPLAIN_", 
		"FAIL_", "FOR_", "FOREIGN_", "FROM_", "FULL_", "GLOB_", "GROUP_", "HAVING_", 
		"IF_", "IGNORE_", "IMMEDIATE_", "IN_", "INDEX_", "INDEXED_", "INITIALLY_", 
		"INNER_", "INSERT_", "INSTEAD_", "INTERSECT_", "INTO_", "IS_", "ISNULL_", 
		"JOIN_", "KEY_", "LEFT_", "LIKE_", "LIMIT_", "MATCH_", "NATURAL_", "NO_", 
		"NOT_", "NOTNULL_", "NULL_", "OF_", "OFFSET_", "ON_", "OR_", "ORDER_", 
		"OUTER_", "PLAN_", "PRAGMA_", "PRIMARY_", "QUERY_", "RAISE_", "RECURSIVE_", 
		"REFERENCES_", "REGEXP_", "REINDEX_", "RELEASE_", "RENAME_", "REPLACE_", 
		"RESTRICT_", "RETURNING_", "RIGHT_", "ROLLBACK_", "ROW_", "ROWS_", "SAVEPOINT_", 
		"SELECT_", "SET_", "TABLE_", "TEMP_", "TEMPORARY_", "THEN_", "TO_", "TRANSACTION_", 
		"TRIGGER_", "UNION_", "UNIQUE_", "UPDATE_", "USING_", "VACUUM_", "VALUES_", 
		"VIEW_", "VIRTUAL_", "WHEN_", "WHERE_", "WITH_", "WITHOUT_", "FIRST_VALUE_", 
		"OVER_", "PARTITION_", "RANGE_", "PRECEDING_", "UNBOUNDED_", "CURRENT_", 
		"FOLLOWING_", "CUME_DIST_", "DENSE_RANK_", "LAG_", "LAST_VALUE_", "LEAD_", 
		"NTH_VALUE_", "NTILE_", "PERCENT_RANK_", "RANK_", "ROW_NUMBER_", "GENERATED_", 
		"ALWAYS_", "STORED_", "TRUE_", "FALSE_", "WINDOW_", "NULLS_", "FIRST_", 
		"LAST_", "FILTER_", "GROUPS_", "EXCLUDE_", "TIES_", "OTHERS_", "DO_", 
		"NOTHING_", "IDENTIFIER", "NUMERIC_LITERAL", "BIND_PARAMETER", "STRING_LITERAL", 
		"BLOB_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", "SPACES", 
		"UNEXPECTED_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SQLiteParser._LITERAL_NAMES, SQLiteParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SQLiteParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SQLiteParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SQLiteParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SQLiteParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SQLiteParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SQLiteParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.SCOL) | (1 << SQLiteParser.ALTER_) | (1 << SQLiteParser.ANALYZE_))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SQLiteParser.ATTACH_ - 35)) | (1 << (SQLiteParser.BEGIN_ - 35)) | (1 << (SQLiteParser.COMMIT_ - 35)) | (1 << (SQLiteParser.CREATE_ - 35)) | (1 << (SQLiteParser.DELETE_ - 35)) | (1 << (SQLiteParser.DETACH_ - 35)) | (1 << (SQLiteParser.DROP_ - 35)) | (1 << (SQLiteParser.END_ - 35)))) !== 0) || _la === SQLiteParser.EXPLAIN_ || _la === SQLiteParser.INSERT_ || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (SQLiteParser.PRAGMA_ - 112)) | (1 << (SQLiteParser.REINDEX_ - 112)) | (1 << (SQLiteParser.RELEASE_ - 112)) | (1 << (SQLiteParser.REPLACE_ - 112)) | (1 << (SQLiteParser.ROLLBACK_ - 112)) | (1 << (SQLiteParser.SAVEPOINT_ - 112)) | (1 << (SQLiteParser.SELECT_ - 112)) | (1 << (SQLiteParser.UPDATE_ - 112)) | (1 << (SQLiteParser.VACUUM_ - 112)))) !== 0) || _la === SQLiteParser.VALUES_ || _la === SQLiteParser.WITH_) {
				{
				{
				this.state = 226;
				this.sql_stmt_list();
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			this.match(SQLiteParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sql_stmt_list(): Sql_stmt_listContext {
		let _localctx: Sql_stmt_listContext = new Sql_stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SQLiteParser.RULE_sql_stmt_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.SCOL) {
				{
				{
				this.state = 234;
				this.match(SQLiteParser.SCOL);
				}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 240;
			this.sql_stmt();
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 241;
						this.match(SQLiteParser.SCOL);
						}
						}
						this.state = 244;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === SQLiteParser.SCOL);
					this.state = 246;
					this.sql_stmt();
					}
					}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 255;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 252;
					this.match(SQLiteParser.SCOL);
					}
					}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sql_stmt(): Sql_stmtContext {
		let _localctx: Sql_stmtContext = new Sql_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SQLiteParser.RULE_sql_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.EXPLAIN_) {
				{
				this.state = 258;
				this.match(SQLiteParser.EXPLAIN_);
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.QUERY_) {
					{
					this.state = 259;
					this.match(SQLiteParser.QUERY_);
					this.state = 260;
					this.match(SQLiteParser.PLAN_);
					}
				}

				}
			}

			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 265;
				this.alter_table_stmt();
				}
				break;

			case 2:
				{
				this.state = 266;
				this.analyze_stmt();
				}
				break;

			case 3:
				{
				this.state = 267;
				this.attach_stmt();
				}
				break;

			case 4:
				{
				this.state = 268;
				this.begin_stmt();
				}
				break;

			case 5:
				{
				this.state = 269;
				this.commit_stmt();
				}
				break;

			case 6:
				{
				this.state = 270;
				this.create_index_stmt();
				}
				break;

			case 7:
				{
				this.state = 271;
				this.create_table_stmt();
				}
				break;

			case 8:
				{
				this.state = 272;
				this.create_trigger_stmt();
				}
				break;

			case 9:
				{
				this.state = 273;
				this.create_view_stmt();
				}
				break;

			case 10:
				{
				this.state = 274;
				this.create_virtual_table_stmt();
				}
				break;

			case 11:
				{
				this.state = 275;
				this.delete_stmt();
				}
				break;

			case 12:
				{
				this.state = 276;
				this.delete_stmt_limited();
				}
				break;

			case 13:
				{
				this.state = 277;
				this.detach_stmt();
				}
				break;

			case 14:
				{
				this.state = 278;
				this.drop_stmt();
				}
				break;

			case 15:
				{
				this.state = 279;
				this.insert_stmt();
				}
				break;

			case 16:
				{
				this.state = 280;
				this.pragma_stmt();
				}
				break;

			case 17:
				{
				this.state = 281;
				this.reindex_stmt();
				}
				break;

			case 18:
				{
				this.state = 282;
				this.release_stmt();
				}
				break;

			case 19:
				{
				this.state = 283;
				this.rollback_stmt();
				}
				break;

			case 20:
				{
				this.state = 284;
				this.savepoint_stmt();
				}
				break;

			case 21:
				{
				this.state = 285;
				this.select_stmt();
				}
				break;

			case 22:
				{
				this.state = 286;
				this.update_stmt();
				}
				break;

			case 23:
				{
				this.state = 287;
				this.update_stmt_limited();
				}
				break;

			case 24:
				{
				this.state = 288;
				this.vacuum_stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alter_table_stmt(): Alter_table_stmtContext {
		let _localctx: Alter_table_stmtContext = new Alter_table_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SQLiteParser.RULE_alter_table_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(SQLiteParser.ALTER_);
			this.state = 292;
			this.match(SQLiteParser.TABLE_);
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 293;
				this.schema_name();
				this.state = 294;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 298;
			this.table_name();
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.RENAME_:
				{
				this.state = 299;
				this.match(SQLiteParser.RENAME_);
				this.state = 309;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 300;
					this.match(SQLiteParser.TO_);
					this.state = 301;
					_localctx._new_table_name = this.table_name();
					}
					break;

				case 2:
					{
					this.state = 303;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						this.state = 302;
						this.match(SQLiteParser.COLUMN_);
						}
						break;
					}
					this.state = 305;
					_localctx._old_column_name = this.column_name();
					this.state = 306;
					this.match(SQLiteParser.TO_);
					this.state = 307;
					_localctx._new_column_name = this.column_name();
					}
					break;
				}
				}
				break;
			case SQLiteParser.ADD_:
				{
				this.state = 311;
				this.match(SQLiteParser.ADD_);
				this.state = 313;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 312;
					this.match(SQLiteParser.COLUMN_);
					}
					break;
				}
				this.state = 315;
				this.column_def();
				}
				break;
			case SQLiteParser.DROP_:
				{
				this.state = 316;
				this.match(SQLiteParser.DROP_);
				this.state = 318;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 317;
					this.match(SQLiteParser.COLUMN_);
					}
					break;
				}
				this.state = 320;
				this.column_name();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public analyze_stmt(): Analyze_stmtContext {
		let _localctx: Analyze_stmtContext = new Analyze_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SQLiteParser.RULE_analyze_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(SQLiteParser.ANALYZE_);
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 324;
				this.schema_name();
				}
				break;

			case 2:
				{
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 325;
					this.schema_name();
					this.state = 326;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 330;
				this.table_or_index_name();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attach_stmt(): Attach_stmtContext {
		let _localctx: Attach_stmtContext = new Attach_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SQLiteParser.RULE_attach_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(SQLiteParser.ATTACH_);
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 334;
				this.match(SQLiteParser.DATABASE_);
				}
				break;
			}
			this.state = 337;
			this.expr(0);
			this.state = 338;
			this.match(SQLiteParser.AS_);
			this.state = 339;
			this.schema_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public begin_stmt(): Begin_stmtContext {
		let _localctx: Begin_stmtContext = new Begin_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SQLiteParser.RULE_begin_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.match(SQLiteParser.BEGIN_);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SQLiteParser.DEFERRED_ - 58)) | (1 << (SQLiteParser.EXCLUSIVE_ - 58)) | (1 << (SQLiteParser.IMMEDIATE_ - 58)))) !== 0)) {
				{
				this.state = 342;
				_la = this._input.LA(1);
				if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SQLiteParser.DEFERRED_ - 58)) | (1 << (SQLiteParser.EXCLUSIVE_ - 58)) | (1 << (SQLiteParser.IMMEDIATE_ - 58)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TRANSACTION_) {
				{
				this.state = 345;
				this.match(SQLiteParser.TRANSACTION_);
				this.state = 347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 346;
					this.transaction_name();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commit_stmt(): Commit_stmtContext {
		let _localctx: Commit_stmtContext = new Commit_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SQLiteParser.RULE_commit_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			_la = this._input.LA(1);
			if (!(_la === SQLiteParser.COMMIT_ || _la === SQLiteParser.END_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TRANSACTION_) {
				{
				this.state = 352;
				this.match(SQLiteParser.TRANSACTION_);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rollback_stmt(): Rollback_stmtContext {
		let _localctx: Rollback_stmtContext = new Rollback_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SQLiteParser.RULE_rollback_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(SQLiteParser.ROLLBACK_);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TRANSACTION_) {
				{
				this.state = 356;
				this.match(SQLiteParser.TRANSACTION_);
				}
			}

			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TO_) {
				{
				this.state = 359;
				this.match(SQLiteParser.TO_);
				this.state = 361;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 360;
					this.match(SQLiteParser.SAVEPOINT_);
					}
					break;
				}
				this.state = 363;
				this.savepoint_name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public savepoint_stmt(): Savepoint_stmtContext {
		let _localctx: Savepoint_stmtContext = new Savepoint_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SQLiteParser.RULE_savepoint_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(SQLiteParser.SAVEPOINT_);
			this.state = 367;
			this.savepoint_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public release_stmt(): Release_stmtContext {
		let _localctx: Release_stmtContext = new Release_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SQLiteParser.RULE_release_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(SQLiteParser.RELEASE_);
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 370;
				this.match(SQLiteParser.SAVEPOINT_);
				}
				break;
			}
			this.state = 373;
			this.savepoint_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create_index_stmt(): Create_index_stmtContext {
		let _localctx: Create_index_stmtContext = new Create_index_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SQLiteParser.RULE_create_index_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(SQLiteParser.CREATE_);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.UNIQUE_) {
				{
				this.state = 376;
				this.match(SQLiteParser.UNIQUE_);
				}
			}

			this.state = 379;
			this.match(SQLiteParser.INDEX_);
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 380;
				this.match(SQLiteParser.IF_);
				this.state = 381;
				this.match(SQLiteParser.NOT_);
				this.state = 382;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.schema_name();
				this.state = 386;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 390;
			this.index_name();
			this.state = 391;
			this.match(SQLiteParser.ON_);
			this.state = 392;
			this.table_name();
			this.state = 393;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 394;
			this.indexed_column();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 395;
				this.match(SQLiteParser.COMMA);
				this.state = 396;
				this.indexed_column();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WHERE_) {
				{
				this.state = 403;
				this.match(SQLiteParser.WHERE_);
				this.state = 404;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexed_column(): Indexed_columnContext {
		let _localctx: Indexed_columnContext = new Indexed_columnContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SQLiteParser.RULE_indexed_column);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.column_name();
				}
				break;

			case 2:
				{
				this.state = 408;
				this.expr(0);
				}
				break;
			}
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.COLLATE_) {
				{
				this.state = 411;
				this.match(SQLiteParser.COLLATE_);
				this.state = 412;
				this.collation_name();
				}
			}

			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ASC_ || _la === SQLiteParser.DESC_) {
				{
				this.state = 415;
				this.asc_desc();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create_table_stmt(): Create_table_stmtContext {
		let _localctx: Create_table_stmtContext = new Create_table_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SQLiteParser.RULE_create_table_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(SQLiteParser.CREATE_);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TEMP_ || _la === SQLiteParser.TEMPORARY_) {
				{
				this.state = 419;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.TEMP_ || _la === SQLiteParser.TEMPORARY_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 422;
			this.match(SQLiteParser.TABLE_);
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 423;
				this.match(SQLiteParser.IF_);
				this.state = 424;
				this.match(SQLiteParser.NOT_);
				this.state = 425;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 428;
				this.schema_name();
				this.state = 429;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 433;
			this.table_name();
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.OPEN_PAR:
				{
				this.state = 434;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 435;
				this.column_def();
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 436;
						this.match(SQLiteParser.COMMA);
						this.state = 437;
						this.column_def();
						}
						}
					}
					this.state = 442;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 443;
					this.match(SQLiteParser.COMMA);
					this.state = 444;
					this.table_constraint();
					}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 450;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.WITHOUT_) {
					{
					this.state = 451;
					this.match(SQLiteParser.WITHOUT_);
					this.state = 452;
					_localctx._row_ROW_ID = this.match(SQLiteParser.IDENTIFIER);
					}
				}

				}
				break;
			case SQLiteParser.AS_:
				{
				this.state = 455;
				this.match(SQLiteParser.AS_);
				this.state = 456;
				this.select_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_def(): Column_defContext {
		let _localctx: Column_defContext = new Column_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SQLiteParser.RULE_column_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.column_name();
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 460;
				this.type_name();
				}
				break;
			}
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SQLiteParser.AS_ - 33)) | (1 << (SQLiteParser.CHECK_ - 33)) | (1 << (SQLiteParser.COLLATE_ - 33)) | (1 << (SQLiteParser.CONSTRAINT_ - 33)) | (1 << (SQLiteParser.DEFAULT_ - 33)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SQLiteParser.NOT_ - 102)) | (1 << (SQLiteParser.NULL_ - 102)) | (1 << (SQLiteParser.PRIMARY_ - 102)) | (1 << (SQLiteParser.REFERENCES_ - 102)))) !== 0) || _la === SQLiteParser.UNIQUE_ || _la === SQLiteParser.GENERATED_) {
				{
				{
				this.state = 463;
				this.column_constraint();
				}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_name(): Type_nameContext {
		let _localctx: Type_nameContext = new Type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SQLiteParser.RULE_type_name);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 469;
					this.name();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 474;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 475;
				this.signed_number();
				this.state = 476;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 478;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 479;
				this.signed_number();
				this.state = 480;
				this.match(SQLiteParser.COMMA);
				this.state = 481;
				this.signed_number();
				this.state = 482;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_constraint(): Column_constraintContext {
		let _localctx: Column_constraintContext = new Column_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SQLiteParser.RULE_column_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.CONSTRAINT_) {
				{
				this.state = 486;
				this.match(SQLiteParser.CONSTRAINT_);
				this.state = 487;
				this.name();
				}
			}

			this.state = 539;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.PRIMARY_:
				{
				{
				this.state = 490;
				this.match(SQLiteParser.PRIMARY_);
				this.state = 491;
				this.match(SQLiteParser.KEY_);
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ASC_ || _la === SQLiteParser.DESC_) {
					{
					this.state = 492;
					this.asc_desc();
					}
				}

				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ON_) {
					{
					this.state = 495;
					this.conflict_clause();
					}
				}

				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.AUTOINCREMENT_) {
					{
					this.state = 498;
					this.match(SQLiteParser.AUTOINCREMENT_);
					}
				}

				}
				}
				break;
			case SQLiteParser.NOT_:
			case SQLiteParser.NULL_:
			case SQLiteParser.UNIQUE_:
				{
				this.state = 506;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.NOT_:
				case SQLiteParser.NULL_:
					{
					this.state = 502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLiteParser.NOT_) {
						{
						this.state = 501;
						this.match(SQLiteParser.NOT_);
						}
					}

					this.state = 504;
					this.match(SQLiteParser.NULL_);
					}
					break;
				case SQLiteParser.UNIQUE_:
					{
					this.state = 505;
					this.match(SQLiteParser.UNIQUE_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ON_) {
					{
					this.state = 508;
					this.conflict_clause();
					}
				}

				}
				break;
			case SQLiteParser.CHECK_:
				{
				this.state = 511;
				this.match(SQLiteParser.CHECK_);
				this.state = 512;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 513;
				this.expr(0);
				this.state = 514;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.DEFAULT_:
				{
				this.state = 516;
				this.match(SQLiteParser.DEFAULT_);
				this.state = 523;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 517;
					this.signed_number();
					}
					break;

				case 2:
					{
					this.state = 518;
					this.literal_value();
					}
					break;

				case 3:
					{
					this.state = 519;
					this.match(SQLiteParser.OPEN_PAR);
					this.state = 520;
					this.expr(0);
					this.state = 521;
					this.match(SQLiteParser.CLOSE_PAR);
					}
					break;
				}
				}
				break;
			case SQLiteParser.COLLATE_:
				{
				this.state = 525;
				this.match(SQLiteParser.COLLATE_);
				this.state = 526;
				this.collation_name();
				}
				break;
			case SQLiteParser.REFERENCES_:
				{
				this.state = 527;
				this.foreign_key_clause();
				}
				break;
			case SQLiteParser.AS_:
			case SQLiteParser.GENERATED_:
				{
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.GENERATED_) {
					{
					this.state = 528;
					this.match(SQLiteParser.GENERATED_);
					this.state = 529;
					this.match(SQLiteParser.ALWAYS_);
					}
				}

				this.state = 532;
				this.match(SQLiteParser.AS_);
				this.state = 533;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 534;
				this.expr(0);
				this.state = 535;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.VIRTUAL_ || _la === SQLiteParser.STORED_) {
					{
					this.state = 536;
					_la = this._input.LA(1);
					if (!(_la === SQLiteParser.VIRTUAL_ || _la === SQLiteParser.STORED_)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signed_number(): Signed_numberContext {
		let _localctx: Signed_numberContext = new Signed_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SQLiteParser.RULE_signed_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS) {
				{
				this.state = 541;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 544;
			this.match(SQLiteParser.NUMERIC_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_constraint(): Table_constraintContext {
		let _localctx: Table_constraintContext = new Table_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SQLiteParser.RULE_table_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.CONSTRAINT_) {
				{
				this.state = 546;
				this.match(SQLiteParser.CONSTRAINT_);
				this.state = 547;
				this.name();
				}
			}

			this.state = 587;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.PRIMARY_:
			case SQLiteParser.UNIQUE_:
				{
				this.state = 553;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.PRIMARY_:
					{
					this.state = 550;
					this.match(SQLiteParser.PRIMARY_);
					this.state = 551;
					this.match(SQLiteParser.KEY_);
					}
					break;
				case SQLiteParser.UNIQUE_:
					{
					this.state = 552;
					this.match(SQLiteParser.UNIQUE_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 555;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 556;
				this.indexed_column();
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 557;
					this.match(SQLiteParser.COMMA);
					this.state = 558;
					this.indexed_column();
					}
					}
					this.state = 563;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 564;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ON_) {
					{
					this.state = 565;
					this.conflict_clause();
					}
				}

				}
				break;
			case SQLiteParser.CHECK_:
				{
				this.state = 568;
				this.match(SQLiteParser.CHECK_);
				this.state = 569;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 570;
				this.expr(0);
				this.state = 571;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.FOREIGN_:
				{
				this.state = 573;
				this.match(SQLiteParser.FOREIGN_);
				this.state = 574;
				this.match(SQLiteParser.KEY_);
				this.state = 575;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 576;
				this.column_name();
				this.state = 581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 577;
					this.match(SQLiteParser.COMMA);
					this.state = 578;
					this.column_name();
					}
					}
					this.state = 583;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 584;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 585;
				this.foreign_key_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreign_key_clause(): Foreign_key_clauseContext {
		let _localctx: Foreign_key_clauseContext = new Foreign_key_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SQLiteParser.RULE_foreign_key_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.match(SQLiteParser.REFERENCES_);
			this.state = 590;
			this.foreign_table();
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 591;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 592;
				this.column_name();
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 593;
					this.match(SQLiteParser.COMMA);
					this.state = 594;
					this.column_name();
					}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 600;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.MATCH_ || _la === SQLiteParser.ON_) {
				{
				this.state = 616;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.ON_:
					{
					this.state = 604;
					this.match(SQLiteParser.ON_);
					this.state = 605;
					_la = this._input.LA(1);
					if (!(_la === SQLiteParser.DELETE_ || _la === SQLiteParser.UPDATE_)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 612;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SQLiteParser.SET_:
						{
						this.state = 606;
						this.match(SQLiteParser.SET_);
						this.state = 607;
						_la = this._input.LA(1);
						if (!(_la === SQLiteParser.DEFAULT_ || _la === SQLiteParser.NULL_)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					case SQLiteParser.CASCADE_:
						{
						this.state = 608;
						this.match(SQLiteParser.CASCADE_);
						}
						break;
					case SQLiteParser.RESTRICT_:
						{
						this.state = 609;
						this.match(SQLiteParser.RESTRICT_);
						}
						break;
					case SQLiteParser.NO_:
						{
						this.state = 610;
						this.match(SQLiteParser.NO_);
						this.state = 611;
						this.match(SQLiteParser.ACTION_);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case SQLiteParser.MATCH_:
					{
					this.state = 614;
					this.match(SQLiteParser.MATCH_);
					this.state = 615;
					this.name();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.NOT_) {
					{
					this.state = 621;
					this.match(SQLiteParser.NOT_);
					}
				}

				this.state = 624;
				this.match(SQLiteParser.DEFERRABLE_);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.INITIALLY_) {
					{
					this.state = 625;
					this.match(SQLiteParser.INITIALLY_);
					this.state = 626;
					_la = this._input.LA(1);
					if (!(_la === SQLiteParser.DEFERRED_ || _la === SQLiteParser.IMMEDIATE_)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conflict_clause(): Conflict_clauseContext {
		let _localctx: Conflict_clauseContext = new Conflict_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SQLiteParser.RULE_conflict_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(SQLiteParser.ON_);
			this.state = 632;
			this.match(SQLiteParser.CONFLICT_);
			this.state = 633;
			_la = this._input.LA(1);
			if (!(_la === SQLiteParser.ABORT_ || _la === SQLiteParser.FAIL_ || _la === SQLiteParser.IGNORE_ || _la === SQLiteParser.REPLACE_ || _la === SQLiteParser.ROLLBACK_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create_trigger_stmt(): Create_trigger_stmtContext {
		let _localctx: Create_trigger_stmtContext = new Create_trigger_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SQLiteParser.RULE_create_trigger_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.match(SQLiteParser.CREATE_);
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TEMP_ || _la === SQLiteParser.TEMPORARY_) {
				{
				this.state = 636;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.TEMP_ || _la === SQLiteParser.TEMPORARY_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 639;
			this.match(SQLiteParser.TRIGGER_);
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 640;
				this.match(SQLiteParser.IF_);
				this.state = 641;
				this.match(SQLiteParser.NOT_);
				this.state = 642;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 648;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 645;
				this.schema_name();
				this.state = 646;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 650;
			this.trigger_name();
			this.state = 655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.BEFORE_:
				{
				this.state = 651;
				this.match(SQLiteParser.BEFORE_);
				}
				break;
			case SQLiteParser.AFTER_:
				{
				this.state = 652;
				this.match(SQLiteParser.AFTER_);
				}
				break;
			case SQLiteParser.INSTEAD_:
				{
				this.state = 653;
				this.match(SQLiteParser.INSTEAD_);
				this.state = 654;
				this.match(SQLiteParser.OF_);
				}
				break;
			case SQLiteParser.DELETE_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.UPDATE_:
				break;
			default:
				break;
			}
			this.state = 671;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.DELETE_:
				{
				this.state = 657;
				this.match(SQLiteParser.DELETE_);
				}
				break;
			case SQLiteParser.INSERT_:
				{
				this.state = 658;
				this.match(SQLiteParser.INSERT_);
				}
				break;
			case SQLiteParser.UPDATE_:
				{
				this.state = 659;
				this.match(SQLiteParser.UPDATE_);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.OF_) {
					{
					this.state = 660;
					this.match(SQLiteParser.OF_);
					this.state = 661;
					this.column_name();
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 662;
						this.match(SQLiteParser.COMMA);
						this.state = 663;
						this.column_name();
						}
						}
						this.state = 668;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 673;
			this.match(SQLiteParser.ON_);
			this.state = 674;
			this.table_name();
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.FOR_) {
				{
				this.state = 675;
				this.match(SQLiteParser.FOR_);
				this.state = 676;
				this.match(SQLiteParser.EACH_);
				this.state = 677;
				this.match(SQLiteParser.ROW_);
				}
			}

			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WHEN_) {
				{
				this.state = 680;
				this.match(SQLiteParser.WHEN_);
				this.state = 681;
				this.expr(0);
				}
			}

			this.state = 684;
			this.match(SQLiteParser.BEGIN_);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 689;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 685;
					this.update_stmt();
					}
					break;

				case 2:
					{
					this.state = 686;
					this.insert_stmt();
					}
					break;

				case 3:
					{
					this.state = 687;
					this.delete_stmt();
					}
					break;

				case 4:
					{
					this.state = 688;
					this.select_stmt();
					}
					break;
				}
				this.state = 691;
				this.match(SQLiteParser.SCOL);
				}
				}
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SQLiteParser.DELETE_ || _la === SQLiteParser.INSERT_ || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (SQLiteParser.REPLACE_ - 122)) | (1 << (SQLiteParser.SELECT_ - 122)) | (1 << (SQLiteParser.UPDATE_ - 122)) | (1 << (SQLiteParser.VALUES_ - 122)) | (1 << (SQLiteParser.WITH_ - 122)))) !== 0));
			this.state = 697;
			this.match(SQLiteParser.END_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create_view_stmt(): Create_view_stmtContext {
		let _localctx: Create_view_stmtContext = new Create_view_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SQLiteParser.RULE_create_view_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this.match(SQLiteParser.CREATE_);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.TEMP_ || _la === SQLiteParser.TEMPORARY_) {
				{
				this.state = 700;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.TEMP_ || _la === SQLiteParser.TEMPORARY_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 703;
			this.match(SQLiteParser.VIEW_);
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 704;
				this.match(SQLiteParser.IF_);
				this.state = 705;
				this.match(SQLiteParser.NOT_);
				this.state = 706;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 709;
				this.schema_name();
				this.state = 710;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 714;
			this.view_name();
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 715;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 716;
				this.column_name();
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 717;
					this.match(SQLiteParser.COMMA);
					this.state = 718;
					this.column_name();
					}
					}
					this.state = 723;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 724;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 728;
			this.match(SQLiteParser.AS_);
			this.state = 729;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
		let _localctx: Create_virtual_table_stmtContext = new Create_virtual_table_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SQLiteParser.RULE_create_virtual_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(SQLiteParser.CREATE_);
			this.state = 732;
			this.match(SQLiteParser.VIRTUAL_);
			this.state = 733;
			this.match(SQLiteParser.TABLE_);
			this.state = 737;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 734;
				this.match(SQLiteParser.IF_);
				this.state = 735;
				this.match(SQLiteParser.NOT_);
				this.state = 736;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 742;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 739;
				this.schema_name();
				this.state = 740;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 744;
			this.table_name();
			this.state = 745;
			this.match(SQLiteParser.USING_);
			this.state = 746;
			this.module_name();
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 747;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 748;
				this.module_argument();
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 749;
					this.match(SQLiteParser.COMMA);
					this.state = 750;
					this.module_argument();
					}
					}
					this.state = 755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 756;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_clause(): With_clauseContext {
		let _localctx: With_clauseContext = new With_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SQLiteParser.RULE_with_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(SQLiteParser.WITH_);
			this.state = 762;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 761;
				this.match(SQLiteParser.RECURSIVE_);
				}
				break;
			}
			this.state = 764;
			this.cte_table_name();
			this.state = 765;
			this.match(SQLiteParser.AS_);
			this.state = 766;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 767;
			this.select_stmt();
			this.state = 768;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 769;
				this.match(SQLiteParser.COMMA);
				this.state = 770;
				this.cte_table_name();
				this.state = 771;
				this.match(SQLiteParser.AS_);
				this.state = 772;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 773;
				this.select_stmt();
				this.state = 774;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				}
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cte_table_name(): Cte_table_nameContext {
		let _localctx: Cte_table_nameContext = new Cte_table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SQLiteParser.RULE_cte_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.table_name();
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 782;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 783;
				this.column_name();
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 784;
					this.match(SQLiteParser.COMMA);
					this.state = 785;
					this.column_name();
					}
					}
					this.state = 790;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 791;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recursive_cte(): Recursive_cteContext {
		let _localctx: Recursive_cteContext = new Recursive_cteContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SQLiteParser.RULE_recursive_cte);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.cte_table_name();
			this.state = 796;
			this.match(SQLiteParser.AS_);
			this.state = 797;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 798;
			this.initial_select();
			this.state = 799;
			this.match(SQLiteParser.UNION_);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ALL_) {
				{
				this.state = 800;
				this.match(SQLiteParser.ALL_);
				}
			}

			this.state = 803;
			this.recursive_select();
			this.state = 804;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public common_table_expression(): Common_table_expressionContext {
		let _localctx: Common_table_expressionContext = new Common_table_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SQLiteParser.RULE_common_table_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.table_name();
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 807;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 808;
				this.column_name();
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 809;
					this.match(SQLiteParser.COMMA);
					this.state = 810;
					this.column_name();
					}
					}
					this.state = 815;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 816;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 820;
			this.match(SQLiteParser.AS_);
			this.state = 821;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 822;
			this.select_stmt();
			this.state = 823;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delete_stmt(): Delete_stmtContext {
		let _localctx: Delete_stmtContext = new Delete_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SQLiteParser.RULE_delete_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 825;
				this.with_clause();
				}
			}

			this.state = 828;
			this.match(SQLiteParser.DELETE_);
			this.state = 829;
			this.match(SQLiteParser.FROM_);
			this.state = 830;
			this.qualified_table_name();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WHERE_) {
				{
				this.state = 831;
				this.match(SQLiteParser.WHERE_);
				this.state = 832;
				this.expr(0);
				}
			}

			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.RETURNING_) {
				{
				this.state = 835;
				this.returning_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delete_stmt_limited(): Delete_stmt_limitedContext {
		let _localctx: Delete_stmt_limitedContext = new Delete_stmt_limitedContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SQLiteParser.RULE_delete_stmt_limited);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 838;
				this.with_clause();
				}
			}

			this.state = 841;
			this.match(SQLiteParser.DELETE_);
			this.state = 842;
			this.match(SQLiteParser.FROM_);
			this.state = 843;
			this.qualified_table_name();
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WHERE_) {
				{
				this.state = 844;
				this.match(SQLiteParser.WHERE_);
				this.state = 845;
				this.expr(0);
				}
			}

			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.RETURNING_) {
				{
				this.state = 848;
				this.returning_clause();
				}
			}

			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.LIMIT_ || _la === SQLiteParser.ORDER_) {
				{
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ORDER_) {
					{
					this.state = 851;
					this.order_by_stmt();
					}
				}

				this.state = 854;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public detach_stmt(): Detach_stmtContext {
		let _localctx: Detach_stmtContext = new Detach_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SQLiteParser.RULE_detach_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(SQLiteParser.DETACH_);
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 858;
				this.match(SQLiteParser.DATABASE_);
				}
				break;
			}
			this.state = 861;
			this.schema_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public drop_stmt(): Drop_stmtContext {
		let _localctx: Drop_stmtContext = new Drop_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SQLiteParser.RULE_drop_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this.match(SQLiteParser.DROP_);
			this.state = 864;
			_localctx._object = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === SQLiteParser.INDEX_ || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SQLiteParser.TABLE_ - 132)) | (1 << (SQLiteParser.TRIGGER_ - 132)) | (1 << (SQLiteParser.VIEW_ - 132)))) !== 0))) {
				_localctx._object = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 865;
				this.match(SQLiteParser.IF_);
				this.state = 866;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 869;
				this.schema_name();
				this.state = 870;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 874;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, SQLiteParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 877;
				this.literal_value();
				}
				break;

			case 2:
				{
				this.state = 878;
				this.match(SQLiteParser.BIND_PARAMETER);
				}
				break;

			case 3:
				{
				this.state = 887;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 882;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						this.state = 879;
						this.schema_name();
						this.state = 880;
						this.match(SQLiteParser.DOT);
						}
						break;
					}
					this.state = 884;
					this.table_name();
					this.state = 885;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 889;
				this.column_name();
				}
				break;

			case 4:
				{
				this.state = 890;
				this.unary_operator();
				this.state = 891;
				this.expr(21);
				}
				break;

			case 5:
				{
				this.state = 893;
				this.function_name();
				this.state = 894;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 907;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.OPEN_PAR:
				case SQLiteParser.PLUS:
				case SQLiteParser.MINUS:
				case SQLiteParser.TILDE:
				case SQLiteParser.ABORT_:
				case SQLiteParser.ACTION_:
				case SQLiteParser.ADD_:
				case SQLiteParser.AFTER_:
				case SQLiteParser.ALL_:
				case SQLiteParser.ALTER_:
				case SQLiteParser.ANALYZE_:
				case SQLiteParser.AND_:
				case SQLiteParser.AS_:
				case SQLiteParser.ASC_:
				case SQLiteParser.ATTACH_:
				case SQLiteParser.AUTOINCREMENT_:
				case SQLiteParser.BEFORE_:
				case SQLiteParser.BEGIN_:
				case SQLiteParser.BETWEEN_:
				case SQLiteParser.BY_:
				case SQLiteParser.CASCADE_:
				case SQLiteParser.CASE_:
				case SQLiteParser.CAST_:
				case SQLiteParser.CHECK_:
				case SQLiteParser.COLLATE_:
				case SQLiteParser.COLUMN_:
				case SQLiteParser.COMMIT_:
				case SQLiteParser.CONFLICT_:
				case SQLiteParser.CONSTRAINT_:
				case SQLiteParser.CREATE_:
				case SQLiteParser.CROSS_:
				case SQLiteParser.CURRENT_DATE_:
				case SQLiteParser.CURRENT_TIME_:
				case SQLiteParser.CURRENT_TIMESTAMP_:
				case SQLiteParser.DATABASE_:
				case SQLiteParser.DEFAULT_:
				case SQLiteParser.DEFERRABLE_:
				case SQLiteParser.DEFERRED_:
				case SQLiteParser.DELETE_:
				case SQLiteParser.DESC_:
				case SQLiteParser.DETACH_:
				case SQLiteParser.DISTINCT_:
				case SQLiteParser.DROP_:
				case SQLiteParser.EACH_:
				case SQLiteParser.ELSE_:
				case SQLiteParser.END_:
				case SQLiteParser.ESCAPE_:
				case SQLiteParser.EXCEPT_:
				case SQLiteParser.EXCLUSIVE_:
				case SQLiteParser.EXISTS_:
				case SQLiteParser.EXPLAIN_:
				case SQLiteParser.FAIL_:
				case SQLiteParser.FOR_:
				case SQLiteParser.FOREIGN_:
				case SQLiteParser.FROM_:
				case SQLiteParser.FULL_:
				case SQLiteParser.GLOB_:
				case SQLiteParser.GROUP_:
				case SQLiteParser.HAVING_:
				case SQLiteParser.IF_:
				case SQLiteParser.IGNORE_:
				case SQLiteParser.IMMEDIATE_:
				case SQLiteParser.IN_:
				case SQLiteParser.INDEX_:
				case SQLiteParser.INDEXED_:
				case SQLiteParser.INITIALLY_:
				case SQLiteParser.INNER_:
				case SQLiteParser.INSERT_:
				case SQLiteParser.INSTEAD_:
				case SQLiteParser.INTERSECT_:
				case SQLiteParser.INTO_:
				case SQLiteParser.IS_:
				case SQLiteParser.ISNULL_:
				case SQLiteParser.JOIN_:
				case SQLiteParser.KEY_:
				case SQLiteParser.LEFT_:
				case SQLiteParser.LIKE_:
				case SQLiteParser.LIMIT_:
				case SQLiteParser.MATCH_:
				case SQLiteParser.NATURAL_:
				case SQLiteParser.NO_:
				case SQLiteParser.NOT_:
				case SQLiteParser.NOTNULL_:
				case SQLiteParser.NULL_:
				case SQLiteParser.OF_:
				case SQLiteParser.OFFSET_:
				case SQLiteParser.ON_:
				case SQLiteParser.OR_:
				case SQLiteParser.ORDER_:
				case SQLiteParser.OUTER_:
				case SQLiteParser.PLAN_:
				case SQLiteParser.PRAGMA_:
				case SQLiteParser.PRIMARY_:
				case SQLiteParser.QUERY_:
				case SQLiteParser.RAISE_:
				case SQLiteParser.RECURSIVE_:
				case SQLiteParser.REFERENCES_:
				case SQLiteParser.REGEXP_:
				case SQLiteParser.REINDEX_:
				case SQLiteParser.RELEASE_:
				case SQLiteParser.RENAME_:
				case SQLiteParser.REPLACE_:
				case SQLiteParser.RESTRICT_:
				case SQLiteParser.RIGHT_:
				case SQLiteParser.ROLLBACK_:
				case SQLiteParser.ROW_:
				case SQLiteParser.ROWS_:
				case SQLiteParser.SAVEPOINT_:
				case SQLiteParser.SELECT_:
				case SQLiteParser.SET_:
				case SQLiteParser.TABLE_:
				case SQLiteParser.TEMP_:
				case SQLiteParser.TEMPORARY_:
				case SQLiteParser.THEN_:
				case SQLiteParser.TO_:
				case SQLiteParser.TRANSACTION_:
				case SQLiteParser.TRIGGER_:
				case SQLiteParser.UNION_:
				case SQLiteParser.UNIQUE_:
				case SQLiteParser.UPDATE_:
				case SQLiteParser.USING_:
				case SQLiteParser.VACUUM_:
				case SQLiteParser.VALUES_:
				case SQLiteParser.VIEW_:
				case SQLiteParser.VIRTUAL_:
				case SQLiteParser.WHEN_:
				case SQLiteParser.WHERE_:
				case SQLiteParser.WITH_:
				case SQLiteParser.WITHOUT_:
				case SQLiteParser.FIRST_VALUE_:
				case SQLiteParser.OVER_:
				case SQLiteParser.PARTITION_:
				case SQLiteParser.RANGE_:
				case SQLiteParser.PRECEDING_:
				case SQLiteParser.UNBOUNDED_:
				case SQLiteParser.CURRENT_:
				case SQLiteParser.FOLLOWING_:
				case SQLiteParser.CUME_DIST_:
				case SQLiteParser.DENSE_RANK_:
				case SQLiteParser.LAG_:
				case SQLiteParser.LAST_VALUE_:
				case SQLiteParser.LEAD_:
				case SQLiteParser.NTH_VALUE_:
				case SQLiteParser.NTILE_:
				case SQLiteParser.PERCENT_RANK_:
				case SQLiteParser.RANK_:
				case SQLiteParser.ROW_NUMBER_:
				case SQLiteParser.GENERATED_:
				case SQLiteParser.ALWAYS_:
				case SQLiteParser.STORED_:
				case SQLiteParser.TRUE_:
				case SQLiteParser.FALSE_:
				case SQLiteParser.WINDOW_:
				case SQLiteParser.NULLS_:
				case SQLiteParser.FIRST_:
				case SQLiteParser.LAST_:
				case SQLiteParser.FILTER_:
				case SQLiteParser.GROUPS_:
				case SQLiteParser.EXCLUDE_:
				case SQLiteParser.IDENTIFIER:
				case SQLiteParser.NUMERIC_LITERAL:
				case SQLiteParser.BIND_PARAMETER:
				case SQLiteParser.STRING_LITERAL:
				case SQLiteParser.BLOB_LITERAL:
					{
					{
					this.state = 896;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
					case 1:
						{
						this.state = 895;
						this.match(SQLiteParser.DISTINCT_);
						}
						break;
					}
					this.state = 898;
					this.expr(0);
					this.state = 903;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 899;
						this.match(SQLiteParser.COMMA);
						this.state = 900;
						this.expr(0);
						}
						}
						this.state = 905;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				case SQLiteParser.STAR:
					{
					this.state = 906;
					this.match(SQLiteParser.STAR);
					}
					break;
				case SQLiteParser.CLOSE_PAR:
					break;
				default:
					break;
				}
				this.state = 909;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 911;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 910;
					this.filter_clause();
					}
					break;
				}
				this.state = 914;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 913;
					this.over_clause();
					}
					break;
				}
				}
				break;

			case 6:
				{
				this.state = 916;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 917;
				this.expr(0);
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 918;
					this.match(SQLiteParser.COMMA);
					this.state = 919;
					this.expr(0);
					}
					}
					this.state = 924;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 925;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;

			case 7:
				{
				this.state = 927;
				this.match(SQLiteParser.CAST_);
				this.state = 928;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 929;
				this.expr(0);
				this.state = 930;
				this.match(SQLiteParser.AS_);
				this.state = 931;
				this.type_name();
				this.state = 932;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;

			case 8:
				{
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.EXISTS_ || _la === SQLiteParser.NOT_) {
					{
					this.state = 935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLiteParser.NOT_) {
						{
						this.state = 934;
						this.match(SQLiteParser.NOT_);
						}
					}

					this.state = 937;
					this.match(SQLiteParser.EXISTS_);
					}
				}

				this.state = 940;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 941;
				this.select_stmt();
				this.state = 942;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;

			case 9:
				{
				this.state = 944;
				this.match(SQLiteParser.CASE_);
				this.state = 946;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 945;
					this.expr(0);
					}
					break;
				}
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 948;
					this.match(SQLiteParser.WHEN_);
					this.state = 949;
					this.expr(0);
					this.state = 950;
					this.match(SQLiteParser.THEN_);
					this.state = 951;
					this.expr(0);
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SQLiteParser.WHEN_);
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ELSE_) {
					{
					this.state = 957;
					this.match(SQLiteParser.ELSE_);
					this.state = 958;
					this.expr(0);
					}
				}

				this.state = 961;
				this.match(SQLiteParser.END_);
				}
				break;

			case 10:
				{
				this.state = 963;
				this.raise_function();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1085;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1083;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 966;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 967;
						this.match(SQLiteParser.PIPE2);
						this.state = 968;
						this.expr(21);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 969;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 970;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.STAR) | (1 << SQLiteParser.DIV) | (1 << SQLiteParser.MOD))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 971;
						this.expr(20);
						}
						break;

					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 972;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 973;
						_la = this._input.LA(1);
						if (!(_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 974;
						this.expr(19);
						}
						break;

					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 975;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 976;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.LT2) | (1 << SQLiteParser.GT2) | (1 << SQLiteParser.AMP) | (1 << SQLiteParser.PIPE))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 977;
						this.expr(18);
						}
						break;

					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 978;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 979;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.LT) | (1 << SQLiteParser.LT_EQ) | (1 << SQLiteParser.GT) | (1 << SQLiteParser.GT_EQ))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 980;
						this.expr(17);
						}
						break;

					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 981;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 994;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
						case 1:
							{
							this.state = 982;
							this.match(SQLiteParser.ASSIGN);
							}
							break;

						case 2:
							{
							this.state = 983;
							this.match(SQLiteParser.EQ);
							}
							break;

						case 3:
							{
							this.state = 984;
							this.match(SQLiteParser.NOT_EQ1);
							}
							break;

						case 4:
							{
							this.state = 985;
							this.match(SQLiteParser.NOT_EQ2);
							}
							break;

						case 5:
							{
							this.state = 986;
							this.match(SQLiteParser.IS_);
							}
							break;

						case 6:
							{
							this.state = 987;
							this.match(SQLiteParser.IS_);
							this.state = 988;
							this.match(SQLiteParser.NOT_);
							}
							break;

						case 7:
							{
							this.state = 989;
							this.match(SQLiteParser.IN_);
							}
							break;

						case 8:
							{
							this.state = 990;
							this.match(SQLiteParser.LIKE_);
							}
							break;

						case 9:
							{
							this.state = 991;
							this.match(SQLiteParser.GLOB_);
							}
							break;

						case 10:
							{
							this.state = 992;
							this.match(SQLiteParser.MATCH_);
							}
							break;

						case 11:
							{
							this.state = 993;
							this.match(SQLiteParser.REGEXP_);
							}
							break;
						}
						this.state = 996;
						this.expr(16);
						}
						break;

					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 997;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 998;
						this.match(SQLiteParser.AND_);
						this.state = 999;
						this.expr(15);
						}
						break;

					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1000;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1001;
						this.match(SQLiteParser.OR_);
						this.state = 1002;
						this.expr(14);
						}
						break;

					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1003;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1004;
						this.match(SQLiteParser.IS_);
						this.state = 1006;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
						case 1:
							{
							this.state = 1005;
							this.match(SQLiteParser.NOT_);
							}
							break;
						}
						this.state = 1008;
						this.expr(7);
						}
						break;

					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1009;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1011;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SQLiteParser.NOT_) {
							{
							this.state = 1010;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 1013;
						this.match(SQLiteParser.BETWEEN_);
						this.state = 1014;
						this.expr(0);
						this.state = 1015;
						this.match(SQLiteParser.AND_);
						this.state = 1016;
						this.expr(6);
						}
						break;

					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1018;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1019;
						this.match(SQLiteParser.COLLATE_);
						this.state = 1020;
						this.collation_name();
						}
						break;

					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1021;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1023;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SQLiteParser.NOT_) {
							{
							this.state = 1022;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 1025;
						_la = this._input.LA(1);
						if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (SQLiteParser.GLOB_ - 77)) | (1 << (SQLiteParser.LIKE_ - 77)) | (1 << (SQLiteParser.MATCH_ - 77)))) !== 0) || _la === SQLiteParser.REGEXP_)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1026;
						this.expr(0);
						this.state = 1029;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
						case 1:
							{
							this.state = 1027;
							this.match(SQLiteParser.ESCAPE_);
							this.state = 1028;
							this.expr(0);
							}
							break;
						}
						}
						break;

					case 13:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1031;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1036;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case SQLiteParser.ISNULL_:
							{
							this.state = 1032;
							this.match(SQLiteParser.ISNULL_);
							}
							break;
						case SQLiteParser.NOTNULL_:
							{
							this.state = 1033;
							this.match(SQLiteParser.NOTNULL_);
							}
							break;
						case SQLiteParser.NOT_:
							{
							this.state = 1034;
							this.match(SQLiteParser.NOT_);
							this.state = 1035;
							this.match(SQLiteParser.NULL_);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 14:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1038;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1040;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SQLiteParser.NOT_) {
							{
							this.state = 1039;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 1042;
						this.match(SQLiteParser.IN_);
						this.state = 1081;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
						case 1:
							{
							this.state = 1043;
							this.match(SQLiteParser.OPEN_PAR);
							this.state = 1053;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
							case 1:
								{
								this.state = 1044;
								this.select_stmt();
								}
								break;

							case 2:
								{
								this.state = 1045;
								this.expr(0);
								this.state = 1050;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === SQLiteParser.COMMA) {
									{
									{
									this.state = 1046;
									this.match(SQLiteParser.COMMA);
									this.state = 1047;
									this.expr(0);
									}
									}
									this.state = 1052;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								break;
							}
							this.state = 1055;
							this.match(SQLiteParser.CLOSE_PAR);
							}
							break;

						case 2:
							{
							this.state = 1059;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
							case 1:
								{
								this.state = 1056;
								this.schema_name();
								this.state = 1057;
								this.match(SQLiteParser.DOT);
								}
								break;
							}
							this.state = 1061;
							this.table_name();
							}
							break;

						case 3:
							{
							this.state = 1065;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
							case 1:
								{
								this.state = 1062;
								this.schema_name();
								this.state = 1063;
								this.match(SQLiteParser.DOT);
								}
								break;
							}
							this.state = 1067;
							this.table_function_name();
							this.state = 1068;
							this.match(SQLiteParser.OPEN_PAR);
							this.state = 1077;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.OPEN_PAR) | (1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE) | (1 << SQLiteParser.ABORT_) | (1 << SQLiteParser.ACTION_) | (1 << SQLiteParser.ADD_) | (1 << SQLiteParser.AFTER_) | (1 << SQLiteParser.ALL_) | (1 << SQLiteParser.ALTER_) | (1 << SQLiteParser.ANALYZE_))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SQLiteParser.AND_ - 32)) | (1 << (SQLiteParser.AS_ - 32)) | (1 << (SQLiteParser.ASC_ - 32)) | (1 << (SQLiteParser.ATTACH_ - 32)) | (1 << (SQLiteParser.AUTOINCREMENT_ - 32)) | (1 << (SQLiteParser.BEFORE_ - 32)) | (1 << (SQLiteParser.BEGIN_ - 32)) | (1 << (SQLiteParser.BETWEEN_ - 32)) | (1 << (SQLiteParser.BY_ - 32)) | (1 << (SQLiteParser.CASCADE_ - 32)) | (1 << (SQLiteParser.CASE_ - 32)) | (1 << (SQLiteParser.CAST_ - 32)) | (1 << (SQLiteParser.CHECK_ - 32)) | (1 << (SQLiteParser.COLLATE_ - 32)) | (1 << (SQLiteParser.COLUMN_ - 32)) | (1 << (SQLiteParser.COMMIT_ - 32)) | (1 << (SQLiteParser.CONFLICT_ - 32)) | (1 << (SQLiteParser.CONSTRAINT_ - 32)) | (1 << (SQLiteParser.CREATE_ - 32)) | (1 << (SQLiteParser.CROSS_ - 32)) | (1 << (SQLiteParser.CURRENT_DATE_ - 32)) | (1 << (SQLiteParser.CURRENT_TIME_ - 32)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP_ - 32)) | (1 << (SQLiteParser.DATABASE_ - 32)) | (1 << (SQLiteParser.DEFAULT_ - 32)) | (1 << (SQLiteParser.DEFERRABLE_ - 32)) | (1 << (SQLiteParser.DEFERRED_ - 32)) | (1 << (SQLiteParser.DELETE_ - 32)) | (1 << (SQLiteParser.DESC_ - 32)) | (1 << (SQLiteParser.DETACH_ - 32)) | (1 << (SQLiteParser.DISTINCT_ - 32)) | (1 << (SQLiteParser.DROP_ - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SQLiteParser.EACH_ - 64)) | (1 << (SQLiteParser.ELSE_ - 64)) | (1 << (SQLiteParser.END_ - 64)) | (1 << (SQLiteParser.ESCAPE_ - 64)) | (1 << (SQLiteParser.EXCEPT_ - 64)) | (1 << (SQLiteParser.EXCLUSIVE_ - 64)) | (1 << (SQLiteParser.EXISTS_ - 64)) | (1 << (SQLiteParser.EXPLAIN_ - 64)) | (1 << (SQLiteParser.FAIL_ - 64)) | (1 << (SQLiteParser.FOR_ - 64)) | (1 << (SQLiteParser.FOREIGN_ - 64)) | (1 << (SQLiteParser.FROM_ - 64)) | (1 << (SQLiteParser.FULL_ - 64)) | (1 << (SQLiteParser.GLOB_ - 64)) | (1 << (SQLiteParser.GROUP_ - 64)) | (1 << (SQLiteParser.HAVING_ - 64)) | (1 << (SQLiteParser.IF_ - 64)) | (1 << (SQLiteParser.IGNORE_ - 64)) | (1 << (SQLiteParser.IMMEDIATE_ - 64)) | (1 << (SQLiteParser.IN_ - 64)) | (1 << (SQLiteParser.INDEX_ - 64)) | (1 << (SQLiteParser.INDEXED_ - 64)) | (1 << (SQLiteParser.INITIALLY_ - 64)) | (1 << (SQLiteParser.INNER_ - 64)) | (1 << (SQLiteParser.INSERT_ - 64)) | (1 << (SQLiteParser.INSTEAD_ - 64)) | (1 << (SQLiteParser.INTERSECT_ - 64)) | (1 << (SQLiteParser.INTO_ - 64)) | (1 << (SQLiteParser.IS_ - 64)) | (1 << (SQLiteParser.ISNULL_ - 64)) | (1 << (SQLiteParser.JOIN_ - 64)) | (1 << (SQLiteParser.KEY_ - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (SQLiteParser.LEFT_ - 96)) | (1 << (SQLiteParser.LIKE_ - 96)) | (1 << (SQLiteParser.LIMIT_ - 96)) | (1 << (SQLiteParser.MATCH_ - 96)) | (1 << (SQLiteParser.NATURAL_ - 96)) | (1 << (SQLiteParser.NO_ - 96)) | (1 << (SQLiteParser.NOT_ - 96)) | (1 << (SQLiteParser.NOTNULL_ - 96)) | (1 << (SQLiteParser.NULL_ - 96)) | (1 << (SQLiteParser.OF_ - 96)) | (1 << (SQLiteParser.OFFSET_ - 96)) | (1 << (SQLiteParser.ON_ - 96)) | (1 << (SQLiteParser.OR_ - 96)) | (1 << (SQLiteParser.ORDER_ - 96)) | (1 << (SQLiteParser.OUTER_ - 96)) | (1 << (SQLiteParser.PLAN_ - 96)) | (1 << (SQLiteParser.PRAGMA_ - 96)) | (1 << (SQLiteParser.PRIMARY_ - 96)) | (1 << (SQLiteParser.QUERY_ - 96)) | (1 << (SQLiteParser.RAISE_ - 96)) | (1 << (SQLiteParser.RECURSIVE_ - 96)) | (1 << (SQLiteParser.REFERENCES_ - 96)) | (1 << (SQLiteParser.REGEXP_ - 96)) | (1 << (SQLiteParser.REINDEX_ - 96)) | (1 << (SQLiteParser.RELEASE_ - 96)) | (1 << (SQLiteParser.RENAME_ - 96)) | (1 << (SQLiteParser.REPLACE_ - 96)) | (1 << (SQLiteParser.RESTRICT_ - 96)) | (1 << (SQLiteParser.RIGHT_ - 96)) | (1 << (SQLiteParser.ROLLBACK_ - 96)) | (1 << (SQLiteParser.ROW_ - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (SQLiteParser.ROWS_ - 128)) | (1 << (SQLiteParser.SAVEPOINT_ - 128)) | (1 << (SQLiteParser.SELECT_ - 128)) | (1 << (SQLiteParser.SET_ - 128)) | (1 << (SQLiteParser.TABLE_ - 128)) | (1 << (SQLiteParser.TEMP_ - 128)) | (1 << (SQLiteParser.TEMPORARY_ - 128)) | (1 << (SQLiteParser.THEN_ - 128)) | (1 << (SQLiteParser.TO_ - 128)) | (1 << (SQLiteParser.TRANSACTION_ - 128)) | (1 << (SQLiteParser.TRIGGER_ - 128)) | (1 << (SQLiteParser.UNION_ - 128)) | (1 << (SQLiteParser.UNIQUE_ - 128)) | (1 << (SQLiteParser.UPDATE_ - 128)) | (1 << (SQLiteParser.USING_ - 128)) | (1 << (SQLiteParser.VACUUM_ - 128)) | (1 << (SQLiteParser.VALUES_ - 128)) | (1 << (SQLiteParser.VIEW_ - 128)) | (1 << (SQLiteParser.VIRTUAL_ - 128)) | (1 << (SQLiteParser.WHEN_ - 128)) | (1 << (SQLiteParser.WHERE_ - 128)) | (1 << (SQLiteParser.WITH_ - 128)) | (1 << (SQLiteParser.WITHOUT_ - 128)) | (1 << (SQLiteParser.FIRST_VALUE_ - 128)) | (1 << (SQLiteParser.OVER_ - 128)) | (1 << (SQLiteParser.PARTITION_ - 128)) | (1 << (SQLiteParser.RANGE_ - 128)) | (1 << (SQLiteParser.PRECEDING_ - 128)) | (1 << (SQLiteParser.UNBOUNDED_ - 128)) | (1 << (SQLiteParser.CURRENT_ - 128)) | (1 << (SQLiteParser.FOLLOWING_ - 128)) | (1 << (SQLiteParser.CUME_DIST_ - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SQLiteParser.DENSE_RANK_ - 160)) | (1 << (SQLiteParser.LAG_ - 160)) | (1 << (SQLiteParser.LAST_VALUE_ - 160)) | (1 << (SQLiteParser.LEAD_ - 160)) | (1 << (SQLiteParser.NTH_VALUE_ - 160)) | (1 << (SQLiteParser.NTILE_ - 160)) | (1 << (SQLiteParser.PERCENT_RANK_ - 160)) | (1 << (SQLiteParser.RANK_ - 160)) | (1 << (SQLiteParser.ROW_NUMBER_ - 160)) | (1 << (SQLiteParser.GENERATED_ - 160)) | (1 << (SQLiteParser.ALWAYS_ - 160)) | (1 << (SQLiteParser.STORED_ - 160)) | (1 << (SQLiteParser.TRUE_ - 160)) | (1 << (SQLiteParser.FALSE_ - 160)) | (1 << (SQLiteParser.WINDOW_ - 160)) | (1 << (SQLiteParser.NULLS_ - 160)) | (1 << (SQLiteParser.FIRST_ - 160)) | (1 << (SQLiteParser.LAST_ - 160)) | (1 << (SQLiteParser.FILTER_ - 160)) | (1 << (SQLiteParser.GROUPS_ - 160)) | (1 << (SQLiteParser.EXCLUDE_ - 160)) | (1 << (SQLiteParser.IDENTIFIER - 160)) | (1 << (SQLiteParser.NUMERIC_LITERAL - 160)) | (1 << (SQLiteParser.BIND_PARAMETER - 160)) | (1 << (SQLiteParser.STRING_LITERAL - 160)) | (1 << (SQLiteParser.BLOB_LITERAL - 160)))) !== 0)) {
								{
								this.state = 1069;
								this.expr(0);
								this.state = 1074;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === SQLiteParser.COMMA) {
									{
									{
									this.state = 1070;
									this.match(SQLiteParser.COMMA);
									this.state = 1071;
									this.expr(0);
									}
									}
									this.state = 1076;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
							}

							this.state = 1079;
							this.match(SQLiteParser.CLOSE_PAR);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1087;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raise_function(): Raise_functionContext {
		let _localctx: Raise_functionContext = new Raise_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SQLiteParser.RULE_raise_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			this.match(SQLiteParser.RAISE_);
			this.state = 1089;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.IGNORE_:
				{
				this.state = 1090;
				this.match(SQLiteParser.IGNORE_);
				}
				break;
			case SQLiteParser.ABORT_:
			case SQLiteParser.FAIL_:
			case SQLiteParser.ROLLBACK_:
				{
				this.state = 1091;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.ABORT_ || _la === SQLiteParser.FAIL_ || _la === SQLiteParser.ROLLBACK_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1092;
				this.match(SQLiteParser.COMMA);
				this.state = 1093;
				this.error_message();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1096;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_value(): Literal_valueContext {
		let _localctx: Literal_valueContext = new Literal_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SQLiteParser.RULE_literal_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1098;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (SQLiteParser.CURRENT_DATE_ - 52)) | (1 << (SQLiteParser.CURRENT_TIME_ - 52)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP_ - 52)))) !== 0) || _la === SQLiteParser.NULL_ || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & ((1 << (SQLiteParser.TRUE_ - 172)) | (1 << (SQLiteParser.FALSE_ - 172)) | (1 << (SQLiteParser.NUMERIC_LITERAL - 172)) | (1 << (SQLiteParser.STRING_LITERAL - 172)) | (1 << (SQLiteParser.BLOB_LITERAL - 172)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_row(): Value_rowContext {
		let _localctx: Value_rowContext = new Value_rowContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SQLiteParser.RULE_value_row);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1101;
			this.expr(0);
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1102;
				this.match(SQLiteParser.COMMA);
				this.state = 1103;
				this.expr(0);
				}
				}
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1109;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public values_clause(): Values_clauseContext {
		let _localctx: Values_clauseContext = new Values_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SQLiteParser.RULE_values_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this.match(SQLiteParser.VALUES_);
			this.state = 1112;
			this.value_row();
			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1113;
				this.match(SQLiteParser.COMMA);
				this.state = 1114;
				this.value_row();
				}
				}
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insert_stmt(): Insert_stmtContext {
		let _localctx: Insert_stmtContext = new Insert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SQLiteParser.RULE_insert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 1120;
				this.with_clause();
				}
			}

			this.state = 1128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1123;
				this.match(SQLiteParser.INSERT_);
				}
				break;

			case 2:
				{
				this.state = 1124;
				this.match(SQLiteParser.REPLACE_);
				}
				break;

			case 3:
				{
				this.state = 1125;
				this.match(SQLiteParser.INSERT_);
				this.state = 1126;
				this.match(SQLiteParser.OR_);
				this.state = 1127;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.ABORT_ || _la === SQLiteParser.FAIL_ || _la === SQLiteParser.IGNORE_ || _la === SQLiteParser.REPLACE_ || _la === SQLiteParser.ROLLBACK_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1130;
			this.match(SQLiteParser.INTO_);
			this.state = 1134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1131;
				this.schema_name();
				this.state = 1132;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1136;
			this.table_name();
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.AS_) {
				{
				this.state = 1137;
				this.match(SQLiteParser.AS_);
				this.state = 1138;
				this.table_alias();
				}
			}

			this.state = 1152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 1141;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1142;
				this.column_name();
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1143;
					this.match(SQLiteParser.COMMA);
					this.state = 1144;
					this.column_name();
					}
					}
					this.state = 1149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1150;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 1163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.SELECT_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.WITH_:
				{
				{
				this.state = 1156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1154;
					this.values_clause();
					}
					break;

				case 2:
					{
					this.state = 1155;
					this.select_stmt();
					}
					break;
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ON_) {
					{
					this.state = 1158;
					this.upsert_clause();
					}
				}

				}
				}
				break;
			case SQLiteParser.DEFAULT_:
				{
				this.state = 1161;
				this.match(SQLiteParser.DEFAULT_);
				this.state = 1162;
				this.match(SQLiteParser.VALUES_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.RETURNING_) {
				{
				this.state = 1165;
				this.returning_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returning_clause(): Returning_clauseContext {
		let _localctx: Returning_clauseContext = new Returning_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SQLiteParser.RULE_returning_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1168;
			this.match(SQLiteParser.RETURNING_);
			this.state = 1169;
			this.result_column();
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1170;
				this.match(SQLiteParser.COMMA);
				this.state = 1171;
				this.result_column();
				}
				}
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upsert_clause(): Upsert_clauseContext {
		let _localctx: Upsert_clauseContext = new Upsert_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SQLiteParser.RULE_upsert_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this.match(SQLiteParser.ON_);
			this.state = 1178;
			this.match(SQLiteParser.CONFLICT_);
			this.state = 1193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.OPEN_PAR) {
				{
				this.state = 1179;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1180;
				this.indexed_column();
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1181;
					this.match(SQLiteParser.COMMA);
					this.state = 1182;
					this.indexed_column();
					}
					}
					this.state = 1187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1188;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.WHERE_) {
					{
					this.state = 1189;
					this.match(SQLiteParser.WHERE_);
					this.state = 1190;
					this.expr(0);
					}
				}

				}
			}

			this.state = 1195;
			this.match(SQLiteParser.DO_);
			this.state = 1222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.NOTHING_:
				{
				this.state = 1196;
				this.match(SQLiteParser.NOTHING_);
				}
				break;
			case SQLiteParser.UPDATE_:
				{
				this.state = 1197;
				this.match(SQLiteParser.UPDATE_);
				this.state = 1198;
				this.match(SQLiteParser.SET_);
				{
				this.state = 1201;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1199;
					this.column_name();
					}
					break;

				case 2:
					{
					this.state = 1200;
					this.column_name_list();
					}
					break;
				}
				this.state = 1203;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1204;
				this.expr(0);
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1205;
					this.match(SQLiteParser.COMMA);
					this.state = 1208;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
					case 1:
						{
						this.state = 1206;
						this.column_name();
						}
						break;

					case 2:
						{
						this.state = 1207;
						this.column_name_list();
						}
						break;
					}
					this.state = 1210;
					this.match(SQLiteParser.ASSIGN);
					this.state = 1211;
					this.expr(0);
					}
					}
					this.state = 1217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.WHERE_) {
					{
					this.state = 1218;
					this.match(SQLiteParser.WHERE_);
					this.state = 1219;
					this.expr(0);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragma_stmt(): Pragma_stmtContext {
		let _localctx: Pragma_stmtContext = new Pragma_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SQLiteParser.RULE_pragma_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.match(SQLiteParser.PRAGMA_);
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1225;
				this.schema_name();
				this.state = 1226;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1230;
			this.pragma_name();
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.ASSIGN:
				{
				this.state = 1231;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1232;
				this.pragma_value();
				}
				break;
			case SQLiteParser.OPEN_PAR:
				{
				this.state = 1233;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1234;
				this.pragma_value();
				this.state = 1235;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.EOF:
			case SQLiteParser.SCOL:
			case SQLiteParser.ALTER_:
			case SQLiteParser.ANALYZE_:
			case SQLiteParser.ATTACH_:
			case SQLiteParser.BEGIN_:
			case SQLiteParser.COMMIT_:
			case SQLiteParser.CREATE_:
			case SQLiteParser.DELETE_:
			case SQLiteParser.DETACH_:
			case SQLiteParser.DROP_:
			case SQLiteParser.END_:
			case SQLiteParser.EXPLAIN_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.PRAGMA_:
			case SQLiteParser.REINDEX_:
			case SQLiteParser.RELEASE_:
			case SQLiteParser.REPLACE_:
			case SQLiteParser.ROLLBACK_:
			case SQLiteParser.SAVEPOINT_:
			case SQLiteParser.SELECT_:
			case SQLiteParser.UPDATE_:
			case SQLiteParser.VACUUM_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.WITH_:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragma_value(): Pragma_valueContext {
		let _localctx: Pragma_valueContext = new Pragma_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SQLiteParser.RULE_pragma_value);
		try {
			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1239;
				this.signed_number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1240;
				this.name();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1241;
				this.match(SQLiteParser.STRING_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reindex_stmt(): Reindex_stmtContext {
		let _localctx: Reindex_stmtContext = new Reindex_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SQLiteParser.RULE_reindex_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1244;
			this.match(SQLiteParser.REINDEX_);
			this.state = 1255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1245;
				this.collation_name();
				}
				break;

			case 2:
				{
				this.state = 1249;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
				case 1:
					{
					this.state = 1246;
					this.schema_name();
					this.state = 1247;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 1253;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
				case 1:
					{
					this.state = 1251;
					this.table_name();
					}
					break;

				case 2:
					{
					this.state = 1252;
					this.index_name();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select_stmt(): Select_stmtContext {
		let _localctx: Select_stmtContext = new Select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SQLiteParser.RULE_select_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 1257;
				this.common_table_stmt();
				}
			}

			this.state = 1260;
			this.select_core();
			this.state = 1266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1261;
					this.compound_operator();
					this.state = 1262;
					this.select_core();
					}
					}
				}
				this.state = 1268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
			}
			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ORDER_) {
				{
				this.state = 1269;
				this.order_by_stmt();
				}
			}

			this.state = 1273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.LIMIT_) {
				{
				this.state = 1272;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public join_clause(): Join_clauseContext {
		let _localctx: Join_clauseContext = new Join_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SQLiteParser.RULE_join_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.table_or_subquery();
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA || _la === SQLiteParser.CROSS_ || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SQLiteParser.INNER_ - 87)) | (1 << (SQLiteParser.JOIN_ - 87)) | (1 << (SQLiteParser.LEFT_ - 87)) | (1 << (SQLiteParser.NATURAL_ - 87)))) !== 0)) {
				{
				{
				this.state = 1276;
				this.join_operator();
				this.state = 1277;
				this.table_or_subquery();
				this.state = 1279;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
				case 1:
					{
					this.state = 1278;
					this.join_constraint();
					}
					break;
				}
				}
				}
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select_core(): Select_coreContext {
		let _localctx: Select_coreContext = new Select_coreContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SQLiteParser.RULE_select_core);
		let _la: number;
		try {
			this.state = 1349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.SELECT_:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1286;
				this.match(SQLiteParser.SELECT_);
				this.state = 1288;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
				case 1:
					{
					this.state = 1287;
					_la = this._input.LA(1);
					if (!(_la === SQLiteParser.ALL_ || _la === SQLiteParser.DISTINCT_)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 1290;
				this.result_column();
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1291;
					this.match(SQLiteParser.COMMA);
					this.state = 1292;
					this.result_column();
					}
					}
					this.state = 1297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.FROM_) {
					{
					this.state = 1298;
					this.match(SQLiteParser.FROM_);
					this.state = 1308;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						this.state = 1299;
						this.table_or_subquery();
						this.state = 1304;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === SQLiteParser.COMMA) {
							{
							{
							this.state = 1300;
							this.match(SQLiteParser.COMMA);
							this.state = 1301;
							this.table_or_subquery();
							}
							}
							this.state = 1306;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						break;

					case 2:
						{
						this.state = 1307;
						this.join_clause();
						}
						break;
					}
					}
				}

				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.WHERE_) {
					{
					this.state = 1312;
					this.match(SQLiteParser.WHERE_);
					this.state = 1313;
					_localctx._whereExpr = this.expr(0);
					}
				}

				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.GROUP_) {
					{
					this.state = 1316;
					this.match(SQLiteParser.GROUP_);
					this.state = 1317;
					this.match(SQLiteParser.BY_);
					this.state = 1318;
					_localctx._expr = this.expr(0);
					_localctx._groupByExpr.push(_localctx._expr);
					this.state = 1323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 1319;
						this.match(SQLiteParser.COMMA);
						this.state = 1320;
						_localctx._expr = this.expr(0);
						_localctx._groupByExpr.push(_localctx._expr);
						}
						}
						this.state = 1325;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLiteParser.HAVING_) {
						{
						this.state = 1326;
						this.match(SQLiteParser.HAVING_);
						this.state = 1327;
						_localctx._havingExpr = this.expr(0);
						}
					}

					}
				}

				this.state = 1346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.WINDOW_) {
					{
					this.state = 1332;
					this.match(SQLiteParser.WINDOW_);
					this.state = 1333;
					this.window_name();
					this.state = 1334;
					this.match(SQLiteParser.AS_);
					this.state = 1335;
					this.window_defn();
					this.state = 1343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 1336;
						this.match(SQLiteParser.COMMA);
						this.state = 1337;
						this.window_name();
						this.state = 1338;
						this.match(SQLiteParser.AS_);
						this.state = 1339;
						this.window_defn();
						}
						}
						this.state = 1345;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				}
				break;
			case SQLiteParser.VALUES_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1348;
				this.values_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factored_select_stmt(): Factored_select_stmtContext {
		let _localctx: Factored_select_stmtContext = new Factored_select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SQLiteParser.RULE_factored_select_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1351;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_select_stmt(): Simple_select_stmtContext {
		let _localctx: Simple_select_stmtContext = new Simple_select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SQLiteParser.RULE_simple_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 1353;
				this.common_table_stmt();
				}
			}

			this.state = 1356;
			this.select_core();
			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ORDER_) {
				{
				this.state = 1357;
				this.order_by_stmt();
				}
			}

			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.LIMIT_) {
				{
				this.state = 1360;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_select_stmt(): Compound_select_stmtContext {
		let _localctx: Compound_select_stmtContext = new Compound_select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SQLiteParser.RULE_compound_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 1363;
				this.common_table_stmt();
				}
			}

			this.state = 1366;
			this.select_core();
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1373;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.UNION_:
					{
					this.state = 1367;
					this.match(SQLiteParser.UNION_);
					this.state = 1369;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLiteParser.ALL_) {
						{
						this.state = 1368;
						this.match(SQLiteParser.ALL_);
						}
					}

					}
					break;
				case SQLiteParser.INTERSECT_:
					{
					this.state = 1371;
					this.match(SQLiteParser.INTERSECT_);
					}
					break;
				case SQLiteParser.EXCEPT_:
					{
					this.state = 1372;
					this.match(SQLiteParser.EXCEPT_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1375;
				this.select_core();
				}
				}
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SQLiteParser.EXCEPT_ || _la === SQLiteParser.INTERSECT_ || _la === SQLiteParser.UNION_);
			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ORDER_) {
				{
				this.state = 1380;
				this.order_by_stmt();
				}
			}

			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.LIMIT_) {
				{
				this.state = 1383;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_or_subquery(): Table_or_subqueryContext {
		let _localctx: Table_or_subqueryContext = new Table_or_subqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SQLiteParser.RULE_table_or_subquery);
		let _la: number;
		try {
			this.state = 1450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1389;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1386;
					this.schema_name();
					this.state = 1387;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 1391;
				this.table_name();
				this.state = 1396;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1393;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
					case 1:
						{
						this.state = 1392;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 1395;
					this.table_alias();
					}
					break;
				}
				this.state = 1403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.INDEXED_:
					{
					this.state = 1398;
					this.match(SQLiteParser.INDEXED_);
					this.state = 1399;
					this.match(SQLiteParser.BY_);
					this.state = 1400;
					this.index_name();
					}
					break;
				case SQLiteParser.NOT_:
					{
					this.state = 1401;
					this.match(SQLiteParser.NOT_);
					this.state = 1402;
					this.match(SQLiteParser.INDEXED_);
					}
					break;
				case SQLiteParser.EOF:
				case SQLiteParser.SCOL:
				case SQLiteParser.CLOSE_PAR:
				case SQLiteParser.COMMA:
				case SQLiteParser.ALTER_:
				case SQLiteParser.ANALYZE_:
				case SQLiteParser.ATTACH_:
				case SQLiteParser.BEGIN_:
				case SQLiteParser.COMMIT_:
				case SQLiteParser.CREATE_:
				case SQLiteParser.CROSS_:
				case SQLiteParser.DELETE_:
				case SQLiteParser.DETACH_:
				case SQLiteParser.DROP_:
				case SQLiteParser.END_:
				case SQLiteParser.EXCEPT_:
				case SQLiteParser.EXPLAIN_:
				case SQLiteParser.GROUP_:
				case SQLiteParser.INNER_:
				case SQLiteParser.INSERT_:
				case SQLiteParser.INTERSECT_:
				case SQLiteParser.JOIN_:
				case SQLiteParser.LEFT_:
				case SQLiteParser.LIMIT_:
				case SQLiteParser.NATURAL_:
				case SQLiteParser.ON_:
				case SQLiteParser.ORDER_:
				case SQLiteParser.PRAGMA_:
				case SQLiteParser.REINDEX_:
				case SQLiteParser.RELEASE_:
				case SQLiteParser.REPLACE_:
				case SQLiteParser.RETURNING_:
				case SQLiteParser.ROLLBACK_:
				case SQLiteParser.SAVEPOINT_:
				case SQLiteParser.SELECT_:
				case SQLiteParser.UNION_:
				case SQLiteParser.UPDATE_:
				case SQLiteParser.USING_:
				case SQLiteParser.VACUUM_:
				case SQLiteParser.VALUES_:
				case SQLiteParser.WHERE_:
				case SQLiteParser.WITH_:
				case SQLiteParser.WINDOW_:
					break;
				default:
					break;
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1408;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1405;
					this.schema_name();
					this.state = 1406;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 1410;
				this.table_function_name();
				this.state = 1411;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1412;
				this.expr(0);
				this.state = 1417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1413;
					this.match(SQLiteParser.COMMA);
					this.state = 1414;
					this.expr(0);
					}
					}
					this.state = 1419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1420;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1425;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1422;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
					case 1:
						{
						this.state = 1421;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 1424;
					this.table_alias();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1427;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1437;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1428;
					this.table_or_subquery();
					this.state = 1433;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 1429;
						this.match(SQLiteParser.COMMA);
						this.state = 1430;
						this.table_or_subquery();
						}
						}
						this.state = 1435;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;

				case 2:
					{
					this.state = 1436;
					this.join_clause();
					}
					break;
				}
				this.state = 1439;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1441;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1442;
				this.select_stmt();
				this.state = 1443;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1448;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1445;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
					case 1:
						{
						this.state = 1444;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 1447;
					this.table_alias();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result_column(): Result_columnContext {
		let _localctx: Result_columnContext = new Result_columnContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SQLiteParser.RULE_result_column);
		let _la: number;
		try {
			this.state = 1464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1452;
				this.match(SQLiteParser.STAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1453;
				this.table_name();
				this.state = 1454;
				this.match(SQLiteParser.DOT);
				this.state = 1455;
				this.match(SQLiteParser.STAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1457;
				this.expr(0);
				this.state = 1462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.AS_ || _la === SQLiteParser.IDENTIFIER || _la === SQLiteParser.STRING_LITERAL) {
					{
					this.state = 1459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLiteParser.AS_) {
						{
						this.state = 1458;
						this.match(SQLiteParser.AS_);
						}
					}

					this.state = 1461;
					this.column_alias();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public join_operator(): Join_operatorContext {
		let _localctx: Join_operatorContext = new Join_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SQLiteParser.RULE_join_operator);
		let _la: number;
		try {
			this.state = 1479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.COMMA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1466;
				this.match(SQLiteParser.COMMA);
				}
				break;
			case SQLiteParser.CROSS_:
			case SQLiteParser.INNER_:
			case SQLiteParser.JOIN_:
			case SQLiteParser.LEFT_:
			case SQLiteParser.NATURAL_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.NATURAL_) {
					{
					this.state = 1467;
					this.match(SQLiteParser.NATURAL_);
					}
				}

				this.state = 1476;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.LEFT_:
					{
					this.state = 1470;
					this.match(SQLiteParser.LEFT_);
					this.state = 1472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLiteParser.OUTER_) {
						{
						this.state = 1471;
						this.match(SQLiteParser.OUTER_);
						}
					}

					}
					break;
				case SQLiteParser.INNER_:
					{
					this.state = 1474;
					this.match(SQLiteParser.INNER_);
					}
					break;
				case SQLiteParser.CROSS_:
					{
					this.state = 1475;
					this.match(SQLiteParser.CROSS_);
					}
					break;
				case SQLiteParser.JOIN_:
					break;
				default:
					break;
				}
				this.state = 1478;
				this.match(SQLiteParser.JOIN_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public join_constraint(): Join_constraintContext {
		let _localctx: Join_constraintContext = new Join_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SQLiteParser.RULE_join_constraint);
		let _la: number;
		try {
			this.state = 1495;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.ON_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1481;
				this.match(SQLiteParser.ON_);
				this.state = 1482;
				this.expr(0);
				}
				break;
			case SQLiteParser.USING_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1483;
				this.match(SQLiteParser.USING_);
				this.state = 1484;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1485;
				this.column_name();
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1486;
					this.match(SQLiteParser.COMMA);
					this.state = 1487;
					this.column_name();
					}
					}
					this.state = 1492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1493;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_operator(): Compound_operatorContext {
		let _localctx: Compound_operatorContext = new Compound_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SQLiteParser.RULE_compound_operator);
		let _la: number;
		try {
			this.state = 1503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.UNION_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1497;
				this.match(SQLiteParser.UNION_);
				this.state = 1499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ALL_) {
					{
					this.state = 1498;
					this.match(SQLiteParser.ALL_);
					}
				}

				}
				break;
			case SQLiteParser.INTERSECT_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1501;
				this.match(SQLiteParser.INTERSECT_);
				}
				break;
			case SQLiteParser.EXCEPT_:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1502;
				this.match(SQLiteParser.EXCEPT_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public update_stmt(): Update_stmtContext {
		let _localctx: Update_stmtContext = new Update_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SQLiteParser.RULE_update_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 1505;
				this.with_clause();
				}
			}

			this.state = 1508;
			this.match(SQLiteParser.UPDATE_);
			this.state = 1511;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				{
				this.state = 1509;
				this.match(SQLiteParser.OR_);
				this.state = 1510;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.ABORT_ || _la === SQLiteParser.FAIL_ || _la === SQLiteParser.IGNORE_ || _la === SQLiteParser.REPLACE_ || _la === SQLiteParser.ROLLBACK_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1513;
			this.qualified_table_name();
			this.state = 1514;
			this.match(SQLiteParser.SET_);
			this.state = 1517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1515;
				this.column_name();
				}
				break;

			case 2:
				{
				this.state = 1516;
				this.column_name_list();
				}
				break;
			}
			this.state = 1519;
			this.match(SQLiteParser.ASSIGN);
			this.state = 1520;
			this.expr(0);
			this.state = 1531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1521;
				this.match(SQLiteParser.COMMA);
				this.state = 1524;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1522;
					this.column_name();
					}
					break;

				case 2:
					{
					this.state = 1523;
					this.column_name_list();
					}
					break;
				}
				this.state = 1526;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1527;
				this.expr(0);
				}
				}
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.FROM_) {
				{
				this.state = 1534;
				this.match(SQLiteParser.FROM_);
				this.state = 1544;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
				case 1:
					{
					this.state = 1535;
					this.table_or_subquery();
					this.state = 1540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 1536;
						this.match(SQLiteParser.COMMA);
						this.state = 1537;
						this.table_or_subquery();
						}
						}
						this.state = 1542;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;

				case 2:
					{
					this.state = 1543;
					this.join_clause();
					}
					break;
				}
				}
			}

			this.state = 1550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WHERE_) {
				{
				this.state = 1548;
				this.match(SQLiteParser.WHERE_);
				this.state = 1549;
				this.expr(0);
				}
			}

			this.state = 1553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.RETURNING_) {
				{
				this.state = 1552;
				this.returning_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_name_list(): Column_name_listContext {
		let _localctx: Column_name_listContext = new Column_name_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SQLiteParser.RULE_column_name_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1555;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1556;
			this.column_name();
			this.state = 1561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1557;
				this.match(SQLiteParser.COMMA);
				this.state = 1558;
				this.column_name();
				}
				}
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1564;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public update_stmt_limited(): Update_stmt_limitedContext {
		let _localctx: Update_stmt_limitedContext = new Update_stmt_limitedContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SQLiteParser.RULE_update_stmt_limited);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WITH_) {
				{
				this.state = 1566;
				this.with_clause();
				}
			}

			this.state = 1569;
			this.match(SQLiteParser.UPDATE_);
			this.state = 1572;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				{
				this.state = 1570;
				this.match(SQLiteParser.OR_);
				this.state = 1571;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.ABORT_ || _la === SQLiteParser.FAIL_ || _la === SQLiteParser.IGNORE_ || _la === SQLiteParser.REPLACE_ || _la === SQLiteParser.ROLLBACK_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1574;
			this.qualified_table_name();
			this.state = 1575;
			this.match(SQLiteParser.SET_);
			this.state = 1578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1576;
				this.column_name();
				}
				break;

			case 2:
				{
				this.state = 1577;
				this.column_name_list();
				}
				break;
			}
			this.state = 1580;
			this.match(SQLiteParser.ASSIGN);
			this.state = 1581;
			this.expr(0);
			this.state = 1592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1582;
				this.match(SQLiteParser.COMMA);
				this.state = 1585;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1583;
					this.column_name();
					}
					break;

				case 2:
					{
					this.state = 1584;
					this.column_name_list();
					}
					break;
				}
				this.state = 1587;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1588;
				this.expr(0);
				}
				}
				this.state = 1594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.WHERE_) {
				{
				this.state = 1595;
				this.match(SQLiteParser.WHERE_);
				this.state = 1596;
				this.expr(0);
				}
			}

			this.state = 1600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.RETURNING_) {
				{
				this.state = 1599;
				this.returning_clause();
				}
			}

			this.state = 1606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.LIMIT_ || _la === SQLiteParser.ORDER_) {
				{
				this.state = 1603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ORDER_) {
					{
					this.state = 1602;
					this.order_by_stmt();
					}
				}

				this.state = 1605;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualified_table_name(): Qualified_table_nameContext {
		let _localctx: Qualified_table_nameContext = new Qualified_table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SQLiteParser.RULE_qualified_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1608;
				this.schema_name();
				this.state = 1609;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1613;
			this.table_name();
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.AS_) {
				{
				this.state = 1614;
				this.match(SQLiteParser.AS_);
				this.state = 1615;
				this.alias();
				}
			}

			this.state = 1623;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.INDEXED_:
				{
				this.state = 1618;
				this.match(SQLiteParser.INDEXED_);
				this.state = 1619;
				this.match(SQLiteParser.BY_);
				this.state = 1620;
				this.index_name();
				}
				break;
			case SQLiteParser.NOT_:
				{
				this.state = 1621;
				this.match(SQLiteParser.NOT_);
				this.state = 1622;
				this.match(SQLiteParser.INDEXED_);
				}
				break;
			case SQLiteParser.EOF:
			case SQLiteParser.SCOL:
			case SQLiteParser.ALTER_:
			case SQLiteParser.ANALYZE_:
			case SQLiteParser.ATTACH_:
			case SQLiteParser.BEGIN_:
			case SQLiteParser.COMMIT_:
			case SQLiteParser.CREATE_:
			case SQLiteParser.DELETE_:
			case SQLiteParser.DETACH_:
			case SQLiteParser.DROP_:
			case SQLiteParser.END_:
			case SQLiteParser.EXPLAIN_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.LIMIT_:
			case SQLiteParser.ORDER_:
			case SQLiteParser.PRAGMA_:
			case SQLiteParser.REINDEX_:
			case SQLiteParser.RELEASE_:
			case SQLiteParser.REPLACE_:
			case SQLiteParser.RETURNING_:
			case SQLiteParser.ROLLBACK_:
			case SQLiteParser.SAVEPOINT_:
			case SQLiteParser.SELECT_:
			case SQLiteParser.SET_:
			case SQLiteParser.UPDATE_:
			case SQLiteParser.VACUUM_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.WHERE_:
			case SQLiteParser.WITH_:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vacuum_stmt(): Vacuum_stmtContext {
		let _localctx: Vacuum_stmtContext = new Vacuum_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SQLiteParser.RULE_vacuum_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this.match(SQLiteParser.VACUUM_);
			this.state = 1627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				this.state = 1626;
				this.schema_name();
				}
				break;
			}
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.INTO_) {
				{
				this.state = 1629;
				this.match(SQLiteParser.INTO_);
				this.state = 1630;
				this.filename();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filter_clause(): Filter_clauseContext {
		let _localctx: Filter_clauseContext = new Filter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SQLiteParser.RULE_filter_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this.match(SQLiteParser.FILTER_);
			this.state = 1634;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1635;
			this.match(SQLiteParser.WHERE_);
			this.state = 1636;
			this.expr(0);
			this.state = 1637;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_defn(): Window_defnContext {
		let _localctx: Window_defnContext = new Window_defnContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SQLiteParser.RULE_window_defn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 1640;
				this.base_window_name();
				}
				break;
			}
			this.state = 1653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.PARTITION_) {
				{
				this.state = 1643;
				this.match(SQLiteParser.PARTITION_);
				this.state = 1644;
				this.match(SQLiteParser.BY_);
				this.state = 1645;
				this.expr(0);
				this.state = 1650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1646;
					this.match(SQLiteParser.COMMA);
					this.state = 1647;
					this.expr(0);
					}
					}
					this.state = 1652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			{
			this.state = 1655;
			this.match(SQLiteParser.ORDER_);
			this.state = 1656;
			this.match(SQLiteParser.BY_);
			this.state = 1657;
			this.ordering_term();
			this.state = 1662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1658;
				this.match(SQLiteParser.COMMA);
				this.state = 1659;
				this.ordering_term();
				}
				}
				this.state = 1664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 1666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ROWS_ || _la === SQLiteParser.RANGE_ || _la === SQLiteParser.GROUPS_) {
				{
				this.state = 1665;
				this.frame_spec();
				}
			}

			this.state = 1668;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public over_clause(): Over_clauseContext {
		let _localctx: Over_clauseContext = new Over_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SQLiteParser.RULE_over_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.match(SQLiteParser.OVER_);
			this.state = 1704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				{
				this.state = 1671;
				this.window_name();
				}
				break;

			case 2:
				{
				this.state = 1672;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1674;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 1673;
					this.base_window_name();
					}
					break;
				}
				this.state = 1686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1676;
					this.match(SQLiteParser.PARTITION_);
					this.state = 1677;
					this.match(SQLiteParser.BY_);
					this.state = 1678;
					this.expr(0);
					this.state = 1683;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 1679;
						this.match(SQLiteParser.COMMA);
						this.state = 1680;
						this.expr(0);
						}
						}
						this.state = 1685;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ORDER_) {
					{
					this.state = 1688;
					this.match(SQLiteParser.ORDER_);
					this.state = 1689;
					this.match(SQLiteParser.BY_);
					this.state = 1690;
					this.ordering_term();
					this.state = 1695;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SQLiteParser.COMMA) {
						{
						{
						this.state = 1691;
						this.match(SQLiteParser.COMMA);
						this.state = 1692;
						this.ordering_term();
						}
						}
						this.state = 1697;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ROWS_ || _la === SQLiteParser.RANGE_ || _la === SQLiteParser.GROUPS_) {
					{
					this.state = 1700;
					this.frame_spec();
					}
				}

				this.state = 1703;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frame_spec(): Frame_specContext {
		let _localctx: Frame_specContext = new Frame_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SQLiteParser.RULE_frame_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1706;
			this.frame_clause();
			this.state = 1716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.EXCLUDE_) {
				{
				this.state = 1707;
				this.match(SQLiteParser.EXCLUDE_);
				this.state = 1714;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SQLiteParser.NO_:
					{
					this.state = 1708;
					this.match(SQLiteParser.NO_);
					this.state = 1709;
					this.match(SQLiteParser.OTHERS_);
					}
					break;
				case SQLiteParser.CURRENT_:
					{
					this.state = 1710;
					this.match(SQLiteParser.CURRENT_);
					this.state = 1711;
					this.match(SQLiteParser.ROW_);
					}
					break;
				case SQLiteParser.GROUP_:
					{
					this.state = 1712;
					this.match(SQLiteParser.GROUP_);
					}
					break;
				case SQLiteParser.TIES_:
					{
					this.state = 1713;
					this.match(SQLiteParser.TIES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frame_clause(): Frame_clauseContext {
		let _localctx: Frame_clauseContext = new Frame_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SQLiteParser.RULE_frame_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1718;
			_la = this._input.LA(1);
			if (!(_la === SQLiteParser.ROWS_ || _la === SQLiteParser.RANGE_ || _la === SQLiteParser.GROUPS_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				{
				this.state = 1719;
				this.frame_single();
				}
				break;

			case 2:
				{
				this.state = 1720;
				this.match(SQLiteParser.BETWEEN_);
				this.state = 1721;
				this.frame_left();
				this.state = 1722;
				this.match(SQLiteParser.AND_);
				this.state = 1723;
				this.frame_right();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_function_invocation(): Simple_function_invocationContext {
		let _localctx: Simple_function_invocationContext = new Simple_function_invocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SQLiteParser.RULE_simple_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1727;
			this.simple_func();
			this.state = 1728;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1738;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.OPEN_PAR:
			case SQLiteParser.PLUS:
			case SQLiteParser.MINUS:
			case SQLiteParser.TILDE:
			case SQLiteParser.ABORT_:
			case SQLiteParser.ACTION_:
			case SQLiteParser.ADD_:
			case SQLiteParser.AFTER_:
			case SQLiteParser.ALL_:
			case SQLiteParser.ALTER_:
			case SQLiteParser.ANALYZE_:
			case SQLiteParser.AND_:
			case SQLiteParser.AS_:
			case SQLiteParser.ASC_:
			case SQLiteParser.ATTACH_:
			case SQLiteParser.AUTOINCREMENT_:
			case SQLiteParser.BEFORE_:
			case SQLiteParser.BEGIN_:
			case SQLiteParser.BETWEEN_:
			case SQLiteParser.BY_:
			case SQLiteParser.CASCADE_:
			case SQLiteParser.CASE_:
			case SQLiteParser.CAST_:
			case SQLiteParser.CHECK_:
			case SQLiteParser.COLLATE_:
			case SQLiteParser.COLUMN_:
			case SQLiteParser.COMMIT_:
			case SQLiteParser.CONFLICT_:
			case SQLiteParser.CONSTRAINT_:
			case SQLiteParser.CREATE_:
			case SQLiteParser.CROSS_:
			case SQLiteParser.CURRENT_DATE_:
			case SQLiteParser.CURRENT_TIME_:
			case SQLiteParser.CURRENT_TIMESTAMP_:
			case SQLiteParser.DATABASE_:
			case SQLiteParser.DEFAULT_:
			case SQLiteParser.DEFERRABLE_:
			case SQLiteParser.DEFERRED_:
			case SQLiteParser.DELETE_:
			case SQLiteParser.DESC_:
			case SQLiteParser.DETACH_:
			case SQLiteParser.DISTINCT_:
			case SQLiteParser.DROP_:
			case SQLiteParser.EACH_:
			case SQLiteParser.ELSE_:
			case SQLiteParser.END_:
			case SQLiteParser.ESCAPE_:
			case SQLiteParser.EXCEPT_:
			case SQLiteParser.EXCLUSIVE_:
			case SQLiteParser.EXISTS_:
			case SQLiteParser.EXPLAIN_:
			case SQLiteParser.FAIL_:
			case SQLiteParser.FOR_:
			case SQLiteParser.FOREIGN_:
			case SQLiteParser.FROM_:
			case SQLiteParser.FULL_:
			case SQLiteParser.GLOB_:
			case SQLiteParser.GROUP_:
			case SQLiteParser.HAVING_:
			case SQLiteParser.IF_:
			case SQLiteParser.IGNORE_:
			case SQLiteParser.IMMEDIATE_:
			case SQLiteParser.IN_:
			case SQLiteParser.INDEX_:
			case SQLiteParser.INDEXED_:
			case SQLiteParser.INITIALLY_:
			case SQLiteParser.INNER_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.INSTEAD_:
			case SQLiteParser.INTERSECT_:
			case SQLiteParser.INTO_:
			case SQLiteParser.IS_:
			case SQLiteParser.ISNULL_:
			case SQLiteParser.JOIN_:
			case SQLiteParser.KEY_:
			case SQLiteParser.LEFT_:
			case SQLiteParser.LIKE_:
			case SQLiteParser.LIMIT_:
			case SQLiteParser.MATCH_:
			case SQLiteParser.NATURAL_:
			case SQLiteParser.NO_:
			case SQLiteParser.NOT_:
			case SQLiteParser.NOTNULL_:
			case SQLiteParser.NULL_:
			case SQLiteParser.OF_:
			case SQLiteParser.OFFSET_:
			case SQLiteParser.ON_:
			case SQLiteParser.OR_:
			case SQLiteParser.ORDER_:
			case SQLiteParser.OUTER_:
			case SQLiteParser.PLAN_:
			case SQLiteParser.PRAGMA_:
			case SQLiteParser.PRIMARY_:
			case SQLiteParser.QUERY_:
			case SQLiteParser.RAISE_:
			case SQLiteParser.RECURSIVE_:
			case SQLiteParser.REFERENCES_:
			case SQLiteParser.REGEXP_:
			case SQLiteParser.REINDEX_:
			case SQLiteParser.RELEASE_:
			case SQLiteParser.RENAME_:
			case SQLiteParser.REPLACE_:
			case SQLiteParser.RESTRICT_:
			case SQLiteParser.RIGHT_:
			case SQLiteParser.ROLLBACK_:
			case SQLiteParser.ROW_:
			case SQLiteParser.ROWS_:
			case SQLiteParser.SAVEPOINT_:
			case SQLiteParser.SELECT_:
			case SQLiteParser.SET_:
			case SQLiteParser.TABLE_:
			case SQLiteParser.TEMP_:
			case SQLiteParser.TEMPORARY_:
			case SQLiteParser.THEN_:
			case SQLiteParser.TO_:
			case SQLiteParser.TRANSACTION_:
			case SQLiteParser.TRIGGER_:
			case SQLiteParser.UNION_:
			case SQLiteParser.UNIQUE_:
			case SQLiteParser.UPDATE_:
			case SQLiteParser.USING_:
			case SQLiteParser.VACUUM_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.VIEW_:
			case SQLiteParser.VIRTUAL_:
			case SQLiteParser.WHEN_:
			case SQLiteParser.WHERE_:
			case SQLiteParser.WITH_:
			case SQLiteParser.WITHOUT_:
			case SQLiteParser.FIRST_VALUE_:
			case SQLiteParser.OVER_:
			case SQLiteParser.PARTITION_:
			case SQLiteParser.RANGE_:
			case SQLiteParser.PRECEDING_:
			case SQLiteParser.UNBOUNDED_:
			case SQLiteParser.CURRENT_:
			case SQLiteParser.FOLLOWING_:
			case SQLiteParser.CUME_DIST_:
			case SQLiteParser.DENSE_RANK_:
			case SQLiteParser.LAG_:
			case SQLiteParser.LAST_VALUE_:
			case SQLiteParser.LEAD_:
			case SQLiteParser.NTH_VALUE_:
			case SQLiteParser.NTILE_:
			case SQLiteParser.PERCENT_RANK_:
			case SQLiteParser.RANK_:
			case SQLiteParser.ROW_NUMBER_:
			case SQLiteParser.GENERATED_:
			case SQLiteParser.ALWAYS_:
			case SQLiteParser.STORED_:
			case SQLiteParser.TRUE_:
			case SQLiteParser.FALSE_:
			case SQLiteParser.WINDOW_:
			case SQLiteParser.NULLS_:
			case SQLiteParser.FIRST_:
			case SQLiteParser.LAST_:
			case SQLiteParser.FILTER_:
			case SQLiteParser.GROUPS_:
			case SQLiteParser.EXCLUDE_:
			case SQLiteParser.IDENTIFIER:
			case SQLiteParser.NUMERIC_LITERAL:
			case SQLiteParser.BIND_PARAMETER:
			case SQLiteParser.STRING_LITERAL:
			case SQLiteParser.BLOB_LITERAL:
				{
				this.state = 1729;
				this.expr(0);
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1730;
					this.match(SQLiteParser.COMMA);
					this.state = 1731;
					this.expr(0);
					}
					}
					this.state = 1736;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SQLiteParser.STAR:
				{
				this.state = 1737;
				this.match(SQLiteParser.STAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1740;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_function_invocation(): Aggregate_function_invocationContext {
		let _localctx: Aggregate_function_invocationContext = new Aggregate_function_invocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SQLiteParser.RULE_aggregate_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1742;
			this.aggregate_func();
			this.state = 1743;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.OPEN_PAR:
			case SQLiteParser.PLUS:
			case SQLiteParser.MINUS:
			case SQLiteParser.TILDE:
			case SQLiteParser.ABORT_:
			case SQLiteParser.ACTION_:
			case SQLiteParser.ADD_:
			case SQLiteParser.AFTER_:
			case SQLiteParser.ALL_:
			case SQLiteParser.ALTER_:
			case SQLiteParser.ANALYZE_:
			case SQLiteParser.AND_:
			case SQLiteParser.AS_:
			case SQLiteParser.ASC_:
			case SQLiteParser.ATTACH_:
			case SQLiteParser.AUTOINCREMENT_:
			case SQLiteParser.BEFORE_:
			case SQLiteParser.BEGIN_:
			case SQLiteParser.BETWEEN_:
			case SQLiteParser.BY_:
			case SQLiteParser.CASCADE_:
			case SQLiteParser.CASE_:
			case SQLiteParser.CAST_:
			case SQLiteParser.CHECK_:
			case SQLiteParser.COLLATE_:
			case SQLiteParser.COLUMN_:
			case SQLiteParser.COMMIT_:
			case SQLiteParser.CONFLICT_:
			case SQLiteParser.CONSTRAINT_:
			case SQLiteParser.CREATE_:
			case SQLiteParser.CROSS_:
			case SQLiteParser.CURRENT_DATE_:
			case SQLiteParser.CURRENT_TIME_:
			case SQLiteParser.CURRENT_TIMESTAMP_:
			case SQLiteParser.DATABASE_:
			case SQLiteParser.DEFAULT_:
			case SQLiteParser.DEFERRABLE_:
			case SQLiteParser.DEFERRED_:
			case SQLiteParser.DELETE_:
			case SQLiteParser.DESC_:
			case SQLiteParser.DETACH_:
			case SQLiteParser.DISTINCT_:
			case SQLiteParser.DROP_:
			case SQLiteParser.EACH_:
			case SQLiteParser.ELSE_:
			case SQLiteParser.END_:
			case SQLiteParser.ESCAPE_:
			case SQLiteParser.EXCEPT_:
			case SQLiteParser.EXCLUSIVE_:
			case SQLiteParser.EXISTS_:
			case SQLiteParser.EXPLAIN_:
			case SQLiteParser.FAIL_:
			case SQLiteParser.FOR_:
			case SQLiteParser.FOREIGN_:
			case SQLiteParser.FROM_:
			case SQLiteParser.FULL_:
			case SQLiteParser.GLOB_:
			case SQLiteParser.GROUP_:
			case SQLiteParser.HAVING_:
			case SQLiteParser.IF_:
			case SQLiteParser.IGNORE_:
			case SQLiteParser.IMMEDIATE_:
			case SQLiteParser.IN_:
			case SQLiteParser.INDEX_:
			case SQLiteParser.INDEXED_:
			case SQLiteParser.INITIALLY_:
			case SQLiteParser.INNER_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.INSTEAD_:
			case SQLiteParser.INTERSECT_:
			case SQLiteParser.INTO_:
			case SQLiteParser.IS_:
			case SQLiteParser.ISNULL_:
			case SQLiteParser.JOIN_:
			case SQLiteParser.KEY_:
			case SQLiteParser.LEFT_:
			case SQLiteParser.LIKE_:
			case SQLiteParser.LIMIT_:
			case SQLiteParser.MATCH_:
			case SQLiteParser.NATURAL_:
			case SQLiteParser.NO_:
			case SQLiteParser.NOT_:
			case SQLiteParser.NOTNULL_:
			case SQLiteParser.NULL_:
			case SQLiteParser.OF_:
			case SQLiteParser.OFFSET_:
			case SQLiteParser.ON_:
			case SQLiteParser.OR_:
			case SQLiteParser.ORDER_:
			case SQLiteParser.OUTER_:
			case SQLiteParser.PLAN_:
			case SQLiteParser.PRAGMA_:
			case SQLiteParser.PRIMARY_:
			case SQLiteParser.QUERY_:
			case SQLiteParser.RAISE_:
			case SQLiteParser.RECURSIVE_:
			case SQLiteParser.REFERENCES_:
			case SQLiteParser.REGEXP_:
			case SQLiteParser.REINDEX_:
			case SQLiteParser.RELEASE_:
			case SQLiteParser.RENAME_:
			case SQLiteParser.REPLACE_:
			case SQLiteParser.RESTRICT_:
			case SQLiteParser.RIGHT_:
			case SQLiteParser.ROLLBACK_:
			case SQLiteParser.ROW_:
			case SQLiteParser.ROWS_:
			case SQLiteParser.SAVEPOINT_:
			case SQLiteParser.SELECT_:
			case SQLiteParser.SET_:
			case SQLiteParser.TABLE_:
			case SQLiteParser.TEMP_:
			case SQLiteParser.TEMPORARY_:
			case SQLiteParser.THEN_:
			case SQLiteParser.TO_:
			case SQLiteParser.TRANSACTION_:
			case SQLiteParser.TRIGGER_:
			case SQLiteParser.UNION_:
			case SQLiteParser.UNIQUE_:
			case SQLiteParser.UPDATE_:
			case SQLiteParser.USING_:
			case SQLiteParser.VACUUM_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.VIEW_:
			case SQLiteParser.VIRTUAL_:
			case SQLiteParser.WHEN_:
			case SQLiteParser.WHERE_:
			case SQLiteParser.WITH_:
			case SQLiteParser.WITHOUT_:
			case SQLiteParser.FIRST_VALUE_:
			case SQLiteParser.OVER_:
			case SQLiteParser.PARTITION_:
			case SQLiteParser.RANGE_:
			case SQLiteParser.PRECEDING_:
			case SQLiteParser.UNBOUNDED_:
			case SQLiteParser.CURRENT_:
			case SQLiteParser.FOLLOWING_:
			case SQLiteParser.CUME_DIST_:
			case SQLiteParser.DENSE_RANK_:
			case SQLiteParser.LAG_:
			case SQLiteParser.LAST_VALUE_:
			case SQLiteParser.LEAD_:
			case SQLiteParser.NTH_VALUE_:
			case SQLiteParser.NTILE_:
			case SQLiteParser.PERCENT_RANK_:
			case SQLiteParser.RANK_:
			case SQLiteParser.ROW_NUMBER_:
			case SQLiteParser.GENERATED_:
			case SQLiteParser.ALWAYS_:
			case SQLiteParser.STORED_:
			case SQLiteParser.TRUE_:
			case SQLiteParser.FALSE_:
			case SQLiteParser.WINDOW_:
			case SQLiteParser.NULLS_:
			case SQLiteParser.FIRST_:
			case SQLiteParser.LAST_:
			case SQLiteParser.FILTER_:
			case SQLiteParser.GROUPS_:
			case SQLiteParser.EXCLUDE_:
			case SQLiteParser.IDENTIFIER:
			case SQLiteParser.NUMERIC_LITERAL:
			case SQLiteParser.BIND_PARAMETER:
			case SQLiteParser.STRING_LITERAL:
			case SQLiteParser.BLOB_LITERAL:
				{
				this.state = 1745;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 1744;
					this.match(SQLiteParser.DISTINCT_);
					}
					break;
				}
				this.state = 1747;
				this.expr(0);
				this.state = 1752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1748;
					this.match(SQLiteParser.COMMA);
					this.state = 1749;
					this.expr(0);
					}
					}
					this.state = 1754;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SQLiteParser.STAR:
				{
				this.state = 1755;
				this.match(SQLiteParser.STAR);
				}
				break;
			case SQLiteParser.CLOSE_PAR:
				break;
			default:
				break;
			}
			this.state = 1758;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 1760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.FILTER_) {
				{
				this.state = 1759;
				this.filter_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_function_invocation(): Window_function_invocationContext {
		let _localctx: Window_function_invocationContext = new Window_function_invocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SQLiteParser.RULE_window_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1762;
			this.window_function();
			this.state = 1763;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1773;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.OPEN_PAR:
			case SQLiteParser.PLUS:
			case SQLiteParser.MINUS:
			case SQLiteParser.TILDE:
			case SQLiteParser.ABORT_:
			case SQLiteParser.ACTION_:
			case SQLiteParser.ADD_:
			case SQLiteParser.AFTER_:
			case SQLiteParser.ALL_:
			case SQLiteParser.ALTER_:
			case SQLiteParser.ANALYZE_:
			case SQLiteParser.AND_:
			case SQLiteParser.AS_:
			case SQLiteParser.ASC_:
			case SQLiteParser.ATTACH_:
			case SQLiteParser.AUTOINCREMENT_:
			case SQLiteParser.BEFORE_:
			case SQLiteParser.BEGIN_:
			case SQLiteParser.BETWEEN_:
			case SQLiteParser.BY_:
			case SQLiteParser.CASCADE_:
			case SQLiteParser.CASE_:
			case SQLiteParser.CAST_:
			case SQLiteParser.CHECK_:
			case SQLiteParser.COLLATE_:
			case SQLiteParser.COLUMN_:
			case SQLiteParser.COMMIT_:
			case SQLiteParser.CONFLICT_:
			case SQLiteParser.CONSTRAINT_:
			case SQLiteParser.CREATE_:
			case SQLiteParser.CROSS_:
			case SQLiteParser.CURRENT_DATE_:
			case SQLiteParser.CURRENT_TIME_:
			case SQLiteParser.CURRENT_TIMESTAMP_:
			case SQLiteParser.DATABASE_:
			case SQLiteParser.DEFAULT_:
			case SQLiteParser.DEFERRABLE_:
			case SQLiteParser.DEFERRED_:
			case SQLiteParser.DELETE_:
			case SQLiteParser.DESC_:
			case SQLiteParser.DETACH_:
			case SQLiteParser.DISTINCT_:
			case SQLiteParser.DROP_:
			case SQLiteParser.EACH_:
			case SQLiteParser.ELSE_:
			case SQLiteParser.END_:
			case SQLiteParser.ESCAPE_:
			case SQLiteParser.EXCEPT_:
			case SQLiteParser.EXCLUSIVE_:
			case SQLiteParser.EXISTS_:
			case SQLiteParser.EXPLAIN_:
			case SQLiteParser.FAIL_:
			case SQLiteParser.FOR_:
			case SQLiteParser.FOREIGN_:
			case SQLiteParser.FROM_:
			case SQLiteParser.FULL_:
			case SQLiteParser.GLOB_:
			case SQLiteParser.GROUP_:
			case SQLiteParser.HAVING_:
			case SQLiteParser.IF_:
			case SQLiteParser.IGNORE_:
			case SQLiteParser.IMMEDIATE_:
			case SQLiteParser.IN_:
			case SQLiteParser.INDEX_:
			case SQLiteParser.INDEXED_:
			case SQLiteParser.INITIALLY_:
			case SQLiteParser.INNER_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.INSTEAD_:
			case SQLiteParser.INTERSECT_:
			case SQLiteParser.INTO_:
			case SQLiteParser.IS_:
			case SQLiteParser.ISNULL_:
			case SQLiteParser.JOIN_:
			case SQLiteParser.KEY_:
			case SQLiteParser.LEFT_:
			case SQLiteParser.LIKE_:
			case SQLiteParser.LIMIT_:
			case SQLiteParser.MATCH_:
			case SQLiteParser.NATURAL_:
			case SQLiteParser.NO_:
			case SQLiteParser.NOT_:
			case SQLiteParser.NOTNULL_:
			case SQLiteParser.NULL_:
			case SQLiteParser.OF_:
			case SQLiteParser.OFFSET_:
			case SQLiteParser.ON_:
			case SQLiteParser.OR_:
			case SQLiteParser.ORDER_:
			case SQLiteParser.OUTER_:
			case SQLiteParser.PLAN_:
			case SQLiteParser.PRAGMA_:
			case SQLiteParser.PRIMARY_:
			case SQLiteParser.QUERY_:
			case SQLiteParser.RAISE_:
			case SQLiteParser.RECURSIVE_:
			case SQLiteParser.REFERENCES_:
			case SQLiteParser.REGEXP_:
			case SQLiteParser.REINDEX_:
			case SQLiteParser.RELEASE_:
			case SQLiteParser.RENAME_:
			case SQLiteParser.REPLACE_:
			case SQLiteParser.RESTRICT_:
			case SQLiteParser.RIGHT_:
			case SQLiteParser.ROLLBACK_:
			case SQLiteParser.ROW_:
			case SQLiteParser.ROWS_:
			case SQLiteParser.SAVEPOINT_:
			case SQLiteParser.SELECT_:
			case SQLiteParser.SET_:
			case SQLiteParser.TABLE_:
			case SQLiteParser.TEMP_:
			case SQLiteParser.TEMPORARY_:
			case SQLiteParser.THEN_:
			case SQLiteParser.TO_:
			case SQLiteParser.TRANSACTION_:
			case SQLiteParser.TRIGGER_:
			case SQLiteParser.UNION_:
			case SQLiteParser.UNIQUE_:
			case SQLiteParser.UPDATE_:
			case SQLiteParser.USING_:
			case SQLiteParser.VACUUM_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.VIEW_:
			case SQLiteParser.VIRTUAL_:
			case SQLiteParser.WHEN_:
			case SQLiteParser.WHERE_:
			case SQLiteParser.WITH_:
			case SQLiteParser.WITHOUT_:
			case SQLiteParser.FIRST_VALUE_:
			case SQLiteParser.OVER_:
			case SQLiteParser.PARTITION_:
			case SQLiteParser.RANGE_:
			case SQLiteParser.PRECEDING_:
			case SQLiteParser.UNBOUNDED_:
			case SQLiteParser.CURRENT_:
			case SQLiteParser.FOLLOWING_:
			case SQLiteParser.CUME_DIST_:
			case SQLiteParser.DENSE_RANK_:
			case SQLiteParser.LAG_:
			case SQLiteParser.LAST_VALUE_:
			case SQLiteParser.LEAD_:
			case SQLiteParser.NTH_VALUE_:
			case SQLiteParser.NTILE_:
			case SQLiteParser.PERCENT_RANK_:
			case SQLiteParser.RANK_:
			case SQLiteParser.ROW_NUMBER_:
			case SQLiteParser.GENERATED_:
			case SQLiteParser.ALWAYS_:
			case SQLiteParser.STORED_:
			case SQLiteParser.TRUE_:
			case SQLiteParser.FALSE_:
			case SQLiteParser.WINDOW_:
			case SQLiteParser.NULLS_:
			case SQLiteParser.FIRST_:
			case SQLiteParser.LAST_:
			case SQLiteParser.FILTER_:
			case SQLiteParser.GROUPS_:
			case SQLiteParser.EXCLUDE_:
			case SQLiteParser.IDENTIFIER:
			case SQLiteParser.NUMERIC_LITERAL:
			case SQLiteParser.BIND_PARAMETER:
			case SQLiteParser.STRING_LITERAL:
			case SQLiteParser.BLOB_LITERAL:
				{
				this.state = 1764;
				this.expr(0);
				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLiteParser.COMMA) {
					{
					{
					this.state = 1765;
					this.match(SQLiteParser.COMMA);
					this.state = 1766;
					this.expr(0);
					}
					}
					this.state = 1771;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SQLiteParser.STAR:
				{
				this.state = 1772;
				this.match(SQLiteParser.STAR);
				}
				break;
			case SQLiteParser.CLOSE_PAR:
				break;
			default:
				break;
			}
			this.state = 1775;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 1777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.FILTER_) {
				{
				this.state = 1776;
				this.filter_clause();
				}
			}

			this.state = 1779;
			this.match(SQLiteParser.OVER_);
			this.state = 1782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				{
				this.state = 1780;
				this.window_defn();
				}
				break;

			case 2:
				{
				this.state = 1781;
				this.window_name();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public common_table_stmt(): Common_table_stmtContext {
		let _localctx: Common_table_stmtContext = new Common_table_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SQLiteParser.RULE_common_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this.match(SQLiteParser.WITH_);
			this.state = 1786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				this.state = 1785;
				this.match(SQLiteParser.RECURSIVE_);
				}
				break;
			}
			this.state = 1788;
			this.common_table_expression();
			this.state = 1793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1789;
				this.match(SQLiteParser.COMMA);
				this.state = 1790;
				this.common_table_expression();
				}
				}
				this.state = 1795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order_by_stmt(): Order_by_stmtContext {
		let _localctx: Order_by_stmtContext = new Order_by_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SQLiteParser.RULE_order_by_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1796;
			this.match(SQLiteParser.ORDER_);
			this.state = 1797;
			this.match(SQLiteParser.BY_);
			this.state = 1798;
			this.ordering_term();
			this.state = 1803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1799;
				this.match(SQLiteParser.COMMA);
				this.state = 1800;
				this.ordering_term();
				}
				}
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limit_stmt(): Limit_stmtContext {
		let _localctx: Limit_stmtContext = new Limit_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SQLiteParser.RULE_limit_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			this.match(SQLiteParser.LIMIT_);
			this.state = 1807;
			this.expr(0);
			this.state = 1810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.COMMA || _la === SQLiteParser.OFFSET_) {
				{
				this.state = 1808;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.OFFSET_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1809;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ordering_term(): Ordering_termContext {
		let _localctx: Ordering_termContext = new Ordering_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SQLiteParser.RULE_ordering_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1812;
			this.expr(0);
			this.state = 1815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.COLLATE_) {
				{
				this.state = 1813;
				this.match(SQLiteParser.COLLATE_);
				this.state = 1814;
				this.collation_name();
				}
			}

			this.state = 1818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ASC_ || _la === SQLiteParser.DESC_) {
				{
				this.state = 1817;
				this.asc_desc();
				}
			}

			this.state = 1822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.NULLS_) {
				{
				this.state = 1820;
				this.match(SQLiteParser.NULLS_);
				this.state = 1821;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.FIRST_ || _la === SQLiteParser.LAST_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asc_desc(): Asc_descContext {
		let _localctx: Asc_descContext = new Asc_descContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SQLiteParser.RULE_asc_desc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			_la = this._input.LA(1);
			if (!(_la === SQLiteParser.ASC_ || _la === SQLiteParser.DESC_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frame_left(): Frame_leftContext {
		let _localctx: Frame_leftContext = new Frame_leftContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SQLiteParser.RULE_frame_left);
		try {
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1826;
				this.expr(0);
				this.state = 1827;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1829;
				this.expr(0);
				this.state = 1830;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1832;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1833;
				this.match(SQLiteParser.ROW_);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1834;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1835;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frame_right(): Frame_rightContext {
		let _localctx: Frame_rightContext = new Frame_rightContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SQLiteParser.RULE_frame_right);
		try {
			this.state = 1848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1838;
				this.expr(0);
				this.state = 1839;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1841;
				this.expr(0);
				this.state = 1842;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1844;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1845;
				this.match(SQLiteParser.ROW_);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1846;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1847;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frame_single(): Frame_singleContext {
		let _localctx: Frame_singleContext = new Frame_singleContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SQLiteParser.RULE_frame_single);
		try {
			this.state = 1857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1850;
				this.expr(0);
				this.state = 1851;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1853;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1854;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1855;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1856;
				this.match(SQLiteParser.ROW_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_function(): Window_functionContext {
		let _localctx: Window_functionContext = new Window_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SQLiteParser.RULE_window_function);
		let _la: number;
		try {
			this.state = 1944;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.FIRST_VALUE_:
			case SQLiteParser.LAST_VALUE_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1859;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.FIRST_VALUE_ || _la === SQLiteParser.LAST_VALUE_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1860;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1861;
				this.expr(0);
				this.state = 1862;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1863;
				this.match(SQLiteParser.OVER_);
				this.state = 1864;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1865;
					this.partition_by();
					}
				}

				this.state = 1868;
				this.order_by_expr_asc_desc();
				this.state = 1870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ROWS_ || _la === SQLiteParser.RANGE_ || _la === SQLiteParser.GROUPS_) {
					{
					this.state = 1869;
					this.frame_clause();
					}
				}

				this.state = 1872;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.CUME_DIST_:
			case SQLiteParser.PERCENT_RANK_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1874;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.CUME_DIST_ || _la === SQLiteParser.PERCENT_RANK_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1875;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1876;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1877;
				this.match(SQLiteParser.OVER_);
				this.state = 1878;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1879;
					this.partition_by();
					}
				}

				this.state = 1883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ORDER_) {
					{
					this.state = 1882;
					this.order_by_expr();
					}
				}

				this.state = 1885;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.DENSE_RANK_:
			case SQLiteParser.RANK_:
			case SQLiteParser.ROW_NUMBER_:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1886;
				_la = this._input.LA(1);
				if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SQLiteParser.DENSE_RANK_ - 160)) | (1 << (SQLiteParser.RANK_ - 160)) | (1 << (SQLiteParser.ROW_NUMBER_ - 160)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1887;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1888;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1889;
				this.match(SQLiteParser.OVER_);
				this.state = 1890;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1891;
					this.partition_by();
					}
				}

				this.state = 1894;
				this.order_by_expr_asc_desc();
				this.state = 1895;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.LAG_:
			case SQLiteParser.LEAD_:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1897;
				_la = this._input.LA(1);
				if (!(_la === SQLiteParser.LAG_ || _la === SQLiteParser.LEAD_)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1898;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1899;
				this.expr(0);
				this.state = 1901;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 1900;
					this.offset();
					}
					break;
				}
				this.state = 1904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.COMMA) {
					{
					this.state = 1903;
					this.default_value();
					}
				}

				this.state = 1906;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1907;
				this.match(SQLiteParser.OVER_);
				this.state = 1908;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1909;
					this.partition_by();
					}
				}

				this.state = 1912;
				this.order_by_expr_asc_desc();
				this.state = 1913;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.NTH_VALUE_:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1915;
				this.match(SQLiteParser.NTH_VALUE_);
				this.state = 1916;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1917;
				this.expr(0);
				this.state = 1918;
				this.match(SQLiteParser.COMMA);
				this.state = 1919;
				this.signed_number();
				this.state = 1920;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1921;
				this.match(SQLiteParser.OVER_);
				this.state = 1922;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1923;
					this.partition_by();
					}
				}

				this.state = 1926;
				this.order_by_expr_asc_desc();
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ROWS_ || _la === SQLiteParser.RANGE_ || _la === SQLiteParser.GROUPS_) {
					{
					this.state = 1927;
					this.frame_clause();
					}
				}

				this.state = 1930;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case SQLiteParser.NTILE_:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1932;
				this.match(SQLiteParser.NTILE_);
				this.state = 1933;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1934;
				this.expr(0);
				this.state = 1935;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1936;
				this.match(SQLiteParser.OVER_);
				this.state = 1937;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.PARTITION_) {
					{
					this.state = 1938;
					this.partition_by();
					}
				}

				this.state = 1941;
				this.order_by_expr_asc_desc();
				this.state = 1942;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offset(): OffsetContext {
		let _localctx: OffsetContext = new OffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SQLiteParser.RULE_offset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1946;
			this.match(SQLiteParser.COMMA);
			this.state = 1947;
			this.signed_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public default_value(): Default_valueContext {
		let _localctx: Default_valueContext = new Default_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SQLiteParser.RULE_default_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1949;
			this.match(SQLiteParser.COMMA);
			this.state = 1950;
			this.signed_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partition_by(): Partition_byContext {
		let _localctx: Partition_byContext = new Partition_byContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SQLiteParser.RULE_partition_by);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1952;
			this.match(SQLiteParser.PARTITION_);
			this.state = 1953;
			this.match(SQLiteParser.BY_);
			this.state = 1955;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1954;
					this.expr(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1957;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order_by_expr(): Order_by_exprContext {
		let _localctx: Order_by_exprContext = new Order_by_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SQLiteParser.RULE_order_by_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1959;
			this.match(SQLiteParser.ORDER_);
			this.state = 1960;
			this.match(SQLiteParser.BY_);
			this.state = 1962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1961;
				this.expr(0);
				}
				}
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.OPEN_PAR) | (1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE) | (1 << SQLiteParser.ABORT_) | (1 << SQLiteParser.ACTION_) | (1 << SQLiteParser.ADD_) | (1 << SQLiteParser.AFTER_) | (1 << SQLiteParser.ALL_) | (1 << SQLiteParser.ALTER_) | (1 << SQLiteParser.ANALYZE_))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SQLiteParser.AND_ - 32)) | (1 << (SQLiteParser.AS_ - 32)) | (1 << (SQLiteParser.ASC_ - 32)) | (1 << (SQLiteParser.ATTACH_ - 32)) | (1 << (SQLiteParser.AUTOINCREMENT_ - 32)) | (1 << (SQLiteParser.BEFORE_ - 32)) | (1 << (SQLiteParser.BEGIN_ - 32)) | (1 << (SQLiteParser.BETWEEN_ - 32)) | (1 << (SQLiteParser.BY_ - 32)) | (1 << (SQLiteParser.CASCADE_ - 32)) | (1 << (SQLiteParser.CASE_ - 32)) | (1 << (SQLiteParser.CAST_ - 32)) | (1 << (SQLiteParser.CHECK_ - 32)) | (1 << (SQLiteParser.COLLATE_ - 32)) | (1 << (SQLiteParser.COLUMN_ - 32)) | (1 << (SQLiteParser.COMMIT_ - 32)) | (1 << (SQLiteParser.CONFLICT_ - 32)) | (1 << (SQLiteParser.CONSTRAINT_ - 32)) | (1 << (SQLiteParser.CREATE_ - 32)) | (1 << (SQLiteParser.CROSS_ - 32)) | (1 << (SQLiteParser.CURRENT_DATE_ - 32)) | (1 << (SQLiteParser.CURRENT_TIME_ - 32)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP_ - 32)) | (1 << (SQLiteParser.DATABASE_ - 32)) | (1 << (SQLiteParser.DEFAULT_ - 32)) | (1 << (SQLiteParser.DEFERRABLE_ - 32)) | (1 << (SQLiteParser.DEFERRED_ - 32)) | (1 << (SQLiteParser.DELETE_ - 32)) | (1 << (SQLiteParser.DESC_ - 32)) | (1 << (SQLiteParser.DETACH_ - 32)) | (1 << (SQLiteParser.DISTINCT_ - 32)) | (1 << (SQLiteParser.DROP_ - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SQLiteParser.EACH_ - 64)) | (1 << (SQLiteParser.ELSE_ - 64)) | (1 << (SQLiteParser.END_ - 64)) | (1 << (SQLiteParser.ESCAPE_ - 64)) | (1 << (SQLiteParser.EXCEPT_ - 64)) | (1 << (SQLiteParser.EXCLUSIVE_ - 64)) | (1 << (SQLiteParser.EXISTS_ - 64)) | (1 << (SQLiteParser.EXPLAIN_ - 64)) | (1 << (SQLiteParser.FAIL_ - 64)) | (1 << (SQLiteParser.FOR_ - 64)) | (1 << (SQLiteParser.FOREIGN_ - 64)) | (1 << (SQLiteParser.FROM_ - 64)) | (1 << (SQLiteParser.FULL_ - 64)) | (1 << (SQLiteParser.GLOB_ - 64)) | (1 << (SQLiteParser.GROUP_ - 64)) | (1 << (SQLiteParser.HAVING_ - 64)) | (1 << (SQLiteParser.IF_ - 64)) | (1 << (SQLiteParser.IGNORE_ - 64)) | (1 << (SQLiteParser.IMMEDIATE_ - 64)) | (1 << (SQLiteParser.IN_ - 64)) | (1 << (SQLiteParser.INDEX_ - 64)) | (1 << (SQLiteParser.INDEXED_ - 64)) | (1 << (SQLiteParser.INITIALLY_ - 64)) | (1 << (SQLiteParser.INNER_ - 64)) | (1 << (SQLiteParser.INSERT_ - 64)) | (1 << (SQLiteParser.INSTEAD_ - 64)) | (1 << (SQLiteParser.INTERSECT_ - 64)) | (1 << (SQLiteParser.INTO_ - 64)) | (1 << (SQLiteParser.IS_ - 64)) | (1 << (SQLiteParser.ISNULL_ - 64)) | (1 << (SQLiteParser.JOIN_ - 64)) | (1 << (SQLiteParser.KEY_ - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (SQLiteParser.LEFT_ - 96)) | (1 << (SQLiteParser.LIKE_ - 96)) | (1 << (SQLiteParser.LIMIT_ - 96)) | (1 << (SQLiteParser.MATCH_ - 96)) | (1 << (SQLiteParser.NATURAL_ - 96)) | (1 << (SQLiteParser.NO_ - 96)) | (1 << (SQLiteParser.NOT_ - 96)) | (1 << (SQLiteParser.NOTNULL_ - 96)) | (1 << (SQLiteParser.NULL_ - 96)) | (1 << (SQLiteParser.OF_ - 96)) | (1 << (SQLiteParser.OFFSET_ - 96)) | (1 << (SQLiteParser.ON_ - 96)) | (1 << (SQLiteParser.OR_ - 96)) | (1 << (SQLiteParser.ORDER_ - 96)) | (1 << (SQLiteParser.OUTER_ - 96)) | (1 << (SQLiteParser.PLAN_ - 96)) | (1 << (SQLiteParser.PRAGMA_ - 96)) | (1 << (SQLiteParser.PRIMARY_ - 96)) | (1 << (SQLiteParser.QUERY_ - 96)) | (1 << (SQLiteParser.RAISE_ - 96)) | (1 << (SQLiteParser.RECURSIVE_ - 96)) | (1 << (SQLiteParser.REFERENCES_ - 96)) | (1 << (SQLiteParser.REGEXP_ - 96)) | (1 << (SQLiteParser.REINDEX_ - 96)) | (1 << (SQLiteParser.RELEASE_ - 96)) | (1 << (SQLiteParser.RENAME_ - 96)) | (1 << (SQLiteParser.REPLACE_ - 96)) | (1 << (SQLiteParser.RESTRICT_ - 96)) | (1 << (SQLiteParser.RIGHT_ - 96)) | (1 << (SQLiteParser.ROLLBACK_ - 96)) | (1 << (SQLiteParser.ROW_ - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (SQLiteParser.ROWS_ - 128)) | (1 << (SQLiteParser.SAVEPOINT_ - 128)) | (1 << (SQLiteParser.SELECT_ - 128)) | (1 << (SQLiteParser.SET_ - 128)) | (1 << (SQLiteParser.TABLE_ - 128)) | (1 << (SQLiteParser.TEMP_ - 128)) | (1 << (SQLiteParser.TEMPORARY_ - 128)) | (1 << (SQLiteParser.THEN_ - 128)) | (1 << (SQLiteParser.TO_ - 128)) | (1 << (SQLiteParser.TRANSACTION_ - 128)) | (1 << (SQLiteParser.TRIGGER_ - 128)) | (1 << (SQLiteParser.UNION_ - 128)) | (1 << (SQLiteParser.UNIQUE_ - 128)) | (1 << (SQLiteParser.UPDATE_ - 128)) | (1 << (SQLiteParser.USING_ - 128)) | (1 << (SQLiteParser.VACUUM_ - 128)) | (1 << (SQLiteParser.VALUES_ - 128)) | (1 << (SQLiteParser.VIEW_ - 128)) | (1 << (SQLiteParser.VIRTUAL_ - 128)) | (1 << (SQLiteParser.WHEN_ - 128)) | (1 << (SQLiteParser.WHERE_ - 128)) | (1 << (SQLiteParser.WITH_ - 128)) | (1 << (SQLiteParser.WITHOUT_ - 128)) | (1 << (SQLiteParser.FIRST_VALUE_ - 128)) | (1 << (SQLiteParser.OVER_ - 128)) | (1 << (SQLiteParser.PARTITION_ - 128)) | (1 << (SQLiteParser.RANGE_ - 128)) | (1 << (SQLiteParser.PRECEDING_ - 128)) | (1 << (SQLiteParser.UNBOUNDED_ - 128)) | (1 << (SQLiteParser.CURRENT_ - 128)) | (1 << (SQLiteParser.FOLLOWING_ - 128)) | (1 << (SQLiteParser.CUME_DIST_ - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SQLiteParser.DENSE_RANK_ - 160)) | (1 << (SQLiteParser.LAG_ - 160)) | (1 << (SQLiteParser.LAST_VALUE_ - 160)) | (1 << (SQLiteParser.LEAD_ - 160)) | (1 << (SQLiteParser.NTH_VALUE_ - 160)) | (1 << (SQLiteParser.NTILE_ - 160)) | (1 << (SQLiteParser.PERCENT_RANK_ - 160)) | (1 << (SQLiteParser.RANK_ - 160)) | (1 << (SQLiteParser.ROW_NUMBER_ - 160)) | (1 << (SQLiteParser.GENERATED_ - 160)) | (1 << (SQLiteParser.ALWAYS_ - 160)) | (1 << (SQLiteParser.STORED_ - 160)) | (1 << (SQLiteParser.TRUE_ - 160)) | (1 << (SQLiteParser.FALSE_ - 160)) | (1 << (SQLiteParser.WINDOW_ - 160)) | (1 << (SQLiteParser.NULLS_ - 160)) | (1 << (SQLiteParser.FIRST_ - 160)) | (1 << (SQLiteParser.LAST_ - 160)) | (1 << (SQLiteParser.FILTER_ - 160)) | (1 << (SQLiteParser.GROUPS_ - 160)) | (1 << (SQLiteParser.EXCLUDE_ - 160)) | (1 << (SQLiteParser.IDENTIFIER - 160)) | (1 << (SQLiteParser.NUMERIC_LITERAL - 160)) | (1 << (SQLiteParser.BIND_PARAMETER - 160)) | (1 << (SQLiteParser.STRING_LITERAL - 160)) | (1 << (SQLiteParser.BLOB_LITERAL - 160)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order_by_expr_asc_desc(): Order_by_expr_asc_descContext {
		let _localctx: Order_by_expr_asc_descContext = new Order_by_expr_asc_descContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SQLiteParser.RULE_order_by_expr_asc_desc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1966;
			this.match(SQLiteParser.ORDER_);
			this.state = 1967;
			this.match(SQLiteParser.BY_);
			this.state = 1968;
			this.expr_asc_desc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_asc_desc(): Expr_asc_descContext {
		let _localctx: Expr_asc_descContext = new Expr_asc_descContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SQLiteParser.RULE_expr_asc_desc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1970;
			this.expr(0);
			this.state = 1972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLiteParser.ASC_ || _la === SQLiteParser.DESC_) {
				{
				this.state = 1971;
				this.asc_desc();
				}
			}

			this.state = 1981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLiteParser.COMMA) {
				{
				{
				this.state = 1974;
				this.match(SQLiteParser.COMMA);
				this.state = 1975;
				this.expr(0);
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLiteParser.ASC_ || _la === SQLiteParser.DESC_) {
					{
					this.state = 1976;
					this.asc_desc();
					}
				}

				}
				}
				this.state = 1983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initial_select(): Initial_selectContext {
		let _localctx: Initial_selectContext = new Initial_selectContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SQLiteParser.RULE_initial_select);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1984;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recursive_select(): Recursive_selectContext {
		let _localctx: Recursive_selectContext = new Recursive_selectContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SQLiteParser.RULE_recursive_select);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1986;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SQLiteParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE))) !== 0) || _la === SQLiteParser.NOT_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public error_message(): Error_messageContext {
		let _localctx: Error_messageContext = new Error_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SQLiteParser.RULE_error_message);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			this.match(SQLiteParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module_argument(): Module_argumentContext {
		let _localctx: Module_argumentContext = new Module_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SQLiteParser.RULE_module_argument);
		try {
			this.state = 1994;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1992;
				this.expr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1993;
				this.column_def();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_alias(): Column_aliasContext {
		let _localctx: Column_aliasContext = new Column_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SQLiteParser.RULE_column_alias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1996;
			_la = this._input.LA(1);
			if (!(_la === SQLiteParser.IDENTIFIER || _la === SQLiteParser.STRING_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SQLiteParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1998;
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (SQLiteParser.ABORT_ - 25)) | (1 << (SQLiteParser.ACTION_ - 25)) | (1 << (SQLiteParser.ADD_ - 25)) | (1 << (SQLiteParser.AFTER_ - 25)) | (1 << (SQLiteParser.ALL_ - 25)) | (1 << (SQLiteParser.ALTER_ - 25)) | (1 << (SQLiteParser.ANALYZE_ - 25)) | (1 << (SQLiteParser.AND_ - 25)) | (1 << (SQLiteParser.AS_ - 25)) | (1 << (SQLiteParser.ASC_ - 25)) | (1 << (SQLiteParser.ATTACH_ - 25)) | (1 << (SQLiteParser.AUTOINCREMENT_ - 25)) | (1 << (SQLiteParser.BEFORE_ - 25)) | (1 << (SQLiteParser.BEGIN_ - 25)) | (1 << (SQLiteParser.BETWEEN_ - 25)) | (1 << (SQLiteParser.BY_ - 25)) | (1 << (SQLiteParser.CASCADE_ - 25)) | (1 << (SQLiteParser.CASE_ - 25)) | (1 << (SQLiteParser.CAST_ - 25)) | (1 << (SQLiteParser.CHECK_ - 25)) | (1 << (SQLiteParser.COLLATE_ - 25)) | (1 << (SQLiteParser.COLUMN_ - 25)) | (1 << (SQLiteParser.COMMIT_ - 25)) | (1 << (SQLiteParser.CONFLICT_ - 25)) | (1 << (SQLiteParser.CONSTRAINT_ - 25)) | (1 << (SQLiteParser.CREATE_ - 25)) | (1 << (SQLiteParser.CROSS_ - 25)) | (1 << (SQLiteParser.CURRENT_DATE_ - 25)) | (1 << (SQLiteParser.CURRENT_TIME_ - 25)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP_ - 25)) | (1 << (SQLiteParser.DATABASE_ - 25)) | (1 << (SQLiteParser.DEFAULT_ - 25)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SQLiteParser.DEFERRABLE_ - 57)) | (1 << (SQLiteParser.DEFERRED_ - 57)) | (1 << (SQLiteParser.DELETE_ - 57)) | (1 << (SQLiteParser.DESC_ - 57)) | (1 << (SQLiteParser.DETACH_ - 57)) | (1 << (SQLiteParser.DISTINCT_ - 57)) | (1 << (SQLiteParser.DROP_ - 57)) | (1 << (SQLiteParser.EACH_ - 57)) | (1 << (SQLiteParser.ELSE_ - 57)) | (1 << (SQLiteParser.END_ - 57)) | (1 << (SQLiteParser.ESCAPE_ - 57)) | (1 << (SQLiteParser.EXCEPT_ - 57)) | (1 << (SQLiteParser.EXCLUSIVE_ - 57)) | (1 << (SQLiteParser.EXISTS_ - 57)) | (1 << (SQLiteParser.EXPLAIN_ - 57)) | (1 << (SQLiteParser.FAIL_ - 57)) | (1 << (SQLiteParser.FOR_ - 57)) | (1 << (SQLiteParser.FOREIGN_ - 57)) | (1 << (SQLiteParser.FROM_ - 57)) | (1 << (SQLiteParser.FULL_ - 57)) | (1 << (SQLiteParser.GLOB_ - 57)) | (1 << (SQLiteParser.GROUP_ - 57)) | (1 << (SQLiteParser.HAVING_ - 57)) | (1 << (SQLiteParser.IF_ - 57)) | (1 << (SQLiteParser.IGNORE_ - 57)) | (1 << (SQLiteParser.IMMEDIATE_ - 57)) | (1 << (SQLiteParser.IN_ - 57)) | (1 << (SQLiteParser.INDEX_ - 57)) | (1 << (SQLiteParser.INDEXED_ - 57)) | (1 << (SQLiteParser.INITIALLY_ - 57)) | (1 << (SQLiteParser.INNER_ - 57)) | (1 << (SQLiteParser.INSERT_ - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (SQLiteParser.INSTEAD_ - 89)) | (1 << (SQLiteParser.INTERSECT_ - 89)) | (1 << (SQLiteParser.INTO_ - 89)) | (1 << (SQLiteParser.IS_ - 89)) | (1 << (SQLiteParser.ISNULL_ - 89)) | (1 << (SQLiteParser.JOIN_ - 89)) | (1 << (SQLiteParser.KEY_ - 89)) | (1 << (SQLiteParser.LEFT_ - 89)) | (1 << (SQLiteParser.LIKE_ - 89)) | (1 << (SQLiteParser.LIMIT_ - 89)) | (1 << (SQLiteParser.MATCH_ - 89)) | (1 << (SQLiteParser.NATURAL_ - 89)) | (1 << (SQLiteParser.NO_ - 89)) | (1 << (SQLiteParser.NOT_ - 89)) | (1 << (SQLiteParser.NOTNULL_ - 89)) | (1 << (SQLiteParser.NULL_ - 89)) | (1 << (SQLiteParser.OF_ - 89)) | (1 << (SQLiteParser.OFFSET_ - 89)) | (1 << (SQLiteParser.ON_ - 89)) | (1 << (SQLiteParser.OR_ - 89)) | (1 << (SQLiteParser.ORDER_ - 89)) | (1 << (SQLiteParser.OUTER_ - 89)) | (1 << (SQLiteParser.PLAN_ - 89)) | (1 << (SQLiteParser.PRAGMA_ - 89)) | (1 << (SQLiteParser.PRIMARY_ - 89)) | (1 << (SQLiteParser.QUERY_ - 89)) | (1 << (SQLiteParser.RAISE_ - 89)) | (1 << (SQLiteParser.RECURSIVE_ - 89)) | (1 << (SQLiteParser.REFERENCES_ - 89)) | (1 << (SQLiteParser.REGEXP_ - 89)) | (1 << (SQLiteParser.REINDEX_ - 89)) | (1 << (SQLiteParser.RELEASE_ - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (SQLiteParser.RENAME_ - 121)) | (1 << (SQLiteParser.REPLACE_ - 121)) | (1 << (SQLiteParser.RESTRICT_ - 121)) | (1 << (SQLiteParser.RIGHT_ - 121)) | (1 << (SQLiteParser.ROLLBACK_ - 121)) | (1 << (SQLiteParser.ROW_ - 121)) | (1 << (SQLiteParser.ROWS_ - 121)) | (1 << (SQLiteParser.SAVEPOINT_ - 121)) | (1 << (SQLiteParser.SELECT_ - 121)) | (1 << (SQLiteParser.SET_ - 121)) | (1 << (SQLiteParser.TABLE_ - 121)) | (1 << (SQLiteParser.TEMP_ - 121)) | (1 << (SQLiteParser.TEMPORARY_ - 121)) | (1 << (SQLiteParser.THEN_ - 121)) | (1 << (SQLiteParser.TO_ - 121)) | (1 << (SQLiteParser.TRANSACTION_ - 121)) | (1 << (SQLiteParser.TRIGGER_ - 121)) | (1 << (SQLiteParser.UNION_ - 121)) | (1 << (SQLiteParser.UNIQUE_ - 121)) | (1 << (SQLiteParser.UPDATE_ - 121)) | (1 << (SQLiteParser.USING_ - 121)) | (1 << (SQLiteParser.VACUUM_ - 121)) | (1 << (SQLiteParser.VALUES_ - 121)) | (1 << (SQLiteParser.VIEW_ - 121)) | (1 << (SQLiteParser.VIRTUAL_ - 121)) | (1 << (SQLiteParser.WHEN_ - 121)) | (1 << (SQLiteParser.WHERE_ - 121)) | (1 << (SQLiteParser.WITH_ - 121)) | (1 << (SQLiteParser.WITHOUT_ - 121)) | (1 << (SQLiteParser.FIRST_VALUE_ - 121)) | (1 << (SQLiteParser.OVER_ - 121)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (SQLiteParser.PARTITION_ - 153)) | (1 << (SQLiteParser.RANGE_ - 153)) | (1 << (SQLiteParser.PRECEDING_ - 153)) | (1 << (SQLiteParser.UNBOUNDED_ - 153)) | (1 << (SQLiteParser.CURRENT_ - 153)) | (1 << (SQLiteParser.FOLLOWING_ - 153)) | (1 << (SQLiteParser.CUME_DIST_ - 153)) | (1 << (SQLiteParser.DENSE_RANK_ - 153)) | (1 << (SQLiteParser.LAG_ - 153)) | (1 << (SQLiteParser.LAST_VALUE_ - 153)) | (1 << (SQLiteParser.LEAD_ - 153)) | (1 << (SQLiteParser.NTH_VALUE_ - 153)) | (1 << (SQLiteParser.NTILE_ - 153)) | (1 << (SQLiteParser.PERCENT_RANK_ - 153)) | (1 << (SQLiteParser.RANK_ - 153)) | (1 << (SQLiteParser.ROW_NUMBER_ - 153)) | (1 << (SQLiteParser.GENERATED_ - 153)) | (1 << (SQLiteParser.ALWAYS_ - 153)) | (1 << (SQLiteParser.STORED_ - 153)) | (1 << (SQLiteParser.TRUE_ - 153)) | (1 << (SQLiteParser.FALSE_ - 153)) | (1 << (SQLiteParser.WINDOW_ - 153)) | (1 << (SQLiteParser.NULLS_ - 153)) | (1 << (SQLiteParser.FIRST_ - 153)) | (1 << (SQLiteParser.LAST_ - 153)) | (1 << (SQLiteParser.FILTER_ - 153)) | (1 << (SQLiteParser.GROUPS_ - 153)) | (1 << (SQLiteParser.EXCLUDE_ - 153)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SQLiteParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2000;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SQLiteParser.RULE_function_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2002;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schema_name(): Schema_nameContext {
		let _localctx: Schema_nameContext = new Schema_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SQLiteParser.RULE_schema_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2004;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_name(): Table_nameContext {
		let _localctx: Table_nameContext = new Table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SQLiteParser.RULE_table_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2006;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_or_index_name(): Table_or_index_nameContext {
		let _localctx: Table_or_index_nameContext = new Table_or_index_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SQLiteParser.RULE_table_or_index_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2008;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_name(): Column_nameContext {
		let _localctx: Column_nameContext = new Column_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SQLiteParser.RULE_column_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2010;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collation_name(): Collation_nameContext {
		let _localctx: Collation_nameContext = new Collation_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SQLiteParser.RULE_collation_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2012;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreign_table(): Foreign_tableContext {
		let _localctx: Foreign_tableContext = new Foreign_tableContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SQLiteParser.RULE_foreign_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2014;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public index_name(): Index_nameContext {
		let _localctx: Index_nameContext = new Index_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SQLiteParser.RULE_index_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2016;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trigger_name(): Trigger_nameContext {
		let _localctx: Trigger_nameContext = new Trigger_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SQLiteParser.RULE_trigger_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2018;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public view_name(): View_nameContext {
		let _localctx: View_nameContext = new View_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SQLiteParser.RULE_view_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2020;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module_name(): Module_nameContext {
		let _localctx: Module_nameContext = new Module_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SQLiteParser.RULE_module_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2022;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragma_name(): Pragma_nameContext {
		let _localctx: Pragma_nameContext = new Pragma_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SQLiteParser.RULE_pragma_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2024;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public savepoint_name(): Savepoint_nameContext {
		let _localctx: Savepoint_nameContext = new Savepoint_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SQLiteParser.RULE_savepoint_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2026;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_alias(): Table_aliasContext {
		let _localctx: Table_aliasContext = new Table_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SQLiteParser.RULE_table_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2028;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transaction_name(): Transaction_nameContext {
		let _localctx: Transaction_nameContext = new Transaction_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SQLiteParser.RULE_transaction_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2030;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_name(): Window_nameContext {
		let _localctx: Window_nameContext = new Window_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SQLiteParser.RULE_window_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2032;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, SQLiteParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2034;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filename(): FilenameContext {
		let _localctx: FilenameContext = new FilenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, SQLiteParser.RULE_filename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2036;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public base_window_name(): Base_window_nameContext {
		let _localctx: Base_window_nameContext = new Base_window_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, SQLiteParser.RULE_base_window_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2038;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_func(): Simple_funcContext {
		let _localctx: Simple_funcContext = new Simple_funcContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, SQLiteParser.RULE_simple_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2040;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_func(): Aggregate_funcContext {
		let _localctx: Aggregate_funcContext = new Aggregate_funcContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, SQLiteParser.RULE_aggregate_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_function_name(): Table_function_nameContext {
		let _localctx: Table_function_nameContext = new Table_function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, SQLiteParser.RULE_table_function_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2044;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public any_name(): Any_nameContext {
		let _localctx: Any_nameContext = new Any_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, SQLiteParser.RULE_any_name);
		try {
			this.state = 2053;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLiteParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2046;
				this.match(SQLiteParser.IDENTIFIER);
				}
				break;
			case SQLiteParser.ABORT_:
			case SQLiteParser.ACTION_:
			case SQLiteParser.ADD_:
			case SQLiteParser.AFTER_:
			case SQLiteParser.ALL_:
			case SQLiteParser.ALTER_:
			case SQLiteParser.ANALYZE_:
			case SQLiteParser.AND_:
			case SQLiteParser.AS_:
			case SQLiteParser.ASC_:
			case SQLiteParser.ATTACH_:
			case SQLiteParser.AUTOINCREMENT_:
			case SQLiteParser.BEFORE_:
			case SQLiteParser.BEGIN_:
			case SQLiteParser.BETWEEN_:
			case SQLiteParser.BY_:
			case SQLiteParser.CASCADE_:
			case SQLiteParser.CASE_:
			case SQLiteParser.CAST_:
			case SQLiteParser.CHECK_:
			case SQLiteParser.COLLATE_:
			case SQLiteParser.COLUMN_:
			case SQLiteParser.COMMIT_:
			case SQLiteParser.CONFLICT_:
			case SQLiteParser.CONSTRAINT_:
			case SQLiteParser.CREATE_:
			case SQLiteParser.CROSS_:
			case SQLiteParser.CURRENT_DATE_:
			case SQLiteParser.CURRENT_TIME_:
			case SQLiteParser.CURRENT_TIMESTAMP_:
			case SQLiteParser.DATABASE_:
			case SQLiteParser.DEFAULT_:
			case SQLiteParser.DEFERRABLE_:
			case SQLiteParser.DEFERRED_:
			case SQLiteParser.DELETE_:
			case SQLiteParser.DESC_:
			case SQLiteParser.DETACH_:
			case SQLiteParser.DISTINCT_:
			case SQLiteParser.DROP_:
			case SQLiteParser.EACH_:
			case SQLiteParser.ELSE_:
			case SQLiteParser.END_:
			case SQLiteParser.ESCAPE_:
			case SQLiteParser.EXCEPT_:
			case SQLiteParser.EXCLUSIVE_:
			case SQLiteParser.EXISTS_:
			case SQLiteParser.EXPLAIN_:
			case SQLiteParser.FAIL_:
			case SQLiteParser.FOR_:
			case SQLiteParser.FOREIGN_:
			case SQLiteParser.FROM_:
			case SQLiteParser.FULL_:
			case SQLiteParser.GLOB_:
			case SQLiteParser.GROUP_:
			case SQLiteParser.HAVING_:
			case SQLiteParser.IF_:
			case SQLiteParser.IGNORE_:
			case SQLiteParser.IMMEDIATE_:
			case SQLiteParser.IN_:
			case SQLiteParser.INDEX_:
			case SQLiteParser.INDEXED_:
			case SQLiteParser.INITIALLY_:
			case SQLiteParser.INNER_:
			case SQLiteParser.INSERT_:
			case SQLiteParser.INSTEAD_:
			case SQLiteParser.INTERSECT_:
			case SQLiteParser.INTO_:
			case SQLiteParser.IS_:
			case SQLiteParser.ISNULL_:
			case SQLiteParser.JOIN_:
			case SQLiteParser.KEY_:
			case SQLiteParser.LEFT_:
			case SQLiteParser.LIKE_:
			case SQLiteParser.LIMIT_:
			case SQLiteParser.MATCH_:
			case SQLiteParser.NATURAL_:
			case SQLiteParser.NO_:
			case SQLiteParser.NOT_:
			case SQLiteParser.NOTNULL_:
			case SQLiteParser.NULL_:
			case SQLiteParser.OF_:
			case SQLiteParser.OFFSET_:
			case SQLiteParser.ON_:
			case SQLiteParser.OR_:
			case SQLiteParser.ORDER_:
			case SQLiteParser.OUTER_:
			case SQLiteParser.PLAN_:
			case SQLiteParser.PRAGMA_:
			case SQLiteParser.PRIMARY_:
			case SQLiteParser.QUERY_:
			case SQLiteParser.RAISE_:
			case SQLiteParser.RECURSIVE_:
			case SQLiteParser.REFERENCES_:
			case SQLiteParser.REGEXP_:
			case SQLiteParser.REINDEX_:
			case SQLiteParser.RELEASE_:
			case SQLiteParser.RENAME_:
			case SQLiteParser.REPLACE_:
			case SQLiteParser.RESTRICT_:
			case SQLiteParser.RIGHT_:
			case SQLiteParser.ROLLBACK_:
			case SQLiteParser.ROW_:
			case SQLiteParser.ROWS_:
			case SQLiteParser.SAVEPOINT_:
			case SQLiteParser.SELECT_:
			case SQLiteParser.SET_:
			case SQLiteParser.TABLE_:
			case SQLiteParser.TEMP_:
			case SQLiteParser.TEMPORARY_:
			case SQLiteParser.THEN_:
			case SQLiteParser.TO_:
			case SQLiteParser.TRANSACTION_:
			case SQLiteParser.TRIGGER_:
			case SQLiteParser.UNION_:
			case SQLiteParser.UNIQUE_:
			case SQLiteParser.UPDATE_:
			case SQLiteParser.USING_:
			case SQLiteParser.VACUUM_:
			case SQLiteParser.VALUES_:
			case SQLiteParser.VIEW_:
			case SQLiteParser.VIRTUAL_:
			case SQLiteParser.WHEN_:
			case SQLiteParser.WHERE_:
			case SQLiteParser.WITH_:
			case SQLiteParser.WITHOUT_:
			case SQLiteParser.FIRST_VALUE_:
			case SQLiteParser.OVER_:
			case SQLiteParser.PARTITION_:
			case SQLiteParser.RANGE_:
			case SQLiteParser.PRECEDING_:
			case SQLiteParser.UNBOUNDED_:
			case SQLiteParser.CURRENT_:
			case SQLiteParser.FOLLOWING_:
			case SQLiteParser.CUME_DIST_:
			case SQLiteParser.DENSE_RANK_:
			case SQLiteParser.LAG_:
			case SQLiteParser.LAST_VALUE_:
			case SQLiteParser.LEAD_:
			case SQLiteParser.NTH_VALUE_:
			case SQLiteParser.NTILE_:
			case SQLiteParser.PERCENT_RANK_:
			case SQLiteParser.RANK_:
			case SQLiteParser.ROW_NUMBER_:
			case SQLiteParser.GENERATED_:
			case SQLiteParser.ALWAYS_:
			case SQLiteParser.STORED_:
			case SQLiteParser.TRUE_:
			case SQLiteParser.FALSE_:
			case SQLiteParser.WINDOW_:
			case SQLiteParser.NULLS_:
			case SQLiteParser.FIRST_:
			case SQLiteParser.LAST_:
			case SQLiteParser.FILTER_:
			case SQLiteParser.GROUPS_:
			case SQLiteParser.EXCLUDE_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2047;
				this.keyword();
				}
				break;
			case SQLiteParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2048;
				this.match(SQLiteParser.STRING_LITERAL);
				}
				break;
			case SQLiteParser.OPEN_PAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2049;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 2050;
				this.any_name();
				this.state = 2051;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 32:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);

		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC3\u080A\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x03\x02\x07\x02\xE6\n\x02\f\x02\x0E\x02\xE9\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x07\x03\xEE\n\x03\f\x03\x0E\x03\xF1\v\x03\x03\x03\x03\x03\x06" +
		"\x03\xF5\n\x03\r\x03\x0E\x03\xF6\x03\x03\x07\x03\xFA\n\x03\f\x03\x0E\x03" +
		"\xFD\v\x03\x03\x03\x07\x03\u0100\n\x03\f\x03\x0E\x03\u0103\v\x03\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\u0108\n\x04\x05\x04\u010A\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0124\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\u012B\n\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\u0132\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0138" +
		"\n\x05\x03\x05\x03\x05\x05\x05\u013C\n\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\u0141\n\x05\x03\x05\x05\x05\u0144\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\u014B\n\x06\x03\x06\x05\x06\u014E\n\x06\x03\x07\x03" +
		"\x07\x05\x07\u0152\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05" +
		"\b\u015A\n\b\x03\b\x03\b\x05\b\u015E\n\b\x05\b\u0160\n\b\x03\t\x03\t\x05" +
		"\t\u0164\n\t\x03\n\x03\n\x05\n\u0168\n\n\x03\n\x03\n\x05\n\u016C\n\n\x03" +
		"\n\x05\n\u016F\n\n\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\u0176\n\f\x03\f" +
		"\x03\f\x03\r\x03\r\x05\r\u017C\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0182" +
		"\n\r\x03\r\x03\r\x03\r\x05\r\u0187\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x07\r\u0190\n\r\f\r\x0E\r\u0193\v\r\x03\r\x03\r\x03\r\x05\r\u0198" +
		"\n\r\x03\x0E\x03\x0E\x05\x0E\u019C\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01A0" +
		"\n\x0E\x03\x0E\x05\x0E\u01A3\n\x0E\x03\x0F\x03\x0F\x05\x0F\u01A7\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01AD\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u01B2\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u01B9\n\x0F\f\x0F\x0E\x0F\u01BC\v\x0F\x03\x0F\x03\x0F\x07\x0F\u01C0\n" +
		"\x0F\f\x0F\x0E\x0F\u01C3\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C8\n" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u01CC\n\x0F\x03\x10\x03\x10\x05\x10\u01D0" +
		"\n\x10\x03\x10\x07\x10\u01D3\n\x10\f\x10\x0E\x10\u01D6\v\x10\x03\x11\x06" +
		"\x11\u01D9\n\x11\r\x11\x0E\x11\u01DA\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01E7\n\x11\x03\x12" +
		"\x03\x12\x05\x12\u01EB\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01F0\n\x12" +
		"\x03\x12\x05\x12\u01F3\n\x12\x03\x12\x05\x12\u01F6\n\x12\x03\x12\x05\x12" +
		"\u01F9\n\x12\x03\x12\x03\x12\x05\x12\u01FD\n\x12\x03\x12\x05\x12\u0200" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u020E\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\u0215\n\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u021C\n\x12\x05\x12\u021E\n\x12\x03\x13\x05\x13\u0221" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0227\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u022C\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u0232\n\x14\f\x14\x0E\x14\u0235\v\x14\x03\x14\x03\x14\x05\x14\u0239\n" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u0246\n\x14\f\x14\x0E\x14\u0249\v\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u024E\n\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x07\x15\u0256\n\x15\f\x15\x0E\x15\u0259\v\x15\x03\x15" +
		"\x03\x15\x05\x15\u025D\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0267\n\x15\x03\x15\x03\x15\x07\x15\u026B" +
		"\n\x15\f\x15\x0E\x15\u026E\v\x15\x03\x15\x05\x15\u0271\n\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u0276\n\x15\x05\x15\u0278\n\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0280\n\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\u0286\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u028B\n\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0292\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u029B\n\x17\f\x17" +
		"\x0E\x17\u029E\v\x17\x05\x17\u02A0\n\x17\x05\x17\u02A2\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02A9\n\x17\x03\x17\x03\x17\x05\x17" +
		"\u02AD\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02B4\n\x17" +
		"\x03\x17\x03\x17\x06\x17\u02B8\n\x17\r\x17\x0E\x17\u02B9\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x05\x18\u02C0\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u02C6\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02CB\n\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x07\x18\u02D2\n\x18\f\x18\x0E\x18\u02D5\v" +
		"\x18\x03\x18\x03\x18\x05\x18\u02D9\n\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02E4\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u02E9\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x07\x19\u02F2\n\x19\f\x19\x0E\x19\u02F5\v\x19\x03\x19" +
		"\x03\x19\x05\x19\u02F9\n\x19\x03\x1A\x03\x1A\x05\x1A\u02FD\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x07\x1A\u030B\n\x1A\f\x1A\x0E\x1A\u030E\v\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0315\n\x1B\f\x1B\x0E\x1B\u0318" +
		"\v\x1B\x03\x1B\x03\x1B\x05\x1B\u031C\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0324\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u032E\n\x1D\f\x1D\x0E\x1D\u0331" +
		"\v\x1D\x03\x1D\x03\x1D\x05\x1D\u0335\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x05\x1E\u033D\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u0344\n\x1E\x03\x1E\x05\x1E\u0347\n\x1E\x03\x1F\x05\x1F" +
		"\u034A\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0351\n\x1F" +
		"\x03\x1F\x05\x1F\u0354\n\x1F\x03\x1F\x05\x1F\u0357\n\x1F\x03\x1F\x05\x1F" +
		"\u035A\n\x1F\x03 \x03 \x05 \u035E\n \x03 \x03 \x03!\x03!\x03!\x03!\x05" +
		"!\u0366\n!\x03!\x03!\x03!\x05!\u036B\n!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u0375\n\"\x03\"\x03\"\x03\"\x05\"\u037A\n\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0383\n\"\x03\"\x03\"\x03\"" +
		"\x07\"\u0388\n\"\f\"\x0E\"\u038B\v\"\x03\"\x05\"\u038E\n\"\x03\"\x03\"" +
		"\x05\"\u0392\n\"\x03\"\x05\"\u0395\n\"\x03\"\x03\"\x03\"\x03\"\x07\"\u039B" +
		"\n\"\f\"\x0E\"\u039E\v\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u03AA\n\"\x03\"\x05\"\u03AD\n\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x05\"\u03B5\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x06\"" +
		"\u03BC\n\"\r\"\x0E\"\u03BD\x03\"\x03\"\x05\"\u03C2\n\"\x03\"\x03\"\x03" +
		"\"\x05\"\u03C7\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u03E5\n\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u03F1\n\"\x03" +
		"\"\x03\"\x03\"\x05\"\u03F6\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u0402\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0408" +
		"\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u040F\n\"\x03\"\x03\"\x05\"\u0413" +
		"\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u041B\n\"\f\"\x0E\"\u041E" +
		"\v\"\x05\"\u0420\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0426\n\"\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u042C\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u0433" +
		"\n\"\f\"\x0E\"\u0436\v\"\x05\"\u0438\n\"\x03\"\x03\"\x05\"\u043C\n\"\x07" +
		"\"\u043E\n\"\f\"\x0E\"\u0441\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0449" +
		"\n#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03%\x07%\u0453\n%\f%\x0E%\u0456" +
		"\v%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u045E\n&\f&\x0E&\u0461\v&\x03\'" +
		"\x05\'\u0464\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u046B\n\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u0471\n\'\x03\'\x03\'\x03\'\x05\'\u0476\n\'\x03\'" +
		"\x03\'\x03\'\x03\'\x07\'\u047C\n\'\f\'\x0E\'\u047F\v\'\x03\'\x03\'\x05" +
		"\'\u0483\n\'\x03\'\x03\'\x05\'\u0487\n\'\x03\'\x05\'\u048A\n\'\x03\'\x03" +
		"\'\x05\'\u048E\n\'\x03\'\x05\'\u0491\n\'\x03(\x03(\x03(\x03(\x07(\u0497" +
		"\n(\f(\x0E(\u049A\v(\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u04A2\n)\f)\x0E" +
		")\u04A5\v)\x03)\x03)\x03)\x05)\u04AA\n)\x05)\u04AC\n)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x05)\u04B4\n)\x03)\x03)\x03)\x03)\x03)\x05)\u04BB\n)\x03)" +
		"\x03)\x03)\x07)\u04C0\n)\f)\x0E)\u04C3\v)\x03)\x03)\x05)\u04C7\n)\x05" +
		")\u04C9\n)\x03*\x03*\x03*\x03*\x05*\u04CF\n*\x03*\x03*\x03*\x03*\x03*" +
		"\x03*\x03*\x05*\u04D8\n*\x03+\x03+\x03+\x05+\u04DD\n+\x03,\x03,\x03,\x03" +
		",\x03,\x05,\u04E4\n,\x03,\x03,\x05,\u04E8\n,\x05,\u04EA\n,\x03-\x05-\u04ED" +
		"\n-\x03-\x03-\x03-\x03-\x07-\u04F3\n-\f-\x0E-\u04F6\v-\x03-\x05-\u04F9" +
		"\n-\x03-\x05-\u04FC\n-\x03.\x03.\x03.\x03.\x05.\u0502\n.\x07.\u0504\n" +
		".\f.\x0E.\u0507\v.\x03/\x03/\x05/\u050B\n/\x03/\x03/\x03/\x07/\u0510\n" +
		"/\f/\x0E/\u0513\v/\x03/\x03/\x03/\x03/\x07/\u0519\n/\f/\x0E/\u051C\v/" +
		"\x03/\x05/\u051F\n/\x05/\u0521\n/\x03/\x03/\x05/\u0525\n/\x03/\x03/\x03" +
		"/\x03/\x03/\x07/\u052C\n/\f/\x0E/\u052F\v/\x03/\x03/\x05/\u0533\n/\x05" +
		"/\u0535\n/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u0540\n/" +
		"\f/\x0E/\u0543\v/\x05/\u0545\n/\x03/\x05/\u0548\n/\x030\x030\x031\x05" +
		"1\u054D\n1\x031\x031\x051\u0551\n1\x031\x051\u0554\n1\x032\x052\u0557" +
		"\n2\x032\x032\x032\x052\u055C\n2\x032\x032\x052\u0560\n2\x032\x062\u0563" +
		"\n2\r2\x0E2\u0564\x032\x052\u0568\n2\x032\x052\u056B\n2\x033\x033\x03" +
		"3\x053\u0570\n3\x033\x033\x053\u0574\n3\x033\x053\u0577\n3\x033\x033\x03" +
		"3\x033\x033\x053\u057E\n3\x033\x033\x033\x053\u0583\n3\x033\x033\x033" +
		"\x033\x033\x073\u058A\n3\f3\x0E3\u058D\v3\x033\x033\x053\u0591\n3\x03" +
		"3\x053\u0594\n3\x033\x033\x033\x033\x073\u059A\n3\f3\x0E3\u059D\v3\x03" +
		"3\x053\u05A0\n3\x033\x033\x033\x033\x033\x033\x053\u05A8\n3\x033\x053" +
		"\u05AB\n3\x053\u05AD\n3\x034\x034\x034\x034\x034\x034\x034\x054\u05B6" +
		"\n4\x034\x054\u05B9\n4\x054\u05BB\n4\x035\x035\x055\u05BF\n5\x035\x03" +
		"5\x055\u05C3\n5\x035\x035\x055\u05C7\n5\x035\x055\u05CA\n5\x036\x036\x03" +
		"6\x036\x036\x036\x036\x076\u05D3\n6\f6\x0E6\u05D6\v6\x036\x036\x056\u05DA" +
		"\n6\x037\x037\x057\u05DE\n7\x037\x037\x057\u05E2\n7\x038\x058\u05E5\n" +
		"8\x038\x038\x038\x058\u05EA\n8\x038\x038\x038\x038\x058\u05F0\n8\x038" +
		"\x038\x038\x038\x038\x058\u05F7\n8\x038\x038\x038\x078\u05FC\n8\f8\x0E" +
		"8\u05FF\v8\x038\x038\x038\x038\x078\u0605\n8\f8\x0E8\u0608\v8\x038\x05" +
		"8\u060B\n8\x058\u060D\n8\x038\x038\x058\u0611\n8\x038\x058\u0614\n8\x03" +
		"9\x039\x039\x039\x079\u061A\n9\f9\x0E9\u061D\v9\x039\x039\x03:\x05:\u0622" +
		"\n:\x03:\x03:\x03:\x05:\u0627\n:\x03:\x03:\x03:\x03:\x05:\u062D\n:\x03" +
		":\x03:\x03:\x03:\x03:\x05:\u0634\n:\x03:\x03:\x03:\x07:\u0639\n:\f:\x0E" +
		":\u063C\v:\x03:\x03:\x05:\u0640\n:\x03:\x05:\u0643\n:\x03:\x05:\u0646" +
		"\n:\x03:\x05:\u0649\n:\x03;\x03;\x03;\x05;\u064E\n;\x03;\x03;\x03;\x05" +
		";\u0653\n;\x03;\x03;\x03;\x03;\x03;\x05;\u065A\n;\x03<\x03<\x05<\u065E" +
		"\n<\x03<\x03<\x05<\u0662\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x05" +
		">\u066C\n>\x03>\x03>\x03>\x03>\x03>\x07>\u0673\n>\f>\x0E>\u0676\v>\x05" +
		">\u0678\n>\x03>\x03>\x03>\x03>\x03>\x07>\u067F\n>\f>\x0E>\u0682\v>\x03" +
		">\x05>\u0685\n>\x03>\x03>\x03?\x03?\x03?\x03?\x05?\u068D\n?\x03?\x03?" +
		"\x03?\x03?\x03?\x07?\u0694\n?\f?\x0E?\u0697\v?\x05?\u0699\n?\x03?\x03" +
		"?\x03?\x03?\x03?\x07?\u06A0\n?\f?\x0E?\u06A3\v?\x05?\u06A5\n?\x03?\x05" +
		"?\u06A8\n?\x03?\x05?\u06AB\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@" +
		"\x05@\u06B5\n@\x05@\u06B7\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u06C0" +
		"\nA\x03B\x03B\x03B\x03B\x03B\x07B\u06C7\nB\fB\x0EB\u06CA\vB\x03B\x05B" +
		"\u06CD\nB\x03B\x03B\x03C\x03C\x03C\x05C\u06D4\nC\x03C\x03C\x03C\x07C\u06D9" +
		"\nC\fC\x0EC\u06DC\vC\x03C\x05C\u06DF\nC\x03C\x03C\x05C\u06E3\nC\x03D\x03" +
		"D\x03D\x03D\x03D\x07D\u06EA\nD\fD\x0ED\u06ED\vD\x03D\x05D\u06F0\nD\x03" +
		"D\x03D\x05D\u06F4\nD\x03D\x03D\x03D\x05D\u06F9\nD\x03E\x03E\x05E\u06FD" +
		"\nE\x03E\x03E\x03E\x07E\u0702\nE\fE\x0EE\u0705\vE\x03F\x03F\x03F\x03F" +
		"\x03F\x07F\u070C\nF\fF\x0EF\u070F\vF\x03G\x03G\x03G\x03G\x05G\u0715\n" +
		"G\x03H\x03H\x03H\x05H\u071A\nH\x03H\x05H\u071D\nH\x03H\x03H\x05H\u0721" +
		"\nH\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u072F" +
		"\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u073B\nK\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0744\nL\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x05M\u074D\nM\x03M\x03M\x05M\u0751\nM\x03M\x03M\x03M\x03M" +
		"\x03M\x03M\x03M\x03M\x05M\u075B\nM\x03M\x05M\u075E\nM\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x05M\u0767\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05" +
		"M\u0770\nM\x03M\x05M\u0773\nM\x03M\x03M\x03M\x03M\x05M\u0779\nM\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u0787\nM\x03" +
		"M\x03M\x05M\u078B\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05" +
		"M\u0796\nM\x03M\x03M\x03M\x05M\u079B\nM\x03N\x03N\x03N\x03O\x03O\x03O" +
		"\x03P\x03P\x03P\x06P\u07A6\nP\rP\x0EP\u07A7\x03Q\x03Q\x03Q\x06Q\u07AD" +
		"\nQ\rQ\x0EQ\u07AE\x03R\x03R\x03R\x03R\x03S\x03S\x05S\u07B7\nS\x03S\x03" +
		"S\x03S\x05S\u07BC\nS\x07S\u07BE\nS\fS\x0ES\u07C1\vS\x03T\x03T\x03U\x03" +
		"U\x03V\x03V\x03W\x03W\x03X\x03X\x05X\u07CD\nX\x03Y\x03Y\x03Z\x03Z\x03" +
		"[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03" +
		"b\x03b\x03c\x03c\x03d\x03d\x03e\x03e\x03f\x03f\x03g\x03g\x03h\x03h\x03" +
		"i\x03i\x03j\x03j\x03k\x03k\x03l\x03l\x03m\x03m\x03n\x03n\x03o\x03o\x03" +
		"p\x03p\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u0808\nr\x03" +
		"r\x04\u01BA\u01DA\x02\x03Bs\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\x02\x1E\x05\x02<<GGTT\x04\x0211DD\x03\x02\x87\x88\x04\x02\x94\x94\xAD" +
		"\xAD\x03\x02\n\v\x04\x02==\x8F\x8F\x04\x02::jj\x04\x02<<TT\x07\x02\x1B" +
		"\x1BJJSS||\x80\x80\x06\x02VV\x86\x86\x8C\x8C\x93\x93\x04\x02\t\t\x0E\x0F" +
		"\x03\x02\x10\x13\x03\x02\x14\x17\x06\x02OOcceexx\x05\x02\x1B\x1BJJ\x80" +
		"\x80\x07\x0268jj\xAE\xAF\xBC\xBC\xBE\xBF\x04\x02\x1F\x1F@@\x05\x02\x82" +
		"\x82\x9C\x9C\xB5\xB5\x04\x02\x07\x07ll\x03\x02\xB2\xB3\x04\x02$$>>\x04" +
		"\x02\x99\x99\xA4\xA4\x04\x02\xA1\xA1\xA8\xA8\x04\x02\xA2\xA2\xA9\xAA\x04" +
		"\x02\xA3\xA3\xA5\xA5\x04\x02\n\fhh\x04\x02\xBB\xBB\xBE\xBE\x04\x02\x1B" +
		"}\x7F\xB6\x02\u0924\x02\xE7\x03\x02\x02\x02\x04\xEF\x03\x02\x02\x02\x06" +
		"\u0109\x03\x02\x02\x02\b\u0125\x03\x02\x02\x02\n\u0145\x03\x02\x02\x02" +
		"\f\u014F\x03\x02\x02\x02\x0E\u0157\x03\x02\x02\x02\x10\u0161\x03\x02\x02" +
		"\x02\x12\u0165\x03\x02\x02\x02\x14\u0170\x03\x02\x02\x02\x16\u0173\x03" +
		"\x02\x02\x02\x18\u0179\x03\x02\x02\x02\x1A\u019B\x03\x02\x02\x02\x1C\u01A4" +
		"\x03\x02\x02\x02\x1E\u01CD\x03\x02\x02\x02 \u01D8\x03\x02\x02\x02\"\u01EA" +
		"\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"$\u0220\x03\x02\x02\x02&\u0226\x03\x02\x02\x02(\u024F\x03\x02\x02\x02" +
		"*\u0279\x03\x02\x02\x02,\u027D\x03\x02\x02\x02.\u02BD\x03\x02\x02\x02" +
		"0\u02DD\x03\x02\x02\x022\u02FA\x03\x02\x02\x024\u030F\x03\x02\x02\x02" +
		"6\u031D\x03\x02\x02\x028\u0328\x03\x02\x02\x02:\u033C\x03\x02\x02\x02" +
		"<\u0349\x03\x02\x02\x02>\u035B\x03\x02\x02\x02@\u0361\x03\x02\x02\x02" +
		"B\u03C6\x03\x02\x02\x02D\u0442\x03\x02\x02\x02F\u044C\x03\x02\x02\x02" +
		"H\u044E\x03\x02\x02\x02J\u0459\x03\x02\x02\x02L\u0463\x03\x02\x02\x02" +
		"N\u0492\x03\x02\x02\x02P\u049B\x03\x02\x02\x02R\u04CA\x03\x02\x02\x02" +
		"T\u04DC\x03\x02\x02\x02V\u04DE\x03\x02\x02\x02X\u04EC\x03\x02\x02\x02" +
		"Z\u04FD\x03\x02\x02\x02\\\u0547\x03\x02\x02\x02^\u0549\x03\x02\x02\x02" +
		"`\u054C\x03\x02\x02\x02b\u0556\x03\x02\x02\x02d\u05AC\x03\x02\x02\x02" +
		"f\u05BA\x03\x02\x02\x02h\u05C9\x03\x02\x02\x02j\u05D9\x03\x02\x02\x02" +
		"l\u05E1\x03\x02\x02\x02n\u05E4\x03\x02\x02\x02p\u0615\x03\x02\x02\x02" +
		"r\u0621\x03\x02\x02\x02t\u064D\x03\x02\x02\x02v\u065B\x03\x02\x02\x02" +
		"x\u0663\x03\x02\x02\x02z\u0669\x03\x02\x02\x02|\u0688\x03\x02\x02\x02" +
		"~\u06AC\x03\x02\x02\x02\x80\u06B8\x03\x02\x02\x02\x82\u06C1\x03\x02\x02" +
		"\x02\x84\u06D0\x03\x02\x02\x02\x86\u06E4\x03\x02\x02\x02\x88\u06FA\x03" +
		"\x02\x02\x02\x8A\u0706\x03\x02\x02\x02\x8C\u0710\x03\x02\x02\x02\x8E\u0716" +
		"\x03\x02\x02\x02\x90\u0722\x03\x02\x02\x02\x92\u072E\x03\x02\x02\x02\x94" +
		"\u073A\x03\x02\x02\x02\x96\u0743\x03\x02\x02\x02\x98\u079A\x03\x02\x02" +
		"\x02\x9A\u079C\x03\x02\x02\x02\x9C\u079F\x03\x02\x02\x02\x9E\u07A2\x03" +
		"\x02\x02\x02\xA0\u07A9\x03\x02\x02\x02\xA2\u07B0\x03\x02\x02\x02\xA4\u07B4" +
		"\x03\x02\x02\x02\xA6\u07C2\x03\x02\x02\x02\xA8\u07C4\x03\x02\x02\x02\xAA" +
		"\u07C6\x03\x02\x02\x02\xAC\u07C8\x03\x02\x02\x02\xAE\u07CC\x03\x02\x02" +
		"\x02\xB0\u07CE\x03\x02\x02\x02\xB2\u07D0\x03\x02\x02\x02\xB4\u07D2\x03" +
		"\x02\x02\x02\xB6\u07D4\x03\x02\x02\x02\xB8\u07D6\x03\x02\x02\x02\xBA\u07D8" +
		"\x03\x02\x02\x02\xBC\u07DA\x03\x02\x02\x02\xBE\u07DC\x03\x02\x02\x02\xC0" +
		"\u07DE\x03\x02\x02\x02\xC2\u07E0\x03\x02\x02\x02\xC4\u07E2\x03\x02\x02" +
		"\x02\xC6\u07E4\x03\x02\x02\x02\xC8\u07E6\x03\x02\x02\x02\xCA\u07E8\x03" +
		"\x02\x02\x02\xCC\u07EA\x03\x02\x02\x02\xCE\u07EC\x03\x02\x02\x02\xD0\u07EE" +
		"\x03\x02\x02\x02\xD2\u07F0\x03\x02\x02\x02\xD4\u07F2\x03\x02\x02\x02\xD6" +
		"\u07F4\x03\x02\x02\x02\xD8\u07F6\x03\x02\x02\x02\xDA\u07F8\x03\x02\x02" +
		"\x02\xDC\u07FA\x03\x02\x02\x02\xDE\u07FC\x03\x02\x02\x02\xE0\u07FE\x03" +
		"\x02\x02\x02\xE2\u0807\x03\x02\x02\x02\xE4\xE6\x05\x04\x03\x02\xE5\xE4" +
		"\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8" +
		"\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB" +
		"\x07\x02\x02\x03\xEB\x03\x03\x02\x02\x02\xEC\xEE\x07\x03\x02\x02\xED\xEC" +
		"\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0" +
		"\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xFB" +
		"\x05\x06\x04\x02\xF3\xF5\x07\x03\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6" +
		"\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xFA\x05\x06\x04\x02\xF9\xF4\x03\x02\x02\x02\xFA\xFD" +
		"\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\u0101" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0100\x07\x03\x02\x02\xFF" +
		"\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02" +
		"\x02\u0101\u0102\x03\x02\x02\x02\u0102\x05\x03\x02\x02\x02\u0103\u0101" +
		"\x03\x02\x02\x02\u0104\u0107\x07I\x02\x02\u0105\u0106\x07t\x02\x02\u0106" +
		"\u0108\x07q\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02" +
		"\x02\u0108\u010A\x03\x02\x02\x02\u0109\u0104\x03\x02\x02\x02\u0109\u010A" +
		"\x03\x02\x02\x02\u010A\u0123\x03\x02\x02\x02\u010B\u0124\x05\b\x05\x02" +
		"\u010C\u0124\x05\n\x06\x02\u010D\u0124\x05\f\x07\x02\u010E\u0124\x05\x0E" +
		"\b\x02\u010F\u0124\x05\x10\t\x02\u0110\u0124\x05\x18\r\x02\u0111\u0124" +
		"\x05\x1C\x0F\x02\u0112\u0124\x05,\x17\x02\u0113\u0124\x05.\x18\x02\u0114" +
		"\u0124\x050\x19\x02\u0115\u0124\x05:\x1E\x02\u0116\u0124\x05<\x1F\x02" +
		"\u0117\u0124\x05> \x02\u0118\u0124\x05@!\x02\u0119\u0124\x05L\'\x02\u011A" +
		"\u0124\x05R*\x02\u011B\u0124\x05V,\x02\u011C\u0124\x05\x16\f\x02\u011D" +
		"\u0124\x05\x12\n\x02\u011E\u0124\x05\x14\v\x02\u011F\u0124\x05X-\x02\u0120" +
		"\u0124\x05n8\x02\u0121\u0124\x05r:\x02\u0122\u0124\x05v<\x02\u0123\u010B" +
		"\x03\x02\x02\x02\u0123\u010C\x03\x02\x02\x02\u0123\u010D\x03\x02\x02\x02" +
		"\u0123\u010E\x03\x02\x02\x02\u0123\u010F\x03\x02\x02\x02\u0123\u0110\x03" +
		"\x02\x02\x02\u0123\u0111\x03\x02\x02\x02\u0123\u0112\x03\x02\x02\x02\u0123" +
		"\u0113\x03\x02\x02\x02\u0123\u0114\x03\x02\x02\x02\u0123\u0115\x03\x02" +
		"\x02\x02\u0123\u0116\x03\x02\x02\x02\u0123\u0117\x03\x02\x02\x02\u0123" +
		"\u0118\x03\x02\x02\x02\u0123\u0119\x03\x02\x02\x02\u0123\u011A\x03\x02" +
		"\x02\x02\u0123\u011B\x03\x02\x02\x02\u0123\u011C\x03\x02\x02\x02\u0123" +
		"\u011D\x03\x02\x02\x02\u0123\u011E\x03\x02\x02\x02\u0123\u011F\x03\x02" +
		"\x02\x02\u0123\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123" +
		"\u0122\x03\x02\x02\x02\u0124\x07\x03\x02\x02\x02\u0125\u0126\x07 \x02" +
		"\x02\u0126\u012A\x07\x86\x02\x02\u0127\u0128\x05\xB8]\x02\u0128\u0129" +
		"\x07\x04\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0127\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u0143\x05" +
		"\xBA^\x02\u012D\u0137\x07{\x02\x02\u012E\u012F\x07\x8A\x02\x02\u012F\u0138" +
		"\x05\xBA^\x02\u0130\u0132\x070\x02\x02\u0131\u0130\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x05\xBE" +
		"`\x02\u0134\u0135\x07\x8A\x02\x02\u0135\u0136\x05\xBE`\x02\u0136\u0138" +
		"\x03\x02\x02\x02\u0137\u012E\x03\x02\x02\x02\u0137\u0131\x03\x02\x02\x02" +
		"\u0138\u0144\x03\x02\x02\x02\u0139\u013B\x07\x1D\x02\x02\u013A\u013C\x07" +
		"0\x02\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C" +
		"\u013D\x03\x02\x02\x02\u013D\u0144\x05\x1E\x10\x02\u013E\u0140\x07A\x02" +
		"\x02\u013F\u0141\x070\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141" +
		"\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x05\xBE`\x02" +
		"\u0143\u012D\x03\x02\x02\x02\u0143\u0139\x03\x02\x02\x02\u0143\u013E\x03" +
		"\x02\x02\x02\u0144\t\x03\x02\x02\x02\u0145\u014D\x07!\x02\x02\u0146\u014E" +
		"\x05\xB8]\x02\u0147\u0148\x05\xB8]\x02\u0148\u0149\x07\x04\x02\x02\u0149" +
		"\u014B\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x05\xBC_\x02\u014D\u0146" +
		"\x03\x02\x02\x02\u014D\u014A\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
		"\u014E\v\x03\x02\x02\x02\u014F\u0151\x07%\x02\x02\u0150\u0152\x079\x02" +
		"\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153" +
		"\x03\x02\x02\x02\u0153\u0154\x05B\"\x02\u0154\u0155\x07#\x02\x02\u0155" +
		"\u0156\x05\xB8]\x02\u0156\r\x03\x02\x02\x02\u0157\u0159\x07(\x02\x02\u0158" +
		"\u015A\t\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02" +
		"\x02\u015A\u015F\x03\x02\x02\x02\u015B\u015D\x07\x8B\x02\x02\u015C\u015E" +
		"\x05\xD2j\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02" +
		"\u015E\u0160\x03\x02\x02\x02\u015F\u015B\x03\x02\x02\x02\u015F\u0160\x03" +
		"\x02\x02\x02\u0160\x0F\x03\x02\x02\x02\u0161\u0163\t\x03\x02\x02\u0162" +
		"\u0164\x07\x8B\x02\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02" +
		"\x02\x02\u0164\x11\x03\x02\x02\x02\u0165\u0167\x07\x80\x02\x02\u0166\u0168" +
		"\x07\x8B\x02\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
		"\u0168\u016E\x03\x02\x02\x02\u0169\u016B\x07\x8A\x02\x02\u016A\u016C\x07" +
		"\x83\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u016D\x03\x02\x02\x02\u016D\u016F\x05\xCEh\x02\u016E\u0169\x03\x02\x02" +
		"\x02\u016E\u016F\x03\x02\x02\x02\u016F\x13\x03\x02\x02\x02\u0170\u0171" +
		"\x07\x83\x02\x02\u0171\u0172\x05\xCEh\x02\u0172\x15\x03\x02\x02\x02\u0173" +
		"\u0175\x07z\x02\x02\u0174\u0176\x07\x83\x02\x02\u0175\u0174\x03\x02\x02" +
		"\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178" +
		"\x05\xCEh\x02\u0178\x17\x03\x02\x02\x02\u0179\u017B\x074\x02\x02\u017A" +
		"\u017C\x07\x8E\x02\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02" +
		"\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u0181\x07V\x02\x02\u017E\u017F" +
		"\x07R\x02\x02\u017F\u0180\x07h\x02\x02\u0180\u0182\x07H\x02\x02\u0181" +
		"\u017E\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0186\x03\x02" +
		"\x02\x02\u0183\u0184\x05\xB8]\x02\u0184\u0185\x07\x04\x02\x02\u0185\u0187" +
		"\x03\x02\x02\x02\u0186\u0183\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x05\xC4c\x02\u0189\u018A\x07" +
		"m\x02\x02\u018A\u018B\x05\xBA^\x02\u018B\u018C\x07\x05\x02\x02\u018C\u0191" +
		"\x05\x1A\x0E\x02\u018D\u018E\x07\x07\x02\x02\u018E\u0190\x05\x1A\x0E\x02" +
		"\u018F\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03" +
		"\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0194\u0197\x07\x06\x02\x02\u0195\u0196\x07\x96" +
		"\x02\x02\u0196\u0198\x05B\"\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198" +
		"\x03\x02\x02\x02\u0198\x19\x03\x02\x02\x02\u0199\u019C\x05\xBE`\x02\u019A" +
		"\u019C\x05B\"\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019A\x03\x02\x02" +
		"\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019E\x07/\x02\x02\u019E\u01A0" +
		"\x05\xC0a\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
		"\u01A0\u01A2\x03\x02\x02\x02\u01A1\u01A3\x05\x90I\x02\u01A2\u01A1\x03" +
		"\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\x1B\x03\x02\x02\x02\u01A4" +
		"\u01A6\x074\x02\x02\u01A5\u01A7\t\x04\x02\x02\u01A6\u01A5\x03\x02\x02" +
		"\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AC" +
		"\x07\x86\x02\x02\u01A9\u01AA\x07R\x02\x02\u01AA\u01AB\x07h\x02\x02\u01AB" +
		"\u01AD\x07H\x02\x02\u01AC\u01A9\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02" +
		"\x02\u01AD\u01B1\x03\x02\x02\x02\u01AE\u01AF\x05\xB8]\x02\u01AF\u01B0" +
		"\x07\x04\x02\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01AE\x03\x02\x02\x02" +
		"\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01CB\x05" +
		"\xBA^\x02\u01B4\u01B5\x07\x05\x02\x02\u01B5\u01BA\x05\x1E\x10\x02\u01B6" +
		"\u01B7\x07\x07\x02\x02\u01B7\u01B9\x05\x1E\x10\x02\u01B8\u01B6\x03\x02" +
		"\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BA" +
		"\u01B8\x03\x02\x02\x02\u01BB\u01C1\x03\x02\x02\x02\u01BC\u01BA\x03\x02" +
		"\x02\x02\u01BD\u01BE\x07\x07\x02\x02\u01BE\u01C0\x05&\x14\x02\u01BF\u01BD" +
		"\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02" +
		"\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C1\x03" +
		"\x02\x02\x02\u01C4\u01C7\x07\x06\x02\x02\u01C5\u01C6\x07\x98\x02\x02\u01C6" +
		"\u01C8\x07\xBB\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02" +
		"\x02\x02\u01C8\u01CC\x03\x02\x02\x02\u01C9\u01CA\x07#\x02\x02\u01CA\u01CC" +
		"\x05X-\x02\u01CB\u01B4\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
		"\x1D\x03\x02\x02\x02\u01CD\u01CF\x05\xBE`\x02\u01CE\u01D0\x05 \x11\x02" +
		"\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D4\x03" +
		"\x02\x02\x02\u01D1\u01D3\x05\"\x12\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3" +
		"\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
		"\x02\x02\u01D5\x1F\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D9" +
		"\x05\xB4[\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01E6\x03" +
		"\x02\x02\x02\u01DC\u01DD\x07\x05\x02\x02\u01DD\u01DE\x05$\x13\x02\u01DE" +
		"\u01DF\x07\x06\x02\x02\u01DF\u01E7\x03\x02\x02\x02\u01E0\u01E1\x07\x05" +
		"\x02\x02\u01E1\u01E2\x05$\x13\x02\u01E2\u01E3\x07\x07\x02\x02\u01E3\u01E4" +
		"\x05$\x13\x02\u01E4\u01E5\x07\x06\x02\x02\u01E5\u01E7\x03\x02\x02\x02" +
		"\u01E6\u01DC\x03\x02\x02\x02\u01E6\u01E0\x03\x02\x02\x02\u01E6\u01E7\x03" +
		"\x02\x02\x02\u01E7!\x03\x02\x02\x02\u01E8\u01E9\x073\x02\x02\u01E9\u01EB" +
		"\x05\xB4[\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02" +
		"\u01EB\u021D\x03\x02\x02\x02\u01EC\u01ED\x07s\x02\x02\u01ED\u01EF\x07" +
		"a\x02\x02\u01EE\u01F0\x05\x90I\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0" +
		"\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\x05*\x16\x02" +
		"\u01F2\u01F1\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03" +
		"\x02\x02\x02\u01F4\u01F6\x07&\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5" +
		"\u01F6\x03\x02\x02\x02\u01F6\u021E\x03\x02\x02\x02\u01F7\u01F9\x07h\x02" +
		"\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA" +
		"\x03\x02\x02\x02\u01FA\u01FD\x07j\x02\x02\u01FB\u01FD\x07\x8E\x02\x02" +
		"\u01FC\u01F8\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\u01FF\x03" +
		"\x02\x02\x02\u01FE\u0200\x05*\x16\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF" +
		"\u0200\x03\x02\x02\x02\u0200\u021E\x03\x02\x02\x02\u0201\u0202\x07.\x02" +
		"\x02\u0202\u0203\x07\x05\x02\x02\u0203\u0204\x05B\"\x02\u0204\u0205\x07" +
		"\x06\x02\x02\u0205\u021E\x03\x02\x02\x02\u0206\u020D\x07:\x02\x02\u0207" +
		"\u020E\x05$\x13\x02\u0208\u020E\x05F$\x02\u0209\u020A\x07\x05\x02\x02" +
		"\u020A\u020B\x05B\"\x02\u020B\u020C\x07\x06\x02\x02\u020C\u020E\x03\x02" +
		"\x02\x02\u020D\u0207\x03\x02\x02\x02\u020D\u0208\x03\x02\x02\x02\u020D" +
		"\u0209\x03\x02\x02\x02\u020E\u021E\x03\x02\x02\x02\u020F\u0210\x07/\x02" +
		"\x02\u0210\u021E\x05\xC0a\x02\u0211\u021E\x05(\x15\x02\u0212\u0213\x07" +
		"\xAB\x02\x02\u0213\u0215\x07\xAC\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214" +
		"\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x07#\x02" +
		"\x02\u0217\u0218\x07\x05\x02\x02\u0218\u0219\x05B\"\x02\u0219\u021B\x07" +
		"\x06\x02\x02\u021A\u021C\t\x05\x02\x02\u021B\u021A\x03\x02\x02\x02\u021B" +
		"\u021C\x03\x02\x02\x02\u021C\u021E\x03\x02\x02\x02\u021D\u01EC\x03\x02" +
		"\x02\x02\u021D\u01FC\x03\x02\x02\x02\u021D\u0201\x03\x02\x02\x02\u021D" +
		"\u0206\x03\x02\x02\x02\u021D\u020F\x03\x02\x02\x02\u021D\u0211\x03\x02" +
		"\x02\x02\u021D\u0214\x03\x02\x02\x02\u021E#\x03\x02\x02\x02\u021F\u0221" +
		"\t\x06\x02\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
		"\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07\xBC\x02\x02\u0223%\x03\x02" +
		"\x02\x02\u0224\u0225\x073\x02\x02\u0225\u0227\x05\xB4[\x02\u0226\u0224" +
		"\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u024D\x03\x02\x02\x02" +
		"\u0228\u0229\x07s\x02\x02\u0229\u022C\x07a\x02\x02\u022A\u022C\x07\x8E" +
		"\x02\x02\u022B\u0228\x03\x02\x02\x02\u022B\u022A\x03\x02\x02\x02\u022C" +
		"\u022D\x03\x02\x02\x02\u022D\u022E\x07\x05\x02\x02\u022E\u0233\x05\x1A" +
		"\x0E\x02\u022F\u0230\x07\x07\x02\x02\u0230\u0232\x05\x1A\x0E\x02\u0231" +
		"\u022F\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02" +
		"\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235" +
		"\u0233\x03\x02\x02\x02\u0236\u0238\x07\x06\x02\x02\u0237\u0239\x05*\x16" +
		"\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u024E" +
		"\x03\x02\x02\x02\u023A\u023B\x07.\x02\x02\u023B\u023C\x07\x05\x02\x02" +
		"\u023C\u023D\x05B\"\x02\u023D\u023E\x07\x06\x02\x02\u023E\u024E\x03\x02" +
		"\x02\x02\u023F\u0240\x07L\x02\x02\u0240\u0241\x07a\x02\x02\u0241\u0242" +
		"\x07\x05\x02\x02\u0242\u0247\x05\xBE`\x02\u0243\u0244\x07\x07\x02\x02" +
		"\u0244\u0246\x05\xBE`\x02\u0245\u0243\x03\x02\x02\x02\u0246\u0249\x03" +
		"\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248" +
		"\u024A\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A\u024B\x07\x06" +
		"\x02\x02\u024B\u024C\x05(\x15\x02\u024C\u024E\x03\x02\x02\x02\u024D\u022B" +
		"\x03\x02\x02\x02\u024D\u023A\x03\x02\x02\x02\u024D\u023F\x03\x02\x02\x02" +
		"\u024E\'\x03\x02\x02\x02\u024F\u0250\x07w\x02\x02\u0250\u025C\x05\xC2" +
		"b\x02\u0251\u0252\x07\x05\x02\x02\u0252\u0257\x05\xBE`\x02\u0253\u0254" +
		"\x07\x07\x02\x02\u0254\u0256\x05\xBE`\x02\u0255\u0253\x03\x02\x02\x02" +
		"\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03" +
		"\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
		"\u025B\x07\x06\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u0251\x03\x02" +
		"\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u026C\x03\x02\x02\x02\u025E" +
		"\u025F\x07m\x02\x02\u025F\u0266\t\x07\x02\x02\u0260\u0261\x07\x85\x02" +
		"\x02\u0261\u0267\t\b\x02\x02\u0262\u0267\x07+\x02\x02\u0263\u0267\x07" +
		"}\x02\x02\u0264\u0265\x07g\x02\x02\u0265\u0267\x07\x1C\x02\x02\u0266\u0260" +
		"\x03\x02\x02\x02\u0266\u0262\x03\x02\x02\x02\u0266\u0263\x03\x02\x02\x02" +
		"\u0266\u0264\x03\x02\x02\x02\u0267\u026B\x03\x02\x02\x02\u0268\u0269\x07" +
		"e\x02\x02\u0269\u026B\x05\xB4[\x02\u026A\u025E\x03\x02\x02\x02\u026A\u0268" +
		"\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02" +
		"\u026C\u026D\x03\x02\x02\x02\u026D\u0277\x03\x02\x02\x02\u026E\u026C\x03" +
		"\x02\x02\x02\u026F\u0271\x07h\x02\x02\u0270\u026F\x03\x02\x02\x02\u0270" +
		"\u0271\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0275\x07;\x02" +
		"\x02\u0273\u0274\x07X\x02\x02\u0274\u0276\t\t\x02\x02\u0275\u0273\x03" +
		"\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277" +
		"\u0270\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278)\x03\x02\x02" +
		"\x02\u0279\u027A\x07m\x02\x02\u027A\u027B\x072\x02\x02\u027B\u027C\t\n" +
		"\x02\x02\u027C+\x03\x02\x02\x02\u027D\u027F\x074\x02\x02\u027E\u0280\t" +
		"\x04\x02\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280" +
		"\u0281\x03\x02\x02\x02\u0281\u0285\x07\x8C\x02\x02\u0282\u0283\x07R\x02" +
		"\x02\u0283\u0284\x07h\x02\x02\u0284\u0286\x07H\x02\x02\u0285\u0282\x03" +
		"\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u028A\x03\x02\x02\x02\u0287" +
		"\u0288\x05\xB8]\x02\u0288\u0289\x07\x04\x02\x02\u0289\u028B\x03\x02\x02" +
		"\x02\u028A\u0287\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028C" +
		"\x03\x02\x02\x02\u028C\u0291\x05\xC6d\x02\u028D\u0292\x07\'\x02\x02\u028E" +
		"\u0292\x07\x1E\x02\x02\u028F\u0290\x07[\x02\x02\u0290\u0292\x07k\x02\x02" +
		"\u0291\u028D\x03\x02\x02\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F\x03" +
		"\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u02A1\x03\x02\x02\x02\u0293" +
		"\u02A2\x07=\x02\x02\u0294\u02A2\x07Z\x02\x02\u0295\u029F\x07\x8F\x02\x02" +
		"\u0296\u0297\x07k\x02\x02\u0297\u029C\x05\xBE`\x02\u0298\u0299\x07\x07" +
		"\x02\x02\u0299\u029B\x05\xBE`\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029E" +
		"\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02" +
		"\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u0296\x03" +
		"\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1" +
		"\u0293\x03\x02\x02\x02\u02A1\u0294\x03\x02\x02\x02\u02A1\u0295\x03\x02" +
		"\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x07m\x02\x02\u02A4\u02A8" +
		"\x05\xBA^\x02\u02A5\u02A6\x07K\x02\x02\u02A6\u02A7\x07B\x02\x02\u02A7" +
		"\u02A9\x07\x81\x02\x02\u02A8\u02A5\x03\x02\x02\x02\u02A8\u02A9\x03\x02" +
		"\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02AB\x07\x95\x02\x02\u02AB" +
		"\u02AD\x05B\"\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02" +
		"\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B7\x07(\x02\x02\u02AF\u02B4" +
		"\x05n8\x02\u02B0\u02B4\x05L\'\x02\u02B1\u02B4\x05:\x1E\x02\u02B2\u02B4" +
		"\x05X-\x02\u02B3\u02AF\x03\x02\x02\x02\u02B3\u02B0\x03\x02\x02\x02\u02B3" +
		"\u02B1\x03\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
		"\x02\x02\u02B5\u02B6\x07\x03\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7" +
		"\u02B3\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02B7\x03\x02" +
		"\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB" +
		"\u02BC\x07D\x02\x02\u02BC-\x03\x02\x02\x02\u02BD\u02BF\x074\x02\x02\u02BE" +
		"\u02C0\t\x04\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02" +
		"\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C5\x07\x93\x02\x02\u02C2\u02C3" +
		"\x07R\x02\x02\u02C3\u02C4\x07h\x02\x02\u02C4\u02C6\x07H\x02\x02\u02C5" +
		"\u02C2\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02CA\x03\x02" +
		"\x02\x02\u02C7\u02C8\x05\xB8]\x02\u02C8\u02C9\x07\x04\x02\x02\u02C9\u02CB" +
		"\x03\x02\x02\x02\u02CA\u02C7\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02" +
		"\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02D8\x05\xC8e\x02\u02CD\u02CE\x07" +
		"\x05\x02\x02\u02CE\u02D3\x05\xBE`\x02\u02CF\u02D0\x07\x07\x02\x02\u02D0" +
		"\u02D2\x05\xBE`\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02" +
		"\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6" +
		"\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D7\x07\x06\x02\x02" +
		"\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02CD\x03\x02\x02\x02\u02D8\u02D9\x03" +
		"\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x07#\x02\x02\u02DB" +
		"\u02DC\x05X-\x02\u02DC/\x03\x02\x02\x02\u02DD\u02DE\x074\x02\x02\u02DE" +
		"\u02DF\x07\x94\x02\x02\u02DF\u02E3\x07\x86\x02\x02\u02E0\u02E1\x07R\x02" +
		"\x02\u02E1\u02E2\x07h\x02\x02\u02E2\u02E4\x07H\x02\x02\u02E3\u02E0\x03" +
		"\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E8\x03\x02\x02\x02\u02E5" +
		"\u02E6\x05\xB8]\x02\u02E6\u02E7\x07\x04\x02\x02\u02E7\u02E9\x03\x02\x02" +
		"\x02\u02E8\u02E5\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA" +
		"\x03\x02\x02\x02\u02EA\u02EB\x05\xBA^\x02\u02EB\u02EC\x07\x90\x02\x02" +
		"\u02EC\u02F8\x05\xCAf\x02\u02ED\u02EE\x07\x05\x02\x02\u02EE\u02F3\x05" +
		"\xAEX\x02\u02EF\u02F0\x07\x07\x02\x02\u02F0\u02F2\x05\xAEX\x02\u02F1\u02EF" +
		"\x03\x02\x02\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02" +
		"\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F3\x03" +
		"\x02\x02\x02\u02F6\u02F7\x07\x06\x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8" +
		"\u02ED\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F91\x03\x02\x02" +
		"\x02\u02FA\u02FC\x07\x97\x02\x02\u02FB\u02FD\x07v\x02\x02\u02FC\u02FB" +
		"\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02" +
		"\u02FE\u02FF\x054\x1B\x02\u02FF\u0300\x07#\x02\x02\u0300\u0301\x07\x05" +
		"\x02\x02\u0301\u0302\x05X-\x02\u0302\u030C\x07\x06\x02\x02\u0303\u0304" +
		"\x07\x07\x02\x02\u0304\u0305\x054\x1B\x02\u0305\u0306\x07#\x02\x02\u0306" +
		"\u0307\x07\x05\x02\x02\u0307\u0308\x05X-\x02\u0308\u0309\x07\x06\x02\x02" +
		"\u0309\u030B\x03\x02\x02\x02\u030A\u0303\x03\x02\x02\x02\u030B\u030E\x03" +
		"\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D" +
		"3\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F\u031B\x05\xBA^\x02" +
		"\u0310\u0311\x07\x05\x02\x02\u0311\u0316\x05\xBE`\x02\u0312\u0313\x07" +
		"\x07\x02\x02\u0313\u0315\x05\xBE`\x02\u0314\u0312\x03\x02\x02\x02\u0315" +
		"\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02" +
		"\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319" +
		"\u031A\x07\x06\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0310\x03\x02" +
		"\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C5\x03\x02\x02\x02\u031D\u031E" +
		"\x054\x1B\x02\u031E\u031F\x07#\x02\x02\u031F\u0320\x07\x05\x02\x02\u0320" +
		"\u0321\x05\xA6T\x02\u0321\u0323\x07\x8D\x02\x02\u0322\u0324\x07\x1F\x02" +
		"\x02\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0325" +
		"\x03\x02\x02\x02\u0325\u0326\x05\xA8U\x02\u0326\u0327\x07\x06\x02\x02" +
		"\u03277\x03\x02\x02\x02\u0328\u0334\x05\xBA^\x02\u0329\u032A\x07\x05\x02" +
		"\x02\u032A\u032F\x05\xBE`\x02\u032B\u032C\x07\x07\x02\x02\u032C\u032E" +
		"\x05\xBE`\x02\u032D\u032B\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02" +
		"\u032F\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0332\x03" +
		"\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0333\x07\x06\x02\x02\u0333" +
		"\u0335\x03\x02\x02\x02\u0334\u0329\x03\x02\x02\x02\u0334\u0335\x03\x02" +
		"\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0337\x07#\x02\x02\u0337\u0338" +
		"\x07\x05\x02\x02\u0338\u0339\x05X-\x02\u0339\u033A\x07\x06\x02\x02\u033A" +
		"9\x03\x02\x02\x02\u033B\u033D\x052\x1A\x02\u033C\u033B\x03\x02\x02\x02" +
		"\u033C\u033D";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x07=\x02\x02" +
		"\u033F\u0340\x07M\x02\x02\u0340\u0343\x05t;\x02\u0341\u0342\x07\x96\x02" +
		"\x02\u0342\u0344\x05B\"\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03" +
		"\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345\u0347\x05N(\x02\u0346\u0345" +
		"\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347;\x03\x02\x02\x02\u0348" +
		"\u034A\x052\x1A\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A\x03\x02\x02" +
		"\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C\x07=\x02\x02\u034C\u034D" +
		"\x07M\x02\x02\u034D\u0350\x05t;\x02\u034E\u034F\x07\x96\x02\x02\u034F" +
		"\u0351\x05B\"\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02" +
		"\x02\u0351\u0353\x03\x02\x02\x02\u0352\u0354\x05N(\x02\u0353\u0352\x03" +
		"\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0359\x03\x02\x02\x02\u0355" +
		"\u0357\x05\x8AF\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02" +
		"\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035A\x05\x8CG\x02\u0359\u0356" +
		"\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A=\x03\x02\x02\x02\u035B" +
		"\u035D\x07?\x02\x02\u035C\u035E\x079\x02\x02\u035D\u035C\x03\x02\x02\x02" +
		"\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0360\x05" +
		"\xB8]\x02\u0360?\x03\x02\x02\x02\u0361\u0362\x07A\x02\x02\u0362\u0365" +
		"\t\v\x02\x02\u0363\u0364\x07R\x02\x02\u0364\u0366\x07H\x02\x02\u0365\u0363" +
		"\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u036A\x03\x02\x02\x02" +
		"\u0367\u0368\x05\xB8]\x02\u0368\u0369\x07\x04\x02\x02\u0369\u036B\x03" +
		"\x02\x02\x02\u036A\u0367\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B" +
		"\u036C\x03\x02\x02\x02\u036C\u036D\x05\xE2r\x02\u036DA\x03\x02\x02\x02" +
		"\u036E\u036F\b\"\x01\x02\u036F\u03C7\x05F$\x02\u0370\u03C7\x07\xBD\x02" +
		"\x02\u0371\u0372\x05\xB8]\x02\u0372\u0373\x07\x04\x02\x02\u0373\u0375" +
		"\x03\x02\x02\x02\u0374\u0371\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02" +
		"\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x05\xBA^\x02\u0377\u0378\x07" +
		"\x04\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u0374\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u03C7\x05\xBE" +
		"`\x02\u037C\u037D\x05\xAAV\x02\u037D\u037E\x05B\"\x17\u037E\u03C7\x03" +
		"\x02\x02\x02\u037F\u0380\x05\xB6\\\x02\u0380\u038D\x07\x05\x02\x02\u0381" +
		"\u0383\x07@\x02\x02\u0382\u0381\x03\x02\x02\x02\u0382\u0383\x03\x02\x02" +
		"\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0389\x05B\"\x02\u0385\u0386\x07" +
		"\x07\x02\x02\u0386\u0388\x05B\"\x02\u0387\u0385\x03\x02\x02\x02\u0388" +
		"\u038B\x03\x02\x02\x02\u0389\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02" +
		"\x02\x02\u038A\u038E\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038C" +
		"\u038E\x07\t\x02\x02\u038D\u0382\x03\x02\x02\x02\u038D\u038C\x03\x02\x02" +
		"\x02\u038D\u038E\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0391" +
		"\x07\x06\x02\x02\u0390\u0392\x05x=\x02\u0391\u0390\x03\x02\x02\x02\u0391" +
		"\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02\x02\x02\u0393\u0395\x05|?\x02" +
		"\u0394\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u03C7\x03" +
		"\x02\x02\x02\u0396\u0397\x07\x05\x02\x02\u0397\u039C\x05B\"\x02\u0398" +
		"\u0399\x07\x07\x02\x02\u0399\u039B\x05B\"\x02\u039A\u0398\x03\x02\x02" +
		"\x02\u039B\u039E\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039D" +
		"\x03\x02\x02\x02\u039D\u039F\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02" +
		"\u039F\u03A0\x07\x06\x02\x02\u03A0\u03C7\x03\x02\x02\x02\u03A1\u03A2\x07" +
		"-\x02\x02\u03A2\u03A3\x07\x05\x02\x02\u03A3\u03A4\x05B\"\x02\u03A4\u03A5" +
		"\x07#\x02\x02\u03A5\u03A6\x05 \x11\x02\u03A6\u03A7\x07\x06\x02\x02\u03A7" +
		"\u03C7\x03\x02\x02\x02\u03A8\u03AA\x07h\x02\x02\u03A9\u03A8\x03\x02\x02" +
		"\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD" +
		"\x07H\x02\x02\u03AC\u03A9\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02" +
		"\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x07\x05\x02\x02\u03AF\u03B0\x05" +
		"X-\x02\u03B0\u03B1\x07\x06\x02\x02\u03B1\u03C7\x03\x02\x02\x02\u03B2\u03B4" +
		"\x07,\x02\x02\u03B3\u03B5\x05B\"\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4" +
		"\u03B5\x03\x02\x02\x02\u03B5\u03BB\x03\x02\x02\x02\u03B6\u03B7\x07\x95" +
		"\x02\x02\u03B7\u03B8\x05B\"\x02\u03B8\u03B9\x07\x89\x02\x02\u03B9\u03BA" +
		"\x05B\"\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B6\x03\x02\x02\x02\u03BC" +
		"\u03BD\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02" +
		"\x02\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03C0\x07C\x02\x02\u03C0\u03C2" +
		"\x05B\"\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2" +
		"\u03C3\x03\x02\x02\x02\u03C3\u03C4\x07D\x02\x02\u03C4\u03C7\x03\x02\x02" +
		"\x02\u03C5\u03C7\x05D#\x02\u03C6\u036E\x03\x02\x02\x02\u03C6\u0370\x03" +
		"\x02\x02\x02\u03C6\u0379\x03\x02\x02\x02\u03C6\u037C\x03\x02\x02\x02\u03C6" +
		"\u037F\x03\x02\x02\x02\u03C6\u0396\x03\x02\x02\x02\u03C6\u03A1\x03\x02" +
		"\x02\x02\u03C6\u03AC\x03\x02\x02\x02\u03C6\u03B2\x03\x02\x02\x02\u03C6" +
		"\u03C5\x03\x02\x02\x02\u03C7\u043F\x03\x02\x02\x02\u03C8\u03C9\f\x16\x02" +
		"\x02\u03C9\u03CA\x07\r\x02\x02\u03CA\u043E\x05B\"\x17\u03CB\u03CC\f\x15" +
		"\x02\x02\u03CC\u03CD\t\f\x02\x02\u03CD\u043E\x05B\"\x16\u03CE\u03CF\f" +
		"\x14\x02\x02\u03CF\u03D0\t\x06\x02\x02\u03D0\u043E\x05B\"\x15\u03D1\u03D2" +
		"\f\x13\x02\x02\u03D2\u03D3\t\r\x02\x02\u03D3\u043E\x05B\"\x14\u03D4\u03D5" +
		"\f\x12\x02\x02\u03D5\u03D6\t\x0E\x02\x02\u03D6\u043E\x05B\"\x13\u03D7" +
		"\u03E4\f\x11\x02\x02\u03D8\u03E5\x07\b\x02\x02\u03D9\u03E5\x07\x18\x02" +
		"\x02\u03DA\u03E5\x07\x19\x02\x02\u03DB\u03E5\x07\x1A\x02\x02\u03DC\u03E5" +
		"\x07^\x02\x02\u03DD\u03DE\x07^\x02\x02\u03DE\u03E5\x07h\x02\x02\u03DF" +
		"\u03E5\x07U\x02\x02\u03E0\u03E5\x07c\x02\x02\u03E1\u03E5\x07O\x02\x02" +
		"\u03E2\u03E5\x07e\x02\x02\u03E3\u03E5\x07x\x02\x02\u03E4\u03D8\x03\x02" +
		"\x02\x02\u03E4\u03D9\x03\x02\x02\x02\u03E4\u03DA\x03\x02\x02\x02\u03E4" +
		"\u03DB\x03\x02\x02\x02\u03E4\u03DC\x03\x02\x02\x02\u03E4\u03DD\x03\x02" +
		"\x02\x02\u03E4\u03DF\x03\x02\x02\x02\u03E4\u03E0\x03\x02\x02\x02\u03E4" +
		"\u03E1\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E4\u03E3\x03\x02" +
		"\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u043E\x05B\"\x12\u03E7\u03E8" +
		"\f\x10\x02\x02\u03E8\u03E9\x07\"\x02\x02\u03E9\u043E\x05B\"\x11\u03EA" +
		"\u03EB\f\x0F\x02\x02\u03EB\u03EC\x07n\x02\x02\u03EC\u043E\x05B\"\x10\u03ED" +
		"\u03EE\f\b\x02\x02\u03EE\u03F0\x07^\x02\x02\u03EF\u03F1\x07h\x02\x02\u03F0" +
		"\u03EF\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2\x03\x02" +
		"\x02\x02\u03F2\u043E\x05B\"\t\u03F3\u03F5\f\x07\x02\x02\u03F4\u03F6\x07" +
		"h\x02\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6" +
		"\u03F7\x03\x02\x02\x02\u03F7\u03F8\x07)\x02\x02\u03F8\u03F9\x05B\"\x02" +
		"\u03F9\u03FA\x07\"\x02\x02\u03FA\u03FB\x05B\"\b\u03FB\u043E\x03\x02\x02" +
		"\x02\u03FC\u03FD\f\v\x02\x02\u03FD\u03FE\x07/\x02\x02\u03FE\u043E\x05" +
		"\xC0a\x02\u03FF\u0401\f\n\x02\x02\u0400\u0402\x07h\x02\x02\u0401\u0400" +
		"\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02" +
		"\u0403\u0404\t\x0F\x02\x02\u0404\u0407\x05B\"\x02\u0405\u0406\x07E\x02" +
		"\x02\u0406\u0408\x05B\"\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03" +
		"\x02\x02\x02\u0408\u043E\x03\x02\x02\x02\u0409\u040E\f\t\x02\x02\u040A" +
		"\u040F\x07_\x02\x02\u040B\u040F\x07i\x02\x02\u040C\u040D\x07h\x02\x02" +
		"\u040D\u040F\x07j\x02\x02\u040E\u040A\x03\x02\x02\x02\u040E\u040B\x03" +
		"\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u043E\x03\x02\x02\x02\u0410" +
		"\u0412\f\x06\x02\x02\u0411\u0413\x07h\x02\x02\u0412\u0411\x03\x02\x02" +
		"\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u043B" +
		"\x07U\x02\x02\u0415\u041F\x07\x05\x02\x02\u0416\u0420\x05X-\x02\u0417" +
		"\u041C\x05B\"\x02\u0418\u0419\x07\x07\x02\x02\u0419\u041B\x05B\"\x02\u041A" +
		"\u0418\x03\x02\x02\x02\u041B\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02" +
		"\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E" +
		"\u041C\x03\x02\x02\x02\u041F\u0416\x03\x02\x02\x02\u041F\u0417\x03\x02" +
		"\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
		"\u043C\x07\x06\x02\x02\u0422\u0423\x05\xB8]\x02\u0423\u0424\x07\x04\x02" +
		"\x02\u0424\u0426\x03\x02\x02\x02\u0425\u0422\x03\x02\x02\x02\u0425\u0426" +
		"\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u043C\x05\xBA^\x02" +
		"\u0428\u0429\x05\xB8]\x02\u0429\u042A\x07\x04\x02\x02\u042A\u042C\x03" +
		"\x02\x02\x02\u042B\u0428\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C" +
		"\u042D\x03\x02\x02\x02\u042D\u042E\x05\xE0q\x02\u042E\u0437\x07\x05\x02" +
		"\x02\u042F\u0434\x05B\"\x02\u0430\u0431\x07\x07\x02\x02\u0431\u0433\x05" +
		"B\"\x02\u0432\u0430\x03\x02\x02\x02\u0433\u0436\x03\x02\x02\x02\u0434" +
		"\u0432\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0438\x03\x02" +
		"\x02\x02\u0436\u0434\x03\x02\x02\x02\u0437\u042F\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x07\x06" +
		"\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B\u0415\x03\x02\x02\x02\u043B" +
		"\u0425\x03\x02\x02\x02\u043B\u042B\x03\x02\x02\x02\u043C\u043E\x03\x02" +
		"\x02\x02\u043D\u03C8\x03\x02\x02\x02\u043D\u03CB\x03\x02\x02\x02\u043D" +
		"\u03CE\x03\x02\x02\x02\u043D\u03D1\x03\x02\x02\x02\u043D\u03D4\x03\x02" +
		"\x02\x02\u043D\u03D7\x03\x02\x02\x02\u043D\u03E7\x03\x02\x02\x02\u043D" +
		"\u03EA\x03\x02\x02\x02\u043D\u03ED\x03\x02\x02\x02\u043D\u03F3\x03\x02" +
		"\x02\x02\u043D\u03FC\x03\x02\x02\x02\u043D\u03FF\x03\x02\x02\x02\u043D" +
		"\u0409\x03\x02\x02\x02\u043D\u0410\x03\x02\x02\x02\u043E\u0441\x03\x02" +
		"\x02\x02\u043F\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440" +
		"C\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0442\u0443\x07u\x02\x02" +
		"\u0443\u0448\x07\x05\x02\x02\u0444\u0449\x07S\x02\x02\u0445\u0446\t\x10" +
		"\x02\x02\u0446\u0447\x07\x07\x02\x02\u0447\u0449\x05\xACW\x02\u0448\u0444" +
		"\x03\x02\x02\x02\u0448\u0445\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02" +
		"\u044A\u044B\x07\x06\x02\x02\u044BE\x03\x02\x02\x02\u044C\u044D\t\x11" +
		"\x02\x02\u044DG\x03\x02\x02\x02\u044E\u044F\x07\x05\x02\x02\u044F\u0454" +
		"\x05B\"\x02\u0450\u0451\x07\x07\x02\x02\u0451\u0453\x05B\"\x02\u0452\u0450" +
		"\x03\x02\x02\x02\u0453\u0456\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02" +
		"\u0454\u0455\x03\x02\x02\x02\u0455\u0457\x03\x02\x02\x02\u0456\u0454\x03" +
		"\x02\x02\x02\u0457\u0458\x07\x06\x02\x02\u0458I\x03\x02\x02\x02\u0459" +
		"\u045A\x07\x92\x02\x02\u045A\u045F\x05H%\x02\u045B\u045C\x07\x07\x02\x02" +
		"\u045C\u045E\x05H%\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0461\x03\x02" +
		"\x02\x02\u045F\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460" +
		"K\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0464\x052\x1A\x02" +
		"\u0463\u0462\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u046A\x03" +
		"\x02\x02\x02\u0465\u046B\x07Z\x02\x02\u0466\u046B\x07|\x02\x02\u0467\u0468" +
		"\x07Z\x02\x02\u0468\u0469\x07n\x02\x02\u0469\u046B\t\n\x02\x02\u046A\u0465" +
		"\x03\x02\x02\x02\u046A\u0466\x03\x02\x02\x02\u046A\u0467\x03\x02\x02\x02" +
		"\u046B\u046C\x03\x02\x02\x02\u046C\u0470\x07]\x02\x02\u046D\u046E\x05" +
		"\xB8]\x02\u046E\u046F\x07\x04\x02\x02\u046F\u0471\x03\x02\x02\x02\u0470" +
		"\u046D\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0472\x03\x02" +
		"\x02\x02\u0472\u0475\x05\xBA^\x02\u0473\u0474\x07#\x02\x02\u0474\u0476" +
		"\x05\xD0i\x02\u0475\u0473\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02" +
		"\u0476\u0482\x03\x02\x02\x02\u0477\u0478\x07\x05\x02\x02\u0478\u047D\x05" +
		"\xBE`\x02\u0479\u047A\x07\x07\x02\x02\u047A\u047C\x05\xBE`\x02\u047B\u0479" +
		"\x03\x02\x02\x02\u047C\u047F\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02" +
		"\u047D\u047E\x03\x02\x02\x02\u047E\u0480\x03\x02\x02\x02\u047F\u047D\x03" +
		"\x02\x02\x02\u0480\u0481\x07\x06\x02\x02\u0481\u0483\x03\x02\x02\x02\u0482" +
		"\u0477\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u048D\x03\x02" +
		"\x02\x02\u0484\u0487\x05J&\x02\u0485\u0487\x05X-\x02\u0486\u0484\x03\x02" +
		"\x02\x02\u0486\u0485\x03\x02\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488" +
		"\u048A\x05P)\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02" +
		"\u048A\u048E\x03\x02\x02\x02\u048B\u048C\x07:\x02\x02\u048C\u048E\x07" +
		"\x92\x02\x02\u048D\u0486\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E" +
		"\u0490\x03\x02\x02\x02\u048F\u0491\x05N(\x02\u0490\u048F\x03\x02\x02\x02" +
		"\u0490\u0491\x03\x02\x02\x02\u0491M\x03\x02\x02\x02\u0492\u0493\x07~\x02" +
		"\x02\u0493\u0498\x05f4\x02\u0494\u0495\x07\x07\x02\x02\u0495\u0497\x05" +
		"f4\x02\u0496\u0494\x03\x02\x02\x02\u0497\u049A\x03\x02\x02\x02\u0498\u0496" +
		"\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499O\x03\x02\x02\x02\u049A" +
		"\u0498\x03\x02\x02\x02\u049B\u049C\x07m\x02\x02\u049C\u04AB\x072\x02\x02" +
		"\u049D\u049E\x07\x05\x02\x02\u049E\u04A3\x05\x1A\x0E\x02\u049F\u04A0\x07" +
		"\x07\x02\x02\u04A0\u04A2\x05\x1A\x0E\x02\u04A1\u049F\x03\x02\x02\x02\u04A2" +
		"\u04A5\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02" +
		"\x02\x02\u04A4\u04A6\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A6" +
		"\u04A9\x07\x06\x02\x02\u04A7\u04A8\x07\x96\x02\x02\u04A8\u04AA\x05B\"" +
		"\x02\u04A9\u04A7\x03\x02\x02\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AC" +
		"\x03\x02\x02\x02\u04AB\u049D\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02" +
		"\u04AC\u04AD\x03\x02\x02\x02\u04AD\u04C8\x07\xB9\x02\x02\u04AE\u04C9\x07" +
		"\xBA\x02\x02\u04AF\u04B0\x07\x8F\x02\x02\u04B0\u04B3\x07\x85\x02\x02\u04B1" +
		"\u04B4\x05\xBE`\x02\u04B2\u04B4\x05p9\x02\u04B3\u04B1\x03\x02\x02\x02" +
		"\u04B3\u04B2\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x07" +
		"\b\x02\x02\u04B6\u04C1\x05B\"\x02\u04B7\u04BA\x07\x07\x02\x02\u04B8\u04BB" +
		"\x05\xBE`\x02\u04B9\u04BB\x05p9\x02\u04BA\u04B8\x03\x02\x02\x02\u04BA" +
		"\u04B9\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BD\x07\b\x02" +
		"\x02\u04BD\u04BE\x05B\"\x02\u04BE\u04C0\x03\x02\x02\x02\u04BF\u04B7\x03" +
		"\x02\x02\x02\u04C0\u04C3\x03\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C1" +
		"\u04C2\x03\x02\x02\x02\u04C2\u04C6\x03\x02\x02\x02\u04C3\u04C1\x03\x02" +
		"\x02\x02\u04C4\u04C5\x07\x96\x02\x02\u04C5\u04C7\x05B\"\x02\u04C6\u04C4" +
		"\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C9\x03\x02\x02\x02" +
		"\u04C8\u04AE\x03\x02\x02\x02\u04C8\u04AF\x03\x02\x02\x02\u04C9Q\x03\x02" +
		"\x02\x02\u04CA\u04CE\x07r\x02\x02\u04CB\u04CC\x05\xB8]\x02\u04CC\u04CD" +
		"\x07\x04\x02\x02\u04CD\u04CF\x03\x02\x02\x02\u04CE\u04CB\x03\x02\x02\x02" +
		"\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D7\x05" +
		"\xCCg\x02\u04D1\u04D2\x07\b\x02\x02\u04D2\u04D8\x05T+\x02\u04D3\u04D4" +
		"\x07\x05\x02\x02\u04D4\u04D5\x05T+\x02\u04D5\u04D6\x07\x06\x02\x02\u04D6" +
		"\u04D8\x03\x02\x02\x02\u04D7\u04D1\x03\x02\x02\x02\u04D7\u04D3\x03\x02" +
		"\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8S\x03\x02\x02\x02\u04D9\u04DD" +
		"\x05$\x13\x02\u04DA\u04DD\x05\xB4[\x02\u04DB\u04DD\x07\xBE\x02\x02\u04DC" +
		"\u04D9\x03\x02\x02\x02\u04DC\u04DA\x03\x02\x02\x02\u04DC\u04DB\x03\x02" +
		"\x02\x02\u04DDU\x03\x02\x02\x02\u04DE\u04E9\x07y\x02\x02\u04DF\u04EA\x05" +
		"\xC0a\x02\u04E0\u04E1\x05\xB8]\x02\u04E1\u04E2\x07\x04\x02\x02\u04E2\u04E4" +
		"\x03\x02\x02\x02\u04E3\u04E0\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02" +
		"\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E8\x05\xBA^\x02\u04E6\u04E8\x05" +
		"\xC4c\x02\u04E7\u04E5\x03\x02\x02\x02\u04E7\u04E6\x03\x02\x02\x02\u04E8" +
		"\u04EA\x03\x02\x02\x02\u04E9\u04DF\x03\x02\x02\x02\u04E9\u04E3\x03\x02" +
		"\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EAW\x03\x02\x02\x02\u04EB\u04ED" +
		"\x05\x88E\x02\u04EC\u04EB\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02" +
		"\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04F4\x05\\/\x02\u04EF\u04F0\x05l7" +
		"\x02\u04F0\u04F1\x05\\/\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04EF\x03" +
		"\x02\x02\x02\u04F3\u04F6\x03\x02\x02\x02\u04F4\u04F2\x03\x02\x02\x02\u04F4" +
		"\u04F5\x03\x02\x02\x02\u04F5\u04F8\x03\x02\x02\x02\u04F6\u04F4\x03\x02" +
		"\x02\x02\u04F7\u04F9\x05\x8AF\x02\u04F8\u04F7\x03\x02\x02\x02\u04F8\u04F9" +
		"\x03\x02\x02\x02\u04F9\u04FB\x03\x02\x02\x02\u04FA\u04FC\x05\x8CG\x02" +
		"\u04FB\u04FA\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FCY\x03\x02" +
		"\x02\x02\u04FD\u0505\x05d3\x02\u04FE\u04FF\x05h5\x02\u04FF\u0501\x05d" +
		"3\x02\u0500\u0502\x05j6\x02\u0501\u0500\x03\x02\x02\x02\u0501\u0502\x03" +
		"\x02\x02\x02\u0502\u0504\x03\x02\x02\x02\u0503\u04FE\x03\x02\x02\x02\u0504" +
		"\u0507\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0506\x03\x02" +
		"\x02\x02\u0506[\x03\x02\x02\x02\u0507\u0505\x03\x02\x02\x02\u0508\u050A" +
		"\x07\x84\x02\x02\u0509\u050B\t\x12\x02\x02\u050A\u0509\x03\x02\x02\x02" +
		"\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C\u0511\x05" +
		"f4\x02\u050D\u050E\x07\x07\x02\x02\u050E\u0510\x05f4\x02\u050F\u050D\x03" +
		"\x02\x02\x02\u0510\u0513\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02\u0511" +
		"\u0512\x03\x02\x02\x02\u0512\u0520\x03\x02\x02\x02\u0513\u0511\x03\x02" +
		"\x02\x02\u0514\u051E\x07M\x02\x02\u0515\u051A\x05d3\x02\u0516\u0517\x07" +
		"\x07\x02\x02\u0517\u0519\x05d3\x02\u0518\u0516\x03\x02\x02\x02\u0519\u051C" +
		"\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02" +
		"\u051B\u051F\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02\u051D\u051F\x05" +
		"Z.\x02\u051E\u0515\x03\x02\x02\x02\u051E\u051D\x03\x02\x02\x02\u051F\u0521" +
		"\x03\x02\x02\x02\u0520\u0514\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02" +
		"\u0521\u0524\x03\x02\x02\x02\u0522\u0523\x07\x96\x02\x02\u0523\u0525\x05" +
		"B\"\x02\u0524\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525" +
		"\u0534\x03\x02\x02\x02\u0526\u0527\x07P\x02\x02\u0527\u0528\x07*\x02\x02" +
		"\u0528\u052D\x05B\"\x02\u0529\u052A\x07\x07\x02\x02\u052A\u052C\x05B\"" +
		"\x02\u052B\u0529\x03\x02\x02\x02\u052C\u052F\x03\x02\x02\x02\u052D\u052B" +
		"\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u0532\x03\x02\x02\x02" +
		"\u052F\u052D\x03\x02\x02\x02\u0530\u0531\x07Q\x02\x02\u0531\u0533\x05" +
		"B\"\x02\u0532\u0530\x03\x02\x02\x02\u0532\u0533\x03\x02\x02\x02\u0533" +
		"\u0535\x03\x02\x02\x02\u0534\u0526\x03\x02\x02\x02\u0534\u0535\x03\x02" +
		"\x02\x02\u0535\u0544\x03\x02\x02\x02\u0536\u0537\x07\xB0\x02\x02\u0537" +
		"\u0538\x05\xD4k\x02\u0538\u0539\x07#\x02\x02\u0539\u0541\x05z>\x02\u053A" +
		"\u053B\x07\x07\x02\x02\u053B\u053C\x05\xD4k\x02\u053C\u053D\x07#\x02\x02" +
		"\u053D\u053E\x05z>\x02\u053E\u0540\x03\x02\x02\x02\u053F\u053A\x03\x02" +
		"\x02\x02\u0540\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541" +
		"\u0542\x03\x02\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543\u0541\x03\x02" +
		"\x02\x02\u0544\u0536\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545" +
		"\u0548\x03\x02\x02\x02\u0546\u0548\x05J&\x02\u0547\u0508\x03\x02\x02\x02" +
		"\u0547\u0546\x03\x02\x02\x02\u0548]\x03\x02\x02\x02\u0549\u054A\x05X-" +
		"\x02\u054A_\x03\x02\x02\x02\u054B\u054D\x05\x88E\x02\u054C\u054B\x03\x02" +
		"\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E" +
		"\u0550\x05\\/\x02\u054F\u0551\x05\x8AF\x02\u0550\u054F\x03\x02\x02\x02" +
		"\u0550\u0551\x03\x02\x02\x02\u0551\u0553\x03\x02\x02\x02\u0552\u0554\x05" +
		"\x8CG\x02\u0553\u0552\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554" +
		"a\x03\x02\x02\x02\u0555\u0557\x05\x88E\x02\u0556\u0555\x03\x02\x02\x02" +
		"\u0556\u0557\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u0562\x05" +
		"\\/\x02\u0559\u055B\x07\x8D\x02\x02\u055A\u055C\x07\x1F\x02\x02\u055B" +
		"\u055A\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\u0560\x03\x02" +
		"\x02\x02\u055D\u0560\x07\\\x02\x02\u055E\u0560\x07F\x02\x02\u055F\u0559" +
		"\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u055F\u055E\x03\x02\x02\x02" +
		"\u0560\u0561\x03\x02\x02\x02\u0561\u0563\x05\\/\x02\u0562\u055F\x03\x02" +
		"\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0564" +
		"\u0565\x03\x02\x02\x02\u0565\u0567\x03\x02\x02\x02\u0566\u0568\x05\x8A" +
		"F\x02\u0567\u0566\x03\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\u056A" +
		"\x03\x02\x02\x02\u0569\u056B\x05\x8CG\x02\u056A\u0569\x03\x02\x02\x02" +
		"\u056A\u056B\x03\x02\x02\x02\u056Bc\x03\x02\x02\x02\u056C\u056D\x05\xB8" +
		"]\x02\u056D\u056E\x07\x04\x02\x02\u056E\u0570\x03\x02\x02\x02\u056F\u056C" +
		"\x03\x02\x02\x02\u056F\u0570\x03\x02\x02\x02\u0570\u0571\x03\x02\x02\x02" +
		"\u0571\u0576\x05\xBA^\x02\u0572\u0574\x07#\x02\x02\u0573\u0572\x03\x02" +
		"\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0575\x03\x02\x02\x02\u0575" +
		"\u0577\x05\xD0i\x02\u0576\u0573\x03\x02\x02\x02\u0576\u0577\x03\x02\x02" +
		"\x02\u0577\u057D\x03\x02\x02\x02\u0578\u0579\x07W\x02\x02\u0579\u057A" +
		"\x07*\x02\x02\u057A\u057E\x05\xC4c\x02\u057B\u057C\x07h\x02\x02\u057C" +
		"\u057E\x07W\x02\x02\u057D\u0578\x03\x02\x02\x02\u057D\u057B\x03\x02\x02" +
		"\x02\u057D\u057E\x03\x02\x02\x02\u057E\u05AD\x03\x02\x02\x02\u057F\u0580" +
		"\x05\xB8]\x02\u0580\u0581\x07\x04\x02\x02\u0581\u0583\x03\x02\x02\x02" +
		"\u0582\u057F\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02\u0583\u0584\x03" +
		"\x02\x02\x02\u0584\u0585\x05\xE0q\x02\u0585\u0586\x07\x05\x02\x02\u0586" +
		"\u058B\x05B\"\x02\u0587\u0588\x07\x07\x02\x02\u0588\u058A\x05B\"\x02\u0589" +
		"\u0587\x03\x02\x02\x02\u058A\u058D\x03\x02\x02\x02\u058B\u0589\x03\x02" +
		"\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058E\x03\x02\x02\x02\u058D" +
		"\u058B\x03\x02\x02\x02\u058E\u0593\x07\x06\x02\x02\u058F\u0591\x07#\x02" +
		"\x02\u0590\u058F\x03\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0591\u0592" +
		"\x03\x02\x02\x02\u0592\u0594\x05\xD0i\x02\u0593\u0590\x03\x02\x02\x02" +
		"\u0593\u0594\x03\x02\x02\x02\u0594\u05AD\x03\x02\x02\x02\u0595\u059F\x07" +
		"\x05\x02\x02\u0596\u059B\x05d3\x02\u0597\u0598\x07\x07\x02\x02\u0598\u059A" +
		"\x05d3\x02\u0599\u0597\x03\x02\x02\x02\u059A\u059D\x03\x02\x02\x02\u059B" +
		"\u0599\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u05A0\x03\x02" +
		"\x02\x02\u059D\u059B\x03\x02\x02\x02\u059E\u05A0\x05Z.\x02\u059F\u0596" +
		"\x03\x02\x02\x02\u059F\u059E\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02" +
		"\u05A1\u05A2\x07\x06\x02\x02\u05A2\u05AD\x03\x02\x02\x02\u05A3\u05A4\x07" +
		"\x05\x02\x02\u05A4\u05A5\x05X-\x02\u05A5\u05AA\x07\x06\x02\x02\u05A6\u05A8" +
		"\x07#\x02\x02\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02" +
		"\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AB\x05\xD0i\x02\u05AA\u05A7\x03" +
		"\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AD\x03\x02\x02\x02\u05AC" +
		"\u056F\x03\x02\x02\x02\u05AC\u0582\x03\x02\x02\x02\u05AC\u0595\x03\x02" +
		"\x02\x02\u05AC\u05A3\x03\x02\x02\x02\u05ADe\x03\x02\x02\x02\u05AE\u05BB" +
		"\x07\t\x02\x02\u05AF\u05B0\x05\xBA^\x02\u05B0\u05B1\x07\x04\x02\x02\u05B1" +
		"\u05B2\x07\t\x02\x02\u05B2\u05BB\x03\x02\x02\x02\u05B3\u05B8\x05B\"\x02" +
		"\u05B4\u05B6\x07#\x02\x02\u05B5\u05B4\x03\x02\x02\x02\u05B5\u05B6\x03" +
		"\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7\u05B9\x05\xB0Y\x02\u05B8" +
		"\u05B5\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05BB\x03\x02" +
		"\x02\x02\u05BA\u05AE\x03\x02\x02\x02\u05BA\u05AF\x03\x02\x02\x02\u05BA" +
		"\u05B3\x03\x02\x02\x02\u05BBg\x03\x02\x02\x02\u05BC\u05CA\x07\x07\x02" +
		"\x02\u05BD\u05BF\x07f\x02\x02\u05BE\u05BD\x03\x02\x02\x02\u05BE\u05BF" +
		"\x03\x02\x02\x02\u05BF\u05C6\x03\x02\x02\x02\u05C0\u05C2\x07b\x02\x02" +
		"\u05C1\u05C3\x07p\x02\x02\u05C2\u05C1\x03\x02\x02\x02\u05C2\u05C3\x03" +
		"\x02\x02\x02\u05C3\u05C7\x03\x02\x02\x02\u05C4\u05C7\x07Y\x02\x02\u05C5" +
		"\u05C7\x075\x02\x02\u05C6\u05C0\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02" +
		"\x02\u05C6\u05C5\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C8" +
		"\x03\x02\x02\x02\u05C8\u05CA\x07`\x02\x02\u05C9\u05BC\x03\x02\x02\x02" +
		"\u05C9\u05BE\x03\x02\x02\x02\u05CAi\x03\x02\x02\x02\u05CB\u05CC\x07m\x02" +
		"\x02\u05CC\u05DA\x05B\"\x02\u05CD\u05CE\x07\x90\x02\x02\u05CE\u05CF\x07" +
		"\x05\x02\x02\u05CF\u05D4\x05\xBE`\x02\u05D0\u05D1\x07\x07\x02\x02\u05D1" +
		"\u05D3\x05\xBE`\x02\u05D2\u05D0\x03\x02\x02\x02\u05D3\u05D6\x03\x02\x02" +
		"\x02\u05D4\u05D2\x03\x02\x02\x02\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D7" +
		"\x03\x02\x02\x02\u05D6\u05D4\x03\x02\x02\x02\u05D7\u05D8\x07\x06\x02\x02" +
		"\u05D8\u05DA\x03\x02\x02\x02\u05D9\u05CB\x03\x02\x02\x02\u05D9\u05CD\x03" +
		"\x02\x02\x02\u05DAk\x03\x02\x02\x02\u05DB\u05DD\x07\x8D\x02\x02\u05DC" +
		"\u05DE\x07\x1F";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u05DD\u05DC\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE" +
		"\u05E2\x03\x02\x02\x02\u05DF\u05E2\x07\\\x02\x02\u05E0\u05E2\x07F\x02" +
		"\x02\u05E1\u05DB\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1\u05E0" +
		"\x03\x02\x02\x02\u05E2m\x03\x02\x02\x02\u05E3\u05E5\x052\x1A\x02\u05E4" +
		"\u05E3\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E6\x03\x02" +
		"\x02\x02\u05E6\u05E9\x07\x8F\x02\x02\u05E7\u05E8\x07n\x02\x02\u05E8\u05EA" +
		"\t\n\x02\x02\u05E9\u05E7\x03\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA" +
		"\u05EB\x03\x02\x02\x02\u05EB\u05EC\x05t;\x02\u05EC\u05EF\x07\x85\x02\x02" +
		"\u05ED\u05F0\x05\xBE`\x02\u05EE\u05F0\x05p9\x02\u05EF\u05ED\x03\x02\x02" +
		"\x02\u05EF\u05EE\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F2" +
		"\x07\b\x02\x02\u05F2\u05FD\x05B\"\x02\u05F3\u05F6\x07\x07\x02\x02\u05F4" +
		"\u05F7\x05\xBE`\x02\u05F5\u05F7\x05p9\x02\u05F6\u05F4\x03\x02\x02\x02" +
		"\u05F6\u05F5\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05F9\x07" +
		"\b\x02\x02\u05F9\u05FA\x05B\"\x02\u05FA\u05FC\x03\x02\x02\x02\u05FB\u05F3" +
		"\x03\x02\x02\x02\u05FC\u05FF\x03\x02\x02\x02\u05FD\u05FB\x03\x02\x02\x02" +
		"\u05FD\u05FE\x03\x02\x02\x02\u05FE\u060C\x03\x02\x02\x02\u05FF\u05FD\x03" +
		"\x02\x02\x02\u0600\u060A\x07M\x02\x02\u0601\u0606\x05d3\x02\u0602\u0603" +
		"\x07\x07\x02\x02\u0603\u0605\x05d3\x02\u0604\u0602\x03\x02\x02\x02\u0605" +
		"\u0608\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02" +
		"\x02\x02\u0607\u060B\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0609" +
		"\u060B\x05Z.\x02\u060A\u0601\x03\x02\x02\x02\u060A\u0609\x03\x02\x02\x02" +
		"\u060B\u060D\x03\x02\x02\x02\u060C\u0600\x03\x02\x02\x02\u060C\u060D\x03" +
		"\x02\x02\x02\u060D\u0610\x03\x02\x02\x02\u060E\u060F\x07\x96\x02\x02\u060F" +
		"\u0611\x05B\"\x02\u0610\u060E\x03\x02\x02\x02\u0610\u0611\x03\x02\x02" +
		"\x02\u0611\u0613\x03\x02\x02\x02\u0612\u0614\x05N(\x02\u0613\u0612\x03" +
		"\x02\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614o\x03\x02\x02\x02\u0615" +
		"\u0616\x07\x05\x02\x02\u0616\u061B\x05\xBE`\x02\u0617\u0618\x07\x07\x02" +
		"\x02\u0618\u061A\x05\xBE`\x02\u0619\u0617\x03\x02\x02\x02\u061A\u061D" +
		"\x03\x02\x02\x02\u061B\u0619\x03\x02\x02\x02\u061B\u061C\x03\x02\x02\x02" +
		"\u061C\u061E\x03\x02\x02\x02\u061D\u061B\x03\x02\x02\x02\u061E\u061F\x07" +
		"\x06\x02\x02\u061Fq\x03\x02\x02\x02\u0620\u0622\x052\x1A\x02\u0621\u0620" +
		"\x03\x02\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02" +
		"\u0623\u0626\x07\x8F\x02\x02\u0624\u0625\x07n\x02\x02\u0625\u0627\t\n" +
		"\x02\x02\u0626\u0624\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627" +
		"\u0628\x03\x02\x02\x02\u0628\u0629\x05t;\x02\u0629\u062C\x07\x85\x02\x02" +
		"\u062A\u062D\x05\xBE`\x02\u062B\u062D\x05p9\x02\u062C\u062A\x03\x02\x02" +
		"\x02\u062C\u062B\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u062F" +
		"\x07\b\x02\x02\u062F\u063A\x05B\"\x02\u0630\u0633\x07\x07\x02\x02\u0631" +
		"\u0634\x05\xBE`\x02\u0632\u0634\x05p9\x02\u0633\u0631\x03\x02\x02\x02" +
		"\u0633\u0632\x03\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\u0636\x07" +
		"\b\x02\x02\u0636\u0637\x05B\"\x02\u0637\u0639\x03\x02\x02\x02\u0638\u0630" +
		"\x03\x02\x02\x02\u0639\u063C\x03\x02\x02\x02\u063A\u0638\x03\x02\x02\x02" +
		"\u063A\u063B\x03\x02\x02\x02\u063B\u063F\x03\x02\x02\x02\u063C\u063A\x03" +
		"\x02\x02\x02\u063D\u063E\x07\x96\x02\x02\u063E\u0640\x05B\"\x02\u063F" +
		"\u063D\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u0642\x03\x02" +
		"\x02\x02\u0641\u0643\x05N(\x02\u0642\u0641\x03\x02\x02\x02\u0642\u0643" +
		"\x03\x02\x02\x02\u0643\u0648\x03\x02\x02\x02\u0644\u0646\x05\x8AF\x02" +
		"\u0645\u0644\x03\x02\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646\u0647\x03" +
		"\x02\x02\x02\u0647\u0649\x05\x8CG\x02\u0648\u0645\x03\x02\x02\x02\u0648" +
		"\u0649\x03\x02\x02\x02\u0649s\x03\x02\x02\x02\u064A\u064B\x05\xB8]\x02" +
		"\u064B\u064C\x07\x04\x02\x02\u064C\u064E\x03\x02\x02\x02\u064D\u064A\x03" +
		"\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F" +
		"\u0652\x05\xBA^\x02\u0650\u0651\x07#\x02\x02\u0651\u0653\x05\xD6l\x02" +
		"\u0652\u0650\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0659\x03" +
		"\x02\x02\x02\u0654\u0655\x07W\x02\x02\u0655\u0656\x07*\x02\x02\u0656\u065A" +
		"\x05\xC4c\x02\u0657\u0658\x07h\x02\x02\u0658\u065A\x07W\x02\x02\u0659" +
		"\u0654\x03\x02\x02\x02\u0659\u0657\x03\x02\x02\x02\u0659\u065A\x03\x02" +
		"\x02\x02\u065Au\x03\x02\x02\x02\u065B\u065D\x07\x91\x02\x02\u065C\u065E" +
		"\x05\xB8]\x02\u065D\u065C\x03\x02\x02\x02\u065D\u065E\x03\x02\x02\x02" +
		"\u065E\u0661\x03\x02\x02\x02\u065F\u0660\x07]\x02\x02\u0660\u0662\x05" +
		"\xD8m\x02\u0661\u065F\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662" +
		"w\x03\x02\x02\x02\u0663\u0664\x07\xB4\x02\x02\u0664\u0665\x07\x05\x02" +
		"\x02\u0665\u0666\x07\x96\x02\x02\u0666\u0667\x05B\"\x02\u0667\u0668\x07" +
		"\x06\x02\x02\u0668y\x03\x02\x02\x02\u0669\u066B\x07\x05\x02\x02\u066A" +
		"\u066C\x05\xDAn\x02\u066B\u066A\x03\x02\x02\x02\u066B\u066C\x03\x02\x02" +
		"\x02\u066C\u0677\x03\x02\x02\x02\u066D\u066E\x07\x9B\x02\x02\u066E\u066F" +
		"\x07*\x02\x02\u066F\u0674\x05B\"\x02\u0670\u0671\x07\x07\x02\x02\u0671" +
		"\u0673\x05B\"\x02\u0672\u0670\x03\x02\x02\x02\u0673\u0676\x03\x02\x02" +
		"\x02\u0674\u0672\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675\u0678" +
		"\x03\x02\x02\x02\u0676\u0674\x03\x02\x02\x02\u0677\u066D\x03\x02\x02\x02" +
		"\u0677\u0678\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u067A\x07" +
		"o\x02\x02\u067A\u067B\x07*\x02\x02\u067B\u0680\x05\x8EH\x02\u067C\u067D" +
		"\x07\x07\x02\x02\u067D\u067F\x05\x8EH\x02\u067E\u067C\x03\x02\x02\x02" +
		"\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02\x02\x02\u0680\u0681\x03" +
		"\x02\x02\x02\u0681\u0684\x03\x02\x02\x02\u0682\u0680\x03\x02\x02\x02\u0683" +
		"\u0685\x05~@\x02\u0684\u0683\x03\x02\x02\x02\u0684\u0685\x03\x02\x02\x02" +
		"\u0685\u0686\x03\x02\x02\x02\u0686\u0687\x07\x06\x02\x02\u0687{\x03\x02" +
		"\x02\x02\u0688\u06AA\x07\x9A\x02\x02\u0689\u06AB\x05\xD4k\x02\u068A\u068C" +
		"\x07\x05\x02\x02\u068B\u068D\x05\xDAn\x02\u068C\u068B\x03\x02\x02\x02" +
		"\u068C\u068D\x03\x02\x02\x02\u068D\u0698\x03\x02\x02\x02\u068E\u068F\x07" +
		"\x9B\x02\x02\u068F\u0690\x07*\x02\x02\u0690\u0695\x05B\"\x02\u0691\u0692" +
		"\x07\x07\x02\x02\u0692\u0694\x05B\"\x02\u0693\u0691\x03\x02\x02\x02\u0694" +
		"\u0697\x03\x02\x02\x02\u0695\u0693\x03\x02\x02\x02\u0695\u0696\x03\x02" +
		"\x02\x02\u0696\u0699\x03\x02\x02\x02\u0697\u0695\x03\x02\x02\x02\u0698" +
		"\u068E\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u06A4\x03\x02" +
		"\x02\x02\u069A\u069B\x07o\x02\x02\u069B\u069C\x07*\x02\x02\u069C\u06A1" +
		"\x05\x8EH\x02\u069D\u069E\x07\x07\x02\x02\u069E\u06A0\x05\x8EH\x02\u069F" +
		"\u069D\x03\x02\x02\x02\u06A0\u06A3\x03\x02\x02\x02\u06A1\u069F\x03\x02" +
		"\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A5\x03\x02\x02\x02\u06A3" +
		"\u06A1\x03\x02\x02\x02\u06A4\u069A\x03\x02\x02\x02\u06A4\u06A5\x03\x02" +
		"\x02\x02\u06A5\u06A7\x03\x02\x02\x02\u06A6\u06A8\x05~@\x02\u06A7\u06A6" +
		"\x03\x02\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02" +
		"\u06A9\u06AB\x07\x06\x02\x02\u06AA\u0689\x03\x02\x02\x02\u06AA\u068A\x03" +
		"\x02\x02\x02\u06AB}\x03\x02\x02\x02\u06AC\u06B6\x05\x80A\x02\u06AD\u06B4" +
		"\x07\xB6\x02\x02\u06AE\u06AF\x07g\x02\x02\u06AF\u06B5\x07\xB8\x02\x02" +
		"\u06B0\u06B1\x07\x9F\x02\x02\u06B1\u06B5\x07\x81\x02\x02\u06B2\u06B5\x07" +
		"P\x02\x02\u06B3\u06B5\x07\xB7\x02\x02\u06B4\u06AE\x03\x02\x02\x02\u06B4" +
		"\u06B0\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B4\u06B3\x03\x02" +
		"\x02\x02\u06B5\u06B7\x03\x02\x02\x02\u06B6\u06AD\x03\x02\x02\x02\u06B6" +
		"\u06B7\x03\x02\x02\x02\u06B7\x7F\x03\x02\x02\x02\u06B8\u06BF\t\x13\x02" +
		"\x02\u06B9\u06C0\x05\x96L\x02\u06BA\u06BB\x07)\x02\x02\u06BB\u06BC\x05" +
		"\x92J\x02\u06BC\u06BD\x07\"\x02\x02\u06BD\u06BE\x05\x94K\x02\u06BE\u06C0" +
		"\x03\x02\x02\x02\u06BF\u06B9\x03\x02\x02\x02\u06BF\u06BA\x03\x02\x02\x02" +
		"\u06C0\x81\x03\x02\x02\x02\u06C1\u06C2\x05\xDCo\x02\u06C2\u06CC\x07\x05" +
		"\x02\x02\u06C3\u06C8\x05B\"\x02\u06C4\u06C5\x07\x07\x02\x02\u06C5\u06C7" +
		"\x05B\"\x02\u06C6\u06C4\x03\x02\x02\x02\u06C7\u06CA\x03\x02\x02\x02\u06C8" +
		"\u06C6\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CD\x03\x02" +
		"\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CB\u06CD\x07\t\x02\x02\u06CC\u06C3" +
		"\x03\x02\x02\x02\u06CC\u06CB\x03\x02\x02\x02\u06CD\u06CE\x03\x02\x02\x02" +
		"\u06CE\u06CF\x07\x06\x02\x02\u06CF\x83\x03\x02\x02\x02\u06D0\u06D1\x05" +
		"\xDEp\x02\u06D1\u06DE\x07\x05\x02\x02\u06D2\u06D4\x07@\x02\x02\u06D3\u06D2" +
		"\x03\x02\x02\x02\u06D3\u06D4\x03\x02\x02\x02\u06D4\u06D5\x03\x02\x02\x02" +
		"\u06D5\u06DA\x05B\"\x02\u06D6\u06D7\x07\x07\x02\x02\u06D7\u06D9\x05B\"" +
		"\x02\u06D8\u06D6\x03\x02\x02\x02\u06D9\u06DC\x03\x02\x02\x02\u06DA\u06D8" +
		"\x03\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DF\x03\x02\x02\x02" +
		"\u06DC\u06DA\x03\x02\x02\x02\u06DD\u06DF\x07\t\x02\x02\u06DE\u06D3\x03" +
		"\x02\x02\x02\u06DE\u06DD\x03\x02\x02\x02\u06DE\u06DF\x03\x02\x02\x02\u06DF" +
		"\u06E0\x03\x02\x02\x02\u06E0\u06E2\x07\x06\x02\x02\u06E1\u06E3\x05x=\x02" +
		"\u06E2\u06E1\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\x85\x03" +
		"\x02\x02\x02\u06E4\u06E5\x05\x98M\x02\u06E5\u06EF\x07\x05\x02\x02\u06E6" +
		"\u06EB\x05B\"\x02\u06E7\u06E8\x07\x07\x02\x02\u06E8\u06EA\x05B\"\x02\u06E9" +
		"\u06E7\x03\x02\x02\x02\u06EA\u06ED\x03\x02\x02\x02\u06EB\u06E9\x03\x02" +
		"\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06F0\x03\x02\x02\x02\u06ED" +
		"\u06EB\x03\x02\x02\x02\u06EE\u06F0\x07\t\x02\x02\u06EF\u06E6\x03\x02\x02" +
		"\x02\u06EF\u06EE\x03\x02\x02\x02\u06EF\u06F0\x03\x02\x02\x02\u06F0\u06F1" +
		"\x03\x02\x02\x02\u06F1\u06F3\x07\x06\x02\x02\u06F2\u06F4\x05x=\x02\u06F3" +
		"\u06F2\x03\x02\x02\x02\u06F3\u06F4\x03\x02\x02\x02\u06F4\u06F5\x03\x02" +
		"\x02\x02\u06F5\u06F8\x07\x9A\x02\x02\u06F6\u06F9\x05z>\x02\u06F7\u06F9" +
		"\x05\xD4k\x02\u06F8\u06F6\x03\x02\x02\x02\u06F8\u06F7\x03\x02\x02\x02" +
		"\u06F9\x87\x03\x02\x02\x02\u06FA\u06FC\x07\x97\x02\x02\u06FB\u06FD\x07" +
		"v\x02\x02\u06FC\u06FB\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD" +
		"\u06FE\x03\x02\x02\x02\u06FE\u0703\x058\x1D\x02\u06FF\u0700\x07\x07\x02" +
		"\x02\u0700\u0702\x058\x1D\x02\u0701\u06FF\x03\x02\x02\x02\u0702\u0705" +
		"\x03\x02\x02\x02\u0703\u0701\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02" +
		"\u0704\x89\x03\x02\x02\x02\u0705\u0703\x03\x02\x02\x02\u0706\u0707\x07" +
		"o\x02\x02\u0707\u0708\x07*\x02\x02\u0708\u070D\x05\x8EH\x02\u0709\u070A" +
		"\x07\x07\x02\x02\u070A\u070C\x05\x8EH\x02\u070B\u0709\x03\x02\x02\x02" +
		"\u070C\u070F\x03\x02\x02\x02\u070D\u070B\x03\x02\x02\x02\u070D\u070E\x03" +
		"\x02\x02\x02\u070E\x8B\x03\x02\x02\x02\u070F\u070D\x03\x02\x02\x02\u0710" +
		"\u0711\x07d\x02\x02\u0711\u0714\x05B\"\x02\u0712\u0713\t\x14\x02\x02\u0713" +
		"\u0715\x05B\"\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715\x03\x02\x02" +
		"\x02\u0715\x8D\x03\x02\x02\x02\u0716\u0719\x05B\"\x02\u0717\u0718\x07" +
		"/\x02\x02\u0718\u071A\x05\xC0a\x02\u0719\u0717\x03\x02\x02\x02\u0719\u071A" +
		"\x03\x02\x02\x02\u071A\u071C\x03\x02\x02\x02\u071B\u071D\x05\x90I\x02" +
		"\u071C\u071B\x03\x02\x02\x02\u071C\u071D\x03\x02\x02\x02\u071D\u0720\x03" +
		"\x02\x02\x02\u071E\u071F\x07\xB1\x02\x02\u071F\u0721\t\x15\x02\x02\u0720" +
		"\u071E\x03\x02\x02\x02\u0720\u0721\x03\x02\x02\x02\u0721\x8F\x03\x02\x02" +
		"\x02\u0722\u0723\t\x16\x02\x02\u0723\x91\x03\x02\x02\x02\u0724\u0725\x05" +
		"B\"\x02\u0725\u0726\x07\x9D\x02\x02\u0726\u072F\x03\x02\x02\x02\u0727" +
		"\u0728\x05B\"\x02\u0728\u0729\x07\xA0\x02\x02\u0729\u072F\x03\x02\x02" +
		"\x02\u072A\u072B\x07\x9F\x02\x02\u072B\u072F\x07\x81\x02\x02\u072C\u072D" +
		"\x07\x9E\x02\x02\u072D\u072F\x07\x9D\x02\x02\u072E\u0724\x03\x02\x02\x02" +
		"\u072E\u0727\x03\x02\x02\x02\u072E\u072A\x03\x02\x02\x02\u072E\u072C\x03" +
		"\x02\x02\x02\u072F\x93\x03\x02\x02\x02\u0730\u0731\x05B\"\x02\u0731\u0732" +
		"\x07\x9D\x02\x02\u0732\u073B\x03\x02\x02\x02\u0733\u0734\x05B\"\x02\u0734" +
		"\u0735\x07\xA0\x02\x02\u0735\u073B\x03\x02\x02\x02\u0736\u0737\x07\x9F" +
		"\x02\x02\u0737\u073B\x07\x81\x02\x02\u0738\u0739\x07\x9E\x02\x02\u0739" +
		"\u073B\x07\xA0\x02\x02\u073A\u0730\x03\x02\x02\x02\u073A\u0733\x03\x02" +
		"\x02\x02\u073A\u0736\x03\x02\x02\x02\u073A\u0738\x03\x02\x02\x02\u073B" +
		"\x95\x03\x02\x02\x02\u073C\u073D\x05B\"\x02\u073D\u073E\x07\x9D\x02\x02" +
		"\u073E\u0744\x03\x02\x02\x02\u073F\u0740\x07\x9E\x02\x02\u0740\u0744\x07" +
		"\x9D\x02\x02\u0741\u0742\x07\x9F\x02\x02\u0742\u0744\x07\x81\x02\x02\u0743" +
		"\u073C\x03\x02\x02\x02\u0743\u073F\x03\x02\x02\x02\u0743\u0741\x03\x02" +
		"\x02\x02\u0744\x97\x03\x02\x02\x02\u0745\u0746\t\x17\x02\x02\u0746\u0747" +
		"\x07\x05\x02\x02\u0747\u0748\x05B\"\x02\u0748\u0749\x07\x06\x02\x02\u0749" +
		"\u074A\x07\x9A\x02\x02\u074A\u074C\x07\x05\x02\x02\u074B\u074D\x05\x9E" +
		"P\x02\u074C\u074B\x03\x02\x02\x02\u074C\u074D\x03\x02\x02\x02\u074D\u074E" +
		"\x03\x02\x02\x02\u074E\u0750\x05\xA2R\x02\u074F\u0751\x05\x80A\x02\u0750" +
		"\u074F\x03\x02\x02\x02\u0750\u0751\x03\x02\x02\x02\u0751\u0752\x03\x02" +
		"\x02\x02\u0752\u0753\x07\x06\x02\x02\u0753\u079B\x03\x02\x02\x02\u0754" +
		"\u0755\t\x18\x02\x02\u0755\u0756\x07\x05\x02\x02\u0756\u0757\x07\x06\x02" +
		"\x02\u0757\u0758\x07\x9A\x02\x02\u0758\u075A\x07\x05\x02\x02\u0759\u075B" +
		"\x05\x9EP\x02\u075A\u0759\x03\x02\x02\x02\u075A\u075B\x03\x02\x02\x02" +
		"\u075B\u075D\x03\x02\x02\x02\u075C\u075E\x05\xA0Q\x02\u075D\u075C\x03" +
		"\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E\u075F\x03\x02\x02\x02\u075F" +
		"\u079B\x07\x06\x02\x02\u0760\u0761\t\x19\x02\x02\u0761\u0762\x07\x05\x02" +
		"\x02\u0762\u0763\x07\x06\x02\x02\u0763\u0764\x07\x9A\x02\x02\u0764\u0766" +
		"\x07\x05\x02\x02\u0765\u0767\x05\x9EP\x02\u0766\u0765\x03\x02\x02\x02" +
		"\u0766\u0767\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768\u0769\x05" +
		"\xA2R\x02\u0769\u076A\x07\x06\x02\x02\u076A\u079B\x03\x02\x02\x02\u076B" +
		"\u076C\t\x1A\x02\x02\u076C\u076D\x07\x05\x02\x02\u076D\u076F\x05B\"\x02" +
		"\u076E\u0770\x05\x9AN\x02\u076F\u076E\x03\x02\x02\x02\u076F\u0770\x03" +
		"\x02\x02\x02\u0770\u0772\x03\x02\x02\x02\u0771\u0773\x05\x9CO\x02\u0772" +
		"\u0771\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773\u0774\x03\x02" +
		"\x02\x02\u0774\u0775\x07\x06\x02\x02\u0775\u0776\x07\x9A\x02\x02\u0776" +
		"\u0778\x07\x05\x02\x02\u0777\u0779\x05\x9EP\x02\u0778\u0777\x03\x02\x02" +
		"\x02\u0778\u0779\x03\x02\x02\x02\u0779\u077A\x03\x02\x02\x02\u077A\u077B" +
		"\x05\xA2R\x02\u077B\u077C\x07\x06\x02\x02\u077C\u079B\x03\x02\x02\x02" +
		"\u077D\u077E\x07\xA6\x02\x02\u077E\u077F\x07\x05\x02\x02\u077F\u0780\x05" +
		"B\"\x02\u0780\u0781\x07\x07\x02\x02\u0781\u0782\x05$\x13\x02\u0782\u0783" +
		"\x07\x06\x02\x02\u0783\u0784\x07\x9A\x02\x02\u0784\u0786\x07\x05\x02\x02" +
		"\u0785\u0787\x05\x9EP\x02\u0786\u0785\x03\x02\x02\x02\u0786\u0787\x03" +
		"\x02\x02\x02\u0787\u0788\x03\x02\x02\x02\u0788\u078A\x05\xA2R\x02\u0789" +
		"\u078B\x05\x80A\x02\u078A\u0789\x03\x02\x02\x02\u078A\u078B\x03\x02\x02" +
		"\x02\u078B\u078C\x03\x02\x02\x02\u078C\u078D\x07\x06\x02\x02\u078D\u079B" +
		"\x03\x02\x02\x02\u078E\u078F\x07\xA7\x02\x02\u078F\u0790\x07\x05\x02\x02" +
		"\u0790\u0791\x05B\"\x02\u0791\u0792\x07\x06\x02\x02\u0792\u0793\x07\x9A" +
		"\x02\x02\u0793\u0795\x07\x05\x02\x02\u0794\u0796\x05\x9EP\x02\u0795\u0794" +
		"\x03\x02\x02\x02\u0795\u0796\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02" +
		"\u0797\u0798\x05\xA2R\x02\u0798\u0799\x07\x06\x02\x02\u0799\u079B\x03" +
		"\x02\x02\x02\u079A\u0745\x03\x02\x02\x02\u079A\u0754\x03\x02\x02\x02\u079A" +
		"\u0760\x03\x02\x02\x02\u079A\u076B\x03\x02\x02\x02\u079A\u077D\x03\x02" +
		"\x02\x02\u079A\u078E\x03\x02\x02\x02\u079B\x99\x03\x02\x02\x02\u079C\u079D" +
		"\x07\x07\x02\x02\u079D\u079E\x05$\x13\x02\u079E\x9B\x03\x02\x02\x02\u079F" +
		"\u07A0\x07\x07\x02\x02\u07A0\u07A1\x05$\x13\x02\u07A1\x9D\x03\x02\x02" +
		"\x02\u07A2\u07A3\x07\x9B\x02\x02\u07A3\u07A5\x07*\x02\x02\u07A4\u07A6" +
		"\x05B\"\x02\u07A5\u07A4\x03\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7" +
		"\u07A5\x03\x02\x02\x02\u07A7\u07A8\x03\x02\x02\x02\u07A8\x9F\x03\x02\x02" +
		"\x02\u07A9\u07AA\x07o\x02\x02\u07AA\u07AC\x07*\x02\x02\u07AB\u07AD\x05" +
		"B\"\x02\u07AC\u07AB\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE" +
		"\u07AC\x03\x02\x02\x02\u07AE\u07AF\x03\x02\x02\x02\u07AF\xA1\x03\x02\x02" +
		"\x02\u07B0\u07B1\x07o\x02\x02\u07B1\u07B2\x07*\x02\x02\u07B2\u07B3\x05" +
		"\xA4S\x02\u07B3\xA3\x03\x02\x02\x02\u07B4\u07B6\x05B\"\x02\u07B5\u07B7" +
		"\x05\x90I\x02\u07B6\u07B5\x03\x02\x02\x02\u07B6\u07B7\x03\x02\x02\x02" +
		"\u07B7\u07BF\x03\x02\x02\x02\u07B8\u07B9\x07\x07\x02\x02\u07B9\u07BB\x05" +
		"B\"\x02\u07BA\u07BC\x05\x90I\x02\u07BB\u07BA\x03\x02\x02\x02\u07BB\u07BC" +
		"\x03\x02\x02\x02\u07BC\u07BE\x03\x02\x02\x02\u07BD\u07B8\x03\x02\x02\x02" +
		"\u07BE\u07C1\x03\x02\x02\x02\u07BF\u07BD\x03\x02\x02\x02\u07BF\u07C0\x03" +
		"\x02\x02\x02\u07C0\xA5\x03\x02\x02\x02\u07C1\u07BF\x03\x02\x02\x02\u07C2" +
		"\u07C3\x05X-\x02\u07C3\xA7\x03\x02\x02\x02\u07C4\u07C5\x05X-\x02\u07C5" +
		"\xA9\x03\x02\x02\x02\u07C6\u07C7\t\x1B\x02\x02\u07C7\xAB\x03\x02\x02\x02" +
		"\u07C8\u07C9\x07\xBE\x02\x02\u07C9\xAD\x03\x02\x02\x02\u07CA\u07CD\x05" +
		"B\"\x02\u07CB\u07CD\x05\x1E\x10\x02\u07CC\u07CA\x03\x02\x02\x02\u07CC" +
		"\u07CB\x03\x02\x02\x02\u07CD\xAF\x03\x02\x02\x02\u07CE\u07CF\t\x1C\x02" +
		"\x02\u07CF\xB1\x03\x02\x02\x02\u07D0\u07D1\t\x1D\x02\x02\u07D1\xB3\x03" +
		"\x02\x02\x02\u07D2\u07D3\x05\xE2r\x02\u07D3\xB5\x03\x02\x02\x02\u07D4" +
		"\u07D5\x05\xE2r\x02\u07D5\xB7\x03\x02\x02\x02\u07D6\u07D7\x05\xE2r\x02" +
		"\u07D7\xB9\x03\x02\x02\x02\u07D8\u07D9\x05\xE2r\x02\u07D9\xBB\x03\x02" +
		"\x02\x02\u07DA\u07DB\x05\xE2r\x02\u07DB\xBD\x03\x02\x02\x02\u07DC\u07DD" +
		"\x05\xE2r\x02\u07DD\xBF\x03\x02\x02\x02\u07DE\u07DF\x05\xE2r\x02\u07DF" +
		"\xC1\x03\x02\x02\x02\u07E0\u07E1\x05\xE2r\x02\u07E1\xC3\x03\x02\x02\x02" +
		"\u07E2\u07E3\x05\xE2r\x02\u07E3\xC5\x03\x02\x02\x02\u07E4\u07E5\x05\xE2" +
		"r\x02\u07E5\xC7\x03\x02\x02\x02\u07E6\u07E7\x05\xE2r\x02\u07E7\xC9\x03" +
		"\x02\x02\x02\u07E8\u07E9\x05\xE2r\x02\u07E9\xCB\x03\x02\x02\x02\u07EA" +
		"\u07EB\x05\xE2r\x02\u07EB\xCD\x03\x02\x02\x02\u07EC\u07ED\x05\xE2r\x02" +
		"\u07ED\xCF\x03\x02\x02\x02\u07EE\u07EF\x05\xE2r\x02\u07EF\xD1\x03\x02" +
		"\x02\x02\u07F0\u07F1\x05\xE2r\x02\u07F1\xD3\x03\x02\x02\x02\u07F2\u07F3" +
		"\x05\xE2r\x02\u07F3\xD5\x03\x02\x02\x02\u07F4\u07F5\x05\xE2r\x02\u07F5" +
		"\xD7\x03\x02\x02\x02\u07F6\u07F7\x05\xE2r\x02\u07F7\xD9\x03\x02\x02\x02" +
		"\u07F8\u07F9\x05\xE2r\x02\u07F9\xDB\x03\x02\x02\x02\u07FA\u07FB\x05\xE2" +
		"r\x02\u07FB\xDD\x03\x02\x02\x02\u07FC\u07FD\x05\xE2r\x02\u07FD\xDF\x03" +
		"\x02\x02\x02\u07FE\u07FF\x05\xE2r\x02\u07FF\xE1\x03\x02\x02\x02\u0800" +
		"\u0808\x07\xBB\x02\x02\u0801\u0808\x05\xB2Z\x02\u0802\u0808\x07\xBE\x02" +
		"\x02\u0803\u0804\x07\x05\x02\x02\u0804\u0805\x05\xE2r\x02\u0805\u0806" +
		"\x07\x06\x02\x02\u0806\u0808\x03\x02\x02\x02\u0807\u0800\x03\x02\x02\x02" +
		"\u0807\u0801\x03\x02\x02\x02\u0807\u0802\x03\x02\x02\x02\u0807\u0803\x03" +
		"\x02\x02\x02\u0808\xE3\x03\x02\x02\x02\u012A\xE7\xEF\xF6\xFB\u0101\u0107" +
		"\u0109\u0123\u012A\u0131\u0137\u013B\u0140\u0143\u014A\u014D\u0151\u0159" +
		"\u015D\u015F\u0163\u0167\u016B\u016E\u0175\u017B\u0181\u0186\u0191\u0197" +
		"\u019B\u019F\u01A2\u01A6\u01AC\u01B1\u01BA\u01C1\u01C7\u01CB\u01CF\u01D4" +
		"\u01DA\u01E6\u01EA\u01EF\u01F2\u01F5\u01F8\u01FC\u01FF\u020D\u0214\u021B" +
		"\u021D\u0220\u0226\u022B\u0233\u0238\u0247\u024D\u0257\u025C\u0266\u026A" +
		"\u026C\u0270\u0275\u0277\u027F\u0285\u028A\u0291\u029C\u029F\u02A1\u02A8" +
		"\u02AC\u02B3\u02B9\u02BF\u02C5\u02CA\u02D3\u02D8\u02E3\u02E8\u02F3\u02F8" +
		"\u02FC\u030C\u0316\u031B\u0323\u032F\u0334\u033C\u0343\u0346\u0349\u0350" +
		"\u0353\u0356\u0359\u035D\u0365\u036A\u0374\u0379\u0382\u0389\u038D\u0391" +
		"\u0394\u039C\u03A9\u03AC\u03B4\u03BD\u03C1\u03C6\u03E4\u03F0\u03F5\u0401" +
		"\u0407\u040E\u0412\u041C\u041F\u0425\u042B\u0434\u0437\u043B\u043D\u043F" +
		"\u0448\u0454\u045F\u0463\u046A\u0470\u0475\u047D\u0482\u0486\u0489\u048D" +
		"\u0490\u0498\u04A3\u04A9\u04AB\u04B3\u04BA\u04C1\u04C6\u04C8\u04CE\u04D7" +
		"\u04DC\u04E3\u04E7\u04E9\u04EC\u04F4\u04F8\u04FB\u0501\u0505\u050A\u0511" +
		"\u051A\u051E\u0520\u0524\u052D\u0532\u0534\u0541\u0544\u0547\u054C\u0550" +
		"\u0553\u0556\u055B\u055F\u0564\u0567\u056A\u056F\u0573\u0576\u057D\u0582" +
		"\u058B\u0590\u0593\u059B\u059F\u05A7\u05AA\u05AC\u05B5\u05B8\u05BA\u05BE" +
		"\u05C2\u05C6\u05C9\u05D4\u05D9\u05DD\u05E1\u05E4\u05E9\u05EF\u05F6\u05FD" +
		"\u0606\u060A\u060C\u0610\u0613\u061B\u0621\u0626\u062C\u0633\u063A\u063F" +
		"\u0642\u0645\u0648\u064D\u0652\u0659\u065D\u0661\u066B\u0674\u0677\u0680" +
		"\u0684\u068C\u0695\u0698\u06A1\u06A4\u06A7\u06AA\u06B4\u06B6\u06BF\u06C8" +
		"\u06CC\u06D3\u06DA\u06DE\u06E2\u06EB\u06EF\u06F3\u06F8\u06FC\u0703\u070D" +
		"\u0714\u0719\u071C\u0720\u072E\u073A\u0743\u074C\u0750\u075A\u075D\u0766" +
		"\u076F\u0772\u0778\u0786\u078A\u0795\u079A\u07A7\u07AE\u07B6\u07BB\u07BF" +
		"\u07CC\u0807";
	public static readonly _serializedATN: string = Utils.join(
		[
			SQLiteParser._serializedATNSegment0,
			SQLiteParser._serializedATNSegment1,
			SQLiteParser._serializedATNSegment2,
			SQLiteParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLiteParser.__ATN) {
			SQLiteParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SQLiteParser._serializedATN));
		}

		return SQLiteParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SQLiteParser.EOF, 0); }
	public sql_stmt_list(): Sql_stmt_listContext[];
	public sql_stmt_list(i: number): Sql_stmt_listContext;
	public sql_stmt_list(i?: number): Sql_stmt_listContext | Sql_stmt_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sql_stmt_listContext);
		} else {
			return this.getRuleContext(i, Sql_stmt_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_parse; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
}


export class Sql_stmt_listContext extends ParserRuleContext {
	public sql_stmt(): Sql_stmtContext[];
	public sql_stmt(i: number): Sql_stmtContext;
	public sql_stmt(i?: number): Sql_stmtContext | Sql_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sql_stmtContext);
		} else {
			return this.getRuleContext(i, Sql_stmtContext);
		}
	}
	public SCOL(): TerminalNode[];
	public SCOL(i: number): TerminalNode;
	public SCOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.SCOL);
		} else {
			return this.getToken(SQLiteParser.SCOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_sql_stmt_list; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSql_stmt_list) {
			listener.enterSql_stmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSql_stmt_list) {
			listener.exitSql_stmt_list(this);
		}
	}
}


export class Sql_stmtContext extends ParserRuleContext {
	public alter_table_stmt(): Alter_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Alter_table_stmtContext);
	}
	public analyze_stmt(): Analyze_stmtContext | undefined {
		return this.tryGetRuleContext(0, Analyze_stmtContext);
	}
	public attach_stmt(): Attach_stmtContext | undefined {
		return this.tryGetRuleContext(0, Attach_stmtContext);
	}
	public begin_stmt(): Begin_stmtContext | undefined {
		return this.tryGetRuleContext(0, Begin_stmtContext);
	}
	public commit_stmt(): Commit_stmtContext | undefined {
		return this.tryGetRuleContext(0, Commit_stmtContext);
	}
	public create_index_stmt(): Create_index_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_index_stmtContext);
	}
	public create_table_stmt(): Create_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_table_stmtContext);
	}
	public create_trigger_stmt(): Create_trigger_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_trigger_stmtContext);
	}
	public create_view_stmt(): Create_view_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_view_stmtContext);
	}
	public create_virtual_table_stmt(): Create_virtual_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_virtual_table_stmtContext);
	}
	public delete_stmt(): Delete_stmtContext | undefined {
		return this.tryGetRuleContext(0, Delete_stmtContext);
	}
	public delete_stmt_limited(): Delete_stmt_limitedContext | undefined {
		return this.tryGetRuleContext(0, Delete_stmt_limitedContext);
	}
	public detach_stmt(): Detach_stmtContext | undefined {
		return this.tryGetRuleContext(0, Detach_stmtContext);
	}
	public drop_stmt(): Drop_stmtContext | undefined {
		return this.tryGetRuleContext(0, Drop_stmtContext);
	}
	public insert_stmt(): Insert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Insert_stmtContext);
	}
	public pragma_stmt(): Pragma_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pragma_stmtContext);
	}
	public reindex_stmt(): Reindex_stmtContext | undefined {
		return this.tryGetRuleContext(0, Reindex_stmtContext);
	}
	public release_stmt(): Release_stmtContext | undefined {
		return this.tryGetRuleContext(0, Release_stmtContext);
	}
	public rollback_stmt(): Rollback_stmtContext | undefined {
		return this.tryGetRuleContext(0, Rollback_stmtContext);
	}
	public savepoint_stmt(): Savepoint_stmtContext | undefined {
		return this.tryGetRuleContext(0, Savepoint_stmtContext);
	}
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	public update_stmt(): Update_stmtContext | undefined {
		return this.tryGetRuleContext(0, Update_stmtContext);
	}
	public update_stmt_limited(): Update_stmt_limitedContext | undefined {
		return this.tryGetRuleContext(0, Update_stmt_limitedContext);
	}
	public vacuum_stmt(): Vacuum_stmtContext | undefined {
		return this.tryGetRuleContext(0, Vacuum_stmtContext);
	}
	public EXPLAIN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXPLAIN_, 0); }
	public QUERY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.QUERY_, 0); }
	public PLAN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PLAN_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_sql_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSql_stmt) {
			listener.enterSql_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSql_stmt) {
			listener.exitSql_stmt(this);
		}
	}
}


export class Alter_table_stmtContext extends ParserRuleContext {
	public _new_table_name!: Table_nameContext;
	public _old_column_name!: Column_nameContext;
	public _new_column_name!: Column_nameContext;
	public ALTER_(): TerminalNode { return this.getToken(SQLiteParser.ALTER_, 0); }
	public TABLE_(): TerminalNode { return this.getToken(SQLiteParser.TABLE_, 0); }
	public table_name(): Table_nameContext[];
	public table_name(i: number): Table_nameContext;
	public table_name(i?: number): Table_nameContext | Table_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Table_nameContext);
		} else {
			return this.getRuleContext(i, Table_nameContext);
		}
	}
	public RENAME_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RENAME_, 0); }
	public ADD_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ADD_, 0); }
	public column_def(): Column_defContext | undefined {
		return this.tryGetRuleContext(0, Column_defContext);
	}
	public DROP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DROP_, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public TO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TO_, 0); }
	public COLUMN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLUMN_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_alter_table_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAlter_table_stmt) {
			listener.enterAlter_table_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAlter_table_stmt) {
			listener.exitAlter_table_stmt(this);
		}
	}
}


export class Analyze_stmtContext extends ParserRuleContext {
	public ANALYZE_(): TerminalNode { return this.getToken(SQLiteParser.ANALYZE_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public table_or_index_name(): Table_or_index_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_or_index_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_analyze_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAnalyze_stmt) {
			listener.enterAnalyze_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAnalyze_stmt) {
			listener.exitAnalyze_stmt(this);
		}
	}
}


export class Attach_stmtContext extends ParserRuleContext {
	public ATTACH_(): TerminalNode { return this.getToken(SQLiteParser.ATTACH_, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public AS_(): TerminalNode { return this.getToken(SQLiteParser.AS_, 0); }
	public schema_name(): Schema_nameContext {
		return this.getRuleContext(0, Schema_nameContext);
	}
	public DATABASE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DATABASE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_attach_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAttach_stmt) {
			listener.enterAttach_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAttach_stmt) {
			listener.exitAttach_stmt(this);
		}
	}
}


export class Begin_stmtContext extends ParserRuleContext {
	public BEGIN_(): TerminalNode { return this.getToken(SQLiteParser.BEGIN_, 0); }
	public TRANSACTION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRANSACTION_, 0); }
	public DEFERRED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFERRED_, 0); }
	public IMMEDIATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IMMEDIATE_, 0); }
	public EXCLUSIVE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXCLUSIVE_, 0); }
	public transaction_name(): Transaction_nameContext | undefined {
		return this.tryGetRuleContext(0, Transaction_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_begin_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterBegin_stmt) {
			listener.enterBegin_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitBegin_stmt) {
			listener.exitBegin_stmt(this);
		}
	}
}


export class Commit_stmtContext extends ParserRuleContext {
	public COMMIT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMIT_, 0); }
	public END_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.END_, 0); }
	public TRANSACTION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRANSACTION_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_commit_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCommit_stmt) {
			listener.enterCommit_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCommit_stmt) {
			listener.exitCommit_stmt(this);
		}
	}
}


export class Rollback_stmtContext extends ParserRuleContext {
	public ROLLBACK_(): TerminalNode { return this.getToken(SQLiteParser.ROLLBACK_, 0); }
	public TRANSACTION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRANSACTION_, 0); }
	public TO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TO_, 0); }
	public savepoint_name(): Savepoint_nameContext | undefined {
		return this.tryGetRuleContext(0, Savepoint_nameContext);
	}
	public SAVEPOINT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SAVEPOINT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_rollback_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterRollback_stmt) {
			listener.enterRollback_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitRollback_stmt) {
			listener.exitRollback_stmt(this);
		}
	}
}


export class Savepoint_stmtContext extends ParserRuleContext {
	public SAVEPOINT_(): TerminalNode { return this.getToken(SQLiteParser.SAVEPOINT_, 0); }
	public savepoint_name(): Savepoint_nameContext {
		return this.getRuleContext(0, Savepoint_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_savepoint_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSavepoint_stmt) {
			listener.enterSavepoint_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSavepoint_stmt) {
			listener.exitSavepoint_stmt(this);
		}
	}
}


export class Release_stmtContext extends ParserRuleContext {
	public RELEASE_(): TerminalNode { return this.getToken(SQLiteParser.RELEASE_, 0); }
	public savepoint_name(): Savepoint_nameContext {
		return this.getRuleContext(0, Savepoint_nameContext);
	}
	public SAVEPOINT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SAVEPOINT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_release_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterRelease_stmt) {
			listener.enterRelease_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitRelease_stmt) {
			listener.exitRelease_stmt(this);
		}
	}
}


export class Create_index_stmtContext extends ParserRuleContext {
	public CREATE_(): TerminalNode { return this.getToken(SQLiteParser.CREATE_, 0); }
	public INDEX_(): TerminalNode { return this.getToken(SQLiteParser.INDEX_, 0); }
	public index_name(): Index_nameContext {
		return this.getRuleContext(0, Index_nameContext);
	}
	public ON_(): TerminalNode { return this.getToken(SQLiteParser.ON_, 0); }
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public indexed_column(): Indexed_columnContext[];
	public indexed_column(i: number): Indexed_columnContext;
	public indexed_column(i?: number): Indexed_columnContext | Indexed_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Indexed_columnContext);
		} else {
			return this.getRuleContext(i, Indexed_columnContext);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public UNIQUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNIQUE_, 0); }
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_create_index_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCreate_index_stmt) {
			listener.enterCreate_index_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCreate_index_stmt) {
			listener.exitCreate_index_stmt(this);
		}
	}
}


export class Indexed_columnContext extends ParserRuleContext {
	public column_name(): Column_nameContext | undefined {
		return this.tryGetRuleContext(0, Column_nameContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public COLLATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLLATE_, 0); }
	public collation_name(): Collation_nameContext | undefined {
		return this.tryGetRuleContext(0, Collation_nameContext);
	}
	public asc_desc(): Asc_descContext | undefined {
		return this.tryGetRuleContext(0, Asc_descContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_indexed_column; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterIndexed_column) {
			listener.enterIndexed_column(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitIndexed_column) {
			listener.exitIndexed_column(this);
		}
	}
}


export class Create_table_stmtContext extends ParserRuleContext {
	public _row_ROW_ID!: Token;
	public CREATE_(): TerminalNode { return this.getToken(SQLiteParser.CREATE_, 0); }
	public TABLE_(): TerminalNode { return this.getToken(SQLiteParser.TABLE_, 0); }
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public column_def(): Column_defContext[];
	public column_def(i: number): Column_defContext;
	public column_def(i?: number): Column_defContext | Column_defContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_defContext);
		} else {
			return this.getRuleContext(i, Column_defContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public TEMP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMP_, 0); }
	public TEMPORARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMPORARY_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public table_constraint(): Table_constraintContext[];
	public table_constraint(i: number): Table_constraintContext;
	public table_constraint(i?: number): Table_constraintContext | Table_constraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Table_constraintContext);
		} else {
			return this.getRuleContext(i, Table_constraintContext);
		}
	}
	public WITHOUT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WITHOUT_, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_create_table_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCreate_table_stmt) {
			listener.enterCreate_table_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCreate_table_stmt) {
			listener.exitCreate_table_stmt(this);
		}
	}
}


export class Column_defContext extends ParserRuleContext {
	public column_name(): Column_nameContext {
		return this.getRuleContext(0, Column_nameContext);
	}
	public type_name(): Type_nameContext | undefined {
		return this.tryGetRuleContext(0, Type_nameContext);
	}
	public column_constraint(): Column_constraintContext[];
	public column_constraint(i: number): Column_constraintContext;
	public column_constraint(i?: number): Column_constraintContext | Column_constraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_constraintContext);
		} else {
			return this.getRuleContext(i, Column_constraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_column_def; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterColumn_def) {
			listener.enterColumn_def(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitColumn_def) {
			listener.exitColumn_def(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public signed_number(): Signed_numberContext[];
	public signed_number(i: number): Signed_numberContext;
	public signed_number(i?: number): Signed_numberContext | Signed_numberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Signed_numberContext);
		} else {
			return this.getRuleContext(i, Signed_numberContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_type_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterType_name) {
			listener.enterType_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitType_name) {
			listener.exitType_name(this);
		}
	}
}


export class Column_constraintContext extends ParserRuleContext {
	public CHECK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CHECK_, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public DEFAULT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFAULT_, 0); }
	public COLLATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLLATE_, 0); }
	public collation_name(): Collation_nameContext | undefined {
		return this.tryGetRuleContext(0, Collation_nameContext);
	}
	public foreign_key_clause(): Foreign_key_clauseContext | undefined {
		return this.tryGetRuleContext(0, Foreign_key_clauseContext);
	}
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public CONSTRAINT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CONSTRAINT_, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public PRIMARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRIMARY_, 0); }
	public KEY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.KEY_, 0); }
	public NULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NULL_, 0); }
	public UNIQUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNIQUE_, 0); }
	public signed_number(): Signed_numberContext | undefined {
		return this.tryGetRuleContext(0, Signed_numberContext);
	}
	public literal_value(): Literal_valueContext | undefined {
		return this.tryGetRuleContext(0, Literal_valueContext);
	}
	public conflict_clause(): Conflict_clauseContext | undefined {
		return this.tryGetRuleContext(0, Conflict_clauseContext);
	}
	public GENERATED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GENERATED_, 0); }
	public ALWAYS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALWAYS_, 0); }
	public STORED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STORED_, 0); }
	public VIRTUAL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VIRTUAL_, 0); }
	public asc_desc(): Asc_descContext | undefined {
		return this.tryGetRuleContext(0, Asc_descContext);
	}
	public AUTOINCREMENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AUTOINCREMENT_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_column_constraint; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterColumn_constraint) {
			listener.enterColumn_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitColumn_constraint) {
			listener.exitColumn_constraint(this);
		}
	}
}


export class Signed_numberContext extends ParserRuleContext {
	public NUMERIC_LITERAL(): TerminalNode { return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_signed_number; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSigned_number) {
			listener.enterSigned_number(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSigned_number) {
			listener.exitSigned_number(this);
		}
	}
}


export class Table_constraintContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public indexed_column(): Indexed_columnContext[];
	public indexed_column(i: number): Indexed_columnContext;
	public indexed_column(i?: number): Indexed_columnContext | Indexed_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Indexed_columnContext);
		} else {
			return this.getRuleContext(i, Indexed_columnContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public CHECK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CHECK_, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public FOREIGN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOREIGN_, 0); }
	public KEY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.KEY_, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public foreign_key_clause(): Foreign_key_clauseContext | undefined {
		return this.tryGetRuleContext(0, Foreign_key_clauseContext);
	}
	public CONSTRAINT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CONSTRAINT_, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public PRIMARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRIMARY_, 0); }
	public UNIQUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNIQUE_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public conflict_clause(): Conflict_clauseContext | undefined {
		return this.tryGetRuleContext(0, Conflict_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_table_constraint; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTable_constraint) {
			listener.enterTable_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTable_constraint) {
			listener.exitTable_constraint(this);
		}
	}
}


export class Foreign_key_clauseContext extends ParserRuleContext {
	public REFERENCES_(): TerminalNode { return this.getToken(SQLiteParser.REFERENCES_, 0); }
	public foreign_table(): Foreign_tableContext {
		return this.getRuleContext(0, Foreign_tableContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public ON_(): TerminalNode[];
	public ON_(i: number): TerminalNode;
	public ON_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.ON_);
		} else {
			return this.getToken(SQLiteParser.ON_, i);
		}
	}
	public MATCH_(): TerminalNode[];
	public MATCH_(i: number): TerminalNode;
	public MATCH_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.MATCH_);
		} else {
			return this.getToken(SQLiteParser.MATCH_, i);
		}
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public DEFERRABLE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFERRABLE_, 0); }
	public DELETE_(): TerminalNode[];
	public DELETE_(i: number): TerminalNode;
	public DELETE_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.DELETE_);
		} else {
			return this.getToken(SQLiteParser.DELETE_, i);
		}
	}
	public UPDATE_(): TerminalNode[];
	public UPDATE_(i: number): TerminalNode;
	public UPDATE_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.UPDATE_);
		} else {
			return this.getToken(SQLiteParser.UPDATE_, i);
		}
	}
	public SET_(): TerminalNode[];
	public SET_(i: number): TerminalNode;
	public SET_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.SET_);
		} else {
			return this.getToken(SQLiteParser.SET_, i);
		}
	}
	public CASCADE_(): TerminalNode[];
	public CASCADE_(i: number): TerminalNode;
	public CASCADE_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.CASCADE_);
		} else {
			return this.getToken(SQLiteParser.CASCADE_, i);
		}
	}
	public RESTRICT_(): TerminalNode[];
	public RESTRICT_(i: number): TerminalNode;
	public RESTRICT_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.RESTRICT_);
		} else {
			return this.getToken(SQLiteParser.RESTRICT_, i);
		}
	}
	public NO_(): TerminalNode[];
	public NO_(i: number): TerminalNode;
	public NO_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.NO_);
		} else {
			return this.getToken(SQLiteParser.NO_, i);
		}
	}
	public ACTION_(): TerminalNode[];
	public ACTION_(i: number): TerminalNode;
	public ACTION_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.ACTION_);
		} else {
			return this.getToken(SQLiteParser.ACTION_, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public NULL_(): TerminalNode[];
	public NULL_(i: number): TerminalNode;
	public NULL_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.NULL_);
		} else {
			return this.getToken(SQLiteParser.NULL_, i);
		}
	}
	public DEFAULT_(): TerminalNode[];
	public DEFAULT_(i: number): TerminalNode;
	public DEFAULT_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.DEFAULT_);
		} else {
			return this.getToken(SQLiteParser.DEFAULT_, i);
		}
	}
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public INITIALLY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INITIALLY_, 0); }
	public DEFERRED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFERRED_, 0); }
	public IMMEDIATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IMMEDIATE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_foreign_key_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterForeign_key_clause) {
			listener.enterForeign_key_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitForeign_key_clause) {
			listener.exitForeign_key_clause(this);
		}
	}
}


export class Conflict_clauseContext extends ParserRuleContext {
	public ON_(): TerminalNode { return this.getToken(SQLiteParser.ON_, 0); }
	public CONFLICT_(): TerminalNode { return this.getToken(SQLiteParser.CONFLICT_, 0); }
	public ROLLBACK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROLLBACK_, 0); }
	public ABORT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ABORT_, 0); }
	public FAIL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FAIL_, 0); }
	public IGNORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IGNORE_, 0); }
	public REPLACE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REPLACE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_conflict_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterConflict_clause) {
			listener.enterConflict_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitConflict_clause) {
			listener.exitConflict_clause(this);
		}
	}
}


export class Create_trigger_stmtContext extends ParserRuleContext {
	public CREATE_(): TerminalNode { return this.getToken(SQLiteParser.CREATE_, 0); }
	public TRIGGER_(): TerminalNode { return this.getToken(SQLiteParser.TRIGGER_, 0); }
	public trigger_name(): Trigger_nameContext {
		return this.getRuleContext(0, Trigger_nameContext);
	}
	public ON_(): TerminalNode { return this.getToken(SQLiteParser.ON_, 0); }
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public BEGIN_(): TerminalNode { return this.getToken(SQLiteParser.BEGIN_, 0); }
	public END_(): TerminalNode { return this.getToken(SQLiteParser.END_, 0); }
	public DELETE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DELETE_, 0); }
	public INSERT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INSERT_, 0); }
	public UPDATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UPDATE_, 0); }
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public BEFORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BEFORE_, 0); }
	public AFTER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AFTER_, 0); }
	public INSTEAD_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INSTEAD_, 0); }
	public OF_(): TerminalNode[];
	public OF_(i: number): TerminalNode;
	public OF_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.OF_);
		} else {
			return this.getToken(SQLiteParser.OF_, i);
		}
	}
	public FOR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOR_, 0); }
	public EACH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EACH_, 0); }
	public ROW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_, 0); }
	public WHEN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHEN_, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SCOL(): TerminalNode[];
	public SCOL(i: number): TerminalNode;
	public SCOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.SCOL);
		} else {
			return this.getToken(SQLiteParser.SCOL, i);
		}
	}
	public TEMP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMP_, 0); }
	public TEMPORARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMPORARY_, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public update_stmt(): Update_stmtContext[];
	public update_stmt(i: number): Update_stmtContext;
	public update_stmt(i?: number): Update_stmtContext | Update_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Update_stmtContext);
		} else {
			return this.getRuleContext(i, Update_stmtContext);
		}
	}
	public insert_stmt(): Insert_stmtContext[];
	public insert_stmt(i: number): Insert_stmtContext;
	public insert_stmt(i?: number): Insert_stmtContext | Insert_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Insert_stmtContext);
		} else {
			return this.getRuleContext(i, Insert_stmtContext);
		}
	}
	public delete_stmt(): Delete_stmtContext[];
	public delete_stmt(i: number): Delete_stmtContext;
	public delete_stmt(i?: number): Delete_stmtContext | Delete_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Delete_stmtContext);
		} else {
			return this.getRuleContext(i, Delete_stmtContext);
		}
	}
	public select_stmt(): Select_stmtContext[];
	public select_stmt(i: number): Select_stmtContext;
	public select_stmt(i?: number): Select_stmtContext | Select_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Select_stmtContext);
		} else {
			return this.getRuleContext(i, Select_stmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_create_trigger_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCreate_trigger_stmt) {
			listener.enterCreate_trigger_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCreate_trigger_stmt) {
			listener.exitCreate_trigger_stmt(this);
		}
	}
}


export class Create_view_stmtContext extends ParserRuleContext {
	public CREATE_(): TerminalNode { return this.getToken(SQLiteParser.CREATE_, 0); }
	public VIEW_(): TerminalNode { return this.getToken(SQLiteParser.VIEW_, 0); }
	public view_name(): View_nameContext {
		return this.getRuleContext(0, View_nameContext);
	}
	public AS_(): TerminalNode { return this.getToken(SQLiteParser.AS_, 0); }
	public select_stmt(): Select_stmtContext {
		return this.getRuleContext(0, Select_stmtContext);
	}
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public TEMP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMP_, 0); }
	public TEMPORARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMPORARY_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_create_view_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCreate_view_stmt) {
			listener.enterCreate_view_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCreate_view_stmt) {
			listener.exitCreate_view_stmt(this);
		}
	}
}


export class Create_virtual_table_stmtContext extends ParserRuleContext {
	public CREATE_(): TerminalNode { return this.getToken(SQLiteParser.CREATE_, 0); }
	public VIRTUAL_(): TerminalNode { return this.getToken(SQLiteParser.VIRTUAL_, 0); }
	public TABLE_(): TerminalNode { return this.getToken(SQLiteParser.TABLE_, 0); }
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public USING_(): TerminalNode { return this.getToken(SQLiteParser.USING_, 0); }
	public module_name(): Module_nameContext {
		return this.getRuleContext(0, Module_nameContext);
	}
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public module_argument(): Module_argumentContext[];
	public module_argument(i: number): Module_argumentContext;
	public module_argument(i?: number): Module_argumentContext | Module_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Module_argumentContext);
		} else {
			return this.getRuleContext(i, Module_argumentContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_create_virtual_table_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCreate_virtual_table_stmt) {
			listener.enterCreate_virtual_table_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCreate_virtual_table_stmt) {
			listener.exitCreate_virtual_table_stmt(this);
		}
	}
}


export class With_clauseContext extends ParserRuleContext {
	public WITH_(): TerminalNode { return this.getToken(SQLiteParser.WITH_, 0); }
	public cte_table_name(): Cte_table_nameContext[];
	public cte_table_name(i: number): Cte_table_nameContext;
	public cte_table_name(i?: number): Cte_table_nameContext | Cte_table_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cte_table_nameContext);
		} else {
			return this.getRuleContext(i, Cte_table_nameContext);
		}
	}
	public AS_(): TerminalNode[];
	public AS_(i: number): TerminalNode;
	public AS_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.AS_);
		} else {
			return this.getToken(SQLiteParser.AS_, i);
		}
	}
	public OPEN_PAR(): TerminalNode[];
	public OPEN_PAR(i: number): TerminalNode;
	public OPEN_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.OPEN_PAR);
		} else {
			return this.getToken(SQLiteParser.OPEN_PAR, i);
		}
	}
	public select_stmt(): Select_stmtContext[];
	public select_stmt(i: number): Select_stmtContext;
	public select_stmt(i?: number): Select_stmtContext | Select_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Select_stmtContext);
		} else {
			return this.getRuleContext(i, Select_stmtContext);
		}
	}
	public CLOSE_PAR(): TerminalNode[];
	public CLOSE_PAR(i: number): TerminalNode;
	public CLOSE_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.CLOSE_PAR);
		} else {
			return this.getToken(SQLiteParser.CLOSE_PAR, i);
		}
	}
	public RECURSIVE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RECURSIVE_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_with_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterWith_clause) {
			listener.enterWith_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitWith_clause) {
			listener.exitWith_clause(this);
		}
	}
}


export class Cte_table_nameContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_cte_table_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCte_table_name) {
			listener.enterCte_table_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCte_table_name) {
			listener.exitCte_table_name(this);
		}
	}
}


export class Recursive_cteContext extends ParserRuleContext {
	public cte_table_name(): Cte_table_nameContext {
		return this.getRuleContext(0, Cte_table_nameContext);
	}
	public AS_(): TerminalNode { return this.getToken(SQLiteParser.AS_, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public initial_select(): Initial_selectContext {
		return this.getRuleContext(0, Initial_selectContext);
	}
	public UNION_(): TerminalNode { return this.getToken(SQLiteParser.UNION_, 0); }
	public recursive_select(): Recursive_selectContext {
		return this.getRuleContext(0, Recursive_selectContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public ALL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALL_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_recursive_cte; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterRecursive_cte) {
			listener.enterRecursive_cte(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitRecursive_cte) {
			listener.exitRecursive_cte(this);
		}
	}
}


export class Common_table_expressionContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public AS_(): TerminalNode { return this.getToken(SQLiteParser.AS_, 0); }
	public OPEN_PAR(): TerminalNode[];
	public OPEN_PAR(i: number): TerminalNode;
	public OPEN_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.OPEN_PAR);
		} else {
			return this.getToken(SQLiteParser.OPEN_PAR, i);
		}
	}
	public select_stmt(): Select_stmtContext {
		return this.getRuleContext(0, Select_stmtContext);
	}
	public CLOSE_PAR(): TerminalNode[];
	public CLOSE_PAR(i: number): TerminalNode;
	public CLOSE_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.CLOSE_PAR);
		} else {
			return this.getToken(SQLiteParser.CLOSE_PAR, i);
		}
	}
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_common_table_expression; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCommon_table_expression) {
			listener.enterCommon_table_expression(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCommon_table_expression) {
			listener.exitCommon_table_expression(this);
		}
	}
}


export class Delete_stmtContext extends ParserRuleContext {
	public DELETE_(): TerminalNode { return this.getToken(SQLiteParser.DELETE_, 0); }
	public FROM_(): TerminalNode { return this.getToken(SQLiteParser.FROM_, 0); }
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getRuleContext(0, Qualified_table_nameContext);
	}
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public returning_clause(): Returning_clauseContext | undefined {
		return this.tryGetRuleContext(0, Returning_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_delete_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterDelete_stmt) {
			listener.enterDelete_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitDelete_stmt) {
			listener.exitDelete_stmt(this);
		}
	}
}


export class Delete_stmt_limitedContext extends ParserRuleContext {
	public DELETE_(): TerminalNode { return this.getToken(SQLiteParser.DELETE_, 0); }
	public FROM_(): TerminalNode { return this.getToken(SQLiteParser.FROM_, 0); }
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getRuleContext(0, Qualified_table_nameContext);
	}
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public returning_clause(): Returning_clauseContext | undefined {
		return this.tryGetRuleContext(0, Returning_clauseContext);
	}
	public limit_stmt(): Limit_stmtContext | undefined {
		return this.tryGetRuleContext(0, Limit_stmtContext);
	}
	public order_by_stmt(): Order_by_stmtContext | undefined {
		return this.tryGetRuleContext(0, Order_by_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_delete_stmt_limited; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterDelete_stmt_limited) {
			listener.enterDelete_stmt_limited(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitDelete_stmt_limited) {
			listener.exitDelete_stmt_limited(this);
		}
	}
}


export class Detach_stmtContext extends ParserRuleContext {
	public DETACH_(): TerminalNode { return this.getToken(SQLiteParser.DETACH_, 0); }
	public schema_name(): Schema_nameContext {
		return this.getRuleContext(0, Schema_nameContext);
	}
	public DATABASE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DATABASE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_detach_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterDetach_stmt) {
			listener.enterDetach_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitDetach_stmt) {
			listener.exitDetach_stmt(this);
		}
	}
}


export class Drop_stmtContext extends ParserRuleContext {
	public _object!: Token;
	public DROP_(): TerminalNode { return this.getToken(SQLiteParser.DROP_, 0); }
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	public INDEX_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INDEX_, 0); }
	public TABLE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TABLE_, 0); }
	public TRIGGER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRIGGER_, 0); }
	public VIEW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VIEW_, 0); }
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_drop_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterDrop_stmt) {
			listener.enterDrop_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitDrop_stmt) {
			listener.exitDrop_stmt(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public literal_value(): Literal_valueContext | undefined {
		return this.tryGetRuleContext(0, Literal_valueContext);
	}
	public BIND_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BIND_PARAMETER, 0); }
	public column_name(): Column_nameContext | undefined {
		return this.tryGetRuleContext(0, Column_nameContext);
	}
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.DOT);
		} else {
			return this.getToken(SQLiteParser.DOT, i);
		}
	}
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PIPE2(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PIPE2, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.MOD, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.MINUS, 0); }
	public LT2(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LT2, 0); }
	public GT2(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GT2, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AMP, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PIPE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LT_EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GT, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GT_EQ, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ASSIGN, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EQ, 0); }
	public NOT_EQ1(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_EQ1, 0); }
	public NOT_EQ2(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_EQ2, 0); }
	public IS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IS_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public IN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IN_, 0); }
	public LIKE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LIKE_, 0); }
	public GLOB_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GLOB_, 0); }
	public MATCH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.MATCH_, 0); }
	public REGEXP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REGEXP_, 0); }
	public AND_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AND_, 0); }
	public OR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OR_, 0); }
	public function_name(): Function_nameContext | undefined {
		return this.tryGetRuleContext(0, Function_nameContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public filter_clause(): Filter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Filter_clauseContext);
	}
	public over_clause(): Over_clauseContext | undefined {
		return this.tryGetRuleContext(0, Over_clauseContext);
	}
	public DISTINCT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DISTINCT_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public CAST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CAST_, 0); }
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public type_name(): Type_nameContext | undefined {
		return this.tryGetRuleContext(0, Type_nameContext);
	}
	public COLLATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLLATE_, 0); }
	public collation_name(): Collation_nameContext | undefined {
		return this.tryGetRuleContext(0, Collation_nameContext);
	}
	public ESCAPE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ESCAPE_, 0); }
	public ISNULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ISNULL_, 0); }
	public NOTNULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOTNULL_, 0); }
	public NULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NULL_, 0); }
	public BETWEEN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BETWEEN_, 0); }
	public table_function_name(): Table_function_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_function_nameContext);
	}
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public CASE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CASE_, 0); }
	public END_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.END_, 0); }
	public WHEN_(): TerminalNode[];
	public WHEN_(i: number): TerminalNode;
	public WHEN_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.WHEN_);
		} else {
			return this.getToken(SQLiteParser.WHEN_, i);
		}
	}
	public THEN_(): TerminalNode[];
	public THEN_(i: number): TerminalNode;
	public THEN_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.THEN_);
		} else {
			return this.getToken(SQLiteParser.THEN_, i);
		}
	}
	public ELSE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ELSE_, 0); }
	public raise_function(): Raise_functionContext | undefined {
		return this.tryGetRuleContext(0, Raise_functionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_expr; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class Raise_functionContext extends ParserRuleContext {
	public RAISE_(): TerminalNode { return this.getToken(SQLiteParser.RAISE_, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public IGNORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IGNORE_, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMA, 0); }
	public error_message(): Error_messageContext | undefined {
		return this.tryGetRuleContext(0, Error_messageContext);
	}
	public ROLLBACK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROLLBACK_, 0); }
	public ABORT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ABORT_, 0); }
	public FAIL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FAIL_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_raise_function; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterRaise_function) {
			listener.enterRaise_function(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitRaise_function) {
			listener.exitRaise_function(this);
		}
	}
}


export class Literal_valueContext extends ParserRuleContext {
	public NUMERIC_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NUMERIC_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
	public BLOB_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BLOB_LITERAL, 0); }
	public NULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NULL_, 0); }
	public TRUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRUE_, 0); }
	public FALSE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FALSE_, 0); }
	public CURRENT_TIME_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_TIME_, 0); }
	public CURRENT_DATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_DATE_, 0); }
	public CURRENT_TIMESTAMP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_TIMESTAMP_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_literal_value; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterLiteral_value) {
			listener.enterLiteral_value(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitLiteral_value) {
			listener.exitLiteral_value(this);
		}
	}
}


export class Value_rowContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_value_row; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterValue_row) {
			listener.enterValue_row(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitValue_row) {
			listener.exitValue_row(this);
		}
	}
}


export class Values_clauseContext extends ParserRuleContext {
	public VALUES_(): TerminalNode { return this.getToken(SQLiteParser.VALUES_, 0); }
	public value_row(): Value_rowContext[];
	public value_row(i: number): Value_rowContext;
	public value_row(i?: number): Value_rowContext | Value_rowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_rowContext);
		} else {
			return this.getRuleContext(i, Value_rowContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_values_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterValues_clause) {
			listener.enterValues_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitValues_clause) {
			listener.exitValues_clause(this);
		}
	}
}


export class Insert_stmtContext extends ParserRuleContext {
	public INTO_(): TerminalNode { return this.getToken(SQLiteParser.INTO_, 0); }
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public INSERT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INSERT_, 0); }
	public REPLACE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REPLACE_, 0); }
	public OR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OR_, 0); }
	public DEFAULT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFAULT_, 0); }
	public VALUES_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VALUES_, 0); }
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public ROLLBACK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROLLBACK_, 0); }
	public ABORT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ABORT_, 0); }
	public FAIL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FAIL_, 0); }
	public IGNORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IGNORE_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public table_alias(): Table_aliasContext | undefined {
		return this.tryGetRuleContext(0, Table_aliasContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public returning_clause(): Returning_clauseContext | undefined {
		return this.tryGetRuleContext(0, Returning_clauseContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public values_clause(): Values_clauseContext | undefined {
		return this.tryGetRuleContext(0, Values_clauseContext);
	}
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	public upsert_clause(): Upsert_clauseContext | undefined {
		return this.tryGetRuleContext(0, Upsert_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_insert_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterInsert_stmt) {
			listener.enterInsert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitInsert_stmt) {
			listener.exitInsert_stmt(this);
		}
	}
}


export class Returning_clauseContext extends ParserRuleContext {
	public RETURNING_(): TerminalNode { return this.getToken(SQLiteParser.RETURNING_, 0); }
	public result_column(): Result_columnContext[];
	public result_column(i: number): Result_columnContext;
	public result_column(i?: number): Result_columnContext | Result_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Result_columnContext);
		} else {
			return this.getRuleContext(i, Result_columnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_returning_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterReturning_clause) {
			listener.enterReturning_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitReturning_clause) {
			listener.exitReturning_clause(this);
		}
	}
}


export class Upsert_clauseContext extends ParserRuleContext {
	public ON_(): TerminalNode { return this.getToken(SQLiteParser.ON_, 0); }
	public CONFLICT_(): TerminalNode { return this.getToken(SQLiteParser.CONFLICT_, 0); }
	public DO_(): TerminalNode { return this.getToken(SQLiteParser.DO_, 0); }
	public NOTHING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOTHING_, 0); }
	public UPDATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UPDATE_, 0); }
	public SET_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SET_, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public indexed_column(): Indexed_columnContext[];
	public indexed_column(i: number): Indexed_columnContext;
	public indexed_column(i?: number): Indexed_columnContext | Indexed_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Indexed_columnContext);
		} else {
			return this.getRuleContext(i, Indexed_columnContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.ASSIGN);
		} else {
			return this.getToken(SQLiteParser.ASSIGN, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public WHERE_(): TerminalNode[];
	public WHERE_(i: number): TerminalNode;
	public WHERE_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.WHERE_);
		} else {
			return this.getToken(SQLiteParser.WHERE_, i);
		}
	}
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public column_name_list(): Column_name_listContext[];
	public column_name_list(i: number): Column_name_listContext;
	public column_name_list(i?: number): Column_name_listContext | Column_name_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_name_listContext);
		} else {
			return this.getRuleContext(i, Column_name_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_upsert_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterUpsert_clause) {
			listener.enterUpsert_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitUpsert_clause) {
			listener.exitUpsert_clause(this);
		}
	}
}


export class Pragma_stmtContext extends ParserRuleContext {
	public PRAGMA_(): TerminalNode { return this.getToken(SQLiteParser.PRAGMA_, 0); }
	public pragma_name(): Pragma_nameContext {
		return this.getRuleContext(0, Pragma_nameContext);
	}
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ASSIGN, 0); }
	public pragma_value(): Pragma_valueContext | undefined {
		return this.tryGetRuleContext(0, Pragma_valueContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_pragma_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterPragma_stmt) {
			listener.enterPragma_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitPragma_stmt) {
			listener.exitPragma_stmt(this);
		}
	}
}


export class Pragma_valueContext extends ParserRuleContext {
	public signed_number(): Signed_numberContext | undefined {
		return this.tryGetRuleContext(0, Signed_numberContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_pragma_value; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterPragma_value) {
			listener.enterPragma_value(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitPragma_value) {
			listener.exitPragma_value(this);
		}
	}
}


export class Reindex_stmtContext extends ParserRuleContext {
	public REINDEX_(): TerminalNode { return this.getToken(SQLiteParser.REINDEX_, 0); }
	public collation_name(): Collation_nameContext | undefined {
		return this.tryGetRuleContext(0, Collation_nameContext);
	}
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public index_name(): Index_nameContext | undefined {
		return this.tryGetRuleContext(0, Index_nameContext);
	}
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_reindex_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterReindex_stmt) {
			listener.enterReindex_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitReindex_stmt) {
			listener.exitReindex_stmt(this);
		}
	}
}


export class Select_stmtContext extends ParserRuleContext {
	public select_core(): Select_coreContext[];
	public select_core(i: number): Select_coreContext;
	public select_core(i?: number): Select_coreContext | Select_coreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Select_coreContext);
		} else {
			return this.getRuleContext(i, Select_coreContext);
		}
	}
	public common_table_stmt(): Common_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Common_table_stmtContext);
	}
	public compound_operator(): Compound_operatorContext[];
	public compound_operator(i: number): Compound_operatorContext;
	public compound_operator(i?: number): Compound_operatorContext | Compound_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Compound_operatorContext);
		} else {
			return this.getRuleContext(i, Compound_operatorContext);
		}
	}
	public order_by_stmt(): Order_by_stmtContext | undefined {
		return this.tryGetRuleContext(0, Order_by_stmtContext);
	}
	public limit_stmt(): Limit_stmtContext | undefined {
		return this.tryGetRuleContext(0, Limit_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_select_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSelect_stmt) {
			listener.enterSelect_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSelect_stmt) {
			listener.exitSelect_stmt(this);
		}
	}
}


export class Join_clauseContext extends ParserRuleContext {
	public table_or_subquery(): Table_or_subqueryContext[];
	public table_or_subquery(i: number): Table_or_subqueryContext;
	public table_or_subquery(i?: number): Table_or_subqueryContext | Table_or_subqueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Table_or_subqueryContext);
		} else {
			return this.getRuleContext(i, Table_or_subqueryContext);
		}
	}
	public join_operator(): Join_operatorContext[];
	public join_operator(i: number): Join_operatorContext;
	public join_operator(i?: number): Join_operatorContext | Join_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Join_operatorContext);
		} else {
			return this.getRuleContext(i, Join_operatorContext);
		}
	}
	public join_constraint(): Join_constraintContext[];
	public join_constraint(i: number): Join_constraintContext;
	public join_constraint(i?: number): Join_constraintContext | Join_constraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Join_constraintContext);
		} else {
			return this.getRuleContext(i, Join_constraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_join_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterJoin_clause) {
			listener.enterJoin_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitJoin_clause) {
			listener.exitJoin_clause(this);
		}
	}
}


export class Select_coreContext extends ParserRuleContext {
	public _whereExpr!: ExprContext;
	public _expr!: ExprContext;
	public _groupByExpr: ExprContext[] = [];
	public _havingExpr!: ExprContext;
	public SELECT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SELECT_, 0); }
	public result_column(): Result_columnContext[];
	public result_column(i: number): Result_columnContext;
	public result_column(i?: number): Result_columnContext | Result_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Result_columnContext);
		} else {
			return this.getRuleContext(i, Result_columnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public FROM_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FROM_, 0); }
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public GROUP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GROUP_, 0); }
	public BY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BY_, 0); }
	public WINDOW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WINDOW_, 0); }
	public window_name(): Window_nameContext[];
	public window_name(i: number): Window_nameContext;
	public window_name(i?: number): Window_nameContext | Window_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Window_nameContext);
		} else {
			return this.getRuleContext(i, Window_nameContext);
		}
	}
	public AS_(): TerminalNode[];
	public AS_(i: number): TerminalNode;
	public AS_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.AS_);
		} else {
			return this.getToken(SQLiteParser.AS_, i);
		}
	}
	public window_defn(): Window_defnContext[];
	public window_defn(i: number): Window_defnContext;
	public window_defn(i?: number): Window_defnContext | Window_defnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Window_defnContext);
		} else {
			return this.getRuleContext(i, Window_defnContext);
		}
	}
	public DISTINCT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DISTINCT_, 0); }
	public ALL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALL_, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public table_or_subquery(): Table_or_subqueryContext[];
	public table_or_subquery(i: number): Table_or_subqueryContext;
	public table_or_subquery(i?: number): Table_or_subqueryContext | Table_or_subqueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Table_or_subqueryContext);
		} else {
			return this.getRuleContext(i, Table_or_subqueryContext);
		}
	}
	public join_clause(): Join_clauseContext | undefined {
		return this.tryGetRuleContext(0, Join_clauseContext);
	}
	public HAVING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.HAVING_, 0); }
	public values_clause(): Values_clauseContext | undefined {
		return this.tryGetRuleContext(0, Values_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_select_core; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSelect_core) {
			listener.enterSelect_core(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSelect_core) {
			listener.exitSelect_core(this);
		}
	}
}


export class Factored_select_stmtContext extends ParserRuleContext {
	public select_stmt(): Select_stmtContext {
		return this.getRuleContext(0, Select_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_factored_select_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFactored_select_stmt) {
			listener.enterFactored_select_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFactored_select_stmt) {
			listener.exitFactored_select_stmt(this);
		}
	}
}


export class Simple_select_stmtContext extends ParserRuleContext {
	public select_core(): Select_coreContext {
		return this.getRuleContext(0, Select_coreContext);
	}
	public common_table_stmt(): Common_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Common_table_stmtContext);
	}
	public order_by_stmt(): Order_by_stmtContext | undefined {
		return this.tryGetRuleContext(0, Order_by_stmtContext);
	}
	public limit_stmt(): Limit_stmtContext | undefined {
		return this.tryGetRuleContext(0, Limit_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_simple_select_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSimple_select_stmt) {
			listener.enterSimple_select_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSimple_select_stmt) {
			listener.exitSimple_select_stmt(this);
		}
	}
}


export class Compound_select_stmtContext extends ParserRuleContext {
	public select_core(): Select_coreContext[];
	public select_core(i: number): Select_coreContext;
	public select_core(i?: number): Select_coreContext | Select_coreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Select_coreContext);
		} else {
			return this.getRuleContext(i, Select_coreContext);
		}
	}
	public common_table_stmt(): Common_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Common_table_stmtContext);
	}
	public order_by_stmt(): Order_by_stmtContext | undefined {
		return this.tryGetRuleContext(0, Order_by_stmtContext);
	}
	public limit_stmt(): Limit_stmtContext | undefined {
		return this.tryGetRuleContext(0, Limit_stmtContext);
	}
	public UNION_(): TerminalNode[];
	public UNION_(i: number): TerminalNode;
	public UNION_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.UNION_);
		} else {
			return this.getToken(SQLiteParser.UNION_, i);
		}
	}
	public INTERSECT_(): TerminalNode[];
	public INTERSECT_(i: number): TerminalNode;
	public INTERSECT_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.INTERSECT_);
		} else {
			return this.getToken(SQLiteParser.INTERSECT_, i);
		}
	}
	public EXCEPT_(): TerminalNode[];
	public EXCEPT_(i: number): TerminalNode;
	public EXCEPT_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.EXCEPT_);
		} else {
			return this.getToken(SQLiteParser.EXCEPT_, i);
		}
	}
	public ALL_(): TerminalNode[];
	public ALL_(i: number): TerminalNode;
	public ALL_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.ALL_);
		} else {
			return this.getToken(SQLiteParser.ALL_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_compound_select_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCompound_select_stmt) {
			listener.enterCompound_select_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCompound_select_stmt) {
			listener.exitCompound_select_stmt(this);
		}
	}
}


export class Table_or_subqueryContext extends ParserRuleContext {
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public table_alias(): Table_aliasContext | undefined {
		return this.tryGetRuleContext(0, Table_aliasContext);
	}
	public INDEXED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INDEXED_, 0); }
	public BY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BY_, 0); }
	public index_name(): Index_nameContext | undefined {
		return this.tryGetRuleContext(0, Index_nameContext);
	}
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public table_function_name(): Table_function_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_function_nameContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public table_or_subquery(): Table_or_subqueryContext[];
	public table_or_subquery(i: number): Table_or_subqueryContext;
	public table_or_subquery(i?: number): Table_or_subqueryContext | Table_or_subqueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Table_or_subqueryContext);
		} else {
			return this.getRuleContext(i, Table_or_subqueryContext);
		}
	}
	public join_clause(): Join_clauseContext | undefined {
		return this.tryGetRuleContext(0, Join_clauseContext);
	}
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_table_or_subquery; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTable_or_subquery) {
			listener.enterTable_or_subquery(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTable_or_subquery) {
			listener.exitTable_or_subquery(this);
		}
	}
}


export class Result_columnContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STAR, 0); }
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public column_alias(): Column_aliasContext | undefined {
		return this.tryGetRuleContext(0, Column_aliasContext);
	}
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_result_column; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterResult_column) {
			listener.enterResult_column(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitResult_column) {
			listener.exitResult_column(this);
		}
	}
}


export class Join_operatorContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMA, 0); }
	public JOIN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.JOIN_, 0); }
	public NATURAL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NATURAL_, 0); }
	public LEFT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LEFT_, 0); }
	public INNER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INNER_, 0); }
	public CROSS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CROSS_, 0); }
	public OUTER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OUTER_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_join_operator; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterJoin_operator) {
			listener.enterJoin_operator(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitJoin_operator) {
			listener.exitJoin_operator(this);
		}
	}
}


export class Join_constraintContext extends ParserRuleContext {
	public ON_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ON_, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public USING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.USING_, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_join_constraint; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterJoin_constraint) {
			listener.enterJoin_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitJoin_constraint) {
			listener.exitJoin_constraint(this);
		}
	}
}


export class Compound_operatorContext extends ParserRuleContext {
	public UNION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNION_, 0); }
	public ALL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALL_, 0); }
	public INTERSECT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INTERSECT_, 0); }
	public EXCEPT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXCEPT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_compound_operator; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCompound_operator) {
			listener.enterCompound_operator(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCompound_operator) {
			listener.exitCompound_operator(this);
		}
	}
}


export class Update_stmtContext extends ParserRuleContext {
	public UPDATE_(): TerminalNode { return this.getToken(SQLiteParser.UPDATE_, 0); }
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getRuleContext(0, Qualified_table_nameContext);
	}
	public SET_(): TerminalNode { return this.getToken(SQLiteParser.SET_, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.ASSIGN);
		} else {
			return this.getToken(SQLiteParser.ASSIGN, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public column_name_list(): Column_name_listContext[];
	public column_name_list(i: number): Column_name_listContext;
	public column_name_list(i?: number): Column_name_listContext | Column_name_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_name_listContext);
		} else {
			return this.getRuleContext(i, Column_name_listContext);
		}
	}
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public OR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OR_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public FROM_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FROM_, 0); }
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public returning_clause(): Returning_clauseContext | undefined {
		return this.tryGetRuleContext(0, Returning_clauseContext);
	}
	public ROLLBACK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROLLBACK_, 0); }
	public ABORT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ABORT_, 0); }
	public REPLACE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REPLACE_, 0); }
	public FAIL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FAIL_, 0); }
	public IGNORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IGNORE_, 0); }
	public table_or_subquery(): Table_or_subqueryContext[];
	public table_or_subquery(i: number): Table_or_subqueryContext;
	public table_or_subquery(i?: number): Table_or_subqueryContext | Table_or_subqueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Table_or_subqueryContext);
		} else {
			return this.getRuleContext(i, Table_or_subqueryContext);
		}
	}
	public join_clause(): Join_clauseContext | undefined {
		return this.tryGetRuleContext(0, Join_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_update_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterUpdate_stmt) {
			listener.enterUpdate_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitUpdate_stmt) {
			listener.exitUpdate_stmt(this);
		}
	}
}


export class Column_name_listContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_column_name_list; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterColumn_name_list) {
			listener.enterColumn_name_list(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitColumn_name_list) {
			listener.exitColumn_name_list(this);
		}
	}
}


export class Update_stmt_limitedContext extends ParserRuleContext {
	public UPDATE_(): TerminalNode { return this.getToken(SQLiteParser.UPDATE_, 0); }
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getRuleContext(0, Qualified_table_nameContext);
	}
	public SET_(): TerminalNode { return this.getToken(SQLiteParser.SET_, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.ASSIGN);
		} else {
			return this.getToken(SQLiteParser.ASSIGN, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public column_name_list(): Column_name_listContext[];
	public column_name_list(i: number): Column_name_listContext;
	public column_name_list(i?: number): Column_name_listContext | Column_name_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_name_listContext);
		} else {
			return this.getRuleContext(i, Column_name_listContext);
		}
	}
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public OR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OR_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public returning_clause(): Returning_clauseContext | undefined {
		return this.tryGetRuleContext(0, Returning_clauseContext);
	}
	public limit_stmt(): Limit_stmtContext | undefined {
		return this.tryGetRuleContext(0, Limit_stmtContext);
	}
	public ROLLBACK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROLLBACK_, 0); }
	public ABORT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ABORT_, 0); }
	public REPLACE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REPLACE_, 0); }
	public FAIL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FAIL_, 0); }
	public IGNORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IGNORE_, 0); }
	public order_by_stmt(): Order_by_stmtContext | undefined {
		return this.tryGetRuleContext(0, Order_by_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_update_stmt_limited; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterUpdate_stmt_limited) {
			listener.enterUpdate_stmt_limited(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitUpdate_stmt_limited) {
			listener.exitUpdate_stmt_limited(this);
		}
	}
}


export class Qualified_table_nameContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DOT, 0); }
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	public INDEXED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INDEXED_, 0); }
	public BY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BY_, 0); }
	public index_name(): Index_nameContext | undefined {
		return this.tryGetRuleContext(0, Index_nameContext);
	}
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_qualified_table_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterQualified_table_name) {
			listener.enterQualified_table_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitQualified_table_name) {
			listener.exitQualified_table_name(this);
		}
	}
}


export class Vacuum_stmtContext extends ParserRuleContext {
	public VACUUM_(): TerminalNode { return this.getToken(SQLiteParser.VACUUM_, 0); }
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public INTO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INTO_, 0); }
	public filename(): FilenameContext | undefined {
		return this.tryGetRuleContext(0, FilenameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_vacuum_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterVacuum_stmt) {
			listener.enterVacuum_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitVacuum_stmt) {
			listener.exitVacuum_stmt(this);
		}
	}
}


export class Filter_clauseContext extends ParserRuleContext {
	public FILTER_(): TerminalNode { return this.getToken(SQLiteParser.FILTER_, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public WHERE_(): TerminalNode { return this.getToken(SQLiteParser.WHERE_, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_filter_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFilter_clause) {
			listener.enterFilter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFilter_clause) {
			listener.exitFilter_clause(this);
		}
	}
}


export class Window_defnContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public ORDER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ORDER_, 0); }
	public BY_(): TerminalNode[];
	public BY_(i: number): TerminalNode;
	public BY_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.BY_);
		} else {
			return this.getToken(SQLiteParser.BY_, i);
		}
	}
	public ordering_term(): Ordering_termContext[];
	public ordering_term(i: number): Ordering_termContext;
	public ordering_term(i?: number): Ordering_termContext | Ordering_termContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ordering_termContext);
		} else {
			return this.getRuleContext(i, Ordering_termContext);
		}
	}
	public base_window_name(): Base_window_nameContext | undefined {
		return this.tryGetRuleContext(0, Base_window_nameContext);
	}
	public PARTITION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PARTITION_, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public frame_spec(): Frame_specContext | undefined {
		return this.tryGetRuleContext(0, Frame_specContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_window_defn; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterWindow_defn) {
			listener.enterWindow_defn(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitWindow_defn) {
			listener.exitWindow_defn(this);
		}
	}
}


export class Over_clauseContext extends ParserRuleContext {
	public OVER_(): TerminalNode { return this.getToken(SQLiteParser.OVER_, 0); }
	public window_name(): Window_nameContext | undefined {
		return this.tryGetRuleContext(0, Window_nameContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	public base_window_name(): Base_window_nameContext | undefined {
		return this.tryGetRuleContext(0, Base_window_nameContext);
	}
	public PARTITION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PARTITION_, 0); }
	public BY_(): TerminalNode[];
	public BY_(i: number): TerminalNode;
	public BY_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.BY_);
		} else {
			return this.getToken(SQLiteParser.BY_, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ORDER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ORDER_, 0); }
	public ordering_term(): Ordering_termContext[];
	public ordering_term(i: number): Ordering_termContext;
	public ordering_term(i?: number): Ordering_termContext | Ordering_termContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ordering_termContext);
		} else {
			return this.getRuleContext(i, Ordering_termContext);
		}
	}
	public frame_spec(): Frame_specContext | undefined {
		return this.tryGetRuleContext(0, Frame_specContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_over_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterOver_clause) {
			listener.enterOver_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitOver_clause) {
			listener.exitOver_clause(this);
		}
	}
}


export class Frame_specContext extends ParserRuleContext {
	public frame_clause(): Frame_clauseContext {
		return this.getRuleContext(0, Frame_clauseContext);
	}
	public EXCLUDE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXCLUDE_, 0); }
	public NO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NO_, 0); }
	public OTHERS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OTHERS_, 0); }
	public CURRENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_, 0); }
	public ROW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_, 0); }
	public GROUP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GROUP_, 0); }
	public TIES_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TIES_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_frame_spec; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFrame_spec) {
			listener.enterFrame_spec(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFrame_spec) {
			listener.exitFrame_spec(this);
		}
	}
}


export class Frame_clauseContext extends ParserRuleContext {
	public RANGE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RANGE_, 0); }
	public ROWS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROWS_, 0); }
	public GROUPS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GROUPS_, 0); }
	public frame_single(): Frame_singleContext | undefined {
		return this.tryGetRuleContext(0, Frame_singleContext);
	}
	public BETWEEN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BETWEEN_, 0); }
	public frame_left(): Frame_leftContext | undefined {
		return this.tryGetRuleContext(0, Frame_leftContext);
	}
	public AND_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AND_, 0); }
	public frame_right(): Frame_rightContext | undefined {
		return this.tryGetRuleContext(0, Frame_rightContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_frame_clause; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFrame_clause) {
			listener.enterFrame_clause(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFrame_clause) {
			listener.exitFrame_clause(this);
		}
	}
}


export class Simple_function_invocationContext extends ParserRuleContext {
	public simple_func(): Simple_funcContext {
		return this.getRuleContext(0, Simple_funcContext);
	}
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_simple_function_invocation; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSimple_function_invocation) {
			listener.enterSimple_function_invocation(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSimple_function_invocation) {
			listener.exitSimple_function_invocation(this);
		}
	}
}


export class Aggregate_function_invocationContext extends ParserRuleContext {
	public aggregate_func(): Aggregate_funcContext {
		return this.getRuleContext(0, Aggregate_funcContext);
	}
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STAR, 0); }
	public filter_clause(): Filter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Filter_clauseContext);
	}
	public DISTINCT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DISTINCT_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_aggregate_function_invocation; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAggregate_function_invocation) {
			listener.enterAggregate_function_invocation(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAggregate_function_invocation) {
			listener.exitAggregate_function_invocation(this);
		}
	}
}


export class Window_function_invocationContext extends ParserRuleContext {
	public window_function(): Window_functionContext {
		return this.getRuleContext(0, Window_functionContext);
	}
	public OPEN_PAR(): TerminalNode { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
	public OVER_(): TerminalNode { return this.getToken(SQLiteParser.OVER_, 0); }
	public window_defn(): Window_defnContext | undefined {
		return this.tryGetRuleContext(0, Window_defnContext);
	}
	public window_name(): Window_nameContext | undefined {
		return this.tryGetRuleContext(0, Window_nameContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STAR, 0); }
	public filter_clause(): Filter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Filter_clauseContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_window_function_invocation; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterWindow_function_invocation) {
			listener.enterWindow_function_invocation(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitWindow_function_invocation) {
			listener.exitWindow_function_invocation(this);
		}
	}
}


export class Common_table_stmtContext extends ParserRuleContext {
	public WITH_(): TerminalNode { return this.getToken(SQLiteParser.WITH_, 0); }
	public common_table_expression(): Common_table_expressionContext[];
	public common_table_expression(i: number): Common_table_expressionContext;
	public common_table_expression(i?: number): Common_table_expressionContext | Common_table_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Common_table_expressionContext);
		} else {
			return this.getRuleContext(i, Common_table_expressionContext);
		}
	}
	public RECURSIVE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RECURSIVE_, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_common_table_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCommon_table_stmt) {
			listener.enterCommon_table_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCommon_table_stmt) {
			listener.exitCommon_table_stmt(this);
		}
	}
}


export class Order_by_stmtContext extends ParserRuleContext {
	public ORDER_(): TerminalNode { return this.getToken(SQLiteParser.ORDER_, 0); }
	public BY_(): TerminalNode { return this.getToken(SQLiteParser.BY_, 0); }
	public ordering_term(): Ordering_termContext[];
	public ordering_term(i: number): Ordering_termContext;
	public ordering_term(i?: number): Ordering_termContext | Ordering_termContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ordering_termContext);
		} else {
			return this.getRuleContext(i, Ordering_termContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_order_by_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterOrder_by_stmt) {
			listener.enterOrder_by_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitOrder_by_stmt) {
			listener.exitOrder_by_stmt(this);
		}
	}
}


export class Limit_stmtContext extends ParserRuleContext {
	public LIMIT_(): TerminalNode { return this.getToken(SQLiteParser.LIMIT_, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OFFSET_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OFFSET_, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_limit_stmt; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterLimit_stmt) {
			listener.enterLimit_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitLimit_stmt) {
			listener.exitLimit_stmt(this);
		}
	}
}


export class Ordering_termContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COLLATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLLATE_, 0); }
	public collation_name(): Collation_nameContext | undefined {
		return this.tryGetRuleContext(0, Collation_nameContext);
	}
	public asc_desc(): Asc_descContext | undefined {
		return this.tryGetRuleContext(0, Asc_descContext);
	}
	public NULLS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NULLS_, 0); }
	public FIRST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FIRST_, 0); }
	public LAST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LAST_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_ordering_term; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterOrdering_term) {
			listener.enterOrdering_term(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitOrdering_term) {
			listener.exitOrdering_term(this);
		}
	}
}


export class Asc_descContext extends ParserRuleContext {
	public ASC_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ASC_, 0); }
	public DESC_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DESC_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_asc_desc; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAsc_desc) {
			listener.enterAsc_desc(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAsc_desc) {
			listener.exitAsc_desc(this);
		}
	}
}


export class Frame_leftContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PRECEDING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRECEDING_, 0); }
	public FOLLOWING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOLLOWING_, 0); }
	public CURRENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_, 0); }
	public ROW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_, 0); }
	public UNBOUNDED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNBOUNDED_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_frame_left; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFrame_left) {
			listener.enterFrame_left(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFrame_left) {
			listener.exitFrame_left(this);
		}
	}
}


export class Frame_rightContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PRECEDING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRECEDING_, 0); }
	public FOLLOWING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOLLOWING_, 0); }
	public CURRENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_, 0); }
	public ROW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_, 0); }
	public UNBOUNDED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNBOUNDED_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_frame_right; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFrame_right) {
			listener.enterFrame_right(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFrame_right) {
			listener.exitFrame_right(this);
		}
	}
}


export class Frame_singleContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PRECEDING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRECEDING_, 0); }
	public UNBOUNDED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNBOUNDED_, 0); }
	public CURRENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_, 0); }
	public ROW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_frame_single; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFrame_single) {
			listener.enterFrame_single(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFrame_single) {
			listener.exitFrame_single(this);
		}
	}
}


export class Window_functionContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode[];
	public OPEN_PAR(i: number): TerminalNode;
	public OPEN_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.OPEN_PAR);
		} else {
			return this.getToken(SQLiteParser.OPEN_PAR, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public CLOSE_PAR(): TerminalNode[];
	public CLOSE_PAR(i: number): TerminalNode;
	public CLOSE_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.CLOSE_PAR);
		} else {
			return this.getToken(SQLiteParser.CLOSE_PAR, i);
		}
	}
	public OVER_(): TerminalNode { return this.getToken(SQLiteParser.OVER_, 0); }
	public order_by_expr_asc_desc(): Order_by_expr_asc_descContext | undefined {
		return this.tryGetRuleContext(0, Order_by_expr_asc_descContext);
	}
	public FIRST_VALUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FIRST_VALUE_, 0); }
	public LAST_VALUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LAST_VALUE_, 0); }
	public partition_by(): Partition_byContext | undefined {
		return this.tryGetRuleContext(0, Partition_byContext);
	}
	public frame_clause(): Frame_clauseContext | undefined {
		return this.tryGetRuleContext(0, Frame_clauseContext);
	}
	public CUME_DIST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CUME_DIST_, 0); }
	public PERCENT_RANK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PERCENT_RANK_, 0); }
	public order_by_expr(): Order_by_exprContext | undefined {
		return this.tryGetRuleContext(0, Order_by_exprContext);
	}
	public DENSE_RANK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DENSE_RANK_, 0); }
	public RANK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RANK_, 0); }
	public ROW_NUMBER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_NUMBER_, 0); }
	public LAG_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LAG_, 0); }
	public LEAD_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LEAD_, 0); }
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	public default_value(): Default_valueContext | undefined {
		return this.tryGetRuleContext(0, Default_valueContext);
	}
	public NTH_VALUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NTH_VALUE_, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMA, 0); }
	public signed_number(): Signed_numberContext | undefined {
		return this.tryGetRuleContext(0, Signed_numberContext);
	}
	public NTILE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NTILE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_window_function; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterWindow_function) {
			listener.enterWindow_function(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitWindow_function) {
			listener.exitWindow_function(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(SQLiteParser.COMMA, 0); }
	public signed_number(): Signed_numberContext {
		return this.getRuleContext(0, Signed_numberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_offset; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterOffset) {
			listener.enterOffset(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitOffset) {
			listener.exitOffset(this);
		}
	}
}


export class Default_valueContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(SQLiteParser.COMMA, 0); }
	public signed_number(): Signed_numberContext {
		return this.getRuleContext(0, Signed_numberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_default_value; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterDefault_value) {
			listener.enterDefault_value(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitDefault_value) {
			listener.exitDefault_value(this);
		}
	}
}


export class Partition_byContext extends ParserRuleContext {
	public PARTITION_(): TerminalNode { return this.getToken(SQLiteParser.PARTITION_, 0); }
	public BY_(): TerminalNode { return this.getToken(SQLiteParser.BY_, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_partition_by; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterPartition_by) {
			listener.enterPartition_by(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitPartition_by) {
			listener.exitPartition_by(this);
		}
	}
}


export class Order_by_exprContext extends ParserRuleContext {
	public ORDER_(): TerminalNode { return this.getToken(SQLiteParser.ORDER_, 0); }
	public BY_(): TerminalNode { return this.getToken(SQLiteParser.BY_, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_order_by_expr; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterOrder_by_expr) {
			listener.enterOrder_by_expr(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitOrder_by_expr) {
			listener.exitOrder_by_expr(this);
		}
	}
}


export class Order_by_expr_asc_descContext extends ParserRuleContext {
	public ORDER_(): TerminalNode { return this.getToken(SQLiteParser.ORDER_, 0); }
	public BY_(): TerminalNode { return this.getToken(SQLiteParser.BY_, 0); }
	public expr_asc_desc(): Expr_asc_descContext {
		return this.getRuleContext(0, Expr_asc_descContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_order_by_expr_asc_desc; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterOrder_by_expr_asc_desc) {
			listener.enterOrder_by_expr_asc_desc(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitOrder_by_expr_asc_desc) {
			listener.exitOrder_by_expr_asc_desc(this);
		}
	}
}


export class Expr_asc_descContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public asc_desc(): Asc_descContext[];
	public asc_desc(i: number): Asc_descContext;
	public asc_desc(i?: number): Asc_descContext | Asc_descContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Asc_descContext);
		} else {
			return this.getRuleContext(i, Asc_descContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLiteParser.COMMA);
		} else {
			return this.getToken(SQLiteParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_expr_asc_desc; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterExpr_asc_desc) {
			listener.enterExpr_asc_desc(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitExpr_asc_desc) {
			listener.exitExpr_asc_desc(this);
		}
	}
}


export class Initial_selectContext extends ParserRuleContext {
	public select_stmt(): Select_stmtContext {
		return this.getRuleContext(0, Select_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_initial_select; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterInitial_select) {
			listener.enterInitial_select(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitInitial_select) {
			listener.exitInitial_select(this);
		}
	}
}


export class Recursive_selectContext extends ParserRuleContext {
	public select_stmt(): Select_stmtContext {
		return this.getRuleContext(0, Select_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_recursive_select; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterRecursive_select) {
			listener.enterRecursive_select(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitRecursive_select) {
			listener.exitRecursive_select(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PLUS, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TILDE, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
}


export class Error_messageContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(SQLiteParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_error_message; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterError_message) {
			listener.enterError_message(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitError_message) {
			listener.exitError_message(this);
		}
	}
}


export class Module_argumentContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public column_def(): Column_defContext | undefined {
		return this.tryGetRuleContext(0, Column_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_module_argument; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterModule_argument) {
			listener.enterModule_argument(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitModule_argument) {
			listener.exitModule_argument(this);
		}
	}
}


export class Column_aliasContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_column_alias; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterColumn_alias) {
			listener.enterColumn_alias(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitColumn_alias) {
			listener.exitColumn_alias(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public ABORT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ABORT_, 0); }
	public ACTION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ACTION_, 0); }
	public ADD_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ADD_, 0); }
	public AFTER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AFTER_, 0); }
	public ALL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALL_, 0); }
	public ALTER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALTER_, 0); }
	public ANALYZE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ANALYZE_, 0); }
	public AND_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AND_, 0); }
	public AS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AS_, 0); }
	public ASC_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ASC_, 0); }
	public ATTACH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ATTACH_, 0); }
	public AUTOINCREMENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.AUTOINCREMENT_, 0); }
	public BEFORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BEFORE_, 0); }
	public BEGIN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BEGIN_, 0); }
	public BETWEEN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BETWEEN_, 0); }
	public BY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.BY_, 0); }
	public CASCADE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CASCADE_, 0); }
	public CASE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CASE_, 0); }
	public CAST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CAST_, 0); }
	public CHECK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CHECK_, 0); }
	public COLLATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLLATE_, 0); }
	public COLUMN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COLUMN_, 0); }
	public COMMIT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.COMMIT_, 0); }
	public CONFLICT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CONFLICT_, 0); }
	public CONSTRAINT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CONSTRAINT_, 0); }
	public CREATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CREATE_, 0); }
	public CROSS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CROSS_, 0); }
	public CURRENT_DATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_DATE_, 0); }
	public CURRENT_TIME_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_TIME_, 0); }
	public CURRENT_TIMESTAMP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_TIMESTAMP_, 0); }
	public DATABASE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DATABASE_, 0); }
	public DEFAULT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFAULT_, 0); }
	public DEFERRABLE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFERRABLE_, 0); }
	public DEFERRED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DEFERRED_, 0); }
	public DELETE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DELETE_, 0); }
	public DESC_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DESC_, 0); }
	public DETACH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DETACH_, 0); }
	public DISTINCT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DISTINCT_, 0); }
	public DROP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DROP_, 0); }
	public EACH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EACH_, 0); }
	public ELSE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ELSE_, 0); }
	public END_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.END_, 0); }
	public ESCAPE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ESCAPE_, 0); }
	public EXCEPT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXCEPT_, 0); }
	public EXCLUSIVE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXCLUSIVE_, 0); }
	public EXISTS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXISTS_, 0); }
	public EXPLAIN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXPLAIN_, 0); }
	public FAIL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FAIL_, 0); }
	public FOR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOR_, 0); }
	public FOREIGN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOREIGN_, 0); }
	public FROM_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FROM_, 0); }
	public FULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FULL_, 0); }
	public GLOB_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GLOB_, 0); }
	public GROUP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GROUP_, 0); }
	public HAVING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.HAVING_, 0); }
	public IF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IF_, 0); }
	public IGNORE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IGNORE_, 0); }
	public IMMEDIATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IMMEDIATE_, 0); }
	public IN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IN_, 0); }
	public INDEX_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INDEX_, 0); }
	public INDEXED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INDEXED_, 0); }
	public INITIALLY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INITIALLY_, 0); }
	public INNER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INNER_, 0); }
	public INSERT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INSERT_, 0); }
	public INSTEAD_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INSTEAD_, 0); }
	public INTERSECT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INTERSECT_, 0); }
	public INTO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.INTO_, 0); }
	public IS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IS_, 0); }
	public ISNULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ISNULL_, 0); }
	public JOIN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.JOIN_, 0); }
	public KEY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.KEY_, 0); }
	public LEFT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LEFT_, 0); }
	public LIKE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LIKE_, 0); }
	public LIMIT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LIMIT_, 0); }
	public MATCH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.MATCH_, 0); }
	public NATURAL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NATURAL_, 0); }
	public NO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NO_, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOT_, 0); }
	public NOTNULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NOTNULL_, 0); }
	public NULL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NULL_, 0); }
	public OF_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OF_, 0); }
	public OFFSET_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OFFSET_, 0); }
	public ON_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ON_, 0); }
	public OR_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OR_, 0); }
	public ORDER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ORDER_, 0); }
	public OUTER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OUTER_, 0); }
	public PLAN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PLAN_, 0); }
	public PRAGMA_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRAGMA_, 0); }
	public PRIMARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRIMARY_, 0); }
	public QUERY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.QUERY_, 0); }
	public RAISE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RAISE_, 0); }
	public RECURSIVE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RECURSIVE_, 0); }
	public REFERENCES_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REFERENCES_, 0); }
	public REGEXP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REGEXP_, 0); }
	public REINDEX_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REINDEX_, 0); }
	public RELEASE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RELEASE_, 0); }
	public RENAME_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RENAME_, 0); }
	public REPLACE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.REPLACE_, 0); }
	public RESTRICT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RESTRICT_, 0); }
	public RIGHT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RIGHT_, 0); }
	public ROLLBACK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROLLBACK_, 0); }
	public ROW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_, 0); }
	public ROWS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROWS_, 0); }
	public SAVEPOINT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SAVEPOINT_, 0); }
	public SELECT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SELECT_, 0); }
	public SET_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.SET_, 0); }
	public TABLE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TABLE_, 0); }
	public TEMP_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMP_, 0); }
	public TEMPORARY_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TEMPORARY_, 0); }
	public THEN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.THEN_, 0); }
	public TO_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TO_, 0); }
	public TRANSACTION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRANSACTION_, 0); }
	public TRIGGER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRIGGER_, 0); }
	public UNION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNION_, 0); }
	public UNIQUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNIQUE_, 0); }
	public UPDATE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UPDATE_, 0); }
	public USING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.USING_, 0); }
	public VACUUM_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VACUUM_, 0); }
	public VALUES_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VALUES_, 0); }
	public VIEW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VIEW_, 0); }
	public VIRTUAL_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.VIRTUAL_, 0); }
	public WHEN_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHEN_, 0); }
	public WHERE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WHERE_, 0); }
	public WITH_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WITH_, 0); }
	public WITHOUT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WITHOUT_, 0); }
	public FIRST_VALUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FIRST_VALUE_, 0); }
	public OVER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OVER_, 0); }
	public PARTITION_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PARTITION_, 0); }
	public RANGE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RANGE_, 0); }
	public PRECEDING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PRECEDING_, 0); }
	public UNBOUNDED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.UNBOUNDED_, 0); }
	public CURRENT_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CURRENT_, 0); }
	public FOLLOWING_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FOLLOWING_, 0); }
	public CUME_DIST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CUME_DIST_, 0); }
	public DENSE_RANK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.DENSE_RANK_, 0); }
	public LAG_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LAG_, 0); }
	public LAST_VALUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LAST_VALUE_, 0); }
	public LEAD_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LEAD_, 0); }
	public NTH_VALUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NTH_VALUE_, 0); }
	public NTILE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NTILE_, 0); }
	public PERCENT_RANK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.PERCENT_RANK_, 0); }
	public RANK_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.RANK_, 0); }
	public ROW_NUMBER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ROW_NUMBER_, 0); }
	public GENERATED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GENERATED_, 0); }
	public ALWAYS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.ALWAYS_, 0); }
	public STORED_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STORED_, 0); }
	public TRUE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.TRUE_, 0); }
	public FALSE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FALSE_, 0); }
	public WINDOW_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.WINDOW_, 0); }
	public NULLS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.NULLS_, 0); }
	public FIRST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FIRST_, 0); }
	public LAST_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.LAST_, 0); }
	public FILTER_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.FILTER_, 0); }
	public GROUPS_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.GROUPS_, 0); }
	public EXCLUDE_(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.EXCLUDE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_keyword; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_function_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFunction_name) {
			listener.enterFunction_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFunction_name) {
			listener.exitFunction_name(this);
		}
	}
}


export class Schema_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_schema_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSchema_name) {
			listener.enterSchema_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSchema_name) {
			listener.exitSchema_name(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_table_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTable_name) {
			listener.enterTable_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTable_name) {
			listener.exitTable_name(this);
		}
	}
}


export class Table_or_index_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_table_or_index_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTable_or_index_name) {
			listener.enterTable_or_index_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTable_or_index_name) {
			listener.exitTable_or_index_name(this);
		}
	}
}


export class Column_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_column_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterColumn_name) {
			listener.enterColumn_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitColumn_name) {
			listener.exitColumn_name(this);
		}
	}
}


export class Collation_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_collation_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterCollation_name) {
			listener.enterCollation_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitCollation_name) {
			listener.exitCollation_name(this);
		}
	}
}


export class Foreign_tableContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_foreign_table; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterForeign_table) {
			listener.enterForeign_table(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitForeign_table) {
			listener.exitForeign_table(this);
		}
	}
}


export class Index_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_index_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterIndex_name) {
			listener.enterIndex_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitIndex_name) {
			listener.exitIndex_name(this);
		}
	}
}


export class Trigger_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_trigger_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTrigger_name) {
			listener.enterTrigger_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTrigger_name) {
			listener.exitTrigger_name(this);
		}
	}
}


export class View_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_view_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterView_name) {
			listener.enterView_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitView_name) {
			listener.exitView_name(this);
		}
	}
}


export class Module_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_module_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterModule_name) {
			listener.enterModule_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitModule_name) {
			listener.exitModule_name(this);
		}
	}
}


export class Pragma_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_pragma_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterPragma_name) {
			listener.enterPragma_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitPragma_name) {
			listener.exitPragma_name(this);
		}
	}
}


export class Savepoint_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_savepoint_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSavepoint_name) {
			listener.enterSavepoint_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSavepoint_name) {
			listener.exitSavepoint_name(this);
		}
	}
}


export class Table_aliasContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_table_alias; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTable_alias) {
			listener.enterTable_alias(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTable_alias) {
			listener.exitTable_alias(this);
		}
	}
}


export class Transaction_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_transaction_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTransaction_name) {
			listener.enterTransaction_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTransaction_name) {
			listener.exitTransaction_name(this);
		}
	}
}


export class Window_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_window_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterWindow_name) {
			listener.enterWindow_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitWindow_name) {
			listener.exitWindow_name(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_alias; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
}


export class FilenameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_filename; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterFilename) {
			listener.enterFilename(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitFilename) {
			listener.exitFilename(this);
		}
	}
}


export class Base_window_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_base_window_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterBase_window_name) {
			listener.enterBase_window_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitBase_window_name) {
			listener.exitBase_window_name(this);
		}
	}
}


export class Simple_funcContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_simple_func; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterSimple_func) {
			listener.enterSimple_func(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitSimple_func) {
			listener.exitSimple_func(this);
		}
	}
}


export class Aggregate_funcContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_aggregate_func; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAggregate_func) {
			listener.enterAggregate_func(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAggregate_func) {
			listener.exitAggregate_func(this);
		}
	}
}


export class Table_function_nameContext extends ParserRuleContext {
	public any_name(): Any_nameContext {
		return this.getRuleContext(0, Any_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_table_function_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterTable_function_name) {
			listener.enterTable_function_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitTable_function_name) {
			listener.exitTable_function_name(this);
		}
	}
}


export class Any_nameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); }
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
	public any_name(): Any_nameContext | undefined {
		return this.tryGetRuleContext(0, Any_nameContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLiteParser.RULE_any_name; }
	// @Override
	public enterRule(listener: SQLiteParserListener): void {
		if (listener.enterAny_name) {
			listener.enterAny_name(this);
		}
	}
	// @Override
	public exitRule(listener: SQLiteParserListener): void {
		if (listener.exitAny_name) {
			listener.exitAny_name(this);
		}
	}
}


