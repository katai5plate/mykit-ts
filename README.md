# mykit-ts

- [日本語](./README-ja.md)

You can setup a "TypeScript + webpack + Browsersync + ESLint" environment with 3 lines.

- Powered by https://github.com/katai5plate/mykit-core

## Require
- Node.js
- Yarn
- Visual Studio Code
- Visual Studio Code Extension:
  - ESLint
  - Prettier

## Usage
- In a new project:
```
yarn add katai5plate/mykit-ts
node -e "require('mykit-ts')();"
yarn mykit-install
```
```
yarn start
yarn build
```

## Libs

### Basics
- typescript
- browser-sync
- webpack
- webpack-cli

### Webpack
- html-webpack-plugin
- ts-loader
- style-loader
- css-loader
- file-loader

### npm-scripts
- npm-run-all
- rimraf

## Warning!
- This tool forcibly rewrites the following files:
  - Add lines
    - ./package.json
  - Destructive change
    - ./tsconfig.json
    - ./webpack.config.js
    - ./index.html
    - ./bs-config.js
    - ./.eslintrc
    - ./.eslintignore
    - ./vscode/setting.json
    - ./@types/assets.d.ts
    - ./src/index.ts
