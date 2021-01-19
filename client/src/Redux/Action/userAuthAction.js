import { userConstants } from '../../Constants'
import { userAuthApi} from '../../Api'
import { setAuth, history } from '../../Helper'
import { alertActions } from '.'

const SignIn = (data, from) => {
  return dispatch => {   
    
    const {email, password} = data 
    dispatch(request({ email }))   
    userAuthApi.signIn({email, password})    
    .then(response=>{  
        const resData = response.data.user
        setAuth(response.data.token, resData)
        dispatch(success(resData))
        dispatch(alertActions.success(email + ' login successfully'));        
        //const { relation } = resData
        // If user is new yet to set relation with us
        //if(relation === 'null')
         // history.push('/home')
        //else
          history.push(from)  
    }) 
    .catch(error=>{   
      
      dispatch(failure(error.response.data.errorMsg))
      dispatch(alertActions.error('Error: '+error.response.data.errorMsg));
            
    }) 
  }
  function request(user) { return { type: userConstants.USER_SIGNIN_REQUEST, user } } 
  function success(user) { return { type: userConstants.USER_SIGNIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.USER_SIGNIN_FAIL, error } }
}

const logout = () => {
  //userService.logout();
  return { type: userConstants.USER_LOGOUT };
}


const SignUp = (userSiginData) =>{

  return dispatch =>{
      dispatch(request({ userSiginData }))     
      const { email } = userSiginData
      //const data = {name, email, password}
      userAuthApi.signUp(userSiginData)
      .then(response =>{       
            dispatch(success(userSiginData))
            dispatch(alertActions.success(email + " registred successfully"))
            history.push('/');
          })
          .catch(error =>{                           
              dispatch(alertActions.error(error.response.data.errorMsg))          
              dispatch(failure(error.response.data.errorMsg))  
          })

    }  

  function request() { return { type: userConstants.USER_SIGNUP_REQUEST} }
  function success(userSiginData) { return { type: userConstants.USER_SIGUP_SUCCESS, userSiginData } }
  function failure(error) { return { type: userConstants.USER_SIGNUP_FAIL, error } }
}

export const userAuthAction = {
  SignIn, 
  SignUp,
  logout  
}
  