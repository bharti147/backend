require('dotenv').config()
const express = require('express')
//require module syntax (1st method)
//import express from "express"  //import module syntax (2nd method)

//Now we'll mae a varaible named app using express
const app =  express()

const port = 4000 //virtual ports, server will listen on port 3000


//app will listen on routes eg: / route p listen kro, and send response if you get any request , and to send response it'll be provided with a callback

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter page')
})

//now app will listen on main port and will give a callback 

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${process.env.PORT}`)
})