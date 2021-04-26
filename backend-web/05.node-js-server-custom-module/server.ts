import http ,{Server, IncomingMessage, ServerResponse}from 'http'
import {StringUtil} from "./util/string-util"
import {MathUtil} from "./util/math-util";


const hostname: string = '127.0.0.1'
const port:number = 5000

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode= 200
    response.setHeader('Content-Type', 'text/html');

    // string util
    let customerName:string = 'UiBrains'
    let length:number = StringUtil.printLength(customerName)

    let channelName:string = 'UiBrains Technologies'
    let result:string = StringUtil.printTriangle(channelName)

    // Math util
    let theNumber: number = 5;
    result = MathUtil.printMathTable(theNumber)

    response.end(`<pre style="font-family: Lato,sans-serif; color:green"> ${result}</pre>`)
})
server.listen(port, hostname,()=>{
    console.log(`Node JS server is Started at https://${hostname}:${port}`)
})