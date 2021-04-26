import http from 'http'
export class ApiRouter{
    public static mapRoutes(request:http.IncomingMessage,response:http.ServerResponse){
        let url:string | undefined  = request.url
        let method:string | undefined= request.method
        let result:string = '';

        if(url ==='/' && method === 'GET'){
            result = `<h3 style="font-family: Lato,sans-serif; color:green">Welcome to Node Js Server</h3>`
        }
        else if(url ==='/about' && method === 'GET'){
            result = `<h3 style="font-family: Lato,sans-serif; color:green">About Page</h3>`
        }
        else if(url ==='/contact' && method === 'GET'){
            result = `<h3 style="font-family: Lato,sans-serif; color:green">Contact Page</h3>`
        }
        else if(url==='/services' && method=== 'GET'){
            result = `<h3 style="font-family: Lato,sans-serif; color:green">Services Page</h3>`
        }
        else{
            result = `<h3 style="font-family: Lato,sans-serif; color:red">Page Not Found!</h3>`
        }
        response.end(`${result}`)
    }
}