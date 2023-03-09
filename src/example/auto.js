import JavaScriptLexer from "../ANTLR2/JavaScriptLexer.js";
import JavaScriptParser from "../ANTLR2/JavaScriptParser.js";
import { ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token } from "antlr4ts";
import * as CodeCompletionCore from "antlr4-c3/out/src/CodeCompletionCore.js";

const inputStream = CharStreams.fromString("var c = a + b()");
const lexer = new JavaScriptLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);

const parser = new JavaScriptParser(tokenStream);
// const errorListener = new ErrorListener();
// parser.addErrorListener(errorListener);
parser.expression();

const core = new CodeCompletionCore(parser);
// 1) At the input start.
let candidates = core.collectCandidates(0);
console.log(core, candidates);
