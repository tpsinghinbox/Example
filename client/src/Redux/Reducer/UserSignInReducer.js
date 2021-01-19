import { userConstants} from '../../Constants'
import { getLocalstorageValue } from '../../Helper'

let user = getLocalstorageValue('user');
const initialState = user ? { loading: false, user } : {};

const userSigninReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case userConstants.USER_SIGNIN_REQUEST:
            return { loading: true, user:action.user }    
        case userConstants.USER_SIGNIN_SUCCESS:
            return { loading:false, user:action.user }
        case userConstants.USER_SIGNIN_FAIL:                
            return {}
        case userConstants.USER_LOGOUT:
            return {}
        default:
            return state                
    }
}

const userSignUpReducer = (state = {}, action)=> {

    switch (action.type) {
        case userConstants.USER_SIGNUP_REQUEST:
            return { loading: true, user:action.user }    
        case userConstants.USER_SIGNUP_SUCCESS:
            return { loading:false }
        case userConstants.USER_SIGNUP_FAIL:                
            return {}       
        default:
            return state                
    }
}

export { 
    userSigninReducer,
    userSignUpReducer
 }
