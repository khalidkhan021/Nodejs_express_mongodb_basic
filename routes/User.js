const express=require('express');
const mongoose=require('mongoose')
const router=express.Router(); 

const Joi=require('joi');

const {schemaUser ,validate} =require('../models/user')

const User=mongoose.model('user',schemaUser);

router.get('/',async (req,res)=>{
    const result= await User.find().sort('name')
    res.send(result)
})


router.post('/', async(req,res)=>{

    const {error}=validate(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    let result=new User({
        name: req.body.name,
        phone:req.body.phone,
        isGold:req.body.isGold
    
    })
   result= await result.save()
    
    res.send(result)
//res.send(res.body);
})


module.exports=router;