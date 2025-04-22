const http = require('http')
console.log('We are Learning HTTP Module and create Server')
//createServer()

const server = http.createServer((req,res)=>{
    res.writeHead(200,"OK",{"content-type": "text/html"})
    res.write("Welcome to Nodejs, Webserver is Created !!!")
    res.end()
})

//use listen method to start the server
server.listen(8000,()=>{
    console.log('8000 is running....')
})