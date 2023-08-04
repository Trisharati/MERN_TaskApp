const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    allotedTo:{
        type:String,
        required:true
    },
    status:{
        type:String
    }
})

module.exports = new mongoose.model('taskdetail',taskSchema)