/*
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/*
 * Import required packages.
 * Packages should be installed with "npm install".
 */
require("dotenv").config();
const express = require("express");
const aws = require("aws-sdk");

const port = process.env.PORT || 3003;

/*
 * Set-up and run the Express app.
 */
const app = express();
app.set("views", "./views");
app.use(express.static("./public"));
app.engine("html", require("ejs").renderFile);
// app.listen(process.env.PORT || 3000);

// server
app.listen(port, () => {
  // console.log(`Listening on port ${PORT}`);
  console.log(`💥 Application is listening on port http://localhost:${port}`);
});

/*
 * Configure the AWS region of the target bucket.
 * Remember to change this to the relevant region.
 */
aws.config.region = "us-east-1";

/*
 * Load the S3 information from the environment variables.
 */
const S3_BUCKET = process.env.STORAGE_BUCKET_NAME;

console.log(`S3_BUCKET: ${S3_BUCKET}`);
console.log(
  `process.env.STORAGE_BUCKET_NAME:`,
  process.env.STORAGE_BUCKET_NAME
);

/*
 * Respond to GET requests to /account.
 * Upon request, render the 'account.html' web page in views/ directory.
 */
app.get("/", (req, res) => res.render("index.html"));

/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
app.get("/sign-s3", (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

/*
 * Respond to POST requests to /submit_form.
 * This function needs to be completed to handle the information in
 * a way that suits your application.
 */
app.post("/save-details", (req, res) => {
  // TODO: Read POSTed form data and do something useful
});
