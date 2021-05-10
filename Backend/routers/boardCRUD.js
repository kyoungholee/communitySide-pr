const express =require('express');
const mongoose = require ('mongoose');
const Board = require ('./models/board');
const router = express.Router();


router.post('/creat', async (req, res) => {
    try{
        const board = await Board.find({});
        res.send(board);
    }
    catch (err) {
        res.status(500).send();
        }
});

router.get('/api/board', async (req,res) => {
    try{
        const board = await Board.find({});
        res.send(board);
    }
    catch (err){
        res.status(500).send();
    }
 });

 router.update('/api/board', async (req,res) => {
    try{
        const board = await Board.find({});
        res.send(board);
    }
    catch (err){
        res.status(500).send();
    }
 });

 router.delete('/api/board', async (req,res) => {
    try{
        const board = await Board.find({});
        res.send(board);
    }
    catch (err){
        res.status(500).send();
    }
 });

 require ('./models/board')

 module.export = router;