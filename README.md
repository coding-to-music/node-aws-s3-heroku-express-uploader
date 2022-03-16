# Node AWS S3 Heroku Express Uploader

## NodeDirectUploader

https://github.com/coding-to-music/node-aws-s3-heroku-express-uploader

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
