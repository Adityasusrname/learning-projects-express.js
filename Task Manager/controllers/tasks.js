const getAllTasks = (req,res)=>{

    res.send('All items from the file')
    
    }

const createNewTask = (req,res)=>{

res.send('Post request working')

}

const getSingleTask = (req,res)=>{

res.send(`Task ${req.params.id}`)

}

const patchTask = (req,res)=>{

res.send(`Task ${req.params.id} patched!`)

}


const deleteTask = (req,res)=>{
    res.send(`Task ${req.params.id} deleted!`)
}

    module.exports={
        getAllTasks,
        createNewTask,
        getSingleTask,
        patchTask,
        deleteTask
    }