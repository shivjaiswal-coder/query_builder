const express=require('express')
const mongoose=require('mongoose')
const app=express();
const Rule=require('./mongoose.js')

app.use(express.json())

app.post('/newrule',async (req,res)=>{
    const rule=new Rule(req.body)
    try{
        await rule.save();
        res.send(rule)
    }
    catch(e){
        res.status(400).send(e)
    }
})
app.get('',(req,res)=>{
    res.send('Hello World')
})
app.listen(3000,()=>{
    console.log('server is running')
})