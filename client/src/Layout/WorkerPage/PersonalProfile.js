import React from 'react'

const WorkerProfile = () => { 
  //const userData = props.data
   //const userdetails = getLocalstorageValue('user')
  //const {_id, name, imageUrl, relation} = userdetails
  // const dispatch = useDispatch() 
  // useEffect(() => {    
  //      dispatch(userDataAction.fetchUserById(_id))
  // }, []);
    
  // const userProfileInformation = useSelector(state => state.UserFetchProfileDetailsReducer)  
  // const { userInfo } = userProfileInformation  
  
   
  const ProfilePage = () => (
    <div className="tab-pane fade" id="photos">
        <div className="row">
            <div className="col-lg-8">
            <div className="card pd-20 pd-xs-30 shadow-base bd-0 mg-t-30">
                <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-14 mg-b-30">Recent Photos</h6>
                <div className="row row-xs">
                <div className="col-6 col-sm-4 col-md-3"><img src="http://via.placeholder.com/300x300" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3"><img src="http://via.placeholder.com/300x300" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10 mg-sm-t-0"><img src="http://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10 mg-md-t-0"><img src="http://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/300x300" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/300x300" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/300x300" className="img-fluid" alt /></div>
                <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="http://via.placeholder.com/300x300" className="img-fluid" alt /></div>
                </div>{/* row */}
                <p className="mg-t-20 mg-b-0">Loading more photos...</p>
            </div>{/* card */}
            </div>{/* col-lg-8 */}
            <div className="col-lg-4 mg-t-30 mg-lg-t-0">
            <div className="card pd-20 pd-xs-30 shadow-base bd-0 mg-t-30">
                <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-14 mg-b-30">Photo Albums</h6>
                <div className="row row-xs mg-b-15">
                <div className="col"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col">
                    <div className="overlay">
                    <img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt />
                    <div className="overlay-body bg-black-5 d-flex align-items-center justify-content-center">
                        <span className="tx-white tx-12">20+ more</span>
                    </div>{/* overlay-body */}
                    </div>{/* overlay */}
                </div>
                </div>{/* row */}
                <div className="d-flex alig-items-center justify-content-between">
                <h6 className="tx-inverse tx-14 mg-b-0">Profile Photos</h6>
                <span className="tx-12">24 Photos</span>
                </div>{/* d-flex */}
                <hr />
                <div className="row row-xs mg-b-15">
                <div className="col"><img src="http://via.placeholder.com/1000x1000" className="img-fluid" alt /></div>
                <div className="col"><img src="http://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                <div className="col">
                    <div className="overlay">
                    <img src="http://via.placeholder.com/600x600" className="img-fluid" alt />
                    <div className="overlay-body bg-black-5 d-flex align-items-center justify-content-center">
                        <span className="tx-white tx-12">20+ more</span>
                    </div>{/* overlay-body */}
                    </div>{/* overlay */}
                </div>
                </div>{/* row */}
                <div className="d-flex alig-items-center justify-content-between">
                <h6 className="tx-inverse tx-14 mg-b-0">Mobile Uploads</h6>
                <span className="tx-12">24 Photos</span>
                </div>{/* d-flex */}
                <hr />
                <div className="row row-xs mg-b-15">
                <div className="col"><img src="http://via.placeholder.com/300x300/0866C6/FFF" className="img-fluid" alt /></div>
                <div className="col"><img src="http://via.placeholder.com/300x300/DC3545/FFF" className="img-fluid" alt /></div>
                <div className="col">
                    <div className="overlay">
                    <img src="http://via.placeholder.com/300x300/0866C6/FFF" className="img-fluid" alt />
                    <div className="overlay-body bg-black-5 d-flex align-items-center justify-content-center">
                        <span className="tx-white tx-12">20+ more</span>
                    </div>{/* overlay-body */}
                    </div>{/* overlay */}
                </div>
                </div>{/* row */}
                <div className="d-flex alig-items-center justify-content-between">
                <h6 className="tx-inverse tx-14 mg-b-0">Mobile Uploads</h6>
                <span className="tx-12">24 Photos</span>
                </div>{/* d-flex */}
                <a href className="d-block mg-t-20"><i className="fa fa-angle-down mg-r-5" /> Show 8 more albums</a>
            </div>{/* card */}
            </div>{/* col-lg-4 */}
        </div>{/* row */}
    </div>
    )
    return <>{ProfilePage()}</>
}

export {WorkerProfile}