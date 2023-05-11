import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import React, { createRef, useEffect, useRef } from "react";
import { wrap, Remote } from "comlink";
import { SQLDialect } from "./SQLCore";
import { sqlConf, sqlDef } from "./Syntax";
import { SQLAutocomplete } from "./AutoCompletion";
import { CodeGenerator } from "./Worker";

type EditorProps = {
	language: string;
};

export const ReactMonacoEditor: React.FC<EditorProps> = ({ language }) => {
	const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
	const ref = createRef<HTMLDivElement>();
	const workerRef = useRef<Remote<CodeGenerator> | null>(null);

	useEffect(() => {
		const worker: Worker = new Worker(new URL("./Worker/index.ts", import.meta.url), { name: "codeWorker", type: "module" });

		workerRef.current = wrap<CodeGenerator>(worker);

		return () => {
			worker.terminate();
		};
	}, []);

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
				async provideCompletionItems(model, position, context, token) {
					const input = model.getValue();
					if (!input) return;

					const word = model.getWordUntilPosition(position);
					const range = new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);

					const { suggestions } = await workerRef.current?.generateSuggestion(input, range)!;
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

			editorRef.current.getModel();

			// add the error markers and underline
			editorRef.current.onDidChangeModelContent(function () {
				const sqlAutocomplete = new SQLAutocomplete(SQLDialect.MYSQL);
				const error = sqlAutocomplete.validate(editorRef.current?.getValue() ?? "");
				const monacoErrors: monaco.editor.IMarkerData[] = [];
				for (const e of error) {
					monacoErrors.push({
						startLineNumber: e.startLineNumber,
						startColumn: e.startColumn,
						endLineNumber: e.endLineNumber,
						endColumn: e.endColumn,
						message: e.message,
						severity: monaco.MarkerSeverity.Error,
					});
				}
				const model = editorRef.current?.getModel();
				monaco.editor.setModelMarkers(model!, language, monacoErrors);
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
