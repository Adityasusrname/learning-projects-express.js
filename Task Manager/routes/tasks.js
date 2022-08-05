const express = require('express')
const router = express.Router()

const {getAllTasks,createNewTask,getSingleTask,patchTask,deleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).put(createNewTask)

router.route('/:id').get(getSingleTask).patch(patchTask).delete(deleteTask)

module.exports= router

