import http ,{Server, IncomingMessage, ServerResponse}from 'http'

const hostname: string = '127.0.1.1'
const port:number = 6000

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode= 200
    response.setHeader('Content-Type', 'text/html');

    // URL POST
    if(request.url==='/login' && request.method==='POST'){
       try{
           let body:any =''
           request.on('data',(chunk) => {
               body +=chunk
           }).on('end',()=>{
               let formData = JSON.parse(body)
               if(formData.name === 'Wilson' && formData.password === 'wilson@123'){
                   response.end(`<h3 style="font-family: Lato,sans-serif; color: green">Login is Success!!</h3>`)
               }
              else{
                   response.end(`<h3 style="font-family: Lato,sans-serif; color: red">Invalid Credentials</h3>`)
              }
           })
       }
       catch(error){
           console.log(error)
       }
    }

})
server.listen(port, hostname,()=>{
    console.log(`Node JS server is Started at https://${hostname}:${port}`)
})