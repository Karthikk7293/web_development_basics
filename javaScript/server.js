var http=require('http')

http.createServer(server).listen(9000)

function server(req,res){
    res.write('crossroads')
    res.end()
}