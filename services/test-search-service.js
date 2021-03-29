const esClient = require("../utils/elasticsearchConnection");

const trySearch = async (req, res) => {
    const searchTerm = req.query.supplierName;
    try {
        const client = await esClient();
        const result = await client.search({
            index: "suppliers",
            body: {
                query: {
                    match_phrase: { "supplierName.S": `${searchTerm}` }
                }
            }
        });
        res.send(result.body.hits);
        // console.log("RESULT", result.body.hits);
    } catch (error) {
        console.log("THERE IS AN ERROR", error);
    }
};

module.exports = { trySearch };
