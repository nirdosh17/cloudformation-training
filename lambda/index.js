const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var params = {
        Bucket: process.env.BUCKET_NAME,
        Key: "data.json",
    };

    const data = await s3.getObject(params).promise();
    console.log(`Data: ${data}`)

    const response = {
        statusCode: 200,
        body: data.Body.toString(),
    };
    return response;
};
