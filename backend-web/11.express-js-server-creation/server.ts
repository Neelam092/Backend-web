import express from 'express'
import appRouter from "./router/appRouter";

const app:express.Application = express()

const hostname : string = '127.0.0.1'
const port:number = 5000

app.get('/',(request:express.Request,response:express.Response)=>{
})

// router configuration
app.use('/api',appRouter)

app.listen(port,hostname,()=>{
    console.log(`Express Server is started at https://${hostname}:${port}`)
})