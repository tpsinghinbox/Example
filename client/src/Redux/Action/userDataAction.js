
import { alertActions } from '../Action'
import { userDataApi } from '../../Api'
import { userConstants } from '../../Constants'

const getUserInfo = (id) => {

    return dispatch => {
        dispatch(request());
        userDataApi.getUserById(id)
        .then(response=>{
            dispatch(success(response.data))
        })
        .catch(error=>{    
           console.log(error)
           dispatch(failure(error.response.data.errorMsg))
           dispatch(alertActions.error('Error: '+error.response.data.errorMsg));
                  
        }) 
    }

    function request() { return { type: userConstants.GETPROFILE_BYID_REQUEST } }
    function success(users) { return { type: userConstants.GETPROFILE_BYID_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETPROFILE_BYID_FAILURE, error } }

}


const updateAccount = (account) => {
    const {_id} = account
    return dispatch => {
        dispatch(request())                
        userDataApi.updateAccountDetail(account)
        .then(response=>{
                dispatch(successaccount())
                userDataApi.getUserById(_id)
                .then(res=>{
                    dispatch(success(res.data))
                    dispatch(alertActions.success("Account updated successfully"))
                })
                // dispatch(alertActions.success("Account updated successfully"))
        })
        .catch(error=>{    
           console.log(error)
           dispatch(failure())
           dispatch(alertActions.error('Error: '+error.response.data.errorMsg));
                  
        }) 
    }
    function request() { return { type: userConstants.UPDATE_USER_ACCOUNT_REQUEST } }
    function successaccount() { return { type: userConstants.UPDATE_USER_ACCOUNT_SUCCESS } }
    function success(users) { return { type: userConstants.GETPROFILE_BYID_SUCCESS, users } }
    function failure() { return { type: userConstants.UPDATE_USER_ACCOUNT_FAIL } }
}

export const userDataAction = {
    getUserInfo,
    updateAccount
}