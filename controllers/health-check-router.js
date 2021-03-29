/**
 * Description: Health Check Router File for define specific routes related to the /example/ route
 */

const healthCheckRouter = require("express").Router();
const {
    healthCheckServiceFunction
} = require("../services/health-check-service");

healthCheckRouter.get("/", healthCheckServiceFunction);

module.exports = healthCheckRouter;
