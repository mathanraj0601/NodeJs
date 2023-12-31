const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const _  = require('lodash');

router.post("/",async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);

    const userExist = await User.findOne({email:req.body.email});
    if(userExist) return res.status(404).send("User already registered");

    let user = new User(_.pick(req.body,['name','password','email']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);
    await user.save();

    const token = user.generateAuthToken();
    return res.header('x-auth-token',token).send(_.pick(user, ['name','email']));
});


module.exports = router;