const express = require('express');
const board = require('../routers/board');
 
const router = express.Router();
router.use('/board',board);
 
module.exports =  router;
 
