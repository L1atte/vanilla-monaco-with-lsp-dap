// import { CommonTokenStream, CharStreams, Parser, ANTLRErrorListener, ConsoleErrorListener, Lexer, Recognizer, RecognitionException } from "antlr4ts";
// import { CodeCompletionCore } from "antlr4-c3/out"; // note must add the path "antlr4-c3/out"
// import { MySQLLexer } from './grammar-output/mysql/MySQLLexer'
// import { MultiQueryMySQLParser } from './grammar-output/mysql/MultiQueryMySQLParser';
// import { SQLiteLexer } from './grammar-output/sqlite/SQLiteLexer'
// import { SQLiteParser } from './grammar-output/sqlite/SQLiteParser'
// export interface IError {
//   startLineNumber: number;
//   startColumn: number;
//   endLineNumber: number;
//   endColumn: number;
//   message: string;
//   code: string;
// }
// export class ErrorListener implements ANTLRErrorListener<any>{
//   errors: IError[] = []

//   syntaxError(recognizer: Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, message: string, e: RecognitionException | undefined): void {
//     console.log('error');
//     console.log(recognizer);
//     console.log(offendingSymbol);
//     console.log(line);
//     console.log(charPositionInLine);
//     console.log(message);

//     this.errors.push(
//       {
//         startLineNumber: line,
//         endLineNumber: line,
//         startColumn: charPositionInLine,
//         endColumn: charPositionInLine + 1,//Let's suppose the length of the error is only 1 char for simplicity
//         message,
//         code: "1" // This the error code you can customize them as you want
//       }
//     )
//   }

//   getErrors(): IError[] {
//     return this.errors;
//   }
// }

// // let errorHandler = new ErrorListener()
// // let inputStream = CharStreams.fromString("select * from 123");
// // let lexer = new SQLiteLexer(inputStream);

// // lexer.removeErrorListeners()
// // lexer.addErrorListener(errorHandler)
// // console.log('lexer', lexer);

// // let tokenStream = new CommonTokenStream(lexer);

// // let parser = new SQLiteParser(tokenStream)

// // parser.removeErrorListeners()
// // parser.addErrorListener(errorHandler)

// // console.log("1", errorHandler.getErrors());

// let errorHandler = new ErrorListener()
// let inputStream = CharStreams.fromString("select * from 123");
// let lexer = new SQLiteLexer(inputStream);

// lexer.removeErrorListeners()
// lexer.addErrorListener(errorHandler)
// console.log('lexer', lexer);

// let tokenStream = new CommonTokenStream(lexer);

// let parser = new SQLiteParser(tokenStream)

// parser.removeErrorListeners()
// parser.addErrorListener(errorHandler)

// parser.parse()
// console.log("1", errorHandler.getErrors());
