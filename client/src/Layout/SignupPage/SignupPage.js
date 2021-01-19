import React, {useState} from 'react'
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail"
import equals from "validator/lib/equals"
import isEmpty from "validator/lib/isEmpty"
import { useSelector, useDispatch } from 'react-redux'
import { showLoadingButton } from "../Default"
import { userAuthAction, alertActions } from '../../Redux/Action' 
import { history } from '../../Helper'

const Signup = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        password2:"",
        relation:"",       
                
    })
     //Destructured
    const {name, email, password, password2, relation} = formData 
    const loading = useSelector(state => state.userSignUpReducer.loading)   
    const dispatch = useDispatch();

    const handleChange = (event) => {     
        setFormData ({
            ...formData,           
            [event.target.name]:event.target.value
        })
        if(loading)
        dispatch(userAuthAction.logout())     
    }

    const submitHandler = evnt => {
      evnt.preventDefault(evnt) 
     
      if(isEmpty(name) || isEmpty(email) || isEmpty(password2) || isEmpty(password) || isEmpty(relation)){       
        dispatch(alertActions.error('All fields are required')) 
        //dispatch(userActions.FailedAction(userConstants.USER_SIGNUP_FAIL,'All Fields are required'))       
      }else if(!isEmail(email)){
        dispatch(alertActions.error('Email id is not valied')) 
        //dispatch(userActions.FailedAction(userConstants.USER_SIGNUP_FAIL,'Email id is not valid')) 
      }else if(!equals(password, password2)){
        dispatch(alertActions.error('Password not matched')) 
        //dispatch(userActions.FailedAction(userConstants.USER_SIGNUP_FAIL,'Password not matched')) 
      //}else if(terms !== true){        
       // dispatch(alertActions.error('Accept term and condition'))  
        //dispatch(userActions.FailedAction(userConstants.USER_SIGNUP_FAIL,'Accept term and condition'))  
      }else{  
        //const {name, email, password, relation} = formData
        //const data = {name, email, password, history}
        dispatch(userAuthAction.SignUp(formData))
      }    
    }

  const SignupForm = () => (
    
    <form onSubmit={submitHandler}>   
        <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
        <div className="login-wrapper wd-400 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base">
          <div className="signin-logo tx-center tx-28 tx-bold tx-inverse">
            <span className="tx-normal">[</span> SE <span className="tx-info">Engineer</span> <span className="tx-normal">]</span></div>
          <div className="tx-center mg-b-30">The Admin Template For Perfectionist</div>
          {/* {errorMsg && ShowErrorMsg(errorMsg)} */}
          <div className="input-group mb-3">
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                placeholder="Full name"
                onChange={handleChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>          
          <div className="input-group mb-3">
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              name="password2"
              value={password2}
              className="form-control"
              placeholder="Retype password"
              onChange={handleChange}
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
            <label className="rdiobox">
            <input type="radio" name="relation" value="worker" onChange={handleChange} /><span>Worker</span>
            </label>
            </div>
            <div className="col-sm-3">
            <label className="rdiobox">
            <input type="radio" name="relation" value="client" onChange={handleChange} /><span>Client</span>
            </label>
            </div>
          </div>
          <div className="form-group tx-12">By clicking the Sign Up button below, you agreed to our privacy policy and terms of use of our website.</div>
          {(loading)?<div className="text-center">{showLoadingButton({text:'Registring user please wait..', btnblock:'btn-block'})}</div>:<button className="btn btn-info btn-block">Sign Up</button>}
          <div className="mg-t-30 tx-center">Already member? <Link to='/signin' className="tx-info">Sign In</Link></div>
        </div>
      </div>
      </form>
  );

  return    <div className="content">                                 
              {SignupForm()}                  
            </div>;
};
export {Signup};
