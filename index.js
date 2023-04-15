const express=require('express');
const app=express();
const ejs=require('ejs');
const PORT=process.env.PORT||3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});



app.listen(PORT,(err)=>{
    console.log("server is woring in port 8000");
})