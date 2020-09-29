const express=require('express')
const bodyparser=require('body-parser')
const path=require('path')
const { request } = require('http')
const app=express()

app.use(bodyparser.urlencoded({
    extended:true
}))


app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'express_signup.html'))
})

app.post('/express_signup',(request,response)=>{

   var firstname=request.body.fname
   var lastname =request.body.lname
   var number =request.body.phone
   console.log(firstname)
   console.log(lastname)
   console.log(number)
   // response.send("<h2>"+firstname+"</h2>")
  //  response.send("<h3>"+lastname+"</h3>")
    response.send("<h2>"+number+"<br>"+firstname+"<br>"+lastname+"</h2>")

})



app.listen(4000,()=>{
    console.log('server started')
})