const mongoose=require('mongoose');
const Joi=require('joi');
const schemaUser =new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:12
    },
    phone:{
        type:String,
        required:true,
        minlength:5,
        maxlength:12
    },
    isGold:{
        type:Boolean,
        default:false
    },
})

function validateUser (x) {
    const schema={
        name: Joi.string().min(5).max(12).required(),
        phone:Joi.string().min(5).max(12).required(),
        isGold:Joi.boolean(),

    };
    return Joi.validate(x,schema)
 }

 exports.validate= validateUser;
 exports.schemaUser=schemaUser;