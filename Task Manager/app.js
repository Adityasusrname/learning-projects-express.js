const express = require('express')
const app = express()


const port=3000


app.get('/hello',(req,res)=>{
res.send('Task Manager App')

})


// app.get('/api/v1/tasks')                -get all tasks
// app.post('/api/v1/tasks')               -create a new task
// app.get('/api/v1/tasks/:id')            -get single task
// app.patch('/api/v1/tasks/:id')          -update task
// app.delete('/api/v1/tasks/:id')         -delete task

// api -> To specify its an api request, you can also use a route to serve a particular file like index.html
// v1 -> To specify the version of the api



app.listen(port,()=>{

console.log(`Server is listening at port ${port}...`)

})