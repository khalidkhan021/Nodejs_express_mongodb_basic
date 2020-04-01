const mongoose=require('mongoose');
const Joi=require('joi');

const schemaCourse =new  mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

function validateCourse (x) {
    const schema={
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(x,schema)
 }
 exports.validate= validateCourse;
 exports.schemaCourse= schemaCourse;