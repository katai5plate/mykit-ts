# mykit-ts

自分用の TypeScript Development Kit

これを使用することで、TypeScript + Webpack + Browsersync な環境をスピーディに構築できる。

```
yarn add katai5plate/mykit-ts
node -e "require('mykit-ts')();"
yarn mykit-install
```

## 使い方
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
