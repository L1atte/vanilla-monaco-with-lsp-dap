import { SQLiteLexer, SQLiteParserListener, SQLiteParser } from "../ANTLR/index.ts";

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

const parser = new SQLiteParser(code);
console.log(parser);
