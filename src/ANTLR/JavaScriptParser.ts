// Generated from ./JavaScript.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { JavaScriptListener } from "./JavaScriptListener";

export class JavaScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly Literal = 10;
	public static readonly Number = 11;
	public static readonly String = 12;
	public static readonly Identifier = 13;
	public static readonly Whitespace = 14;
	public static readonly RULE_program = 0;
	public static readonly RULE_statementList = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_variableDeclaration = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_parameterList = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_expressionStatement = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_functionCall = 9;
	public static readonly RULE_argumentList = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statementList", "statement", "variableDeclaration", "functionDeclaration", 
		"parameterList", "block", "expressionStatement", "expression", "functionCall", 
		"argumentList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'var'", "'='", "';'", "'function'", "'('", "')'", "','", "'{'", 
		"'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "Literal", "Number", "String", "Identifier", 
		"Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
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
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaScriptParser.RULE_statementList);
		let _la: number;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaScriptParser.RULE_functionDeclaration);
		let _la: number;
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaScriptParser.RULE_parameterList);
		let _la: number;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaScriptParser.RULE_block);
		let _la: number;
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaScriptParser.RULE_expression);
		try {
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaScriptParser.RULE_functionCall);
		let _la: number;
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaScriptParser.RULE_argumentList);
		let _la: number;
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10Z\x04\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptParser.__ATN) {
			JavaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
		}

		return JavaScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	public EOF(): TerminalNode { return this.getToken(JavaScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Identifier);
		} else {
			return this.getToken(JavaScriptParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public Literal(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Literal, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expression; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: JavaScriptListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
}


