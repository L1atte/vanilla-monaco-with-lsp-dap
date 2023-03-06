import antlr4 from "antlr4";
export default class SQLiteLexer extends antlr4.Lexer {
    static grammarFileName: string;
    static channelNames: string[];
    static modeNames: string[];
    static literalNames: string[];
    static symbolicNames: string[];
    static ruleNames: string[];
    constructor(input: any);
    get atn(): any;
}
