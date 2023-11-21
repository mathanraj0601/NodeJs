const mongoose = require("mongoose");
const Joi = require("joi");
const {customerSchema} = require('./customer')


const rentalSchema = new mongoose.Schema({
    customer: {
        type: customerSchema,
        required: true
    },
    movie:{
        type: new mongoose.Schema({
            title:{
                type:String,
                required: true,
                minlength: 1,
                maxlength: 255
            },
            dailyRentalRate:{
                type: Number,
                required: true,
                min: 0
            }
        })
    },
    dateOut:{
        type: Date,
        default: Date.now,
        required: true,
    },
    dateReturned:{
        type:Date
    },
    rentalFee:{
        type:Number,
        min:0 
    }

});


const Rental = mongoose.model('Rental',rentalSchema);

function validate(rental)
{
    const schema = Joi.object({
        movieId : Joi.objectId().required(),
        customerId : Joi.objectId().required(),
    })
    return schema.validate(rental);
}
exports.Rental = Rental;
exports.validate = validate;