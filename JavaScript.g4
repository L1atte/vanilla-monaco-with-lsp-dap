grammar JavaScript;

/* 语法规则 */
program: statementList EOF;
statementList: statement+;
statement: variableDeclaration | functionDeclaration | expressionStatement;
variableDeclaration: 'var' Identifier '=' expression ';';
functionDeclaration: 'function' Identifier '(' parameterList? ')' block;
parameterList: Identifier (',' Identifier)*;
block: '{' statementList? '}';
expressionStatement: expression ';';
expression: Identifier | Literal | functionCall;
Literal: 'true' | 'false' | Number | String;
functionCall: Identifier '(' argumentList? ')' ;
argumentList: expression (',' expression)*;

/* 词法规则 */
Number: ('0'..'9')+;
String: '"' (~["\\\r\n] | '\\' .)* '"';
Identifier: [a-zA-Z_$][a-zA-Z0-9_$]*;

Whitespace: [ \t\r\n]+ -> skip;
