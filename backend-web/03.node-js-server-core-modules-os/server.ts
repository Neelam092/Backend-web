import http ,{Server, IncomingMessage, ServerResponse}from 'http'
import os from 'os'

const hostname: string = '127.0.0.1'
const port:number = 3000

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode= 200
    response.setHeader('Content-Type', 'text/html');

    // os module
    let osData = {
        totalMemory : os.totalmem(),
        freeMemory : os.freemem(),
        homedir : os.homedir(),
        computerName : os.hostname()
    }
    response.end(`<pre>${osData}</pre>`)
  //  response.end(`<h3 style="font-family: Lato,sans-serif; color:green">Welcome to Node Js`)
})
server.listen(port, hostname,()=>{
    console.log(`Node JS server is Started at https://${hostname}:${port}`)
})