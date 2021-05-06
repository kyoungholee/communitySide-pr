/*import express from 'express';
import monogoose from 'mongoose';
import dotenv from 'dotenv'
*/
const express = require('express');
const app = express();
const api = require('./Backend/routes/index');
const cors = require('cors');
const connect = require("./Backend/mongo");

connect();

const corsOptions = {
    origin: true,
    credentials : true
};


app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use('/api', api);

const port = 3002;
app.listen(port, ()=> console.log(`Listening on port ${port}`));

