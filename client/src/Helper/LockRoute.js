import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAuthnticate } from "./Auth"

export const PrivateRoute = ({component: Component, ...rest})=> (    
    <Route {...rest} render = {(props) =>(
        isAuthnticate() ? 
        <Component {...props} />
        : 
        <Redirect to="/signin" />                        
    )} /> 
)