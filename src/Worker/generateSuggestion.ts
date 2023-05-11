import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import { SQLDialect } from "../SQLCore";
import { SQLAutocomplete } from "../AutoCompletion";

function generateSuggestion(value: string, range: monaco.Range) {
	const sqlAutocomplete = new SQLAutocomplete(SQLDialect.MYSQL);
	const suggestions = sqlAutocomplete.autoComplete(value);

	return {
		suggestions: [...suggestions].map(option => {
			return {
				label: option.value,
				kind: option.optionType,
				insertText: option.value,
				range: range,
			};
		}),
	};
}

type GenerateFn = typeof generateSuggestion;

export type { GenerateFn };
export { generateSuggestion };
