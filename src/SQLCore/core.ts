import { CommonTokenStream, CharStreams, Parser, ANTLRErrorListener, ConsoleErrorListener, Lexer } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree";
import { SQLiteLexer } from '../grammar-output/SQLiteLexer'
import { SQLiteParser } from '../grammar-output/SQLiteParser';
import { SQLDialect } from "./SQLDialect";

export class SQLCore {
  private dialect: SQLDialect

  constructor(dialect: SQLDialect) {
    this.dialect = dialect;
  }

  getTokens(sqlScript: string, errorListeners?: ANTLRErrorListener<any>[]): CommonTokenStream {
    const chars = CharStreams.fromString(sqlScript);
    let lexer: Lexer;

    switch (this.dialect) {
      case "SQLite":
        lexer = new SQLiteLexer(chars)
        break
      default:
        lexer = new SQLiteLexer(chars)
        break
    }

    if (errorListeners !== null && errorListeners !== undefined) {
      lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        lexer.addErrorListener(listener);
      }
    }
    const tokens = new CommonTokenStream(lexer);
    return tokens;
  }

  getParser(tokens: CommonTokenStream, errorListeners?: ANTLRErrorListener<any>[]): Parser {
    let parser: Parser;

    switch (this.dialect) {
      case 'SQLite':
        parser = new SQLiteParser(tokens)
      default:
        parser = new SQLiteParser(tokens)
    }

    if (errorListeners !== null && errorListeners !== undefined) {
      parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        parser.addErrorListener(listener);
      }
    }
    return parser;
  }

  getParseTree(parser: Parser): ParseTree | null {
    let parseTree: ParseTree | null = null

    if (parser instanceof SQLiteParser) {
      parseTree = parser.parse()
    }

    return parseTree;
  }
}