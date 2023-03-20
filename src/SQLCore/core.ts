import { CommonTokenStream, CharStreams, Parser, ANTLRErrorListener, ConsoleErrorListener, Lexer } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree";
import { SQLDialect } from "./SQLDialect";
import { MySQLLexer, PLpgSQLLexer, PlSqlLexer, TSqlLexer } from '../grammar-output'
import { MultiQueryMySQLParser } from '../grammar-output/mysql/MultiQueryMySQLParser'
import { TSqlParser } from '../grammar-output/tsql/TSqlParser'
import { PlSqlParser } from '../grammar-output/plsql/PlSqlParser'
import { PLpgSQLParser } from '../grammar-output/plpgsql/PLpgSQLParser'
export class SQLCore {
  dialect: SQLDialect;

  constructor(dialect: SQLDialect) {
    this.dialect = dialect;
  }

  getTokens(sqlScript: string, errorListeners?: ANTLRErrorListener<any>[]): CommonTokenStream {
    const chars = CharStreams.fromString(sqlScript);
    let lexer: Lexer | null = null;
    if (this.dialect === SQLDialect.TSQL) {
      lexer = new TSqlLexer(chars);
    } else if (this.dialect === SQLDialect.PLSQL) {
      lexer = new PlSqlLexer(chars);
    } else if (this.dialect === SQLDialect.PLpgSQL) {
      lexer = new PLpgSQLLexer(chars);
    } else if (this.dialect === SQLDialect.MYSQL) {
      lexer = new MySQLLexer(chars);
    }
    if (errorListeners !== null && errorListeners !== undefined && lexer) {
      lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        lexer.addErrorListener(listener);
      }
      const tokens = new CommonTokenStream(lexer);
      return tokens;
    }

    throw new Error('no available lexer')
  }

  getParser(tokens: CommonTokenStream, errorListeners?: ANTLRErrorListener<any>[]): Parser {
    let parser: Parser | null = null;
    if (this.dialect === SQLDialect.TSQL) {
      parser = new TSqlParser(tokens);
    } else if (this.dialect === SQLDialect.PLSQL) {
      parser = new PlSqlParser(tokens);
    } else if (this.dialect === SQLDialect.PLpgSQL) {
      parser = new PLpgSQLParser(tokens);
    } else if (this.dialect === SQLDialect.MYSQL) {
      parser = new MultiQueryMySQLParser(tokens);
    }
    if (errorListeners !== null && errorListeners !== undefined && parser) {
      parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        parser.addErrorListener(listener);
      }
      return parser
    }
    throw new Error('no available parser')
  }

  getParseTree(parser: Parser): ParseTree {
    if (parser instanceof TSqlParser) {
      return parser.tsql_file();
    } else if (parser instanceof PlSqlParser) {
      return (parser as PlSqlParser).sql_script();
    } else if (parser instanceof PLpgSQLParser) {
      return (parser as PLpgSQLParser).sql();
    } else if (parser instanceof MultiQueryMySQLParser) {
      return (parser as MultiQueryMySQLParser).sql_script();
    }

    throw new Error('no available parser')
  }

  /*** Convenience Methods ***/

  getParserFromSQL(sqlScript: string): Parser {
    return this.getParser(this.getTokens(sqlScript));
  }

  getParseTreeFromSQL(sqlScript: string): ParseTree {
    return this.getParseTree(this.getParserFromSQL(sqlScript));
  }
}