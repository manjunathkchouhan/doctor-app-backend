const { S3, AWS } = require("aws-sdk");

exports.s3uploadv2 = async (file) => {
  const s3 = new S3({
    secretAccessKey: "KGI6eJGZHBv8mOyswVzsEPWN/e8J51zfbF+KrseC",
    accessKeyId: "AKIAZAJYT6FTKOBNEB3S",
    region: "ap-south-1",
  });
  const params = {
    Bucket: "whitehealthfiles2022",
    Key: "uploads/" + Date.now() + file.originalname,
    Body: file.buffer,
  };
  return await s3.upload(params).promise();
};
