import S3 from "react-aws-s3";

// eslint-disable-next-line global-require
window.Buffer = window.Buffer || require("buffer").Buffer;

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  dirName: process.env.REACT_APP_DIRECTORY_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  s3Url: process.env.REACT_APP_S3_URL,
};

const ReactS3Client = new S3(config);

export default ReactS3Client;
