//router to connect between controller and app

const express = require('express')
const router = express.Router()
const {
    getAllTasks, 
    getIdTasks, 
    createTask, 
    UpdateIdTask, 
    DeleteIdTask,
    EditTask
} = require('../controllers/tasks')

//using route function to chain them together
//route will not contain finction of it's route , that will be in controller
router.route('/')
    .get(getAllTasks)
    .post(createTask);

router.route('/:id')
    .get(getIdTasks)
    .patch(UpdateIdTask)
    .delete(DeleteIdTask)
    .put(EditTask);


module.exports = router;