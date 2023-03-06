import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
// import "./client.js";
import { parse } from "./parse.js";
import "./example/sqlite.js";

const LANGUAGE_ID = "javascript";
const MODEL_URI = "inmemory://model.js";
const MONACO_URI = monaco.Uri.parse(MODEL_URI);
const VALUE = `console.log('123')
const a = 123;
console.log(a)`;

// register Monaco languages
monaco.languages.register({
	id: LANGUAGE_ID,
	extensions: [".js"],
	aliases: ["js"],
});

// create monaco instance
const instance = monaco.editor.create(document.getElementById("container"), {
	// create monaco model
	model: monaco.editor.createModel(VALUE, LANGUAGE_ID, MONACO_URI),
	glyphMargin: true,
	lightbulb: {
		enabled: true,
	},
	automaticLayout: true,
});

// 添加悬停提示
monaco.languages.registerHoverProvider("javascript", {
	provideHover: function (model, position) {
		// 获取悬停内容;
		const word = model.getWordAtPosition(position);
		if (!word) return null;

		const range = new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
		const id = instance.createDecorationsCollection([
			{
				range: range,
				options: {
					isWholeLine: true,
					className: "red",
				},
			},
		]);
		// const wordRange = {
		// 	startLineNumber: position.startLineNumber,
		// 	endLineNumber: position.endLineNumber,
		// 	startColumn: position.startColumn,
		// 	endColumn: position.endColumn,
		// };
		// const input = model.getValue();
		// parse(input, wordRange);
	},
});

// 语言切换
const switchBtnRef = document.getElementById("switchLang");
switchBtnRef.addEventListener("click", () => {
	instance.dispose();
	isJavaScript = !isJavaScript;
	if (isJavaScript) {
		// register Monaco languages
		monaco.languages.register({
			id: LANGUAGE_ID,
			extensions: [".js", ".javascript"],
			aliases: ["JS", "js", "javascript", "JavaScript"],
		});

		// create monaco instance
		monaco.editor.create(document.getElementById("container"), {
			// create monaco model
			model: monaco.editor.createModel(VALUE, LANGUAGE_ID, MONACO_URI),
			glyphMargin: true,
			lightbulb: {
				enabled: true,
			},
			automaticLayout: true,
		});
	} else {
		// register Monaco languages
		monaco.languages.register({
			id: "html",
			extensions: [".html"],
			aliases: ["html"],
		});

		// create monaco instance
		monaco.editor.create(document.getElementById("container"), {
			// create monaco model
			model: monaco.editor.createModel("", "html", monaco.Uri.parse("inmemory://model.html")),
			glyphMargin: true,
			lightbulb: {
				enabled: true,
			},
			automaticLayout: true,
		});
	}
});
