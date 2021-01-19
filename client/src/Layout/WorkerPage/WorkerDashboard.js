import React from 'react'
import { Jobspage, WorkerProfile, AccountDetails } from './index'

const WorkerDashboard = (props) => { 
  const userData = props.data  
  const _id = props.id 
  const ProfilePage = () => (
    <>
        <div className="card shadow-base bd-0 rounded-0 widget-4">
          <div className="card-header ht-75">
            <div className="hidden-xs-down">
              <a href className="mg-r-10"><span className="tx-medium">498</span> Followers</a>
              <a href><span className="tx-medium">498</span> Following</a>
            </div>
            <div className="tx-24 hidden-xs-down">
              <a href className="mg-r-10"><i className="icon ion-ios-email-outline" /></a>
              <a href><i className="icon ion-more" /></a>
            </div>
          </div>{/* card-header */}
          <div className="card-body">
            <div className="card-profile-img">
              <img src="https://via.placeholder.com/500" alt />
            </div>{/* card-profile-img */}
            <h4 className="tx-normal tx-roboto tx-white">{userData.name}</h4>
            <p className="mg-b-25">{userData.relation}</p>
            <p className="wd-md-500 mg-md-l-auto mg-md-r-auto mg-b-25">inger, Lawyer, Achiever, Wearer of unrelated hats, Data Visualizer, Mayonaise Tester. I don't know what alt-tab does. Storyteller.</p>
            <p className="mg-b-0 tx-24">
              <a href className="tx-white-8 mg-r-5"><i className="fab fa-facebook-official" /></a>
              <a href className="tx-white-8 mg-r-5"><i className="fab fa-twitter" /></a>
              <a href className="tx-white-8 mg-r-5"><i className="fab fa-pinterest" /></a>
              <a href className="tx-white-8"><i className="fab fa-instagram" /></a>
            </p>
          </div>{/* card-body */}
        </div>{/* card */}
        <div className="ht-70 bg-gray-100 pd-x-20 d-flex align-items-center justify-content-center shadow-base">
          <ul className="nav nav-outline active-info align-items-center flex-row" role="tablist">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#posts" role="tab">Jobs</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#photos" role="tab">Profile</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#account" role="tab">Account</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#posts" role="tab">Contact</a></li>
          </ul>
        </div>
        <div className="tab-content br-profile-body">
          <Jobspage data={userData}/>
          <WorkerProfile />
          <AccountDetails data={userData.accountDetails} id={_id}/>
        </div>{/* br-pagebody */}
      </>
    )
    return <>
            {ProfilePage()}
            </>
}

export {WorkerDashboard}