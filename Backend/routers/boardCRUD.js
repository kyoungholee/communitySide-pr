const express =require('express');
const Board = require ('../models/board');
const router = express.Router();


router.post("/delete", async (req, res) => {
    try {
        await Board.remove({
            name: req.body.name
        });
            res.json({ message: true });
        } catch (err) {
            console.log(err);
            res.json({ message: false });
        }
    });
    
    router.post("/update", async (req, res) => {
        try {
        await Board.update({
            name: req.body.name },
            {
            $set: {
                title: req.body.title,
                content: req.body.content,
                createdAt : req.body.createdAt
            }
            }
        );
        res.json({ message: "게시글이 수정 되었습니다." });
        } catch (err) {
        console.log(err);
        res.json({ message: false });
        }
    });
    
    router.post("/write", async (req, res) => {
        try {
        let obj;
    
        obj = {
            name: req.body.name,
            title: req.body.title,
            content: req.body.content,
            createdAt : req.body.createdAt
        };
    
        const board = new Board(obj);
        await board.save();
        res.json({ message: "게시글이 업로드 되었습니다." });
        } catch (err) {
        console.log(err);
        res.json({ message: false });
        }
    });
    
    router.post("/getBoardList", async (req, res) => {
        try {
        const name = req.body.name;
        const board = await Board.find({ name }, null, {
            sort: { createdAt: -1 }
        });
        res.json({ list: board });
        } catch (err) {
        console.log(err);
        res.json({ message: false });
        }
    });
    
    router.post("/detail", async (req, res) => {
        try {
        const name = req.body.name;
        const board = await Board.find({ name});
        res.json({ board });
        } catch (err) {
        console.log(err);
        res.json({ message: false });
        }
    });


    module.exports = router;