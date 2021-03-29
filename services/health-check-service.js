/**
 * Description: Health Check Service functions
 */

/**
 * Description: Health check function for some kind of business logic
 * @param req - express request object
 * @param res - express response object
 * Output: None
 */

const esClient = require("../utils/elasticsearchConnection");

const healthCheckServiceFunction = async (req, res) => {
    try {
        const client = await esClient();
        const result = await client.cluster.health({}, (err, resp, status) => {
            console.log("-- Client Health --", resp);
        });
        res.status(200).json({
            response: `Elasticsearch client health- ${result}`
        });
    } catch (error) {
        console.log("HEALTH CHECK ERROR", error);
    }
};

module.exports = {
    healthCheckServiceFunction
};
