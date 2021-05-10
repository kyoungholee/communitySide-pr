const express =require('express');
const User = require ('../models/user');
const router = express.Router();


router.post('/create', async (req, res) => {
    try{
        const user = await User.find({
            email: req.body.email,
            name : req.body.name,
            password: req.body.password
        });
        res.send(user);
    }
    catch (err) {
        res.status(500).send();
        }
});

module.exports = router;