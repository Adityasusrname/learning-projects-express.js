const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getAllTasks =asyncWrapper( async (req,res)=>{

        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createNewTask = asyncWrapper(async (req,res)=>{


    const task=await Task.create(req.body)
    res.status(201).json({task})
    
})

const getSingleTask = asyncWrapper(async (req,res)=>{


    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`No task with id:${taskID}`})
    }
    res.status(200).json({task})
 

})

const patchTask = asyncWrapper(async (req,res)=>{


    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
        return res.status(404).json({msg:`No task with id:${taskID}`})
    }
    res.status(200).json({task})
 

})


const deleteTask = asyncWrapper(async (req,res)=>{
    
       const {id:taskID} = req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
          return  res.status(404).json({msg:`No task with id:${taskID}`})
        }

        res.status(200).json({task})
        
  })

    module.exports={
        getAllTasks,
        createNewTask,
        getSingleTask,
        patchTask,
        deleteTask
    }