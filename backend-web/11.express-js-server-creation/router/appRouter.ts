import express from 'express'

const appRouter:express.Router = express.Router()

// logic
appRouter.get('/',(request:express.Request,response:express.Response) =>{
    response.status(200).send(`<h3 style="font-family:  Lato,sans-serif; color: green ">Welcome to Express JS Server Routing</h3>`)
})
appRouter.get('/test',(request:express.Request,response:express.Response) =>{
    response.status(200).send(`
    <h3 style="font-family:  Lato,sans-serif; color: green ">
       Welcome to Express JS Server Routing test path
    </h3>`)

})


export default appRouter