const mongoose = require('mongoose')

const connection = async () =>{
    try{
        await mongoose.connect("mongodb://xrayuser:Password@192.168.56.101:27017/xray",{
            useNewUrlParser:true            
        })
        console.log("database connection success")
    }catch(err){
        console.log(err)        
    }
}

module.exports = connection