// Generated from ./TodoLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer.js";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException.js";
import { Parser } from "antlr4ts/Parser.js";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext.js";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator.js";
import { RecognitionException } from "antlr4ts/RecognitionException.js";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl.js";
import * as Utils from "antlr4ts/misc/Utils.js";
export class TodoLangGrammarParser extends Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(TodoLangGrammarParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return TodoLangGrammarParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "TodoLangGrammar.g4"; }
    // @Override
    get ruleNames() { return TodoLangGrammarParser.ruleNames; }
    // @Override
    get serializedATN() { return TodoLangGrammarParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    todoExpressions() {
        let _localctx = new TodoExpressionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TodoLangGrammarParser.RULE_todoExpressions);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TodoLangGrammarParser.ADD) {
                    {
                        {
                            this.state = 6;
                            this.addExpression();
                        }
                    }
                    this.state = 11;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 15;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TodoLangGrammarParser.COMPLETE) {
                    {
                        {
                            this.state = 12;
                            this.completeExpression();
                        }
                    }
                    this.state = 17;
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
    addExpression() {
        let _localctx = new AddExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TodoLangGrammarParser.RULE_addExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.match(TodoLangGrammarParser.ADD);
                this.state = 19;
                this.match(TodoLangGrammarParser.TODO);
                this.state = 20;
                this.match(TodoLangGrammarParser.STRING);
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
    completeExpression() {
        let _localctx = new CompleteExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TodoLangGrammarParser.RULE_completeExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this.match(TodoLangGrammarParser.COMPLETE);
                this.state = 23;
                this.match(TodoLangGrammarParser.TODO);
                this.state = 24;
                this.match(TodoLangGrammarParser.STRING);
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
        if (!TodoLangGrammarParser.__ATN) {
            TodoLangGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TodoLangGrammarParser._serializedATN));
        }
        return TodoLangGrammarParser.__ATN;
    }
}
TodoLangGrammarParser.ADD = 1;
TodoLangGrammarParser.TODO = 2;
TodoLangGrammarParser.COMPLETE = 3;
TodoLangGrammarParser.STRING = 4;
TodoLangGrammarParser.EOL = 5;
TodoLangGrammarParser.WS = 6;
TodoLangGrammarParser.RULE_todoExpressions = 0;
TodoLangGrammarParser.RULE_addExpression = 1;
TodoLangGrammarParser.RULE_completeExpression = 2;
// tslint:disable:no-trailing-whitespace
TodoLangGrammarParser.ruleNames = [
    "todoExpressions", "addExpression", "completeExpression",
];
TodoLangGrammarParser._LITERAL_NAMES = [
    undefined, "'ADD'", "'TODO'", "'COMPLETE'",
];
TodoLangGrammarParser._SYMBOLIC_NAMES = [
    undefined, "ADD", "TODO", "COMPLETE", "STRING", "EOL", "WS",
];
TodoLangGrammarParser.VOCABULARY = new VocabularyImpl(TodoLangGrammarParser._LITERAL_NAMES, TodoLangGrammarParser._SYMBOLIC_NAMES, []);
TodoLangGrammarParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x1D\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
    "\r\v\x02\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x02\x02\x02" +
    "\x05\x02\x02\x04\x02\x06\x02\x02\x02\x02\x1B\x02\v\x03\x02\x02\x02\x04" +
    "\x14\x03\x02\x02\x02\x06\x18\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03" +
    "\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v\f\x03\x02\x02\x02" +
    "\f\x11\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x10\x05\x06\x04\x02\x0F" +
    "\x0E\x03\x02\x02\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11" +
    "\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x14" +
    "\x15\x07\x03\x02\x02\x15\x16\x07\x04\x02\x02\x16\x17\x07\x06\x02\x02\x17" +
    "\x05\x03\x02\x02\x02\x18\x19\x07\x05\x02\x02\x19\x1A\x07\x04\x02\x02\x1A" +
    "\x1B\x07\x06\x02\x02\x1B\x07\x03\x02\x02\x02\x04\v\x11";
export class TodoExpressionsContext extends ParserRuleContext {
    addExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(AddExpressionContext);
        }
        else {
            return this.getRuleContext(i, AddExpressionContext);
        }
    }
    completeExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(CompleteExpressionContext);
        }
        else {
            return this.getRuleContext(i, CompleteExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TodoLangGrammarParser.RULE_todoExpressions; }
    // @Override
    enterRule(listener) {
        if (listener.enterTodoExpressions) {
            listener.enterTodoExpressions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTodoExpressions) {
            listener.exitTodoExpressions(this);
        }
    }
}
export class AddExpressionContext extends ParserRuleContext {
    ADD() { return this.getToken(TodoLangGrammarParser.ADD, 0); }
    TODO() { return this.getToken(TodoLangGrammarParser.TODO, 0); }
    STRING() { return this.getToken(TodoLangGrammarParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TodoLangGrammarParser.RULE_addExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterAddExpression) {
            listener.enterAddExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddExpression) {
            listener.exitAddExpression(this);
        }
    }
}
export class CompleteExpressionContext extends ParserRuleContext {
    COMPLETE() { return this.getToken(TodoLangGrammarParser.COMPLETE, 0); }
    TODO() { return this.getToken(TodoLangGrammarParser.TODO, 0); }
    STRING() { return this.getToken(TodoLangGrammarParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TodoLangGrammarParser.RULE_completeExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompleteExpression) {
            listener.enterCompleteExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompleteExpression) {
            listener.exitCompleteExpression(this);
        }
    }
}
