const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:4,
        maxlength:255
    },
    password:{
        type: String,
        required: true,
        minlength:4,
        maxlength:1024
    },
    email:{
        type: String,
        unique: true,
        required: true,
        minlength:4,
        maxlength:255 
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id:this._id , name: this.name , isAdmin:this.isAdmin}, config.get('jwtPrivateKey'))
    return token;
}


const User = mongoose.model('User', userSchema);

function validateUser(user)
{
    const schema = Joi.object({
        name: Joi.string().max(255).min(4).required(),
        password: Joi.string().max(1024).min(4).required(),
        email: Joi.string().max(255).min(4).email().required(),
    });
    return schema.validate(user)
}


module.exports.validate =  validateUser;
module.exports.User = User;