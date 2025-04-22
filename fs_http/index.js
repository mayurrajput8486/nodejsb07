const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile("home.html","utf-8",(error,result)=>{
            if(error){
                res.writeHead(500,"Internal Server Error",{"content-type":"text/html"})
                res.write("Internal Server Error")
                res.end()
            }else{
                res.writeHead(200,"OK",{"content-type":"text/html"})
                res.write(result)
                res.end()
            }
        })
    }else if(req.url === '/home'){
        fs.readFile("home.html","utf-8",(error,result)=>{
            if(error){
                res.writeHead(500,"Internal Server Error",{"content-type":"text/html"})
                res.write('Internal Server Error')
                res.end()
            }else{
                res.writeHead(200,"ok",{"content-type":"text/html"})
                //res.write(result)
                res.end(result)
            }
        })
    }else if(req.url === '/about'){
        fs.readFile("about.html","utf-8",(error,result)=>{
            if(error){
                res.writeHead(500,"Internal Server Error",{"content-type":"text/html"})
                res.write('Internal Server Error')
                res.end()
            }else{
                res.writeHead(200,"ok",{"content-type":"text/html"})
                //res.write(result)
                res.end(result)
            }
        })
    }else if (req.url === '/contact'){
        fs.readFile("contact.html","utf-8",(error,result)=>{
            if(error){
                res.writeHead(500,"Internal Server Error",{"content-type":"text/html"})
                res.write('Internal Server Error')
                res.end()
            }else{
                res.writeHead(200,"ok",{"content-type":"text/html"})
                res.end(result)
            }
        })
    }else if (req.url === '/register'){
        fs.readFile("register.html","utf-8",(error,result)=>{
            if(error){
                res.writeHead(500,"Internal Server Error",{"content-type":"text/html"})
                res.write('Internal Server Error')
                res.end()
            }else{
                res.writeHead(200,"ok",{"content-type":"text/html"})
                res.end(result)
            }
        })
    }else{
        fs.readFile("errorpage.html","utf-8",(error,result)=>{
            if(error){
                res.writeHead(500,"Internal Server Error",{"content-type":"text/html"})
                res.write('Internal Server Error')
                res.end()
            }else{
                res.writeHead(200,"ok",{"content-type":"text/html"})
                res.end(result)
            }
        })
    }
})

server.listen(8000,()=>{
    console.log('8000 is running.....')
})