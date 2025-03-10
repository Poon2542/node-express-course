//start mongoose db
const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({

    name : {
        type : String,
        //validator
        required : [true ,'must provided name'],
        trim : true, //No white space
        maxlength : [20,'name can not be more than 20 characters']
    },
    completed :{
        type : Boolean,
        default : false

    } 
});
module.exports = mongoose.model('Task',TaskSchema); // passing schema out