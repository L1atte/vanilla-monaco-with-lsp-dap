import antlr4 from "antlr4";
export default class SQLiteParser extends antlr4.Parser {
    static grammarFileName: string;
    static literalNames: string[];
    static symbolicNames: string[];
    static ruleNames: string[];
    constructor(input: any);
    get atn(): any;
    sempred(localctx: any, ruleIndex: any, predIndex: any): any;
    expr_sempred(localctx: any, predIndex: any): any;
    parse(): ParseContext;
    sql_stmt_list(): Sql_stmt_listContext;
    sql_stmt(): Sql_stmtContext;
    alter_table_stmt(): Alter_table_stmtContext;
    analyze_stmt(): Analyze_stmtContext;
    attach_stmt(): Attach_stmtContext;
    begin_stmt(): Begin_stmtContext;
    commit_stmt(): Commit_stmtContext;
    rollback_stmt(): Rollback_stmtContext;
    savepoint_stmt(): Savepoint_stmtContext;
    release_stmt(): Release_stmtContext;
    create_index_stmt(): Create_index_stmtContext;
    indexed_column(): Indexed_columnContext;
    create_table_stmt(): Create_table_stmtContext;
    column_def(): Column_defContext;
    type_name(): Type_nameContext;
    column_constraint(): Column_constraintContext;
    signed_number(): Signed_numberContext;
    table_constraint(): Table_constraintContext;
    foreign_key_clause(): Foreign_key_clauseContext;
    conflict_clause(): Conflict_clauseContext;
    create_trigger_stmt(): Create_trigger_stmtContext;
    create_view_stmt(): Create_view_stmtContext;
    create_virtual_table_stmt(): Create_virtual_table_stmtContext;
    with_clause(): With_clauseContext;
    cte_table_name(): Cte_table_nameContext;
    recursive_cte(): Recursive_cteContext;
    common_table_expression(): Common_table_expressionContext;
    delete_stmt(): Delete_stmtContext;
    delete_stmt_limited(): Delete_stmt_limitedContext;
    detach_stmt(): Detach_stmtContext;
    drop_stmt(): Drop_stmtContext;
    expr(_p: any): ExprContext;
    raise_function(): Raise_functionContext;
    literal_value(): Literal_valueContext;
    insert_stmt(): Insert_stmtContext;
    returning_clause(): Returning_clauseContext;
    upsert_clause(): Upsert_clauseContext;
    pragma_stmt(): Pragma_stmtContext;
    pragma_value(): Pragma_valueContext;
    reindex_stmt(): Reindex_stmtContext;
    select_stmt(): Select_stmtContext;
    join_clause(): Join_clauseContext;
    select_core(): Select_coreContext;
    factored_select_stmt(): Factored_select_stmtContext;
    simple_select_stmt(): Simple_select_stmtContext;
    compound_select_stmt(): Compound_select_stmtContext;
    table_or_subquery(): Table_or_subqueryContext;
    result_column(): Result_columnContext;
    join_operator(): Join_operatorContext;
    join_constraint(): Join_constraintContext;
    compound_operator(): Compound_operatorContext;
    update_stmt(): Update_stmtContext;
    column_name_list(): Column_name_listContext;
    update_stmt_limited(): Update_stmt_limitedContext;
    qualified_table_name(): Qualified_table_nameContext;
    vacuum_stmt(): Vacuum_stmtContext;
    filter_clause(): Filter_clauseContext;
    window_defn(): Window_defnContext;
    over_clause(): Over_clauseContext;
    frame_spec(): Frame_specContext;
    frame_clause(): Frame_clauseContext;
    simple_function_invocation(): Simple_function_invocationContext;
    aggregate_function_invocation(): Aggregate_function_invocationContext;
    window_function_invocation(): Window_function_invocationContext;
    common_table_stmt(): Common_table_stmtContext;
    order_by_stmt(): Order_by_stmtContext;
    limit_stmt(): Limit_stmtContext;
    ordering_term(): Ordering_termContext;
    asc_desc(): Asc_descContext;
    frame_left(): Frame_leftContext;
    frame_right(): Frame_rightContext;
    frame_single(): Frame_singleContext;
    window_function(): Window_functionContext;
    offset(): OffsetContext;
    default_value(): Default_valueContext;
    partition_by(): Partition_byContext;
    order_by_expr(): Order_by_exprContext;
    order_by_expr_asc_desc(): Order_by_expr_asc_descContext;
    expr_asc_desc(): Expr_asc_descContext;
    initial_select(): Initial_selectContext;
    recursive_select(): Recursive_selectContext;
    unary_operator(): Unary_operatorContext;
    error_message(): Error_messageContext;
    module_argument(): Module_argumentContext;
    column_alias(): Column_aliasContext;
    keyword(): KeywordContext;
    name(): NameContext;
    function_name(): Function_nameContext;
    schema_name(): Schema_nameContext;
    table_name(): Table_nameContext;
    table_or_index_name(): Table_or_index_nameContext;
    column_name(): Column_nameContext;
    collation_name(): Collation_nameContext;
    foreign_table(): Foreign_tableContext;
    index_name(): Index_nameContext;
    trigger_name(): Trigger_nameContext;
    view_name(): View_nameContext;
    module_name(): Module_nameContext;
    pragma_name(): Pragma_nameContext;
    savepoint_name(): Savepoint_nameContext;
    table_alias(): Table_aliasContext;
    transaction_name(): Transaction_nameContext;
    window_name(): Window_nameContext;
    alias(): AliasContext;
    filename(): FilenameContext;
    base_window_name(): Base_window_nameContext;
    simple_func(): Simple_funcContext;
    aggregate_func(): Aggregate_funcContext;
    table_function_name(): Table_function_nameContext;
    any_name(): Any_nameContext;
}
declare class ParseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    EOF(): any;
    sql_stmt_list: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Sql_stmt_listContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    sql_stmt: (i: any) => any;
    SCOL: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Sql_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    alter_table_stmt(): any;
    analyze_stmt(): any;
    attach_stmt(): any;
    begin_stmt(): any;
    commit_stmt(): any;
    create_index_stmt(): any;
    create_table_stmt(): any;
    create_trigger_stmt(): any;
    create_view_stmt(): any;
    create_virtual_table_stmt(): any;
    delete_stmt(): any;
    delete_stmt_limited(): any;
    detach_stmt(): any;
    drop_stmt(): any;
    insert_stmt(): any;
    pragma_stmt(): any;
    reindex_stmt(): any;
    release_stmt(): any;
    rollback_stmt(): any;
    savepoint_stmt(): any;
    select_stmt(): any;
    update_stmt(): any;
    update_stmt_limited(): any;
    vacuum_stmt(): any;
    EXPLAIN_(): any;
    QUERY_(): any;
    PLAN_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Alter_table_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ALTER_(): any;
    TABLE_(): any;
    table_name: (i: any) => any;
    RENAME_(): any;
    ADD_(): any;
    column_def(): any;
    DROP_(): any;
    column_name: (i: any) => any;
    schema_name(): any;
    DOT(): any;
    TO_(): any;
    COLUMN_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Analyze_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ANALYZE_(): any;
    schema_name(): any;
    table_or_index_name(): any;
    DOT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Attach_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ATTACH_(): any;
    expr(): any;
    AS_(): any;
    schema_name(): any;
    DATABASE_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Begin_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    BEGIN_(): any;
    TRANSACTION_(): any;
    DEFERRED_(): any;
    IMMEDIATE_(): any;
    EXCLUSIVE_(): any;
    transaction_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Commit_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    COMMIT_(): any;
    END_(): any;
    TRANSACTION_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Rollback_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ROLLBACK_(): any;
    TRANSACTION_(): any;
    TO_(): any;
    savepoint_name(): any;
    SAVEPOINT_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Savepoint_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    SAVEPOINT_(): any;
    savepoint_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Release_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    RELEASE_(): any;
    savepoint_name(): any;
    SAVEPOINT_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Create_index_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    CREATE_(): any;
    INDEX_(): any;
    index_name(): any;
    ON_(): any;
    table_name(): any;
    OPEN_PAR(): any;
    indexed_column: (i: any) => any;
    CLOSE_PAR(): any;
    UNIQUE_(): any;
    IF_(): any;
    NOT_(): any;
    EXISTS_(): any;
    schema_name(): any;
    DOT(): any;
    COMMA: (i: any) => any;
    WHERE_(): any;
    expr(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Indexed_columnContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    column_name(): any;
    expr(): any;
    COLLATE_(): any;
    collation_name(): any;
    asc_desc(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Create_table_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    CREATE_(): any;
    TABLE_(): any;
    table_name(): any;
    OPEN_PAR(): any;
    column_def: (i: any) => any;
    CLOSE_PAR(): any;
    AS_(): any;
    select_stmt(): any;
    IF_(): any;
    NOT_(): any;
    EXISTS_(): any;
    schema_name(): any;
    DOT(): any;
    TEMP_(): any;
    TEMPORARY_(): any;
    COMMA: (i: any) => any;
    table_constraint: (i: any) => any;
    WITHOUT_(): any;
    IDENTIFIER(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Column_defContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    column_name(): any;
    type_name(): any;
    column_constraint: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Type_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    name: (i: any) => any;
    OPEN_PAR(): any;
    signed_number: (i: any) => any;
    CLOSE_PAR(): any;
    COMMA(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Column_constraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    CHECK_(): any;
    OPEN_PAR(): any;
    expr(): any;
    CLOSE_PAR(): any;
    DEFAULT_(): any;
    COLLATE_(): any;
    collation_name(): any;
    foreign_key_clause(): any;
    AS_(): any;
    CONSTRAINT_(): any;
    name(): any;
    PRIMARY_(): any;
    KEY_(): any;
    NULL_(): any;
    UNIQUE_(): any;
    signed_number(): any;
    literal_value(): any;
    conflict_clause(): any;
    GENERATED_(): any;
    ALWAYS_(): any;
    STORED_(): any;
    VIRTUAL_(): any;
    asc_desc(): any;
    AUTOINCREMENT_(): any;
    NOT_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Signed_numberContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    NUMERIC_LITERAL(): any;
    PLUS(): any;
    MINUS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Table_constraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    OPEN_PAR(): any;
    indexed_column: (i: any) => any;
    CLOSE_PAR(): any;
    CHECK_(): any;
    expr(): any;
    FOREIGN_(): any;
    KEY_(): any;
    column_name: (i: any) => any;
    foreign_key_clause(): any;
    CONSTRAINT_(): any;
    name(): any;
    PRIMARY_(): any;
    UNIQUE_(): any;
    COMMA: (i: any) => any;
    conflict_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Foreign_key_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    REFERENCES_(): any;
    foreign_table(): any;
    OPEN_PAR(): any;
    column_name: (i: any) => any;
    CLOSE_PAR(): any;
    ON_: (i: any) => any;
    MATCH_: (i: any) => any;
    name: (i: any) => any;
    DEFERRABLE_(): any;
    DELETE_: (i: any) => any;
    UPDATE_: (i: any) => any;
    SET_: (i: any) => any;
    CASCADE_: (i: any) => any;
    RESTRICT_: (i: any) => any;
    NO_: (i: any) => any;
    ACTION_: (i: any) => any;
    COMMA: (i: any) => any;
    NULL_: (i: any) => any;
    DEFAULT_: (i: any) => any;
    NOT_(): any;
    INITIALLY_(): any;
    DEFERRED_(): any;
    IMMEDIATE_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Conflict_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ON_(): any;
    CONFLICT_(): any;
    ROLLBACK_(): any;
    ABORT_(): any;
    FAIL_(): any;
    IGNORE_(): any;
    REPLACE_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Create_trigger_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    CREATE_(): any;
    TRIGGER_(): any;
    trigger_name(): any;
    ON_(): any;
    table_name(): any;
    BEGIN_(): any;
    END_(): any;
    DELETE_(): any;
    INSERT_(): any;
    UPDATE_(): any;
    IF_(): any;
    NOT_(): any;
    EXISTS_(): any;
    schema_name(): any;
    DOT(): any;
    BEFORE_(): any;
    AFTER_(): any;
    INSTEAD_(): any;
    OF_: (i: any) => any;
    FOR_(): any;
    EACH_(): any;
    ROW_(): any;
    WHEN_(): any;
    expr(): any;
    SCOL: (i: any) => any;
    TEMP_(): any;
    TEMPORARY_(): any;
    column_name: (i: any) => any;
    update_stmt: (i: any) => any;
    insert_stmt: (i: any) => any;
    delete_stmt: (i: any) => any;
    select_stmt: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Create_view_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    CREATE_(): any;
    VIEW_(): any;
    view_name(): any;
    AS_(): any;
    select_stmt(): any;
    IF_(): any;
    NOT_(): any;
    EXISTS_(): any;
    schema_name(): any;
    DOT(): any;
    OPEN_PAR(): any;
    column_name: (i: any) => any;
    CLOSE_PAR(): any;
    TEMP_(): any;
    TEMPORARY_(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Create_virtual_table_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    CREATE_(): any;
    VIRTUAL_(): any;
    TABLE_(): any;
    table_name(): any;
    USING_(): any;
    module_name(): any;
    IF_(): any;
    NOT_(): any;
    EXISTS_(): any;
    schema_name(): any;
    DOT(): any;
    OPEN_PAR(): any;
    module_argument: (i: any) => any;
    CLOSE_PAR(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class With_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    WITH_(): any;
    cte_table_name: (i: any) => any;
    AS_: (i: any) => any;
    OPEN_PAR: (i: any) => any;
    select_stmt: (i: any) => any;
    CLOSE_PAR: (i: any) => any;
    RECURSIVE_(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Cte_table_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    table_name(): any;
    OPEN_PAR(): any;
    column_name: (i: any) => any;
    CLOSE_PAR(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Recursive_cteContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    cte_table_name(): any;
    AS_(): any;
    OPEN_PAR(): any;
    initial_select(): any;
    UNION_(): any;
    recursive_select(): any;
    CLOSE_PAR(): any;
    ALL_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Common_table_expressionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    table_name(): any;
    AS_(): any;
    OPEN_PAR: (i: any) => any;
    select_stmt(): any;
    CLOSE_PAR: (i: any) => any;
    column_name: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Delete_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    DELETE_(): any;
    FROM_(): any;
    qualified_table_name(): any;
    with_clause(): any;
    WHERE_(): any;
    expr(): any;
    returning_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Delete_stmt_limitedContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    DELETE_(): any;
    FROM_(): any;
    qualified_table_name(): any;
    with_clause(): any;
    WHERE_(): any;
    expr(): any;
    returning_clause(): any;
    limit_stmt(): any;
    order_by_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Detach_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    DETACH_(): any;
    schema_name(): any;
    DATABASE_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Drop_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    DROP_(): any;
    any_name(): any;
    INDEX_(): any;
    TABLE_(): any;
    TRIGGER_(): any;
    VIEW_(): any;
    IF_(): any;
    EXISTS_(): any;
    schema_name(): any;
    DOT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExprContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    literal_value(): any;
    BIND_PARAMETER(): any;
    column_name(): any;
    table_name(): any;
    DOT: (i: any) => any;
    schema_name(): any;
    unary_operator(): any;
    expr: (i: any) => any;
    function_name(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    STAR(): any;
    filter_clause(): any;
    over_clause(): any;
    DISTINCT_(): any;
    COMMA: (i: any) => any;
    CAST_(): any;
    AS_(): any;
    type_name(): any;
    select_stmt(): any;
    EXISTS_(): any;
    NOT_(): any;
    CASE_(): any;
    END_(): any;
    WHEN_: (i: any) => any;
    THEN_: (i: any) => any;
    ELSE_(): any;
    raise_function(): any;
    PIPE2(): any;
    DIV(): any;
    MOD(): any;
    PLUS(): any;
    MINUS(): any;
    LT2(): any;
    GT2(): any;
    AMP(): any;
    PIPE(): any;
    LT(): any;
    LT_EQ(): any;
    GT(): any;
    GT_EQ(): any;
    ASSIGN(): any;
    EQ(): any;
    NOT_EQ1(): any;
    NOT_EQ2(): any;
    IS_(): any;
    IN_(): any;
    LIKE_(): any;
    GLOB_(): any;
    MATCH_(): any;
    REGEXP_(): any;
    AND_(): any;
    OR_(): any;
    BETWEEN_(): any;
    COLLATE_(): any;
    collation_name(): any;
    ESCAPE_(): any;
    ISNULL_(): any;
    NOTNULL_(): any;
    NULL_(): any;
    table_function_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Raise_functionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    RAISE_(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    IGNORE_(): any;
    COMMA(): any;
    error_message(): any;
    ROLLBACK_(): any;
    ABORT_(): any;
    FAIL_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Literal_valueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    NUMERIC_LITERAL(): any;
    STRING_LITERAL(): any;
    BLOB_LITERAL(): any;
    NULL_(): any;
    TRUE_(): any;
    FALSE_(): any;
    CURRENT_TIME_(): any;
    CURRENT_DATE_(): any;
    CURRENT_TIMESTAMP_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Insert_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    INTO_(): any;
    table_name(): any;
    INSERT_(): any;
    REPLACE_(): any;
    OR_(): any;
    DEFAULT_(): any;
    VALUES_(): any;
    with_clause(): any;
    ROLLBACK_(): any;
    ABORT_(): any;
    FAIL_(): any;
    IGNORE_(): any;
    schema_name(): any;
    DOT(): any;
    AS_(): any;
    table_alias(): any;
    OPEN_PAR: (i: any) => any;
    column_name: (i: any) => any;
    CLOSE_PAR: (i: any) => any;
    returning_clause(): any;
    COMMA: (i: any) => any;
    expr: (i: any) => any;
    select_stmt(): any;
    upsert_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Returning_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    RETURNING_(): any;
    result_column: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Upsert_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ON_(): any;
    CONFLICT_(): any;
    DO_(): any;
    NOTHING_(): any;
    UPDATE_(): any;
    SET_(): any;
    OPEN_PAR(): any;
    indexed_column: (i: any) => any;
    CLOSE_PAR(): any;
    ASSIGN: (i: any) => any;
    expr: (i: any) => any;
    COMMA: (i: any) => any;
    WHERE_: (i: any) => any;
    column_name: (i: any) => any;
    column_name_list: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Pragma_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    PRAGMA_(): any;
    pragma_name(): any;
    schema_name(): any;
    DOT(): any;
    ASSIGN(): any;
    pragma_value(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Pragma_valueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    signed_number(): any;
    name(): any;
    STRING_LITERAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Reindex_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    REINDEX_(): any;
    collation_name(): any;
    table_name(): any;
    index_name(): any;
    schema_name(): any;
    DOT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Select_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    select_core: (i: any) => any;
    common_table_stmt(): any;
    compound_operator: (i: any) => any;
    order_by_stmt(): any;
    limit_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Join_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    table_or_subquery: (i: any) => any;
    join_operator: (i: any) => any;
    join_constraint: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Select_coreContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    SELECT_(): any;
    result_column: (i: any) => any;
    COMMA: (i: any) => any;
    FROM_(): any;
    WHERE_(): any;
    expr: (i: any) => any;
    GROUP_(): any;
    BY_(): any;
    WINDOW_(): any;
    window_name: (i: any) => any;
    AS_: (i: any) => any;
    window_defn: (i: any) => any;
    DISTINCT_(): any;
    ALL_(): any;
    table_or_subquery: (i: any) => any;
    join_clause(): any;
    HAVING_(): any;
    VALUES_(): any;
    OPEN_PAR: (i: any) => any;
    CLOSE_PAR: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Factored_select_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    select_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Simple_select_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    select_core(): any;
    common_table_stmt(): any;
    order_by_stmt(): any;
    limit_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Compound_select_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    select_core: (i: any) => any;
    common_table_stmt(): any;
    order_by_stmt(): any;
    limit_stmt(): any;
    UNION_: (i: any) => any;
    INTERSECT_: (i: any) => any;
    EXCEPT_: (i: any) => any;
    ALL_: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Table_or_subqueryContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    table_name(): any;
    schema_name(): any;
    DOT(): any;
    table_alias(): any;
    INDEXED_(): any;
    BY_(): any;
    index_name(): any;
    NOT_(): any;
    AS_(): any;
    table_function_name(): any;
    OPEN_PAR(): any;
    expr: (i: any) => any;
    CLOSE_PAR(): any;
    COMMA: (i: any) => any;
    table_or_subquery: (i: any) => any;
    join_clause(): any;
    select_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Result_columnContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    STAR(): any;
    table_name(): any;
    DOT(): any;
    expr(): any;
    column_alias(): any;
    AS_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Join_operatorContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    COMMA(): any;
    JOIN_(): any;
    NATURAL_(): any;
    LEFT_(): any;
    INNER_(): any;
    CROSS_(): any;
    OUTER_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Join_constraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ON_(): any;
    expr(): any;
    USING_(): any;
    OPEN_PAR(): any;
    column_name: (i: any) => any;
    CLOSE_PAR(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Compound_operatorContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    UNION_(): any;
    ALL_(): any;
    INTERSECT_(): any;
    EXCEPT_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Update_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    UPDATE_(): any;
    qualified_table_name(): any;
    SET_(): any;
    ASSIGN: (i: any) => any;
    expr: (i: any) => any;
    column_name: (i: any) => any;
    column_name_list: (i: any) => any;
    with_clause(): any;
    OR_(): any;
    COMMA: (i: any) => any;
    FROM_(): any;
    WHERE_(): any;
    returning_clause(): any;
    ROLLBACK_(): any;
    ABORT_(): any;
    REPLACE_(): any;
    FAIL_(): any;
    IGNORE_(): any;
    table_or_subquery: (i: any) => any;
    join_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Column_name_listContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    OPEN_PAR(): any;
    column_name: (i: any) => any;
    CLOSE_PAR(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Update_stmt_limitedContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    UPDATE_(): any;
    qualified_table_name(): any;
    SET_(): any;
    ASSIGN: (i: any) => any;
    expr: (i: any) => any;
    column_name: (i: any) => any;
    column_name_list: (i: any) => any;
    with_clause(): any;
    OR_(): any;
    COMMA: (i: any) => any;
    WHERE_(): any;
    returning_clause(): any;
    limit_stmt(): any;
    ROLLBACK_(): any;
    ABORT_(): any;
    REPLACE_(): any;
    FAIL_(): any;
    IGNORE_(): any;
    order_by_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Qualified_table_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    table_name(): any;
    schema_name(): any;
    DOT(): any;
    AS_(): any;
    alias(): any;
    INDEXED_(): any;
    BY_(): any;
    index_name(): any;
    NOT_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Vacuum_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    VACUUM_(): any;
    schema_name(): any;
    INTO_(): any;
    filename(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Filter_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    FILTER_(): any;
    OPEN_PAR(): any;
    WHERE_(): any;
    expr(): any;
    CLOSE_PAR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Window_defnContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    ORDER_(): any;
    BY_: (i: any) => any;
    ordering_term: (i: any) => any;
    base_window_name(): any;
    PARTITION_(): any;
    expr: (i: any) => any;
    frame_spec(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Over_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    OVER_(): any;
    window_name(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    base_window_name(): any;
    PARTITION_(): any;
    BY_: (i: any) => any;
    expr: (i: any) => any;
    ORDER_(): any;
    ordering_term: (i: any) => any;
    frame_spec(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Frame_specContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    frame_clause(): any;
    EXCLUDE_(): any;
    CURRENT_(): any;
    ROW_(): any;
    GROUP_(): any;
    TIES_(): any;
    NO_(): any;
    OTHERS_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Frame_clauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    RANGE_(): any;
    ROWS_(): any;
    GROUPS_(): any;
    frame_single(): any;
    BETWEEN_(): any;
    frame_left(): any;
    AND_(): any;
    frame_right(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Simple_function_invocationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    simple_func(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    expr: (i: any) => any;
    STAR(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Aggregate_function_invocationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    aggregate_func(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    expr: (i: any) => any;
    STAR(): any;
    filter_clause(): any;
    DISTINCT_(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Window_function_invocationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    window_function(): any;
    OPEN_PAR(): any;
    CLOSE_PAR(): any;
    OVER_(): any;
    window_defn(): any;
    window_name(): any;
    expr: (i: any) => any;
    STAR(): any;
    filter_clause(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Common_table_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    WITH_(): any;
    common_table_expression: (i: any) => any;
    RECURSIVE_(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Order_by_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ORDER_(): any;
    BY_(): any;
    ordering_term: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Limit_stmtContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    LIMIT_(): any;
    expr: (i: any) => any;
    OFFSET_(): any;
    COMMA(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Ordering_termContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    expr(): any;
    COLLATE_(): any;
    collation_name(): any;
    asc_desc(): any;
    NULLS_(): any;
    FIRST_(): any;
    LAST_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Asc_descContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ASC_(): any;
    DESC_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Frame_leftContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    expr(): any;
    PRECEDING_(): any;
    FOLLOWING_(): any;
    CURRENT_(): any;
    ROW_(): any;
    UNBOUNDED_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Frame_rightContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    expr(): any;
    PRECEDING_(): any;
    FOLLOWING_(): any;
    CURRENT_(): any;
    ROW_(): any;
    UNBOUNDED_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Frame_singleContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    expr(): any;
    PRECEDING_(): any;
    UNBOUNDED_(): any;
    CURRENT_(): any;
    ROW_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Window_functionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    OPEN_PAR: (i: any) => any;
    expr(): any;
    CLOSE_PAR: (i: any) => any;
    OVER_(): any;
    order_by_expr_asc_desc(): any;
    FIRST_VALUE_(): any;
    LAST_VALUE_(): any;
    partition_by(): any;
    frame_clause(): any;
    CUME_DIST_(): any;
    PERCENT_RANK_(): any;
    order_by_expr(): any;
    DENSE_RANK_(): any;
    RANK_(): any;
    ROW_NUMBER_(): any;
    LAG_(): any;
    LEAD_(): any;
    offset(): any;
    default_value(): any;
    NTH_VALUE_(): any;
    COMMA(): any;
    signed_number(): any;
    NTILE_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class OffsetContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    COMMA(): any;
    signed_number(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Default_valueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    COMMA(): any;
    signed_number(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Partition_byContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    PARTITION_(): any;
    BY_(): any;
    expr: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Order_by_exprContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ORDER_(): any;
    BY_(): any;
    expr: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Order_by_expr_asc_descContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ORDER_(): any;
    BY_(): any;
    expr_asc_desc(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Expr_asc_descContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    expr: (i: any) => any;
    asc_desc: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Initial_selectContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    select_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Recursive_selectContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    select_stmt(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Unary_operatorContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    MINUS(): any;
    PLUS(): any;
    TILDE(): any;
    NOT_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Error_messageContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    STRING_LITERAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Module_argumentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    expr(): any;
    column_def(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Column_aliasContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    IDENTIFIER(): any;
    STRING_LITERAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class KeywordContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    ABORT_(): any;
    ACTION_(): any;
    ADD_(): any;
    AFTER_(): any;
    ALL_(): any;
    ALTER_(): any;
    ANALYZE_(): any;
    AND_(): any;
    AS_(): any;
    ASC_(): any;
    ATTACH_(): any;
    AUTOINCREMENT_(): any;
    BEFORE_(): any;
    BEGIN_(): any;
    BETWEEN_(): any;
    BY_(): any;
    CASCADE_(): any;
    CASE_(): any;
    CAST_(): any;
    CHECK_(): any;
    COLLATE_(): any;
    COLUMN_(): any;
    COMMIT_(): any;
    CONFLICT_(): any;
    CONSTRAINT_(): any;
    CREATE_(): any;
    CROSS_(): any;
    CURRENT_DATE_(): any;
    CURRENT_TIME_(): any;
    CURRENT_TIMESTAMP_(): any;
    DATABASE_(): any;
    DEFAULT_(): any;
    DEFERRABLE_(): any;
    DEFERRED_(): any;
    DELETE_(): any;
    DESC_(): any;
    DETACH_(): any;
    DISTINCT_(): any;
    DROP_(): any;
    EACH_(): any;
    ELSE_(): any;
    END_(): any;
    ESCAPE_(): any;
    EXCEPT_(): any;
    EXCLUSIVE_(): any;
    EXISTS_(): any;
    EXPLAIN_(): any;
    FAIL_(): any;
    FOR_(): any;
    FOREIGN_(): any;
    FROM_(): any;
    FULL_(): any;
    GLOB_(): any;
    GROUP_(): any;
    HAVING_(): any;
    IF_(): any;
    IGNORE_(): any;
    IMMEDIATE_(): any;
    IN_(): any;
    INDEX_(): any;
    INDEXED_(): any;
    INITIALLY_(): any;
    INNER_(): any;
    INSERT_(): any;
    INSTEAD_(): any;
    INTERSECT_(): any;
    INTO_(): any;
    IS_(): any;
    ISNULL_(): any;
    JOIN_(): any;
    KEY_(): any;
    LEFT_(): any;
    LIKE_(): any;
    LIMIT_(): any;
    MATCH_(): any;
    NATURAL_(): any;
    NO_(): any;
    NOT_(): any;
    NOTNULL_(): any;
    NULL_(): any;
    OF_(): any;
    OFFSET_(): any;
    ON_(): any;
    OR_(): any;
    ORDER_(): any;
    OUTER_(): any;
    PLAN_(): any;
    PRAGMA_(): any;
    PRIMARY_(): any;
    QUERY_(): any;
    RAISE_(): any;
    RECURSIVE_(): any;
    REFERENCES_(): any;
    REGEXP_(): any;
    REINDEX_(): any;
    RELEASE_(): any;
    RENAME_(): any;
    REPLACE_(): any;
    RESTRICT_(): any;
    RIGHT_(): any;
    ROLLBACK_(): any;
    ROW_(): any;
    ROWS_(): any;
    SAVEPOINT_(): any;
    SELECT_(): any;
    SET_(): any;
    TABLE_(): any;
    TEMP_(): any;
    TEMPORARY_(): any;
    THEN_(): any;
    TO_(): any;
    TRANSACTION_(): any;
    TRIGGER_(): any;
    UNION_(): any;
    UNIQUE_(): any;
    UPDATE_(): any;
    USING_(): any;
    VACUUM_(): any;
    VALUES_(): any;
    VIEW_(): any;
    VIRTUAL_(): any;
    WHEN_(): any;
    WHERE_(): any;
    WITH_(): any;
    WITHOUT_(): any;
    FIRST_VALUE_(): any;
    OVER_(): any;
    PARTITION_(): any;
    RANGE_(): any;
    PRECEDING_(): any;
    UNBOUNDED_(): any;
    CURRENT_(): any;
    FOLLOWING_(): any;
    CUME_DIST_(): any;
    DENSE_RANK_(): any;
    LAG_(): any;
    LAST_VALUE_(): any;
    LEAD_(): any;
    NTH_VALUE_(): any;
    NTILE_(): any;
    PERCENT_RANK_(): any;
    RANK_(): any;
    ROW_NUMBER_(): any;
    GENERATED_(): any;
    ALWAYS_(): any;
    STORED_(): any;
    TRUE_(): any;
    FALSE_(): any;
    WINDOW_(): any;
    NULLS_(): any;
    FIRST_(): any;
    LAST_(): any;
    FILTER_(): any;
    GROUPS_(): any;
    EXCLUDE_(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Function_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Schema_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Table_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Table_or_index_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Column_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Collation_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Foreign_tableContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Index_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Trigger_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class View_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Module_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Pragma_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Savepoint_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Table_aliasContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Transaction_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Window_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AliasContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class FilenameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Base_window_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Simple_funcContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Aggregate_funcContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Table_function_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    any_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class Any_nameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    IDENTIFIER(): any;
    keyword(): any;
    STRING_LITERAL(): any;
    OPEN_PAR(): any;
    any_name(): any;
    CLOSE_PAR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
export {};
