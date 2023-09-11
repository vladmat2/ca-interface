import Passage from "@passageidentity/passage-node";
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();

const PORT = 7000;

// Shouldn't need dotenv in production.
require("dotenv").config();

app.use(express.json());

const passageConfig = {
    appID: process.env.PASSAGE_APP_ID,
    apiKey: process.env.PASSAGE_API_KEY
};

const passage = new Passage(passageConfig);

const passageAuthMiddleware = () => {
    return async (req, res, next) => {
        try {
            let userID = await passage.authenticateRequest(req);
            if (userID) {
                res.userID = userID;
                next();
            }
        }  catch(error) {
            console.log(error);
            res.status(401).send('Could not authenticate user!');
        }
    }
};

const storage = multer.memoryStorage();
const contrFileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb (new Error('Invalid file type'), false);
    }
};

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 100 }, // file size limit of 100 MB
    fileFilter: contrFileFilter
});



const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});



app.post('/upload', passageAuthMiddleware, upload.single('file'), async (req, res) => {
    const userID = res.userID;
    const passageUser = await passage.user.get(userID);
    userEmail = passageUser.email;
    
    const file = req.file;
    
    const paramsAWS = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
        Key: userEmail + '-' + Date.now() + '.pdf',
        Body: file.buffer,
        ContentType: file.mimetype
    };

    try {
        await s3.upload(paramsAWS).promise();
        res.status(200).send('File uploaded to S3 successfully!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error uploading file to S3');
    }
    
});