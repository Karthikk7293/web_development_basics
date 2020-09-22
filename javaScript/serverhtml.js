
var http=require('http')
// this is for import local http for this file
var filesystem=require('fs')
//fs for select file from this folder
var url=require('url')


http.createServer(function (request,response){
    //this method for create server and if you run the function it will run till if you kill the server
   //ctrl + c for kill the server comment
   var q=url.parse(request.url,true)
   console.log(q.pathname)



if(q.pathname==='/'){//base root for entering clint into the first page automatic run page
    filesystem.readFile('./samplehtml.html',function (err,data){

        if(err){
            response.write('page not found')
            //if this page not available related to network errors or any other problems ist going to page not found message
        }else{
         response.writeHead(200,{'content-type':'text/html'})
         //200 standard protocol and next argument fr data reiceving
         response.write(data)
         response.end()
        }
     }) 
}else if(q.pathname==='/signup'){ //admin root 
    filesystem.readFile('./signup.html',function (err,data){
        if(err){
            response.write('page not found')
        }else{
            response.writeHead(200,{'content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
}else if(q.pathname==='/SignupAction'){ //admin root 
    
console.log(q.query.fname)


response.writeHead(200,{'contend-type':'text/type'})

response.write("<h1>"+q.query.fname+"</h1>")
response.write("<h2>"+q.query.lname+"</h2>")
response.end()



}else{//error page accessing root 
    filesystem.readFile('./error.html',function (err,data){
        response.writeHead(404,{'content-type':'text/html'})
        response.write(data)
        response.end()
    })
}
    


}).listen(7000, () => console.log("server started"))
 //local hosting url no
