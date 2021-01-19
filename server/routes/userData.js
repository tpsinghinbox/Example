const express = require('express');
const router = express.Router();
const { accountValidator, validatorResult} = require('../middleware/userValidator/userData')
//const { GetUserProfileController, GetUserMobileController, UpdateInitlizeDataController } = require("../controllers/userProfile")
const { getUserById, updateAccount } = require('../controllers/userDataController')

router.get('/get/:id', getUserById)
router.post('/updateaccount', accountValidator, validatorResult, updateAccount)

module.exports = router;