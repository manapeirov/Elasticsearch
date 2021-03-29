/**
 * Description: File to load environment variables for the different types of environments.
 */
require("dotenv").config();
const devConfig = require("./config.dev");

switch (process.env.NODE_ENV) {
    default:
        //dev
        module.exports = devConfig;
}
