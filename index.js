const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('hello i am working fine');
})


app.listen(8000,(err)=>{
    console.log("server is woring in port 8000");
})