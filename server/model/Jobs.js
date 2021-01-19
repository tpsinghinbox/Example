const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        min:4,
        max:40,
        required: true
    },
    createdBy:{
        type: String,
        required: true
    },
    createOn:{
        type: Date,
        default:Date.now
    },
    projectName:{
        type: String,
        min:4,
        max:40,
        required: true
    },
    pin:{
        type: Number,
        max:6,
        required: true
    },
    city:{
        type: String,
        min:2,
        max:40,
        required: true
    },
    strartDate:{
        type: Date,
        default: null
    },
    endDate:{
        type: Date,
        default: null
    },
    isAssigned:{
        type: Boolean,
        default: 0
    },
    assignedTo:{
        type: String,
        default: null
    },
    assignedDate:{
        type: Date,
        default: null
    },
    isFinished:{
        type: Boolean,
        default: 0
    }
    

}, { timestamps: true})

const Jobs = mongoose.model('Jobs', JobSchema)

module.exports = Jobs