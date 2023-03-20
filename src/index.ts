// import { CommonTokenStream, CharStreams, Parser, ANTLRErrorListener, ConsoleErrorListener, Lexer } from "antlr4ts";
// import { CodeCompletionCore } from "antlr4-c3/out"; // note must add the path "antlr4-c3/out"
// import { SQLiteLexer } from './grammar-output/SQLiteLexer'
// import { SQLiteParser } from './grammar-output/SQLiteParser';

// // let inputStream = CharStreams.fromString("s");
// // let lexer = new SQLiteLexer(inputStream);
// // let tokenStream = new CommonTokenStream(lexer);

// // let parser = new SQLiteParser(tokenStream);
// // // let errorListener = new ErrorListener();
// // // parser.addErrorListener(errorListener);
// // console.log('parser', parser);

// // // the first method below the Parser Class constructor
// // let tree = parser.parse();

// // let core = new CodeCompletionCore(parser);
// // let candidates = core.collectCandidates(0);
// // console.log('candidates', candidates);
// let inputStream = CharStreams.fromString("SE");
// let lexer = new SQLiteLexer(inputStream);
// let tokenStream = new CommonTokenStream(lexer);

// let parser = new SQLiteParser(tokenStream);
// let tree = parser.parse();

// let core = new CodeCompletionCore(parser);
// let candidates = core.collectCandidates(0);
// console.log(candidates);

