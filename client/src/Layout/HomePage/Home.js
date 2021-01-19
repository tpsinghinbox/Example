import React, { useEffect } from 'react'
import { getLocalstorageValue, history } from '../../Helper'
import { useSelector, useDispatch } from 'react-redux'
import { userDataAction } from '../../Redux/Action'
import { showLoadingGrow } from '../Default'

import { WorkerDashboard } from '../WorkerPage'


const Home = () => {
 
  const userdetails = getLocalstorageValue('user')
  const {_id, name, relation} = userdetails
  
  const userdata = useSelector(state => state.userDataReducer);
  const {items} = userdata
  const dispatch = useDispatch() 
  
  useEffect(() => {
    dispatch(userDataAction.getUserInfo(_id)) 
  }, [])
  
  const ProfilePage = () => (
      <div className='br-profile-page mg-t-60-force mg-b-30-force'>
        {userdata.loading && <>{showLoadingGrow()}</>}
        {userdata.items && 
        <WorkerDashboard data={userdata.items} id={_id}/>
        }
      </div>      
    )
    return <div className="content">{ProfilePage()}</div>
}
export {Home}