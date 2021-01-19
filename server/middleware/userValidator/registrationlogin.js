const { check, validationResult } = require('express-validator');


exports.signupValidator = [
    
    check("name").not().isEmpty().trim().withMessage('All filed required'),
    check("email").isEmail().normalizeEmail().withMessage('Invalid Email id'),
    check("password").isLength({ min: 4}).withMessage('Passsword has minimum length of 4'),
    check("relation").not().isEmpty().trim().withMessage('All filed required'),    
]

exports.signinValidator = [    
    check("email").isEmail().normalizeEmail().withMessage('Invalid Email id'),
    //check("password").isLength({ min: 4}).withMessage('Passsword has minimum length of 2'),
]

exports.validatorResult = (req, res, next) =>{
    const result =  validationResult(req)    
    const hasErro = !result.isEmpty();
    if(hasErro){
        const firstError = result.array()[0].msg
        return res.status(400).json({
            errorMsg: firstError
        })
    }
    next();
} 