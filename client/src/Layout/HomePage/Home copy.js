import React, { useEffect } from 'react'
import { getLocalstorageValue, history } from '../../Helper'
import { useSelector, useDispatch } from 'react-redux'
import { userDataAction } from '../../Redux/Action'
import { showLoadingGrow } from '../Default'

const Home = () => {
 
  const userdetails = getLocalstorageValue('user')
  const {_id, name, relation} = userdetails
  
  const userdata = useSelector(state => state.userDataReducer);
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(userDataAction.getUserInfo(_id)) 
  }, [])
 
   
  const ProfilePage = () => (
    <div className="br-profile-page mg-t-60-force mg-b-30-force">
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
          {userdata.loading && showLoadingGrow()}
          {userdata.items && 
          <div className="card-body">
            <div className="card-profile-img">
              <img src="https://via.placeholder.com/500" alt />
            </div>{/* card-profile-img */}
            <h4 className="tx-normal tx-roboto tx-white">{userdata.items.name}</h4> 
            <p className="mg-b-25">{userdata.items.relation}</p>
            <p className="wd-md-500 mg-md-l-auto mg-md-r-auto mg-b-25">inger, Lawyer, Achiever, Wearer of unrelated hats, Data Visualizer, Mayonaise Tester. I don't know what alt-tab does. Storyteller.</p>
            <p className="mg-b-0 tx-24">
              <a href className="tx-white-8 mg-r-5"><i className="fab fa-facebook-official" /></a>
              <a href className="tx-white-8 mg-r-5"><i className="fab fa-twitter" /></a>
              <a href className="tx-white-8 mg-r-5"><i className="fab fa-pinterest" /></a>
              <a href className="tx-white-8"><i className="fab fa-instagram" /></a>
            </p>
          </div>
          }
        </div>{/* card */}
        <div className="ht-70 bg-gray-100 pd-x-20 d-flex align-items-center justify-content-center shadow-base">
          <ul className="nav nav-outline active-info align-items-center flex-row" role="tablist">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#posts" role="tab">Jobs</a></li>
          </ul>
        </div>
        <div className="tab-content br-profile-body">
          <div className="tab-pane fade active show" id="posts">
            <div className="row">
              <div className="col-lg-8">
                <div className="media-list bg-white rounded shadow-base">
                  <div className="media pd-20 pd-xs-30">
                    <img src="https://via.placeholder.com/500" alt className="wd-40 rounded-circle" />
                    <div className="media-body mg-l-20">
                      <div className="d-flex justify-content-between mg-b-10">
                        <div>
                          <h6 className="mg-b-2 tx-inverse tx-14">Louise Kate</h6>
                          <span className="tx-12 tx-gray-500">@louisekate</span>
                        </div>
                        <span className="tx-12">2 minutes ago</span>
                      </div>{/* d-flex */}
                      <p className="mg-b-20">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                      <div className="media-footer">
                        <div>
                          <a href><i className="fa fa-heart" /></a>
                          <a href className="mg-l-10"><i className="fa fa-comment" /></a>
                          <a href className="mg-l-10"><i className="fa fa-retweet" /></a>
                          <a href className="mg-l-10"><i className="fa fa-ellipsis-h" /></a>
                        </div>
                      </div>{/* d-flex */}
                    </div>{/* media-body */}
                  </div>{/* media */}
                  <div className="media pd-20 pd-xs-30">
                    <img src="https://via.placeholder.com/500" alt className="wd-40 rounded-circle" />
                    <div className="media-body mg-l-20">
                      <div className="d-flex justify-content-between mg-b-10">
                        <div>
                          <h6 className="mg-b-2 tx-inverse tx-14">Annie Lee</h6>
                          <span className="tx-12 tx-gray-500">@annielee</span>
                        </div>
                        <span className="tx-12">1 hour ago</span>
                      </div>{/* d-flex */}
                      <img src="https://via.placeholder.com/1000x400" className="img-fluid mg-b-10" alt />
                      <div className="media-footer">
                        <div>
                          <a href><i className="fa fa-heart" /></a>
                          <a href className="mg-l-10"><i className="fa fa-comment" /></a>
                          <a href className="mg-l-10"><i className="fa fa-retweet" /></a>
                          <a href className="mg-l-10"><i className="fa fa-ellipsis-h" /></a>
                        </div>
                      </div>{/* d-flex */}
                    </div>{/* media-body */}
                  </div>{/* media */}
                  <div className="media pd-20 pd-xs-30">
                    <img src="https://via.placeholder.com/500" alt className="wd-40 rounded-circle" />
                    <div className="media-body mg-l-20">
                      <div className="d-flex justify-content-between mg-b-10">
                        <div>
                          <h6 className="mg-b-2 tx-inverse tx-14">Annie Lee</h6>
                          <span className="tx-12 tx-gray-500">@annielee</span>
                        </div>
                        <span className="tx-12">2 hours ago</span>
                      </div>{/* d-flex */}
                      <p className="mg-b-20">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                      <div className="media-footer">
                        <div>
                          <a href><i className="fa fa-heart tx-danger" /></a>
                          <a href className="mg-l-10"><i className="fa fa-comment" /></a>
                          <a href className="mg-l-10"><i className="fa fa-retweet" /></a>
                          <a href className="mg-l-10"><i className="fa fa-ellipsis-h" /></a>
                        </div>
                      </div>{/* d-flex */}
                    </div>{/* media-body */}
                  </div>{/* media */}
                  <div className="media pd-20 pd-xs-30">
                    <img src="https://via.placeholder.com/500" alt className="wd-40 rounded-circle" />
                    <div className="media-body mg-l-20">
                      <div className="d-flex justify-content-between mg-b-10">
                        <div>
                          <h6 className="mg-b-2 tx-inverse tx-14">Mark Anthony</h6>
                          <span className="tx-12 tx-gray-500">@markanthony</span>
                        </div>
                        <span className="tx-12">2 hours ago</span>
                      </div>{/* d-flex */}
                      <p className="lead pd-30 bg-purple tx-white">Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>
                      <div className="media-footer">
                        <div>
                          <a href><i className="fa fa-heart" /></a>
                          <a href className="mg-l-10"><i className="fa fa-comment" /></a>
                          <a href className="mg-l-10"><i className="fa fa-retweet" /></a>
                          <a href className="mg-l-10"><i className="fa fa-ellipsis-h" /></a>
                        </div>
                      </div>{/* d-flex */}
                    </div>{/* media-body */}
                  </div>{/* media */}
                </div>{/* card */}
                <div className="bg-white pd-y-12 tx-center mg-t-15 mg-xs-t-30 shadow-base rounded">
                  <a href className="tx-gray-600 hover-info">Load more</a>
                </div>
              </div>{/* col-lg-8 */}
              <div className="col-lg-4 mg-t-30 mg-lg-t-0">
              {userdata.items && 
                <div className="card pd-20 pd-xs-30 shadow-base bd-0">
                  <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-13 mg-b-25">Contact Information</h6>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Phone Number</label>
                  <p className="tx-info mg-b-25">{userdata.items.mobile}</p>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Email Address</label>
                  <p className="tx-inverse mg-b-25">{userdata.items.email}</p>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Home Address</label>
                  <p className="tx-inverse mg-b-25">1352 Science Center Drive Terreton, ID 83450 </p>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Office Address</label>
                  <p className="tx-inverse mg-b-50">1352 Science Center Drive Terreton, ID 83450 </p>
                  <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-13 mg-b-25">Other Information</h6>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Degree</label>
                  <p className="tx-inverse mg-b-25">Bachelor of Science in Computer Science</p>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Rating</label>
                  <p className="tx-inverse mg-b-25">Bachelor of Science in Computer Science</p>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-5">Skills</label>
                  <ul className="list-unstyled profile-skills">
                    <li><span>html</span></li>
                    <li><span>css</span></li>
                    <li><span>javascript</span></li>
                    <li><span>php</span></li>
                    <li><span>photoshop</span></li>
                    <li><span>java</span></li>
                    <li><span>angular</span></li>
                    <li><span>wordpress</span></li>
                  </ul>
                  <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-5">Award</label>
                  <ul className="list-unstyled profile-skills">
                    <li><span>html</span></li>
                    <li><span>css</span></li>
                    <li><span>javascript</span></li>
                    <li><span>php</span></li>
                    <li><span>photoshop</span></li>
                    <li><span>java</span></li>
                    <li><span>angular</span></li>
                    <li><span>wordpress</span></li>
                  </ul>
                </div>
                }
                <div className="card pd-20 pd-xs-30 shadow-base bd-0 mg-t-30">
                  <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-13 mg-b-30">People You May Know</h6>
                  <div className="media-list">
                    <div className="media align-items-center pd-b-10">
                      <img src="https://via.placeholder.com/500" className="wd-45 rounded-circle" alt />
                      <div className="media-body mg-x-15 mg-xs-x-20">
                        <h6 className="mg-b-2 tx-inverse tx-14">Marilyn Tarter</h6>
                        <p className="mg-b-0 tx-12">@marilyntarter</p>
                      </div>{/* media-body */}
                      <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle mg-r-5">
                        <div><i className="icon ion-android-person-add tx-16" /></div>
                      </a>
                    </div>{/* media */}
                    <div className="media align-items-center pd-y-10">
                      <img src="https://via.placeholder.com/500" className="wd-45 rounded-circle" alt />
                      <div className="media-body mg-x-15 mg-xs-x-20">
                        <h6 className="mg-b-2 tx-inverse tx-14">Belinda Connor</h6>
                        <p className="mg-b-0 tx-12">@bconnor</p>
                      </div>{/* media-body */}
                      <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle mg-r-5">
                        <div><i className="icon ion-android-person-add tx-16" /></div>
                      </a>
                    </div>{/* media */}
                    <div className="media align-items-center pd-y-10">
                      <img src="https://via.placeholder.com/500" className="wd-45 rounded-circle" alt />
                      <div className="media-body mg-x-15 mg-xs-x-20">
                        <h6 className="mg-b-2 tx-inverse tx-14">Deborah Miner</h6>
                        <p className="mg-b-0 tx-12">@dminer</p>
                      </div>{/* media-body */}
                      <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle mg-r-5">
                        <div><i className="icon ion-android-person-add tx-16" /></div>
                      </a>
                    </div>{/* media */}
                    <div className="media align-items-center pd-y-10">
                      <img src="https://via.placeholder.com/500" className="wd-45 rounded-circle" alt />
                      <div className="media-body mg-x-15 mg-xs-x-20">
                        <h6 className="mg-b-2 tx-inverse tx-14">Theodore Grestin</h6>
                        <p className="mg-b-0 tx-12">@theodore</p>
                      </div>{/* media-body */}
                      <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle mg-r-5">
                        <div><i className="icon ion-android-person-add tx-16" /></div>
                      </a>
                    </div>{/* media */}
                    <div className="media align-items-center pd-y-10">
                      <img src="https://via.placeholder.com/500" className="wd-45 rounded-circle" alt />
                      <div className="media-body mg-x-15 mg-xs-x-20">
                        <h6 className="mg-b-2 tx-inverse tx-14">Andrew Wiggins</h6>
                        <p className="mg-b-0 tx-12">@awiggins</p>
                      </div>{/* media-body */}
                      <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle mg-r-5">
                        <div><i className="icon ion-android-person-add tx-16" /></div>
                      </a>
                    </div>{/* media */}
                  </div>{/* media-list */}
                </div>{/* card */}
              </div>{/* col-lg-4 */}
            </div>{/* row */}
          </div>{/* tab-pane */}
          <div className="tab-pane fade" id="photos">
            <div className="row">
              <div className="col-lg-8">
                <div className="card pd-20 pd-xs-30 shadow-base bd-0 mg-t-30">
                  <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-14 mg-b-30">Recent Photos</h6>
                  <div className="row row-xs">
                    <div className="col-6 col-sm-4 col-md-3"><img src="https://via.placeholder.com/800" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3"><img src="https://via.placeholder.com/300" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3 mg-t-10 mg-sm-t-0"><img src="https://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3 mg-t-10 mg-md-t-0"><img src="https://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="https://via.placeholder.com/800" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="https://via.placeholder.com/800" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="https://via.placeholder.com/800" className="img-fluid" alt /></div>
                    <div className="col-6 col-sm-4 col-md-3 mg-t-10"><img src="https://via.placeholder.com/500" className="img-fluid" alt /></div>
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
                    <div className="col"><img src="https://via.placeholder.com/800" className="img-fluid" alt /></div>
                    <div className="col"><img src="https://via.placeholder.com/800" className="img-fluid" alt /></div>
                    <div className="col">
                      <div className="overlay">
                        <img src="https://via.placeholder.com/800" className="img-fluid" alt />
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
                    <div className="col"><img src="https://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                    <div className="col"><img src="https://via.placeholder.com/600x600" className="img-fluid" alt /></div>
                    <div className="col">
                      <div className="overlay">
                        <img src="https://via.placeholder.com/600x600" className="img-fluid" alt />
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
          </div>{/* tab-pane */}
        </div>{/* br-pagebody */}
      </div>
      
    )
    return <div className="content">
            {ProfilePage()}
            </div>
}
export {Home}