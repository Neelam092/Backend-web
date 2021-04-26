import http ,{Server, IncomingMessage, ServerResponse}from 'http'
import {ApiRouter} from "./router/appRouting";

const hostname: string = '127.0.0.1'
const port:number = 5000

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode= 200
    response.setHeader('Content-Type', 'application/json');

    // node js router
    ApiRouter.mapRoutes(request,response)
})
server.listen(port, hostname,()=>{
    console.log(`Node JS server is Started at https://${hostname}:${port}`)
})