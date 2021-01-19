const User = require("../model/User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpire} = require("../config/key")

exports.signUp = async (req, res) => {
    const body = req.body  
    if (!body) {
        return res.status(400).json({
            errorMsg: 'Insufficient information'
        })
    } 
    
     try{          
        let salt = await bcrypt.genSalt(10)
        let pass = await bcrypt.hash(body.password,salt)
        
        const newUser = new User({
            name: body.name,
            email: body.email,
            salt:salt,
            password:pass,
            relation:body.relation
        }) 
        //console.log(newUser.password)
        await newUser.save(err=>{
            if(err){                
                let msg = (err.keyValue.email == body.email)?"Email "+body.email+" already in use":err
                return res.status(404).json({  
                    errorMsg: 'Error :  '+msg,
                })
            }else{
                res.json({
                    successMsg : "Register "+body.email+" succesfully"
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

exports.signIn = async (req, res) => { 
    const body = req.body  
    if (!body) {
        return res.status(400).json({            
            errorMsg: 'Insufficient information',
        })
    }   
    if(body.googleId){   
        const {email, googleId, name, imageUrl} = body            
        this.SocialMediaSigninController(body)
        res.json({
            googleId,
            user:{ name, email, imageUrl, googleId },
        })        
    }else{
        const {email, password} = body;   
        let user = false
        try{ 
            await User.findOne({ email:{$eq:email }}, (err, userinfo) =>{
                if (err) {
                    return res.status(404).json({
                        errorMsg: 'Error  '+err,
                    })
                }
                if(!userinfo){
                    //console.log
                    return res.status(401).json({                        
                        errorMsg: "Invalid information"
                    })
                }
                user = userinfo
            })
            
            const ismatch = await bcrypt.compare(password, user.password)
            if(!ismatch){                            
                return res.status(401).json({
                    errorMsg: "Invalid information"
                })
            }        

            const payload = {
                user:{
                    _id: user._id,
                }
            };

            jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire}, (err, token)=>{
                    
                if(err) console.log("JWT error: ", err)
                const { _id, name, email, role, imageUrl, relation } = user
                res.json({
                    token,
                    user:{ _id, name, email, role, imageUrl, relation },
                })
            })

        }catch(e){
            //console.log("Signup Controller erro : ", e)
            return res.status(500).json({
                errorMsg: "Server Error "+e
            })
        }  
    } 
}

exports.SocialMediaSigninController = async (req, res) => {        
    const {email, name, imageUrl } = req  
    try{
        const user = await User.findOne({ email })
        if(!user){        
              
            const newUser = new User() 
            newUser.name = name
            newUser.email = email
            newUser.imageUrl = imageUrl
            newUser.social=true
            //const salt = await bcrypt.genSalt(10)
            newUser.password = "----"
            newUser.accountdetails = {accout:"account", ifsc:"ifsc"}
            //console.log(newUser.password)
            await newUser.save();
            // return res.status(400).json({
            //     errorMsg: "User Need to register"
            // })            
        }                
    }catch(e){
        return res.status(500).json({
            errorMsg: "Server Error "+e
        })
    }
    
}