import React, { Fragment } from 'react'
import {Link, withRouter } from "react-router-dom"
import { isAuthnticate, Logout, getLocalstorageValue} from '../../Helper'

const Header = (props) => {      
    var dateFormat = require('dateformat');  
    const handleLogout = (evt) =>{
        Logout(()=>{
            props.history.push('/')
        })
    }
    const userdetails = getLocalstorageValue('user')
    const {name, imageUrl, email} = userdetails    
    
    
    const Navbarheader = () => ( 
        <>
        <div className="br-logo"><Link to='/'><span>[</span>SE <i>Engineer</i><span>]</span></Link></div>
        <div className="br-header">
        <div className="br-header-left">
            <div className="navicon-left hidden-md-down"><a id="btnLeftMenu" hrer=""><i className="icon ion-navicon-round" /></a></div>
            <div className="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href=""><i className="icon ion-navicon-round" /></a></div>
            <div className="input-group hidden-xs-down wd-170 transition">
            <input id="searchbox" type="text" className="form-control" placeholder="Search" />
            <span className="input-group-btn">
                <button className="btn btn-secondary" type="button"><i className="fa fa-search" /></button>
            </span>
            </div>{/* input-group */}
        </div>{/* br-header-left */}
  <div className="br-header-right">
    <nav className="nav">
      <div className="dropdown">
        <a href="" className="nav-link pd-x-7 pos-relative" data-toggle="dropdown">
          <i className="icon ion-ios-email-outline tx-24" />
          {/* start: if statement */}
          <span className="square-8 bg-danger pos-absolute t-15 r-0 rounded-circle" />
          {/* end: if statement */}
        </a>
        <div className="dropdown-menu dropdown-menu-header">
          <div className="dropdown-menu-label">
            <label>Messages</label>
            <a href="">+ Add New Message</a>
          </div>{/* d-flex */}
          <div className="media-list">
            {/* loop starts here */}
            <a href="" className="media-list-link">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <div>
                    <p>Donna Seay</p>
                    <span>2 minutes ago</span>
                  </div>{/* d-flex */}
                  <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
                </div>
              </div>{/* media */}
            </a>
            {/* loop ends here */}
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <div>
                    <p>Samantha Francis</p>
                    <span>3 hours ago</span>
                  </div>{/* d-flex */}
                  <p>My entire soul, like these sweet mornings of spring.</p>
                </div>
              </div>{/* media */}
            </a>
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <div>
                    <p>Robert Walker</p>
                    <span>5 hours ago</span>
                  </div>{/* d-flex */}
                  <p>I should be incapable of drawing a single stroke at the present moment...</p>
                </div>
              </div>{/* media */}
            </a>
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <div>
                    <p>Larry Smith</p>
                    <span>Yesterday</span>
                  </div>{/* d-flex */}
                  <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes...</p>
                </div>
              </div>{/* media */}
            </a>
            <div className="dropdown-footer">
              <a href=""><i className="fa fa-angle-down" /> Show All Messages</a>
            </div>
          </div>{/* media-list */}
        </div>{/* dropdown-menu */}
      </div>{/* dropdown */}
      <div className="dropdown">
        <a href="" className="nav-link pd-x-7 pos-relative" data-toggle="dropdown">
          <i className="icon ion-ios-bell-outline tx-24" />
          {/* start: if statement */}
          <span className="square-8 bg-danger pos-absolute t-15 r-5 rounded-circle" />
          {/* end: if statement */}
        </a>
        <div className="dropdown-menu dropdown-menu-header">
          <div className="dropdown-menu-label">
            <label>Notifications</label>
            <a href="">Mark All as Read</a>
          </div>{/* d-flex */}
          <div className="media-list">
            {/* loop starts here */}
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <p className="noti-text"><strong>Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
                  <span>October 03, 2017 8:45am</span>
                </div>
              </div>{/* media */}
            </a>
            {/* loop ends here */}
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <p className="noti-text"><strong>Mellisa Brown</strong> appreciated your work <strong>The Social Network</strong></p>
                  <span>October 02, 2017 12:44am</span>
                </div>
              </div>{/* media */}
            </a>
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <p className="noti-text">20+ new items added are for sale in your <strong>Sale Group</strong></p>
                  <span>October 01, 2017 10:20pm</span>
                </div>
              </div>{/* media */}
            </a>
            <a href="" className="media-list-link read">
              <div className="media">
                <img src="https://via.placeholder.com/500" alt="image"/>
                <div className="media-body">
                  <p className="noti-text"><strong>Julius Erving</strong> wants to connect with you on your conversation with <strong>Ronnie Mara</strong></p>
                  <span>October 01, 2017 6:08pm</span>
                </div>
              </div>{/* media */}
            </a>
            <div className="dropdown-footer">
              <a href=""><i className="fa fa-angle-down" /> Show All Notifications</a>
            </div>
          </div>{/* media-list */}
        </div>{/* dropdown-menu */}
      </div>{/* dropdown */}
      {userMenu()}
    </nav>    
  </div>{/* br-header-right */}
</div>
</>
 
  );

  const userMenu = () =>( 
    <div className="dropdown">
        <a href="" className="nav-link nav-link-profile" data-toggle="dropdown">
  <span className="logged-name hidden-md-down">{name}</span>
          <img src="https://via.placeholder.com/500" className="wd-32 rounded-circle" alt="image"/>
          <span className="square-10 bg-success" />
        </a>
        <div className="dropdown-menu dropdown-menu-header wd-250 mg-r-2">
          <div className="tx-center">
            <a href=""><img src="https://via.placeholder.com/500" className="wd-80 rounded-circle" alt="image"/></a>
            <h6 className="logged-fullname">{name}</h6>
            <p>{email}</p>
          </div>
          <hr />
          <div className="tx-center">
            <span className="profile-earning-label">Earnings After Taxes</span>
            <h3 className="profile-earning-amount">$13,230 <i className="icon ion-ios-arrow-thin-up tx-success" /></h3>
            <span className="profile-earning-text">Based on last job.</span>
          </div>
          <hr />
          <ul className="list-unstyled user-profile-nav">
            <li><a href=""><i className="icon ion-ios-person" /> Edit Profile</a></li>
            <li><Link to='' onClick={handleLogout} ><i className="icon ion-power" /> Sign Out</Link></li>
          </ul>
        </div>
      </div>
  );
  return isAuthnticate() && (Navbarheader())
    
};
//export  {Header};
export default withRouter(Header);