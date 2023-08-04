const mongoose = require('mongoose')
const taskModel = require('../model/taskModel')

const addTask = async(req,res)=>{
    
    const taskObj={
        ...req.body
    }
    console.log('req.body',req.body)
taskModel(taskObj)
.save()
.then((data)=>{
    res.status(200).json({
        message:'Task created successfully',
        taskId:data._id
    })
}).catch((err)=>{
    res.status(400).json({
        message:'Unable to create task',
        Error:err
    })
    console.log(err)
})
}


const viewTask = async(req,res)=>{
    taskModel
    .find()
    .then((data)=>{
        res.status(200).json({
            message:'Following is the task details',
            taskInfo:data})
    }).catch((err)=>{
        res.status(400).json({
            message:'Unable to show task',
            Error:err
        })
        console.log(err)
    })
}


const loadTask = async(req,res)=>{
    taskModel.findOne({
        _id:new mongoose.Types.ObjectId(req.params.taskid)
    }).then((data)=>{
        res.status(200).json({
            message:'Particular task loaded successfully',
            taskInfo:data
        })
    }).catch((err)=>{
        console.log(err)
    })
}


const updateTask = async(req,res)=>{
    taskModel.findOneAndUpdate({
        _id:new mongoose.Types.ObjectId(req.params.taskid)
    },{
        ...req.body
    },{
        new:true
    }).then((data)=>{
        res.status(200).json({
            message:'Task updated successfully',
            taskInfo:data
        })
    }).catch((err)=>{
        res.status(400).json({
            message:'Unable to update task',
            Error:err
        })
        console.log(err)
    })
}


const deleteTask = async(req,res)=>{

    taskModel.findOneAndDelete({
        _id: new mongoose.Types.ObjectId(req.params.taskid)
    }).then(()=>{
        res.status(200).json({
            message:'Task deleted successfully',
            value:1234
        })
    })
}


module.exports = {addTask,viewTask,loadTask,updateTask,deleteTask}