const resources = require(`${__dirname}/resources.json`);
const scripts = require(`${__dirname}/scripts.json`);
module.exports = () => require("mykit-core")(resources, scripts);
