// import { CommonTokenStream, CharStreams, Parser, ANTLRErrorListener, ConsoleErrorListener, Lexer, Recognizer, RecognitionException } from "antlr4ts";
// import { CodeCompletionCore } from "antlr4-c3/out"; // note must add the path "antlr4-c3/out"
// import { SQLiteLexer } from './grammar-output/sqlite/SQLiteLexer'
// import { SQLiteParser } from './grammar-output/sqlite/SQLiteParser';

// class TodoLangErrorListener implements ANTLRErrorListener<any>{
//   syntaxError(recognizer: Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, message: string, e: RecognitionException | undefined): void {
//     console.log('error');
//     console.log(recognizer);
//     console.log(offendingSymbol);
//     console.log(line);
//     console.log(charPositionInLine);
//     console.log(message);
//   }

// }

// let errorHandler = new TodoLangErrorListener()
// let inputStream = CharStreams.fromString("select * from 123");
// let lexer = new SQLiteLexer(inputStream);

// lexer.removeErrorListeners()
// lexer.addErrorListener(errorHandler)
// console.log('lexer', lexer);

// let tokenStream = new CommonTokenStream(lexer);

// let parser = new SQLiteParser(tokenStream)

// parser.removeErrorListeners()
// parser.addErrorListener(errorHandler)

// console.log("1", parser.parse());
