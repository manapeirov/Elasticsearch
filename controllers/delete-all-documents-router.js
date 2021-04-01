/**
 * Description: Delete all documents in elasticsearch cluster router to define RESTful functions
 */

const deleteAllRouter = require("express").Router();
const { deleteAll } = require("../services/delete-all-documents-service");

deleteAllRouter.get("/", deleteAll);

module.exports = deleteAllRouter;
