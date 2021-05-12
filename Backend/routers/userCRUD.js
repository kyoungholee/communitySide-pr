const express = require ('express');
const User = require ('../models/user');
const router = express.Router();


router.post('/create', async (req, res) => {
    try{
        let obj;

        obj = {
            name : req.body.name,
            email: req.body.email,
            password: req.body.password

        };

        const user = new User(obj);
        await user.save();
        res.json({ message : "등록되었습니다."});
    } catch (err) {
        console.log(err);
        res.json({message : false});
        }
});



module.exports = router;