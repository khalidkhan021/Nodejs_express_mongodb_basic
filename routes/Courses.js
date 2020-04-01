const express=require('express');
const mongoose=require('mongoose');
const {schemaCourse,validate}=require('../models/courses')

const router=express.Router(); 

const Course=mongoose.model('course',schemaCourse);

router.get('/',async (req,res)=>{
    const result= await Course.find().sort('name')
    res.send(result)
})

router.get('/:id',async(req,res)=>{
   
   const result= await Course.findById(req.params.id)
    if(!result){
       return res.status(404).send('Course Not Found')
    } 
    res.send(result);
})

router.post('/', async(req,res)=>{
    const {error}=validate(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    let result=new Course({name: req.body.name})
   result= await result.save()
    
    res.send(result)
})


router.put('/:id', async(req,res)=>{
    const {error}=validate(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }

    
    let result=await Course.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
    result=await result.save()
    res.send(result);
})
router.delete('/:id',async (req, res) => {

let result= await Course.findByIdAndRemove(req.params.id)

if(!result) return res.status(404).send('Course not found')
 
res.send(result);
});



module.exports=router;