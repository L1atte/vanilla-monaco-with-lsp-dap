import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import React, { createRef, useEffect, useRef } from "react";
import { SQLAutocomplete, SQLDialect } from "sql-autocomplete";
import { sqlConf, sqlDef } from "./Syntax";

type EditorProps = {
	language: string;
};

function generateSuggestion(value: string, range: monaco.Range) {
	console.log(value, range);

	const sqlAutocomplete = new SQLAutocomplete(SQLDialect.MYSQL);
	const options = sqlAutocomplete.autocomplete(value);
	console.log(options);

	return [...options].map(option => {
		return {
			label: option.value,
			kind: option.optionType,
			insertText: option.value,
			range: range,
		};
	});
}

export const ReactMonacoEditor: React.FC<EditorProps> = ({ language }) => {
	const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
	const ref = createRef<HTMLDivElement>();

	useEffect(() => {
		if (ref.current != null) {
			// register Monaco languages
			monaco.languages.register({
				id: language,
				extensions: [`.${language}`],
				aliases: [`${language.toLowerCase()}`, `${language.toUpperCase()}`],
			});

			// set LanguageConfiguration
			monaco.languages.setLanguageConfiguration(language, sqlConf);

			// register setMonarchTokens Provider
			monaco.languages.setMonarchTokensProvider(language, sqlDef);

			// register auto-complete provider
			monaco.languages.registerCompletionItemProvider(language, {
				// @ts-ignore
				provideCompletionItems(model, position, context, token) {
					const input = model.getValue();
					if (!input) return;

					const word = model.getWordUntilPosition(position);
					const range = new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);

					const suggestions = generateSuggestion(input, range);
					return {
						suggestions,
					};
				},
			});

			// create Monaco editor
			editorRef.current = monaco.editor.create(ref.current!, {
				model: monaco.editor.createModel("", language, monaco.Uri.parse("inmemory://model.sql")),
				glyphMargin: true,
				lightbulb: {
					enabled: true,
				},
				automaticLayout: true,
			});
			return () => {
				editorRef.current!.dispose();
			};
		}
	}, []);

	return (
		<div
			ref={ref}
			style={{ height: "50vh" }}
		/>
	);
};
