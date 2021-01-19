import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { userAuthAction, alertActions } from '../../Redux/Action'
import isEmpty from 'validator/lib/isEmpty'
import { showLoadingButton } from '../Default'
import { userConstants, appConstant } from '../../Constants'
import { history } from '../../Helper'

const Signin = ()=>{  
    
    // useEffect(()=>{
    //     if(isAuthnticate()){
    //         history.push('/home')
    //     }
    // }, [history])
  
    const [inputs, setInputs] = useState({
        email:'',
        password:''               
    })

    const {email, password } = inputs;
    const loading = useSelector(state => state.userSigninReducer.loading)    
    const dispatch = useDispatch();
    const location = useLocation();

    const handleChange = (e) =>{
        const { name, value } = e.target
        setInputs(inputs => ({ ...inputs, [name]: value }))
        if(loading)
        dispatch(userAuthAction.logout())

    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(isEmpty(email) || isEmpty(password)){
            dispatch(alertActions.error('All fields are required'))
        }else{            
                    
            const { from } = location.state || { from: { pathname: "/home" } };
            const data = {email, password} 
            dispatch(userAuthAction.SignIn(data, from)) 
        }
    }

    const SigninForm = () => (  
        <form onSubmit={submitHandler} >          
        <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
          <div className="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
    <div className="signin-logo tx-center tx-28 tx-bold tx-inverse"><span className="tx-normal">[</span> Welcome to <span className="tx-info">{appConstant.APP_NAME}</span> <span className="tx-normal">]</span></div>
            <div className="tx-center mg-b-60">X-Ray new user contact to admin</div>
            tpsingh@gmail.com 1212
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                required
              />              
            </div> 
            <div className="form-group">            
              <Link to='/targer' className="tx-info tx-12 d-block mg-t-10">Forgot password?</Link>
            </div>
            {(loading)?<>{showLoadingButton({text:'Login please wait..', btnblock:'btn-block'})}</>:<button className="btn btn-info btn-block">Sign In</button>}
          
            </div>
        </div>


          
        
        </form>
        );
      
        return  <div className="content">                
                    {SigninForm()}
                </div>;
}

export { Signin }