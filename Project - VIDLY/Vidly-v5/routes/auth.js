const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi')

router.post("/",async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);
    
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Invalid email ID");

    const validuser = await bcrypt.compare( req.body.password,user.password)
    if(!validuser) return res.status(400).send("Password is icorrect");
    const token = user.generateAuthToken()
    return res.status(200).send(token);
    
});

function validate(user)
{
    const schema = Joi.object({
        password: Joi.string().max(1024).min(4),
        email: Joi.string().max(255).min(4).email(),
    });
    return schema.validate(user)
}


module.exports = router;