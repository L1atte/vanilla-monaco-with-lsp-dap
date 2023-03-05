// Generated from ./JavaScript.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class JavaScriptLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = ["DEFAULT_MODE"];

	public static readonly ruleNames: string[] = ["T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", "Literal", "Number", "String", "Identifier", "Whitespace"];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [undefined, "'var'", "'='", "';'", "'function'", "'('", "')'", "','", "'{'", "'}'"];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		"Literal",
		"Number",
		"String",
		"Identifier",
		"Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaScriptLexer._LITERAL_NAMES, JavaScriptLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaScriptLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(JavaScriptLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string {
		return "JavaScript.g4";
	}

	// @Override
	public get ruleNames(): string[] {
		return JavaScriptLexer.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return JavaScriptLexer._serializedATN;
	}

	// @Override
	public get channelNames(): string[] {
		return JavaScriptLexer.channelNames;
	}

	// @Override
	public get modeNames(): string[] {
		return JavaScriptLexer.modeNames;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10e\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\vF\n\v\x03\f\x06\fI\n\f\r\f\x0E\fJ\x03\r\x03\r\x03" +
		"\r\x03\r\x07\rQ\n\r\f\r\x0E\rT\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E" +
		"Z\n\x0E\f\x0E\x0E\x0E]\v\x0E\x03\x0F\x06\x0F`\n\x0F\r\x0F\x0E\x0Fa\x03" +
		"\x0F\x03\x0F\x02\x02\x02\x10\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x03\x02\x06\x06\x02\f\f\x0F\x0F" +
		'$$^^\x06\x02&&C\\aac|\x07\x02&&2;C\\aac|\x05\x02\v\f\x0F\x0F""\x02l' +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05" +
		"#\x03\x02\x02\x02\x07%\x03\x02\x02\x02\t'\x03\x02\x02\x02\v0\x03\x02" +
		"\x02\x02\r2\x03\x02\x02\x02\x0F4\x03\x02\x02\x02\x116\x03\x02\x02\x02" +
		"\x138\x03\x02\x02\x02\x15E\x03\x02\x02\x02\x17H\x03\x02\x02\x02\x19L\x03" +
		"\x02\x02\x02\x1BW\x03\x02\x02\x02\x1D_\x03\x02\x02\x02\x1F \x07x\x02\x02" +
		' !\x07c\x02\x02!"\x07t\x02\x02"\x04\x03\x02\x02\x02#$\x07?\x02\x02$' +
		"\x06\x03\x02\x02\x02%&\x07=\x02\x02&\b\x03\x02\x02\x02'(\x07h\x02\x02" +
		"()\x07w\x02\x02)*\x07p\x02\x02*+\x07e\x02\x02+,\x07v\x02\x02,-\x07k\x02" +
		"\x02-.\x07q\x02\x02./\x07p\x02\x02/\n\x03\x02\x02\x0201\x07*\x02\x021" +
		"\f\x03\x02\x02\x0223\x07+\x02\x023\x0E\x03\x02\x02\x0245\x07.\x02\x02" +
		"5\x10\x03\x02\x02\x0267\x07}\x02\x027\x12\x03\x02\x02\x0289\x07\x7F\x02" +
		"\x029\x14\x03\x02\x02\x02:;\x07v\x02\x02;<\x07t\x02\x02<=\x07w\x02\x02" +
		"=F\x07g\x02\x02>?\x07h\x02\x02?@\x07c\x02\x02@A\x07n\x02\x02AB\x07u\x02" +
		"\x02BF\x07g\x02\x02CF\x05\x17\f\x02DF\x05\x19\r\x02E:\x03\x02\x02\x02" +
		"E>\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x16\x03\x02\x02" +
		"\x02GI\x042;\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02\x02" +
		"JK\x03\x02\x02\x02K\x18\x03\x02\x02\x02LR\x07$\x02\x02MQ\n\x02\x02\x02" +
		"NO\x07^\x02\x02OQ\v\x02\x02\x02PM\x03\x02\x02\x02PN\x03\x02\x02\x02QT" +
		"\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02UV\x07$\x02\x02V\x1A\x03\x02\x02\x02W[\t\x03\x02\x02" +
		"XZ\t\x04\x02\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02" +
		"[\\\x03\x02\x02\x02\\\x1C\x03\x02\x02\x02][\x03\x02\x02\x02^`\t\x05\x02" +
		"\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02" +
		"\x02bc\x03\x02\x02\x02cd\b\x0F\x02\x02d\x1E\x03\x02\x02\x02\t\x02EJPR" +
		"[a\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptLexer.__ATN) {
			JavaScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptLexer._serializedATN));
		}

		return JavaScriptLexer.__ATN;
	}
}
