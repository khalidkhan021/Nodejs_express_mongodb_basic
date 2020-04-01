const express =require('express');
const mongoose=require('mongoose')
const Courses=require('./routes/Courses')
const User=require('./routes/User')

const app = express();
app.use(express.json());
app.use('/api/courses',Courses);
app.use('/api/user',User)

app.get('/' ,(req,res)=>{
    res.send('Hello world');
});

mongoose.connect('mongodb://localhost/vidly',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log('db is connected'))
.catch((error)=>console.log(error))

const port =process.env.port||8000;
 app.listen(port,()=>{console.log("console form port 8000")});