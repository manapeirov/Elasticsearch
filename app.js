/**
 * Description: File for configuration of the app server
 */

const express = require("express");

const cors = require("cors");
const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// require routers
const healthCheckRouter = require("./controllers/health-check-router.js");
const testSearchRouter = require("./controllers/test-search-router");
const { trySearch } = require("./services/test-search-service");

const options = {
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(options));
app.options("*", cors(options));

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create a base router to attach all routers to - needed for aws elb routing
const baseRouter = express.Router();

// add all routers to base router
baseRouter.use("/health-check", healthCheckRouter);
baseRouter.use("/search", testSearchRouter);

//add baseRouter to app
app.use("/elasticsearch", baseRouter);

module.exports = app;
