// Generated from ./TodoLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer.js";
import { Lexer } from "antlr4ts/Lexer.js";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator.js";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl.js";
import * as Utils from "antlr4ts/misc/Utils.js";
export class TodoLangGrammarLexer extends Lexer {
	// tslint:enable:no-trailing-whitespace
	constructor(input) {
		super(input);
		this._interp = new LexerATNSimulator(TodoLangGrammarLexer._ATN, this);
	}
	// @Override
	// @NotNull
	get vocabulary() {
		return TodoLangGrammarLexer.VOCABULARY;
	}
	// @Override
	get grammarFileName() {
		return "TodoLangGrammar.g4";
	}
	// @Override
	get ruleNames() {
		return TodoLangGrammarLexer.ruleNames;
	}
	// @Override
	get serializedATN() {
		return TodoLangGrammarLexer._serializedATN;
	}
	// @Override
	get channelNames() {
		return TodoLangGrammarLexer.channelNames;
	}
	// @Override
	get modeNames() {
		return TodoLangGrammarLexer.modeNames;
	}
	static get _ATN() {
		if (!TodoLangGrammarLexer.__ATN) {
			TodoLangGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TodoLangGrammarLexer._serializedATN));
		}
		return TodoLangGrammarLexer.__ATN;
	}
}
TodoLangGrammarLexer.ADD = 1;
TodoLangGrammarLexer.TODO = 2;
TodoLangGrammarLexer.COMPLETE = 3;
TodoLangGrammarLexer.STRING = 4;
TodoLangGrammarLexer.EOL = 5;
TodoLangGrammarLexer.WS = 6;
// tslint:disable:no-trailing-whitespace
TodoLangGrammarLexer.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
// tslint:disable:no-trailing-whitespace
TodoLangGrammarLexer.modeNames = ["DEFAULT_MODE"];
TodoLangGrammarLexer.ruleNames = ["ADD", "TODO", "COMPLETE", "STRING", "EOL", "WS"];
TodoLangGrammarLexer._LITERAL_NAMES = [undefined, "'ADD'", "'TODO'", "'COMPLETE'"];
TodoLangGrammarLexer._SYMBOLIC_NAMES = [undefined, "ADD", "TODO", "COMPLETE", "STRING", "EOL", "WS"];
TodoLangGrammarLexer.VOCABULARY = new VocabularyImpl(TodoLangGrammarLexer._LITERAL_NAMES, TodoLangGrammarLexer._SYMBOLIC_NAMES, []);
TodoLangGrammarLexer._serializedATN =
	"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b5\b\x01\x04" +
	"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
	"\x07\t\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
	"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
	"\x04\x03\x04\x03\x05\x03\x05\x07\x05$\n\x05\f\x05\x0E\x05'\v\x05\x03" +
	"\x05\x03\x05\x03\x06\x06\x06,\n\x06\r\x06\x0E\x06-\x03\x06\x03\x06\x03" +
	"\x07\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05\x02\x04\x07" +
	"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x05\x03\x02$$\x04\x02\f\f" +
	'\x0F\x0F\x04\x02\v\v""\x026\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02' +
	"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
	"\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x13\x03\x02\x02" +
	"\x02\x07\x18\x03\x02\x02\x02\t!\x03\x02\x02\x02\v+\x03\x02\x02\x02\r1" +
	"\x03\x02\x02\x02\x0F\x10\x07C\x02\x02\x10\x11\x07F\x02\x02\x11\x12\x07" +
	"F\x02\x02\x12\x04\x03\x02\x02\x02\x13\x14\x07V\x02\x02\x14\x15\x07Q\x02" +
	"\x02\x15\x16\x07F\x02\x02\x16\x17\x07Q\x02\x02\x17\x06\x03\x02\x02\x02" +
	"\x18\x19\x07E\x02\x02\x19\x1A\x07Q\x02\x02\x1A\x1B\x07O\x02\x02\x1B\x1C" +
	"\x07R\x02\x02\x1C\x1D\x07N\x02\x02\x1D\x1E\x07G\x02\x02\x1E\x1F\x07V\x02" +
	'\x02\x1F \x07G\x02\x02 \b\x03\x02\x02\x02!%\x07$\x02\x02"$\n\x02\x02' +
	"\x02#\"\x03\x02\x02\x02$'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02" +
	"\x02\x02&(\x03\x02\x02\x02'%\x03\x02\x02\x02()\x07$\x02\x02)\n\x03\x02" +
	"\x02\x02*,\t\x03\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-+\x03\x02" +
	"\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02/0\b\x06\x02\x020\f\x03\x02" +
	"\x02\x0212\t\x04\x02\x0223\x03\x02\x02\x0234\b\x07\x02\x024\x0E\x03\x02" +
	"\x02\x02\x05\x02%-\x03\b\x02\x02";
