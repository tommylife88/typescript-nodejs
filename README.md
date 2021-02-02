# TypeScript+ESLint+Prettier+VSCode

TypeScriptのVisual Studio Code上の開発環境を整えたもの。  
JSのLinterとして `ESLint` 、コードフォーマッターとして `Prettier` 入り。

## 動作環境

```bash
> node -v
v15.7
> npm -v
7.4.3
> yarn -v
1.22.5
```

## インストール

```
# package.jsonの記載されているパッケージをすべてインストール
> yarn
```

## スクリプト

[package.json](package.json)の `"scripts"` でコマンドを定義しているので `yarn` で実行する。

```
> yarn run
info Project commands
   - build
      npm-run-all clean tsc
   - check-types
      tsc --noEmit
   - clean
      rimraf out/*
   - dev
      ts-node src/index.ts
   - dev:watch
      ts-node-dev --respawn src/index.ts
   - eslint
      eslint src/**/*.ts
   - eslint:fix
      eslint src/**/*.ts --fix
   - format
      prettier --write src/**/*.{js,ts,json}
   - lint
      npm-run-all eslint check-types
   - lint:fix
      npm-run-all format eslint:fix check-types
   - start
      node .
   - tsc
      tsc
```

使い方。
```
# 実行
> yarn run dev

# コンパイル -> 実行
> yarn run build
> yarn run start

# ESLintのみ実行
> yarn run lint

# Prettierのみ実行
> yarn run format

# Prettier -> ESLint -> コンパイラでのエラーチェック
> yarn run lint:fix
```

## ESLint

[.eslintrc.yml](.eslintrc.yml)  
公式の基本設定のまま。設定方法は[ここ](https://eslint.org/docs/user-guide/configuring/)を参照。

## Prettier

[.prettier.yml](.prettier.yml)  
公式の基本設定のまま。設定内容は[ここ](https://prettier.io/docs/en/options.html)を参照。

Rulesは[ここ](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules)を参照。  
> * "off" or 0 - turn the rule off
> * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
> * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

VSCodeの設定でファイルセーブ時に自動でフォーマットするようにしている。  
気に入らなければ設定をコメントアウトする。

## セットアップ手順（参考までに）

```
# package.json
yarn init -y
yarn add -D yarn-run-all

# ts-node … tscを使ってプリコンパイルなしにTypeScriptを実行するnpmパッケージ
# ts-node-dev … ts-nodeでwatchをするために必要
# typescript … TypeScriptコンパイラ
# @types/node … Nodeのデフォルトモジュールの型定義
yarn add -D ts-node ts-node-dev typescript @types/node

# init tsconfig
yarn run tsc --init

# ESLint
#yarn run eslint --init
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier
yarn add -D prettier eslint-config-prettier

```
