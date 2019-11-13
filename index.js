const resources = require(`${__dirname}/resources.json`);
const modify = require(`${__dirname}/modify.json`);
module.exports = () => require("mykit-core")(__dirname, resources, modify);
