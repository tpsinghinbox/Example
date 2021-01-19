import React, { useEffect } from 'react';
import { Route, Switch, Router, BrowserRouter } from "react-router-dom"
import { history, PrivateRoute } from '../Helper';
import { Signin } from '../Layout/SigninPage'
import { Signup } from '../Layout/SignupPage'
import { Footer } from '../Layout/Default'
import { Home } from '../Layout/HomePage'
import Header from '../Layout/Default/Header'
const App = () => {  
  
  // useEffect(() => {
  //   history.listen((location, action) => {
  //       // clear alert on location change
  //      // dispatch(alertActions.clear());
  //   });
  // }, []);  
  return (



    <Router history={history}> 
    {/* <BrowserRouter> */}
    <div className="wrapper">     
      <div className="content-wrapper" style={{margin:0}}>   
      <Header/>         
        <Switch>
          <Route exact path="/" component={Signin}/>
          <Route exact path='/signin' component={Signin} />
          <PrivateRoute exact path='/home' component={Home} />         
          <Route exact path='/signup' component={Signup} />
{/*           
          <PrivateRoute exact path='/initilize' component={InitilizeForm} />
          <Route component={Error404} /> */}
        </Switch>
      </div>  
      <Footer/>
    </div>    
  {/* </BrowserRouter>     */}
  </Router>
  )
}
export { App }
