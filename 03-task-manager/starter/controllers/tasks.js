const Task = require('../models/Task') //instance of model = document

const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getAllTasks = asyncWrapper( async (req,res) =>{
    
        const task = await Task.find({}) // get all
        var count = Object.keys(task).length;
        //res.status(201).json({task}); // send back object task
        res
            .status(201)
            .json({status : 'success',data : {task,nbHits : count}});
});
const createTask = asyncWrapper(async (req,res) => { //rest.js
    //we can do better try - catch
     //asynchrounous need to handling error else it will run forever !!! try .. catch
        const task = await Task.create(req.body)
        res.status(201).json({task}); //send json back
})

const getIdTasks = asyncWrapper(async (req,res,next) => {
    
        const {id : taskID} = req.params;
        const task = await Task.findOne({ _id: req.params.id});
        //in case it's a empty string
        if(!task){
            const error = new Error('Not Found'); //create object error
            error.status = 404;
            return next(createCustomError(`No task with id : ${req.params.id}`, 404))
        }
        res.status(200).json({task});
    /*
    }catch(err){
        res.status(500).json({msg : `No task with id : ${req.params.id}`});
    }*/
})

const UpdateIdTask = asyncWrapper(async (req,res) => {
    
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new : true,
            runValidators : true,
        })
        res.status(200).json({task});
    /*
    }catch{
        return res.status(404);
    }*/
})

const DeleteIdTask = asyncWrapper(async (req,res) => {
    
        const {id : taskID} = req.params;
        const task = await Task.findOneAndDelete({_id : taskID});
        if(!task){
            return next(createCustomError(`No task with id : ${req.params.id}`, 404))
        }
        res.status(200).json({task});
        /*
    }catch(err){
        res.status(500).json({msg : `No task with id : ${req.params.id}`});
    }*/
})

const EditTask = asyncWrapper(async (req,res) => {
    
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new : true,
            runValidators : true,
        })
        res.status(200).json({task});
    /*
    }catch{
        return res.status(404);
    }*/
})


module.exports = {
    getAllTasks,createTask,getIdTasks,UpdateIdTask,DeleteIdTask,EditTask
}