import http ,{Server, IncomingMessage, ServerResponse}from 'http'

const hostname: string = '127.0.1.1'
const port:number = 6000

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode= 200
    response.setHeader('Content-Type', 'text/html');

    let url:string| undefined  = request.url
    let method:string|undefined= request.method
    let result:string = '';

    if(url ==='/' && method === 'Get'){
      result = `<h3 style="font-family: Lato,sans-serif; color:green">Welcome to Node Js Server</h3>`
    }
    else if(url ==='/about' && method === 'Get'){
      result = `<h3 style="font-family: Lato,sans-serif; color:green">About Page</h3>`
    }
    else if(url ==='/contact' && method === 'Get'){
       result = `<h3 style="font-family: Lato,sans-serif; color:green">Contact Page</h3>`
    }
    else if(url==='/services' && method=== 'Get'){
        result = `<h3 style="font-family: Lato,sans-serif; color:green">Services Page</h3>`
    }
    else{
       result = `<h3 style="font-family: Lato,sans-serif; color:red">Page Not Found!</h3>`

    }
    response.end(`${result}`)
})
server.listen(port, hostname,()=>{
    console.log(`Node JS server is Started at https://${hostname}:${port}`)
})