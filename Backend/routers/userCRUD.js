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

/** 해당 user가 존재하는지 여부 확인  */
router.get('/find', async(res, req) => {
    try {
        const obj = {email : req.body.email};
        const user = await User.findOne(obj);
        console.log(user);
        res.json({message  : "이메일이 존재합니다. "});
    }
    catch (err) {
        console.log(err);
        res.json({message : false});

    }
});



router.post("/update", async(res, req) => {
    try{
        await User.update({
            name :req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        res.json({message :true});
    } catch (err) {
        console.log(err);
        res.json({message : false});
    }
});

router.post("/delete", async (req, res) => {
    try{
        await User.remove({
            name : req.body.name
        });
        res.json({message : true});
    } catch (err) {
        console.log(err);
        res.json({message : false});

    }

})




module.exports = router;