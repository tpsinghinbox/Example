import React from "react";
import { alertConstants } from '../../Constants';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css'

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return toast.notify(() => (<div className='alert alert-success'>{action.message}</div>))   
    case alertConstants.ERROR:
      return toast.notify(() => (<div className='alert alert-danger'>{action.message}</div>))   
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}

export { alertReducer }