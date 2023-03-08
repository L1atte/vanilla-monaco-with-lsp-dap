import { autosuggester } from "antlr4-autosuggest";
import JavaScriptLexer from "../ANTLR2/JavaScriptLexer.js";
import JavaScriptParser from "../ANTLR2/JavaScriptParser.js";

const auto = autosuggester(JavaScriptLexer, JavaScriptParser);
console.log(auto);

debugger
const suggestions = auto.autosuggest("cons");
console.log(suggestions);
