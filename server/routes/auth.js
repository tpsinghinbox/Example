const express = require('express')
const router = express.Router()
const { signupValidator, signinValidator, validatorResult} = require('../middleware/userValidator/registrationlogin')
const { signIn, signUp } = require("../controllers/authController")

router.post('/signup', signupValidator, validatorResult, signUp)
router.post('/signin', signinValidator, validatorResult, signIn)






//router.post('/signin', signinValidator, validatorResult, signIn)

// router.post("/SocialMediaSingin", (req, res)=>{
//     SocialMediaSigninController  
// })

//router.post('/SocialMediaSingin', SocialMediaSigninController)

module.exports = router