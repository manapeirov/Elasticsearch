module.exports = {
    PORT: process.env.PORT || 3000,
    AWS: {
        ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        REGION: process.env.AWS_REGION,
        AWS_ES_ENDPOINT: process.env.AWS_ES_ENDPOINT
    }
};