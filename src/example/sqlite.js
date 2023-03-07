import { SQLiteLexer, SQLiteParserListener, SQLiteParser, CustomListener } from "../ANTLR/index.js";
import { default as antlr4 } from "antlr4";

function parse(code) {
	const inputStream = new antlr4.InputStream(code);
	const lexer = new SQLiteLexer(inputStream);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new SQLiteParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.sql_stmt_list();
	console.log(tree);
	const result = [];
	const listener = new CustomListener(result);
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
	console.log(listener);
	return listener.result;
}

const code = `
Select Name, printf('%,d',Bytes) Size,
    FIRST_VALUE(Name) OVER (
        ORDER BY Bytes
    ) AS SmallestTrack
FROM
    tracks
WHERE
    AlbumId = 1;
`;

parse(code);
