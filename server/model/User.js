const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        min:4,
        max:40,
        required: true
    },
    email:{
        type: String,
        unique:true,
        max:60,
        required: true
    },
    imageUrl:{
        type: String,
        default:"logo"
    },
    accountDetails:{
        type: Array, 
        account: {
            type: String,            
            max:40,
            require:true                        
        },
        ifsc: {
            type: String,
            min:11,
            max:11,
            require:true                         
        },
        branch: {
            type: String,
            max:40,
            require:true                        
        },
        bankname: {
            type: String,
            max:100,
            required:true
        },
        income: {
            type: String,
            max: 100,
            default: 0.0            
        },
        updateon: {
            type:Date,
            default:Date.now
        }
    },
    DOB:{
        type:Date,
        default:null
    },
    gender:{
        type:String,
        enum : [null,'Male','Female', 'Other'],
        default:null
    },
    mobile:{
        type: Number,
        min:1000000000,
        max:9999999999,   
        unique:true,
        sparse:true        
    },
    uuid:{
        type: Number,
        min:000000000001,
        max:999999999999,
        unique:true,
        sparse:true        
    },
    isSocial:{
        type: Boolean,
        default: 0
    },   
    password:{
        type: String,
        min:4,
        max:20,
        required:true
    },    
    relation:{
        type: String,
        enum : [null,'client','worker'],
        default:null
    },
    terms:{
        type: Boolean,
        default: 0
    },
    isActive:{
        type: Boolean,
        default: 0
    }, 
    trade:{
        type: Array,
        default:null        
    },
    occupation:{
        type:Array,
        default:null
    },
    address:{
        type:Array,
        defualt:null,
        city:{
            type: String,
            max:40,
            default:null        
        },
        state:{
            type: String,
            max:20,
            default:null        
        },
        address:{
            type: String,
            max:100,
            default:null        
        },
        pin:{
            type: Number,
            min:6,
            max:6,
            default:null        
        },
    },
    jobAssigned:{
        type: Array,
        default:null        
    },    
    jobAccept:{
        type: Array,
        default:null        
    },
    jobReject:{
        type: Array,
        default:null        
    },
    joinedDate:{
        type:Date,
        default:Date.now
    },
    approveDate:{
        type:Date,
        default:null
    },
    PAN: {
        type: String,
        max:10,
        min:10,
        require:true                        
    },
    isEngaged:{
        type: Boolean,
        default: 0
    },
    isVacation:{
        type: Boolean,
        default: 0
    },
    currentCity:{
        type: String,
        max:40,
        default: null
    },
    currentPin:{
        type: Number,
        max:6,
        min:6,
        default: null
    },
    jobGen:{
        type: Array,
        default: null        
    }
    

}, { timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User