const esClient = require("../utils/elasticsearchConnection");

const deleteAll = async (req, res) => {
    try {
        const client = await esClient();
        const result = await client.indices.delete({
            index: "suppliers"
        });
        res.send(result);
    } catch (error) {
        console.log("THERE WAS AN ERROR WHEN DELETING INDEX", error);
    }
};

module.exports = { deleteAll };
