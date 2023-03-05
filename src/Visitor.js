// 自定义Visitor类，用于遍历解析树并查找悬停提示信息
export const Visitor = function () {
	this.result = null;
	this.currentPos = null;
	this.currentWord = null;
	this.enterExpression = function (ctx) {
		if (this.currentPos && ctx.start.line <= this.currentPos.line && ctx.stop.line >= this.currentPos.line) {
			// 当前节点包含鼠标悬停单词所在的行
			if (ctx.start.line === this.currentPos.line && ctx.start.column > this.currentPos.column) {
				// 当前节点在鼠标悬停单词的后面
				return;
			}
			// 遍历当前节点的子节点
			for (var i = 0; i < ctx.children.length; i++) {
				var child = ctx.children[i];
				if (child.start && child.stop && child.start.line <= this.currentPos.line && child.stop.line >= this.currentPos.line) {
					this.enterExpression(child);
					if (this.result) {
						return;
					}
				}
			}
			// 当前节点的子节点中没有找到悬停提示信息
			if (ctx instanceof JavaScriptParser.FunctionDeclarationContext) {
				// 函数声明
				this.result = "Function " + ctx.Identifier().getText() + "()";
			} else if (ctx instanceof JavaScriptParser.VariableDeclarationContext) {
				// 变量声明
				this.result = "Variable " + ctx.Identifier().getText() + ": " + ctx.expression().getText();
			} else if (ctx instanceof JavaScriptParser.FunctionCallContext) {
				// 函数调用
				this.result = "Function call " + ctx.Identifier().getText() + "()";
			}
		}
	};
	this.getHoverMessage = function (range, word) {
		this.result = null;
		this.currentPos = range.startLineNumber - 1;
		this.currentWord = word;
		return this.result;
	};
};
