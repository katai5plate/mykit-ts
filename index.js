const fs = require("fs-extra");
module.exports = () => {
  fs.outputJSONSync(`${__dirname}/tsconfig.json`, {
    compilerOptions: {
      sourceMap: true,
      target: "es5",
      moduleResolution: "node",
      lib: ["es2019", "dom"],
      resolveJsonModule: true
    }
  });
};
