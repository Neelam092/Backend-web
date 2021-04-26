import http ,{Server, IncomingMessage, ServerResponse}from 'http'

const hostname: string = '127.0.1.1'
const port:number = 6000

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode= 200
    response.setHeader('Content-Type', 'text/html');
    response.end(`<h3 style="font-family: Lato,sans-serif; color:green">Welcome to Node Js Server</h3>`)
})
server.listen(port, hostname,()=>{
    console.log(`Node JS server is Started at https://${hostname}:${port}`)
})