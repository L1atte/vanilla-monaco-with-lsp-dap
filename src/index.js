import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
// import "./client.js";
import { parse } from "./parse.js";
import "./example/sqlite.js";

const LANGUAGE_ID = "sqlite";
const MODEL_URI = "inmemory://model.sql";
const MONACO_URI = monaco.Uri.parse(MODEL_URI);
const VALUE = `Select Name, printf('%,d',Bytes) Size,
    FIRST_VALUE(Name) OVER (
        ORDER BY Bytes
    ) AS SmallestTrack
FROM
    tracks
WHERE
    AlbumId = 1;
`;

function getInputValue(editor) {
	return editor.getValue();
}

// register Monaco languages
monaco.languages.register({
	id: LANGUAGE_ID,
	extensions: [".sql"],
	aliases: ["sqlite"],
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
monaco.languages.registerHoverProvider(LANGUAGE_ID, {
	provideHover: function (model, position) {
		// 获取悬停内容;
		const word = model.getWordAtPosition(position);
		if (!word) return null;

		const range = new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
		// const id = instance.createDecorationsCollection([
		// 	{
		// 		range: range,
		// 		options: {
		// 			isWholeLine: true,
		// 			className: "red",
		// 		},
		// 	},
		// ]);
	},
});

// 注册 DocumentFormattingEditProvider
monaco.languages.registerDocumentFormattingEditProvider(LANGUAGE_ID, new FormattingProvider(getInputValue(instance)));
