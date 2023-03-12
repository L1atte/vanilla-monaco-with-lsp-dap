import { SQLAutocomplete, SQLDialect } from 'sql-autocomplete';

const sqlAutocomplete = new SQLAutocomplete(SQLDialect.MYSQL);
const sql1 = 'SELECT * FR';
const options1 = sqlAutocomplete.autocomplete(sql1);
console.dir(options1);

// [ AutocompleteOption { value: 'FROM', optionType: 'KEYWORD' } ]

const sqlAutocompleteWithNames = new SQLAutocomplete(SQLDialect.MYSQL,
    ['myDatabaseTableName'], // Optional
    ['aColumnName']          // Optional
);
const sql2 = 'SELECT * FROM myDatabaseTableNa';
const options2 = sqlAutocompleteWithNames.autocomplete(sql2);
console.dir(options2);

// [ AutocompleteOption { value: 'myDatabaseTableName', optionType: 'TABLE' } ]