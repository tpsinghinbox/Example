import { userConstants} from '../../Constants'

const userDataReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.GETPROFILE_BYID_REQUEST:                   
            return { loading: true }
        case userConstants.GETPROFILE_BYID_SUCCESS:
            return { loading:false, items: action.users }           
        case userConstants.GETPROFILE_BYID_FAILURE:
            return { }
        // case userConstants.UPDATE_USER_ACCOUNT_REQUEST:
        //     return { loadingaccount: true }
        // case userConstants.UPDATE_USER_ACCOUNT_SUCCESS:
        //     return { loadingaccount: false }
        default:
            return state
    }
  }
  
  const userAccountReducer = (state = {} , action) =>{
    switch (action.type) {
        case userConstants.UPDATE_USER_ACCOUNT_REQUEST:
            return { loadingaccount: true }
        case userConstants.UPDATE_USER_ACCOUNT_SUCCESS:
            return { loadingaccount: false }
        case userConstants.UPDATE_USER_ACCOUNT_FAIL:
            return { }    
        default:
            return state
    }
    }
  export { userDataReducer,
    userAccountReducer
}