import React from 'react'

const Jobspage = (props) =>{

  const userData = props.data
    //console.log(props)
    const Jobs = () => (
        <div className="tab-pane fade active show" id="posts">
            <div className="row">
              <div className="col-lg-8">
                <div className="media-list bg-white rounded shadow-base mg-t-30">
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
              <div className="col-lg-4 mg-lg-t-0 mg-t-30">
                {contactInformation()}
                {knownPeoples()}
              </div>{/* col-lg-4 */}
            </div>{/* row */}
          </div>
    )

    const contactInformation = () =>(
        <div className="card pd-20 pd-xs-30 shadow-base bd-0 mg-t-30">
            <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-13 mg-b-25">Contact Information</h6>
            <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Phone Number</label>
            <p className="tx-info mg-b-25">{userData.mobile}</p>
            <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Email Address</label>
            <p className="tx-inverse mg-b-25">{userData.email}</p>
            <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Home Address</label>
            <p className="tx-inverse mg-b-25">{userData.address} </p>
            <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Office Address</label>
            <p className="tx-inverse mg-b-50">1352 Science Center Drive Terreton, ID 83450 </p>
            <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-13 mg-b-25">Other Information</h6>
            <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Degree</label>
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
        </div>
    )

    const knownPeoples = () =>(
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
        </div>
    )

    return Jobs()
    
}

export { Jobspage }