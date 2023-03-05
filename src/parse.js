import { JavaScriptLexer } from "./ANTLR/JavaScriptLexer.ts";
import { JavaScriptParser } from "./ANTLR/JavaScriptParser.ts";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Visitor } from "./Visitor.js";

/**
 * 
在`Visitor`类中，`enterExpression`方法遍历解析树的节点，查找包含鼠标悬停单词所在行的节点，如果找到相关的节点，就记录悬停提示信息到`this.result`属性中。`getHoverMessage`方法用于返回`this.result`属性中的悬停提示信息。

在`provideHover`回调函数中，首先获取鼠标悬停的单词，然后创建一个`wordRange`对象，表示鼠标悬停单词所在的范围。接着，解析代码，得到解析树，使用自定义的`Visitor`类遍历解析树，查找悬停提示信息。最后，将悬停提示信息包装成一个`Hover`对象返回给Monaco编辑器。

这样，就可以实现JavaScript代码的悬停高亮上下文了。当鼠标悬停在JavaScript代码中时，Monaco编辑器
 */
export function parse(code, wordRange) {
	const inputStream = new CharStreams(code);
	const lexer = new JavaScriptLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new JavaScriptParser(tokenStream);

	const tree = parser.program();
	const visitor = new Visitor();
	// 遍历解析树，查找鼠标悬停单词所在的节点
	visitor.visit(tree);
	var hoverMessage = visitor.getHoverMessage(wordRange, word.word);
	if (hoverMessage) {
		return {
			range: wordRange,
			contents: [{ value: hoverMessage }],
		};
	} else {
		return null;
	}
}
