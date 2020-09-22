var http=require('http')

http.createServer(function (request,response){
    response.write('packapeer   second  third one')
    
    response.end()
}).listen(8000)