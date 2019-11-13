# mykit-ts

自分用の TypeScript Development Kit

これを使用することで、TypeScript + Webpack + Browsersync な環境をスピーディに構築できる。

## 必要なもの
- Node.js
- Yarn

## 環境構築方法
- 新規プロジェクト内で以下を実行する。
```
yarn add katai5plate/mykit-ts
node -e "require('mykit-ts')();"
yarn mykit-install
```

## 環境構築後の使い方
- サーバー起動: `yarn start`
- ビルド実行: `yarn build`

## 内訳

### 基本
- typescript
- browser-sync
- webpack
- webpack-cli

### Webpack 関係
- html-webpack-plugin
- ts-loader
- style-loader
- css-loader
- file-loader

### npm-scripts 関係
- npm-run-all
- rimraf

## 注意
- このツールは以下のファイルを強制的に書き換えます。すでに存在する場合はバックアップを残すなどして、ご注意ください。
  - ./tsconfig.json
  - ./webpack.config.js
  - ./index.html
  - ./bs-config.js
  - ./.eslintrc
  - ./.eslintignore
  - ./vscode/setting.json
  - ./@types/assets.d.ts
  - ./src/index.ts
