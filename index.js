const express = require('express')
const app =  express()

app.get('/home',(req,res)=>{
    let a=5;
    let b=6;
    let c=a+b;
    res.send('hello world!')
})
app.listen(3000,()=>{
    console.log('server is running')
})