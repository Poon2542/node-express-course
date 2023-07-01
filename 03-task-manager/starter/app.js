const express = require('express')

const app = express();
const port = 3000
const task = require('./route/tasks') //task is route
const connectDB = require('./db/connect'); //DB connection
require('dotenv').config() // want to envoke the config

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/not-found')

//middleware - set up
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',task) // root route
app.use(notFound);
app.use(errorHandlerMiddleware);



//routes
app.get('/hello',(req,res) =>{
    res.send('Task Manager App');
});
app.use

//api.get('/api/v1/tasks')          - get all the tasks
//api.post('/api/v1/tasks')         - create a new task
//api.get('/api/v1/tasks/:id')      - get single task
//api.patch('/api/v1/tasks/:id')    - update task
//api.delete('/api/v1/tasks/:id')   - delete task

const connetionString = "mongodb+srv://sereepsm:S2511utisa@clusterzero.poi99tk.mongodb.net/?retryWrites=true&w=majority"

const start = async () =>{
    try{
        //await connectDB(process.env.MONGO_URI);
        await connectDB(connetionString)
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }catch (error){
        console.log(error);
    }
}
//app.listen(port,console.log(`server is listening on port ${port}...`))

start()
/*const server = http.createServer((req,res) => {

    console.log(req.url);
    res.end('Hello Node.js')

});
server.listen(3000);*/