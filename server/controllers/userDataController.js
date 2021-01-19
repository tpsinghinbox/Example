const User = require("../model/User")


exports.getUserById = async (req, res) => {
    const params = req.params 
    if (!params) {
        return res.status(400).json({           
            errorMsg: 'Insufficient information',
        })
    }
    try{ 
        await User.findById( params.id, (error, userdetails) =>{
            if (error) {
                return res.status(404).json({ 
                    errorMsg: 'Error : '+error,
                })
            }      
            if(userdetails){                
                res.json(userdetails)
            }
        }) 
    }catch(e){
        console.log("Check Mobile Controller erro : ", e)
        return res.Status(500).json({
            errorMsg: "Server Error : "+e
         })
    }
}

exports.updateAccount = async (req, res) => {
    const body = req.body  
    if (!body) {
        return res.status(400).json({
            errorMsg: 'Insufficient information'
        })
    } 
     try{   
        
        await User.findOne( { _id: req.body._id }, (err, user)=>{
            if (err) {
                return res.status(404).json({                    
                    errorMsg: 'Error  '+err,
                })
            }
            if(!user){                
                return res.status(400).json({
                    errorMsg: " No user Found"
                })
            }
        }) 
        
        let accountdetails = [
            {
                'account':body.account,
                'ifsc':body.ifsc,
                'bank':body.bank,
                'branch':body.branch,
                'updateon':new Date(Date.now()).toISOString()
            }
        ]
        await User.findByIdAndUpdate(body._id, {accountDetails :accountdetails}, err => {
            if (err) {
                let msg = (err.keyValue.mobile == body.mobileno)?"Mobile "+body.mobileno+" already in use":err
                return res.status(404).json({                    
                    errorMsg: 'Error : '+msg,
                })
            }else{
                res.json({
                    successMsg : "User initial data updated Succesfully"
                })
            }
        })

     }catch(e){
         //console.log("Signup Controller erro : ", e)
         return res.status(500).json({
            errorMsg: "Server Error "+e
         })
     }
}

// export const useDataController = {
//     getUserById
// }