const config = require("../config/config");
const AWS_ES_ENDPOINT = config.AWS.AWS_ES_ENDPOINT;
const { Client } = require("@elastic/elasticsearch");

const {
    createAWSConnection,
    awsGetCredentials
} = require("@acuris/aws-es-connection");

const esClient = async () => {
    try {
        const awsCredentials = await awsGetCredentials();
        const AWSConnection = createAWSConnection(awsCredentials);

        return new Client({
            ...AWSConnection,
            node: AWS_ES_ENDPOINT
        });
    } catch (e) {
        console.log(e);
        throw Error(e);
    }
};

module.exports = esClient;
