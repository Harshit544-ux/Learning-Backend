//http module is used to create a server
const http =require('http')

// createServer
const server =http.createServer((req,res)=>{
    res.end("Hi I am a server")
})

// server is listening to port 3000
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})