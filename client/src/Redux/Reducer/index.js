import { combineReducers } from 'redux'
import { userSigninReducer, userSignUpReducer } from './UserSignInReducer'
import { userDataReducer, userAccountReducer } from './userDataReducer'
import { alertReducer } from './alertReducer'

const rootReducer = combineReducers({    
    userSigninReducer,
    userSignUpReducer,
    alertReducer,
    userDataReducer,
    userAccountReducer
})
export default rootReducer
