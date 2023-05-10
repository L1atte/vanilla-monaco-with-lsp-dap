## setup

dependence：

```
pnpm i monaco-editor
pnpm i antlr4ts
pnpm i -D antlr4ts-cli
pnpm i antlr4-c3
```

获取基于 antlr4 SQL 语法文件：

**[grammars-v4](https://github.com/antlr/grammars-v4)**：<https://github.com/antlr/grammars-v4>

该 repo 开源了绝大部分的编程语言的语法文件

## get Lexer and Parser of grammar

使用 antlr4ts 对语法文件进行解析，从而获取基于 TypeScript 实现的 Lexer 和 Parser

```shell
// package.json
"antlr4ts": "antlr4ts -Xexact-output-dir -Dlanguage=TypeScript -o ./src/ANTLR2 ./SQLiteLexer.g4 ./SQLiteParser.g4"
```

## 程序模块介绍

- ### grammar-output

  antlr 语法解析文件的输出目录

- ### Syntax

  负责 monaco editor 的语法着色模块

- ### SQLCore

  sql 核心模块，提供统一的入口，对外屏蔽接入各种语法解析文件。

  提供经过 AST 处理后的 token、parser、parseTree

- ### Auto-Completion

  词法填充模块，计算基于当前输入的代码建议，对外输出符合 `Monaco-completion`协议的代码补全内容

- ### Error-Handler

  语法报错模块，计算基于当前输入的语法报错信息，对外输出符合 `Monaco-Error` 协议的语法错误内容

## 语法着色

Monarch 是 Monaco Editor 自带的一个语法高亮库，通过它，我们可以用类似 Json 的语法来实现**自定义语言**的**语法高亮功能**

monaco 提供了`setMonarchTokensProvider`函数来让我定义语言的高亮功能，而`languageDef`就是我们所需要填写的 Monarch 所规定的 Json 内容。

```
monaco.languages.setMonarchTokensProvider(languageId, languageDef);
```

其中，基于 Monarch 的各种语言的着色规则的实现可以在以下 repo 取得

<https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages>

## code-completion

实现 code-completion 我们用到了 antlr4-c3 这个开源 repo

> antlr4-c3 是基于 antlr4 的语法分析实现的上下文无关文法的 code-completion 引擎

### antlr4-c3 的工作原理

![](https://raw.githubusercontent.com/L1atte/PicGo/main/img/parse-tree-example.png)

antlr4-c3 的工作原理是计算 `parse tree` 中某一点可用的 `token` 的集合

需要注意到，`antlr4-c3` 是以标记（tokens）的形式工作的，我们**并不会得到可以随时展示给用户的字符串**。把这些标记翻译成有意义的字符串是接下来我们要做的事情

## code-completion 生命周期

![auto-completion](https://raw.githubusercontent.com/L1atte/PicGo/main/img/auto-completion.png)

## syntax error 生命周期

![](https://raw.githubusercontent.com/L1atte/PicGo/main/img/error-handler.png)

## antlr4 工作流程

![](https://raw.githubusercontent.com/L1atte/PicGo/main/img/compiler.png)

- 针对给定的源代码运行具有该语法的词法分析器以生成一组标记
- 将这些标记输入解析器以生成抽象语法树 (AST)
- 让我们的语义分析器检查 AST 以确保它在语义上是有效的
- 可选地通过优化器提供 AST 以裁剪掉不必要的代码
- 最后从该 AST 生成可执行代码并将其作为输出返回

## 物料

**antlr4 docs**: <https://www.antlr.org/api/Java/org/antlr/v4/runtime/package-summary.html>

**the antlr4 for JavaScript runtime**: <https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md>
