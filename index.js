const express = require('express')
var morgan = require('morgan')
const app =  express()
app.use(morgan('combined'))//log ra request from client
app.get('/home',(req,res)=>{
    let a=5;
    let b=6;
    let c=a+b;
    res.send('hello world!')
})
app.listen(3000,()=>{
    console.log('server is running')
})