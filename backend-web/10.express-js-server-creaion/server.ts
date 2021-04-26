import express from 'express'

const app:express.Application = express()

const hostname : string = '127.0.0.1'
const port:number = 5000

app.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).send(`<h3 style="font-family:  Lato,sans-serif; color: green ">Welcome to Express JS Server</h3>`)
})

app.listen(port,hostname,()=>{
    console.log(`Express Server is started at https://${hostname}:${port}`)
})