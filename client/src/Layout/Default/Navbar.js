import React, { Fragment } from 'react'
import {Link, withRouter } from "react-router-dom"
import { isAuthnticate, Logout, getLocalstorageValue, history } from '../../Helper'

const Navbar = () => {  
    var dateFormat = require('dateformat');    
    const handleLogout = (evt) =>{
        Logout(()=>{
            history.push('/')
        })
    }
    const userdetails = getLocalstorageValue('user')
    const {name, imageUrl} = userdetails
    
    const Navbarheader = () => ( 
    //isAuthnticate() && (
      
        <nav className="navbar navbar-expand-md navbar-light navbar-white">               
          <div className="container">
            <Link to="/" className="navbar-brand">
              <span className="brand-text font-weight-light"><b>Se</b> Engr</span>
            </Link>
            <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse order-3" id="navbarCollapse">       
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link"><i className="fa fa-home"></i> Home</Link>
                </li>
                <li className="nav-item">          
                  <Link to="#" className="nav-link"><i className="fa fa-briefcase"></i> Jobs</Link>
                </li>          
              </ul>
            </div>
            <Fragment>           
              { userMenu() }      
            </Fragment>
          </div>
        </nav>
    //)    
  );

  const userMenu = () =>( 
    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">     
    <li className="nav-item dropdown user-menu">
    <button className="btn btn-link nav-link dropdown-toggle" data-toggle="dropdown">
      <img src={ (imageUrl=='logo')? '/images/all.png':imageUrl } className="user-image img-circle elevation-2" alt="User" />
    <span className="d-none d-md-inline text-capitalize"> { name }</span>
    </button>
    <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">      
      <li className="user-header bg-primary">
        <img src={ (imageUrl==='logo')? '/images/all.png':imageUrl } className="img-circle elevation-2" alt="User" />
        <p>        
          <span className="text-capitalize">  { name } </span>
          - Web Developer
          <small>{ name }{dateFormat()}</small>
        </p>
      </li>     
      <li className="user-body">
        <div className="row">
          <div className="col-4 text-center">
            <Link to="#">Followers</Link>
          </div>
          <div className="col-4 text-center">
            <Link to="#">Sales</Link>
          </div>
          <div className="col-4 text-center">
          <Link to="#">Friends</Link>
          </div>
        </div>       
      </li>      
      <li className="user-footer">
        <button href="#" className="btn btn-default btn-flat">Profile</button>        
        <button className="btn btn-default btn-flat float-right" onClick={handleLogout} >Sign out</button>
      </li>
    </ul>
  </li>
  </ul>  
  );
  return Navbarheader() 
    
};
export  {Navbar};
//export default withRouter(Header);