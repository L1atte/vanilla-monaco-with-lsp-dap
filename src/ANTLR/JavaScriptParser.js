// Generated from ./JavaScript.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
export class JavaScriptParser extends Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return JavaScriptParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "JavaScript.g4"; }
    // @Override
    get ruleNames() { return JavaScriptParser.ruleNames; }
    // @Override
    get serializedATN() { return JavaScriptParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(JavaScriptParser._ATN, this);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavaScriptParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this.statementList();
                this.state = 23;
                this.match(JavaScriptParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statementList() {
        let _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavaScriptParser.RULE_statementList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 25;
                            this.statement();
                        }
                    }
                    this.state = 28;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.T__0) | (1 << JavaScriptParser.T__3) | (1 << JavaScriptParser.Literal) | (1 << JavaScriptParser.Identifier))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavaScriptParser.RULE_statement);
        try {
            this.state = 33;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 30;
                        this.variableDeclaration();
                    }
                    break;
                case JavaScriptParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 31;
                        this.functionDeclaration();
                    }
                    break;
                case JavaScriptParser.Literal:
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 32;
                        this.expressionStatement();
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclaration() {
        let _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavaScriptParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.match(JavaScriptParser.T__0);
                this.state = 36;
                this.match(JavaScriptParser.Identifier);
                this.state = 37;
                this.match(JavaScriptParser.T__1);
                this.state = 38;
                this.expression();
                this.state = 39;
                this.match(JavaScriptParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDeclaration() {
        let _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavaScriptParser.RULE_functionDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.match(JavaScriptParser.T__3);
                this.state = 42;
                this.match(JavaScriptParser.Identifier);
                this.state = 43;
                this.match(JavaScriptParser.T__4);
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Identifier) {
                    {
                        this.state = 44;
                        this.parameterList();
                    }
                }
                this.state = 47;
                this.match(JavaScriptParser.T__5);
                this.state = 48;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterList() {
        let _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavaScriptParser.RULE_parameterList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this.match(JavaScriptParser.Identifier);
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaScriptParser.T__6) {
                    {
                        {
                            this.state = 51;
                            this.match(JavaScriptParser.T__6);
                            this.state = 52;
                            this.match(JavaScriptParser.Identifier);
                        }
                    }
                    this.state = 57;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavaScriptParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(JavaScriptParser.T__7);
                this.state = 60;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.T__0) | (1 << JavaScriptParser.T__3) | (1 << JavaScriptParser.Literal) | (1 << JavaScriptParser.Identifier))) !== 0)) {
                    {
                        this.state = 59;
                        this.statementList();
                    }
                }
                this.state = 62;
                this.match(JavaScriptParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionStatement() {
        let _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaScriptParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.expression();
                this.state = 65;
                this.match(JavaScriptParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavaScriptParser.RULE_expression);
        try {
            this.state = 70;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 67;
                        this.match(JavaScriptParser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 68;
                        this.match(JavaScriptParser.Literal);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 69;
                        this.functionCall();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionCall() {
        let _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavaScriptParser.RULE_functionCall);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.match(JavaScriptParser.Identifier);
                this.state = 73;
                this.match(JavaScriptParser.T__4);
                this.state = 75;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Literal || _la === JavaScriptParser.Identifier) {
                    {
                        this.state = 74;
                        this.argumentList();
                    }
                }
                this.state = 77;
                this.match(JavaScriptParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    argumentList() {
        let _localctx = new ArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavaScriptParser.RULE_argumentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.expression();
                this.state = 84;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaScriptParser.T__6) {
                    {
                        {
                            this.state = 80;
                            this.match(JavaScriptParser.T__6);
                            this.state = 81;
                            this.expression();
                        }
                    }
                    this.state = 86;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!JavaScriptParser.__ATN) {
            JavaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
        }
        return JavaScriptParser.__ATN;
    }
}
JavaScriptParser.T__0 = 1;
JavaScriptParser.T__1 = 2;
JavaScriptParser.T__2 = 3;
JavaScriptParser.T__3 = 4;
JavaScriptParser.T__4 = 5;
JavaScriptParser.T__5 = 6;
JavaScriptParser.T__6 = 7;
JavaScriptParser.T__7 = 8;
JavaScriptParser.T__8 = 9;
JavaScriptParser.Literal = 10;
JavaScriptParser.Number = 11;
JavaScriptParser.String = 12;
JavaScriptParser.Identifier = 13;
JavaScriptParser.Whitespace = 14;
JavaScriptParser.RULE_program = 0;
JavaScriptParser.RULE_statementList = 1;
JavaScriptParser.RULE_statement = 2;
JavaScriptParser.RULE_variableDeclaration = 3;
JavaScriptParser.RULE_functionDeclaration = 4;
JavaScriptParser.RULE_parameterList = 5;
JavaScriptParser.RULE_block = 6;
JavaScriptParser.RULE_expressionStatement = 7;
JavaScriptParser.RULE_expression = 8;
JavaScriptParser.RULE_functionCall = 9;
JavaScriptParser.RULE_argumentList = 10;
// tslint:disable:no-trailing-whitespace
JavaScriptParser.ruleNames = [
    "program", "statementList", "statement", "variableDeclaration", "functionDeclaration",
    "parameterList", "block", "expressionStatement", "expression", "functionCall",
    "argumentList",
];
JavaScriptParser._LITERAL_NAMES = [
    undefined, "'var'", "'='", "';'", "'function'", "'('", "')'", "','", "'{'",
    "'}'",
];
JavaScriptParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "Literal", "Number", "String", "Identifier",
    "Whitespace",
];
JavaScriptParser.VOCABULARY = new VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);
JavaScriptParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10Z\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
    "\x03\x02\x03\x03\x06\x03\x1D\n\x03\r\x03\x0E\x03\x1E\x03\x04\x03\x04\x03" +
    "\x04\x05\x04$\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x05\x060\n\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x07\x03\x07\x03\x07\x07\x078\n\x07\f\x07\x0E\x07;\v\x07\x03\b\x03\b\x05" +
    "\b?\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\nI\n\n\x03" +
    "\v\x03\v\x03\v\x05\vN\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\fU\n\f\f\f" +
    "\x0E\fX\v\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
    "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x02\x02X\x02\x18\x03" +
    "\x02\x02\x02\x04\x1C\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b%\x03\x02\x02" +
    "\x02\n+\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E<\x03\x02\x02\x02\x10B\x03" +
    "\x02\x02\x02\x12H\x03\x02\x02\x02\x14J\x03\x02\x02\x02\x16Q\x03\x02\x02" +
    "\x02\x18\x19\x05\x04\x03\x02\x19\x1A\x07\x02\x02\x03\x1A\x03\x03\x02\x02" +
    "\x02\x1B\x1D\x05\x06\x04\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02" +
    "\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x05\x03\x02\x02" +
    "\x02 $\x05\b\x05\x02!$\x05\n\x06\x02\"$\x05\x10\t\x02# \x03\x02\x02\x02" +
    "#!\x03\x02\x02\x02#\"\x03\x02\x02\x02$\x07\x03\x02\x02\x02%&\x07\x03\x02" +
    "\x02&\'\x07\x0F\x02\x02\'(\x07\x04\x02\x02()\x05\x12\n\x02)*\x07\x05\x02" +
    "\x02*\t\x03\x02\x02\x02+,\x07\x06\x02\x02,-\x07\x0F\x02\x02-/\x07\x07" +
    "\x02\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02" +
    "\x02\x0212\x07\b\x02\x0223\x05\x0E\b\x023\v\x03\x02\x02\x0249\x07\x0F" +
    "\x02\x0256\x07\t\x02\x0268\x07\x0F\x02\x0275\x03\x02\x02\x028;\x03\x02" +
    "\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\r\x03\x02\x02\x02;9\x03" +
    "\x02\x02\x02<>\x07\n\x02\x02=?\x05\x04\x03\x02>=\x03\x02\x02\x02>?\x03" +
    "\x02\x02\x02?@\x03\x02\x02\x02@A\x07\v\x02\x02A\x0F\x03\x02\x02\x02BC" +
    "\x05\x12\n\x02CD\x07\x05\x02\x02D\x11\x03\x02\x02\x02EI\x07\x0F\x02\x02" +
    "FI\x07\f\x02\x02GI\x05\x14\v\x02HE\x03\x02\x02\x02HF\x03\x02\x02\x02H" +
    "G\x03\x02\x02\x02I\x13\x03\x02\x02\x02JK\x07\x0F\x02\x02KM\x07\x07\x02" +
    "\x02LN\x05\x16\f\x02ML\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02" +
    "\x02OP\x07\b\x02\x02P\x15\x03\x02\x02\x02QV\x05\x12\n\x02RS\x07\t\x02" +
    "\x02SU\x05\x12\n\x02TR\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02" +
    "\x02VW\x03\x02\x02\x02W\x17\x03\x02\x02\x02XV\x03\x02\x02\x02\n\x1E#/" +
    "9>HMV";
export class ProgramContext extends ParserRuleContext {
    statementList() {
        return this.getRuleContext(0, StatementListContext);
    }
    EOF() { return this.getToken(JavaScriptParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
}
export class StatementListContext extends ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_statementList; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    }
}
export class StatementContext extends ParserRuleContext {
    variableDeclaration() {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    functionDeclaration() {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
    expressionStatement() {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}
export class VariableDeclarationContext extends ParserRuleContext {
    Identifier() { return this.getToken(JavaScriptParser.Identifier, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_variableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    }
}
export class FunctionDeclarationContext extends ParserRuleContext {
    Identifier() { return this.getToken(JavaScriptParser.Identifier, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    parameterList() {
        return this.tryGetRuleContext(0, ParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_functionDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    }
}
export class ParameterListContext extends ParserRuleContext {
    Identifier(i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Identifier);
        }
        else {
            return this.getToken(JavaScriptParser.Identifier, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_parameterList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    }
}
export class BlockContext extends ParserRuleContext {
    statementList() {
        return this.tryGetRuleContext(0, StatementListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
}
export class ExpressionStatementContext extends ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_expressionStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
}
export class ExpressionContext extends ParserRuleContext {
    Identifier() { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
    Literal() { return this.tryGetToken(JavaScriptParser.Literal, 0); }
    functionCall() {
        return this.tryGetRuleContext(0, FunctionCallContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}
export class FunctionCallContext extends ParserRuleContext {
    Identifier() { return this.getToken(JavaScriptParser.Identifier, 0); }
    argumentList() {
        return this.tryGetRuleContext(0, ArgumentListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_functionCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }
}
export class ArgumentListContext extends ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaScriptParser.RULE_argumentList; }
    // @Override
    enterRule(listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    }
}
