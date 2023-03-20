# 目录结构

## src

- ### grammar-output

  antlr 语法解析文件的输出目录

- ### Syntax

  负责 monaco editor 的语法着色模块
  
- ### SQLCore

  sql 核心模块，提供统一的入口，对外屏蔽接入各种语法解析文件。
  
  提供经过 AST 处理后的 token、parser、parseTree
  
- ### Auto-Completion

  词法填充模块，提供根据当前输入和输入位置的输入建议