import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import "./client.js";

const LANGUAGE_ID = "javascript";
const MODEL_URI = "inmemory://model.js";
const MONACO_URI = monaco.Uri.parse(MODEL_URI);
const VALUE = `const a = 'hello world'
console.log(a)`;
let isJavaScript = true;

// register Monaco languages
monaco.languages.register({
	id: LANGUAGE_ID,
	extensions: [".js", ".javascript"],
	aliases: ["JS", "js", "javascript", "JavaScript"],
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
