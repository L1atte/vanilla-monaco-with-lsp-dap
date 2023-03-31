// import { CommonTokenStream, CharStreams, Parser, ANTLRErrorListener, ConsoleErrorListener, Lexer, Recognizer, RecognitionException, ANTLRInputStream } from "antlr4ts";
// import { CodeCompletionCore } from "antlr4-c3/out"; // note must add the path "antlr4-c3/out"
// import { MySQLLexer } from "./grammar-output/mysql/MySQLLexer";
// import { MultiQueryMySQLParser } from "./grammar-output/mysql/MultiQueryMySQLParser";
// import { SQLiteLexer } from "./grammar-output/sqlite/SQLiteLexer";
// import { SQLiteParser } from "./grammar-output/sqlite/SQLiteParser";
// import { MySQLGrammar, PLpgSQLGrammar, PlSQLGrammar, TSQLGrammar } from "./grammar-output";

// const ctx = "se";
// let inputStream = new ANTLRInputStream(ctx);
// let lexer = new SQLiteLexer(inputStream);
// let tokens = new CommonTokenStream(lexer);

// let parser = new SQLiteParser(tokens);
// let tree = parser.parse();

// let core = new CodeCompletionCore(parser);

// const preferredRules = [
// 	[TSQLGrammar.TSqlParser.RULE_table_name, TSQLGrammar.TSqlParser.RULE_table_name_with_hint, TSQLGrammar.TSqlParser.RULE_full_table_name, TSQLGrammar.TSqlParser.RULE_table_source],
// 	[TSQLGrammar.TSqlParser.RULE_column_elem, TSQLGrammar.TSqlParser.RULE_column_alias, TSQLGrammar.TSqlParser.RULE_full_column_name, TSQLGrammar.TSqlParser.RULE_output_column_name, TSQLGrammar.TSqlParser.RULE_column_declaration],
// ];
// tokens.fill();
// let suggestions = [];
// const tokenString = getTokenString(tokens, ctx);

// for (const rule of preferredRules) {
// 	core.preferredRules = new Set(rule);
// 	const candidates = core.collectCandidates(0);
// 	for (const candidateToken of candidates.tokens) {
// 		let candidateTokenValue = parser.vocabulary.getDisplayName(candidateToken[0]);

// 		if (candidateTokenValue.startsWith("'") && candidateTokenValue.endsWith("'")) {
// 			candidateTokenValue = candidateTokenValue.substring(1, candidateTokenValue.length - 1);
// 		}

// 		let followOnTokens = candidateToken[1];

// 		for (const followOnToken of followOnTokens) {
// 			let followOnTokenValue = parser.vocabulary.getDisplayName(followOnToken);
// 			if (followOnTokenValue.startsWith("'") && followOnTokenValue.endsWith("'")) {
// 				followOnTokenValue = followOnTokenValue.substring(1, followOnTokenValue.length - 1);
// 			}
// 			candidateTokenValue += followOnTokenValue;
// 		}

// 		if (tokenString.length === 0 || candidateTokenValue.startsWith(tokenString.toUpperCase())) {
// 			suggestions.push(candidateTokenValue);
// 		}
// 	}
// }
// console.log("suggestion", suggestions);

// function getTokenString(tokens: any, ctx: any) {
// 	return ctx.substring(0, ctx.length - 1);
// }
import { computeTokenPosition, getSuggestions, setTokenMatcher, filterTokens, filterTokens_fuzzySearch } from "./auto";
const code = `fun test() {
	try {
			doSomething()
	} 
}`;

let suggestions = getSuggestions(code, { line: 4, column: 8 }, computeTokenPosition);
console.log("suggestion", suggestions);
