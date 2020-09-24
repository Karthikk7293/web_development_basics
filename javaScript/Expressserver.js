const express=require('express')
const { request } = require('http')
const path=require('path')
const app=express()

app.get('/',(request,response)=>{
    response.send('home')
})

app.get('/signup',(request,response)=>{
    response.sendFile(path.join(__dirname,'express_signup.html'))
})

app.post('/express_signup',(request,response)=>{
    response.send('accound created')
})



app.listen(4000,()=>{
    console.log('server started')
})