import { SQLiteLexer, SQLiteParser } from "../ANTLR/index.js";
import { autosuggester } from "antlr4-autosuggest";

const autoSuggester = autosuggester(SQLiteLexer, SQLiteParser);

console.log('in calc', autoSuggester);
const suggestions = autoSuggester.autosuggest(" SELE");
console.log('suggestion', suggestions);
