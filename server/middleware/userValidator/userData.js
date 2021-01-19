const { check, validationResult } = require('express-validator')

exports.InilizeValidator = [   
    
    check("mobileno").isInt().isLength({ min: 10}).withMessage('Invalid Mobile No'),
    check("rel").not().isEmpty().trim().withMessage('All Field Required'),
    check("dob").not().isEmpty().trim().withMessage('All Field Required'),
    check("gender").not().isEmpty().trim().withMessage('All Field Required'),
        
]

exports.accountValidator = [   
    
    check("account").not().isEmpty().trim().withMessage('All Field Required'),
    check("ifsc").not().isEmpty().trim().withMessage('All Field Required'),
    check("bank").not().isEmpty().trim().withMessage('All Field Required'),
    check("branch").not().isEmpty().trim().withMessage('All Field Required'),
        
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