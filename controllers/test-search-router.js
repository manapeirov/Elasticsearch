/**
 * Description: Testing Search router to define RESTful functions
 */

const testSearchRouter = require("express").Router();
const { trySearch } = require("../services/test-search-service");

testSearchRouter.get("/", trySearch);

module.exports = testSearchRouter;
