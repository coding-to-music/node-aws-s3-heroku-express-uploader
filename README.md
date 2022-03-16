# Node AWS S3 Heroku Express Uploader

## NodeDirectUploader

https://github.com/coding-to-music/node-aws-s3-heroku-express-uploader

https://node-aws-s3-express-uploader.herokuapp.com/account

https://node-aws-s3-express-uploader.herokuapp.com/sign-s3

By Will Webberley https://github.com/willwebberley

https://github.com/willwebberley/NodeDirectUploader

https://devcenter.heroku.com/articles/s3-upload-node

## Licensing

The files in this repository are, unless stated otherwise, released under the Apache License. You are free to redistribute this code with or without modification. The full license text is available [here](http://www.apache.org/licenses/LICENSE-2.0).

## Direct-to-S3 uploads in a Node.js application running on Heroku

Simple example demonstrating how to accomplish a direct upload to Amazon's S3 in a Node.js web application.

This example uses the [express](http://expressjs.com/) web framework to facilitate request-handling. However, the process of signing the S3 PUT request would be identical in most Node apps.

This code is mostly ready to be run as cloned, but a function will need to be properly defined to handle the storing of the POSTed information. The current example simply demonstrates the upload to S3.

## Dependencies and Installation

Ensure Node is installed. This can be done through your package manager or from their [website](http://nodejs.org/).

Clone this repository:

```term
$ git clone https://github.com/willwebberley/NodeDirectUploader.git
```

Change directory into the application and install the application's dependencies:

```term
cd NodeDirectUploader

yarn

# or

npm install
```

If you prefer `npm` to `yarn`, then run `npm install` instead.

## Running the application

- Set environment variables for your AWS access key, secret, and bucket name (see [companion article](https://devcenter.heroku.com/articles/s3-upload-node))
- Run `yarn start` (or `npm start`)
- Visit [localhost:3000/account](http://localhost:3000/account) to try it out

## Deploying the application

See the article [Deploying with Git](https://devcenter.heroku.com/articles/git) for more detailed information on deploying to Heroku.

- Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- Commit your application to a local Git repository (e.g. `git init`, `git add .`, `git commit -m "version 1 commit"`, etc.)
- Create the application on Heroku by adding a Git remote (`$ heroku create`)
- Push your code to the new Heroku repo (`$ git push heroku master`)

# How to run

## Secrets and env variables

.env

```java
AWS_ACCESS_KEY_ID=KEYHEREJVYVNENDWXOX
AWS_SECRET_ACCESS_KEY=SECRETHEREQpsNdifV4zm03WKHKPySrJcyIGSBS3Q
STORAGE_REGION=us-east-1
STORAGE_BUCKET_NAME=bucketeer-1234530-5f38-4de2-a2c4-5c1205f3fb0a
USE_MINIO=FALSE
```

## kill-port as needed

```java

# node server
kill-port 3000
```

## see what is running on a particular port

```java
ss -ltup

netstat -ltup

systemctl --type=service --state=running

systemctl --type=service --state=active
```

## client/proxy.json

Set to the Heroku app name

```java
# client/proxy.json

    "target": "https://node-aws-s3-express-uploader.herokuapp.com/",
```

```java
# client/proxy-local.json

    "target": "http://localhost:3000",

# client/protractor.conf.js

  baseUrl: 'http://localhost:4200/',

```

## Server

```java
npm run start

```

## Create the app on heroku using the CLI

app will be named `node-aws-s3-express-uploader`

```java
heroku apps:create node-aws-s3-express-uploader
Creating ⬢ node-aws-s3-express-uploader... done
```

## Need to set the Heroku environment variables:

Initially they are empty

```java
heroku config
=== node-aws-s3-express-uploader Config Vars

```

They are stored in .env

```java
AWS_ACCESS_KEY_ID=KEYHEREJVYVNENDWXOX
AWS_SECRET_ACCESS_KEY=SECRETHEREQpsNdifV4zm03WKHKPySrJcyIGSBS3Q
STORAGE_REGION=us-east-1
STORAGE_BUCKET_NAME=bucketeer-1234530-5f38-4de2-a2c4-5c1205f3fb0a
USE_MINIO=FALSE
```

```java
heroku config:set DB_CONNECTION="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
Setting DB_CONNECTION and restarting ⬢ node-aws-s3-express-uploader... done, v5
DB_CONNECTION: mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

heroku config:set AWS_BUCKET_NAME="my-site-images-test"
Setting AWS_BUCKET_NAME and restarting ⬢ node-aws-s3-express-uploader... done, v6
AWS_BUCKET_NAME: my-site-images-test
```

### Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

```java
git add .
git commit -am "add heroku"
git push heroku main
```

## view Heroku logs

```java
heroku logs --tail
```

## Enable the Heroku add-on for enhanced metrics

https://devcenter.heroku.com/articles/language-runtime-metrics-nodejs#getting-started

```java
heroku labs:enable "runtime-heroku-metrics" -a node-aws-s3-express-uploader
heroku labs:enable "nodejs-language-metrics" -a node-aws-s3-express-uploader
```

```java
heroku labs:enable "runtime-heroku-metrics" -a node-aws-s3-express-uploader

Enabling runtime-heroku-metrics for node-aws-s3-express-uploader... done

heroku labs:enable "nodejs-language-metrics" -a node-aws-s3-express-uploader

Enabling nodejs-language-metrics for node-aws-s3-express-uploader... done
```

## Redeploy

Once you have enabled the Enhanced Language Metrics feature re-deploy your application using an empty commit.

```java
git commit --allow-empty -m "Enable Node.js Language Metrics"
git push heroku main
```

After a few minutes, you will begin receiving metrics which can be viewed via the Application Metrics tab.

Direct to S3 File Uploads in Node.js
English — 日本語に切り替える
Last updated March 09, 2022

Table of Contents
Uploading directly to S3
Overview
Prerequisites
Initial setup
Direct uploading
Running the app
Summary
Web applications often require the ability to allow users to upload files such as images, movies and archives. Amazon S3 is a popular and reliable storage option for these files.

This article demonstrates how to create a Node.js application that uploads files directly to S3 instead of via a web application, utilising S3’s Cross-Origin Resource Sharing (CORS) support. The Express web framework is used to facilitate request-handling in the examples below, but the procedure should be almost identical in any Node.js application.

Uploading directly to S3
A complete example of the code discussed in this article is available for direct use in this GitHub repository.

The main advantage of direct uploading is that the load on your application’s dynos would be considerably reduced. Using app-side processes for receiving files and transferring to S3 can needlessly tie up your dynos and will mean that they will not be able to respond to simultaneous web requests as efficiently.

The application uses client-side and app-side JavaScript for signing the requests. The actual upload is carried out asynchronously so that you can decide how to handle your application’s flow after the upload has completed (for example, you may wish to redirect users to another page upon successful upload rather than a full page refresh).

An example simple account-editing scenario is used as a guide for completing the various steps required to accomplish the direct upload and to relate the application of this to a wider range of use-cases. More information on this scenario is provided later.

Overview
S3 is comprised of a set of buckets, each with a globally unique name, in which individual files (known as objects) and directories, can be stored.

For uploading files to S3, you will need an Access Key ID and a Secret Access Key, which act as a username and password. The access key account will need to have sufficient access privileges to the target bucket in order for the upload to be successful.

Please see the S3 Article for more information on this, creating buckets and handling your authentication keys.

In general, the method described in this article follows these simple steps:

A file is selected for upload by the user in their web browser;
The user’s browser makes a request to your web application on Heroku, which produces a temporary signature with which to sign the upload request;
The temporary signed request is returned to the browser in JSON format;
The browser then uploads the file directly to Amazon S3 using the signed request supplied by your Node.js application.
This guide includes information on how to implement the client-side and app-side code to form the complete system. After following the guide, you should have a working barebones system, allowing your users to upload files to S3. However, it is usually worth adding extra functionality to help improve the security of the system and to tailor it for your own particular uses. Pointers for this are mentioned in the appropriate parts of the guide.

The signature generation on the server uses AWS’s official SDK, as explained later. Please see their documentation for information on the features of this SDK.

Prerequisites
The Heroku CLI has been installed;
Node.js has been installed;
A Heroku application has been created for the current project;
An AWS S3 bucket has been created;
You have AWS authentication keys that have write access to the bucket.
Initial setup
S3 setup
You will now need to edit some of the permissions properties of the target S3 bucket so that the final request has sufficient privileges to write to the bucket. In a web-browser, sign in to the AWS console and select the S3 section. Select the appropriate bucket and click the Permissions tab. A few options are now provided on this page (including Block public access, Access Control List, Bucket Policy, and CORS configuration).

Firstly, ensure that “Block all public access” is turned off, and in particular turn off “Block public access to buckets and objects granted through new access control lists” and “Block public access to buckets and objects granted through any access control lists” for the purposes of this project. Setting up the bucket in this way allows us to read its contents without signed URLs, but this may not be suitable for services running in production.

Next, you will need to configure the bucket’s CORS (Cross-Origin Resource Sharing) settings, which will allow your application to access content in the S3 bucket. Each rule should specify a set of domains from which access to the bucket is granted and also the methods and headers permitted from those domains.

Locating the **`Permissions`** tab and CORS configuration editor

For this to work in your application, click ‘Edit’ and enter the following JSON for the bucket’s CORS settings:

[
{
"AllowedHeaders": [
"*"
],
"AllowedMethods": [
"GET",
"HEAD",
"POST",
"PUT"
],
"AllowedOrigins": [
"*"
],
"ExposeHeaders": []
}
]

Click ‘Save changes’ and close the editor.

This tells S3 to allow any domain access to the bucket and that requests can contain any headers, which is generally fine for testing. When deploying, you should change the ‘AllowedOrigin’ to only accept requests from your domain.

If you wish to use S3 credentials specifically for this application, then more keys can be generated in the AWS account pages. This provides further security, since you can designate a very specific set of requests that this set of keys are able to perform. If this is preferable to you, then you will need to configure your IAM users in the Edit bucket policy option in your S3 bucket. There are various guides on AWS’s web pages detailing how this can be accomplished.

App setup
If your app hasn’t yet been setup, then it is useful to do so at this stage. To get started, create a directory somewhere on your local machine:

mkdir NodeDirectUploader
Now create two further subdirectories of NodeDirectUploader/ to respectively contain your HTML pages and support files:

cd NodeDirectUploader
mkdir views
mkdir public
Node’s package manager, npm, should have been installed by default along with Node and can be used to handle the installation and updates of the required packages for your app. To begin this, run Node’s interactive package setup tool in the root of your app directory:

npm init
The tool will ask some questions about your app, including its name, description, licensing, and version-control, and create a file called package.json in the app’s root. This file uses your responses to maintain information about your app, which you can edit freehand as you develop further.

The same file can be used to easily declare your app’s dependencies, which will facilitate the deployment and share-ability of your app. To do so, edit package.json and add a "dependencies" JSON object to contain the following package dependencies:

{
"name": "NodeDirectUploader",
"version": "0.0.1",

...

"dependencies": {
"aws-sdk": "2.x",
"ejs": "2.x",
"express": "4.x"
}
}
These dependencies can then be installed using npm:

npm install
Use of these packages will become clear later, and installation of them in this way allows for greater control of your per-app dependencies as your apps grow.

Heroku setup
In order for your application to access the AWS credentials for signing upload requests, they will need to be added as configuration variables in Heroku:

heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy
Adding config vars and restarting app... done, v21
AWS_ACCESS_KEY_ID => xxx
AWS_SECRET_ACCESS_KEY => yyy
In addition to the AWS access credentials, set your target S3 bucket’s name:

heroku config:set S3_BUCKET=zzz
Adding config vars and restarting app... done, v21
S3_BUCKET => zzz
Using config vars is preferable over configuration files for security reasons. Avoid placing passwords and access keys directly in your application’s code or in configuration files. Please see the article Configuration and Config Vars for more information.

Setting up local environment variables for your app is useful for running and testing your app locally. For more information, see the Set up your local environment variables section of the Heroku Local article. Information on launching your app locally is provided later in this article.

Remember to add the .env file to your .gitignore, since this file should only be used for local testing.

Direct uploading
The processes and steps required to accomplish a direct upload to S3 will be demonstrated through the use of a simple profile-editing scenario for the purposes of this article. This example will involve the user being permitted to select an avatar image to upload and enter some basic information to be stored as part of their account.

In this scenario, the following procedure will take place:

The user is presented with a web page, containing elements encouraging the user to choose an image to upload as their avatar and to enter a username and their own name.
An element is responsible for maintaining a preview of the chosen image by the user. By default, and if no image is chosen for upload, a default avatar image is used instead (making the image-upload effectively optional to the user in this scenario).
When a user selects an image to be uploaded, the upload to S3 is handled automatically and asynchronously with the process described earlier in this article. The image preview is then updated with the selected image once the upload is complete and successful.
The user is then free to move on to filling in the rest of the information.
The user then clicks the “submit” button, which posts the username, name and the URL of the uploaded image to the Node application to be checked and/or stored. If no image was uploaded by the user earlier the default avatar image URL is posted instead.
An example of what the simple finished product will consist of

Setting up the client-side code
No third-party code is required to complete the implementation on the client-side.

The HTML and JavaScript can now be created to handle the file selection, obtain the request and signature from your Node application, and then finally make the upload request.

Firstly, create a file called account.html in your application’s views/ directory and populate the head and other necessary HTML tags appropriately for your application. In the body of this HTML file, include a file input and an element that will contain status updates on the upload progress. In addition to this, create a form to allow the user to enter their username and full name and a hidden input element to hold the URL of the chosen avatar image:

To see the completed HTML file, please see the appropriate code in the companion repository.

<input type="file" id="file-input">
<p id="status">Please select a file</p>
<img id="preview" src="/images/default.png">

<form method="POST" action="/save-details">
  <input type="hidden" id="avatar-url" name="avatar-url" value="/images/default.png">
  <input type="text" name="username" placeholder="Username"><br>
  <input type="text" name="full-name" placeholder="Full name"><br><br>
  <input type="submit" value="Update profile">
</form>
The #preview element initially holds a default avatar image (which would become the user’s avatar if a new image is not chosen), and the #avatar-url input maintains the current URL of the user’s chosen avatar image. Both of these are updated by the JavaScript, discussed below, when the user selects a new avatar.

Thus when the user finally clicks the submit button, the URL of the avatar is submitted, along with the username and full name of the user, to your desired endpoint for server-side handling.

The client-side code is responsible for achieving two things:

Retrieve a signed request from the app with which the image can be PUT to S3
Actually PUT the image to S3 using the signed request
JavaScript’s XMLHttpRequest objects can be created and used for making asynchronous HTTP requests.

To accomplish this, first create a <script> block and write some code that listens for changes in the file input, once the document has loaded, and starts the upload process.

(() => {
document.getElementById("file-input").onchange = () => {
const files = document.getElementById('file-input').files;
const file = files[0];
if(file == null){
return alert('No file selected.');
}
getSignedRequest(file);
};
})();
The code also determines the file object itself to be uploaded. If one has been selected properly, it proceeds to call a function to obtain a signed PUT request for the file. Next, therefore, write a function that accepts the file object and retrieves an appropriate signed request for it from the app.

function getSignedRequest(file){
const xhr = new XMLHttpRequest();
xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
xhr.onreadystatechange = () => {
if(xhr.readyState === 4){
if(xhr.status === 200){
const response = JSON.parse(xhr.responseText);
uploadFile(file, response.signedRequest, response.url);
}
else{
alert('Could not get signed URL.');
}
}
};
xhr.send();
}
If the name (file.name) and/or mime type (file.type) of the file you upload contains special characters (such as spaces), then they should be encoded first (e.g. encodeURIComponent(file.name)).

The above function passes the file’s name and mime type as parameters to the GET request since these are needed in the construction of the signed request, as will be covered later in this article. If the retrieval of the signed request was successful, the function continues by calling a function to upload the actual file:

function uploadFile(file, signedRequest, url){
const xhr = new XMLHttpRequest();
xhr.open('PUT', signedRequest);
xhr.onreadystatechange = () => {
if(xhr.readyState === 4){
if(xhr.status === 200){
document.getElementById('preview').src = url;
document.getElementById('avatar-url').value = url;
}
else{
alert('Could not upload file.');
}
}
};
xhr.send(file);
}
This function accepts the file to be uploaded, the signed request, and generated URL representing the eventual retrieval URL of the avatar image. The latter two arguments will be returned as part of the response from the app. The function, if the request to S3 is successful, then updates the preview element to the new avatar image and stores the URL in the hidden input so that it can be submitted for storage in the app.

Now, once the user has completed the rest of the form and clicked submit, the name, username, and avatar image can all be posted to the same endpoint.

If you find that the page isn’t working as you intend after implementing the system, then consider using console.log() to record any errors that are revealed inside the onreadystatechange function and use your browser’s error console to help diagnose the problem.

It is good practice to inform the user of any prolonged activity in any form of application (web- or device-based) and to display updates on changes. Therefore a loading indicator could be displayed between selecting a file and the upload being completed. Without this sort of information, users may suspect that the page has crashed, and could try to refresh the page or otherwise disrupt the upload process.

Setting up the app-side Node code
This section discusses the use of Node.js for generating a temporary signature with which the upload request can be signed. This temporary signature uses AWS authentication credentials (the access key and secret key) as a basis for the signature, but users will not have direct access to this information. After the signature has expired, then upload requests with the same signature will not be successful.

To see the completed Node file, please see the appropriate code in the companion repository.

Start by creating your main application file, app.js, in the root of your application directory and set up your skeleton application appropriately:

const express = require('express');
const aws = require('aws-sdk');

const app = express();
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000);

const S3_BUCKET = process.env.S3_BUCKET;
In some scenarios, it may be necessary to check that the environment’s PORT var is a number by using Number(process.env.PORT).

The packages installed with npm are imported at the top of the application. The Express app is then set-up and finally the bucket name is loaded from the environment.

You should now configure your AWS region. To do so, update the imported aws object. For example:

aws.config.region = 'eu-west-1';
Remember to use the region that your target bucket resides in. If you need it, use this page to find your region.

Next, in the same file, you will need to create the views responsible for returning the correct information back to the user’s browser when requests are made to various URLs. Inside the app.js file, define the view for requests to /account to return the page account.html, which contains the form for the user to complete:

app.get('/account', (req, res) => res.render('account.html'));
Now create the view, in the same JavaScript file, that is responsible for generating and returning the signature with which the client-side JavaScript can upload the image. This is the first request made by the client before attempting an upload to S3. This view responds with requests to /sign-s3:

app.get('/sign-s3', (req, res) => {
const s3 = new aws.S3();
const fileName = req.query['file-name'];
const fileType = req.query['file-type'];
const s3Params = {
Bucket: S3_BUCKET,
Key: fileName,
Expires: 60,
ContentType: fileType,
ACL: 'public-read'
};

s3.getSignedUrl('putObject', s3Params, (err, data) => {
if(err){
console.log(err);
return res.end();
}
const returnData = {
signedRequest: data,
url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
};
res.write(JSON.stringify(returnData));
res.end();
});
});
This code uses the aws-sdk module to create a signed URL that the browser can use to make a PUT request to S3. In addition, the prospective URL of the object to be uploaded is produced as a combination of the S3 bucket name and the object name. This URL and the signed request are then returned to the browser in JSON format.

The Expires parameter describes the number of seconds for which the signed URL will be valid for. In some circumstances, such as when uploading big files, a larger value may be more appropriate in order to extend the validity of the signed URL.

Initialising the s3 object automatically loads the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY variables that were set into the environment earlier.

You may wish to assign another, customised name to the object instead of using the one that the file is already named with, which is useful for preventing accidental overwrites in the S3 bucket. This name could be related to the ID of the user’s account, for example. If not, you should provide some method for properly quoting the name in case there are spaces or other awkward characters present. In addition, this is the stage at which you could provide checks on the uploaded file in order to restrict access to certain file types. For example, a simple check could be implemented to allow only .png files to proceed beyond this point.

Finally, in app.js, create the view responsible for receiving the account information after the user has uploaded an avatar, filled in the form, and clicked submit:

app.post('/save-details', (req, res) => {
// TODO: Read POSTed form data and do something useful
});
This function is currently just a stub that you’ll need to complete in order to allow the app to read and store the submitted profile information and to correctly associate it with the rest of the user’s account details.

Running the app
Everything should now be in place to perform the direct uploads to S3. To test the upload, save any changes and use heroku local to start the application:

You will need a Procfile for this to be successful. See Getting Started with Node.js on Heroku for more information. Also remember to correctly set your environment variables on your own machine before running the application locally.

heroku local
15:44:36 web.1 | started with pid 12417
Press Ctrl+C to return to the prompt. If your application is returning 500 errors (or other server-based issues), then start your server in debug mode and view the output in the Terminal emulator to help fix your problem:

DEBUG=express:\* node app.js
Summary
This article covers uploading to Amazon S3 directly from the browser using Node.js to temporarily sign the upload request. Although the guide and companion code focuses on the Express framework, the idea should easily carry over to other Node applications.
