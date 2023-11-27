import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
var cookieParser = require('cookie-parser')
var compression = require('compression')
var cors = require('cors')
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({credentials : true}));
app.use(cookieParser());
app.use(bodyparser.json());

// Middleware to log API calls
app.use((req, _, next) => {
    console.log(`[${new Date().toLocaleString()}]:[${req.method}] :  ${req.url}`);
    next();
    // console.log(_); 
  });


const server = http.createServer(app);


server.listen(8080, () => {
    console.log("server running on http://localhost:8080/");
    });

const MONGO_URL = "mongodb://localhost:27017/testv1";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error : Error) =>  console.log(error));

app.use('/',  router());

