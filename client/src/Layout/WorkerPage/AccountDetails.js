import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import isEmpty from "validator/lib/isEmpty"
import { showLoadingButton } from "../Default"
import { alertActions, userDataAction } from '../../Redux/Action'
import Style from './mystyle.module.css'

const AccountDetails = (props) => {
    const accoundetails = props.data  
    const _id = props.id

    const [formData, setFormData] = useState({
        account:"",
        ifsc:"",
        bank:"",
        branch:""    
    })


     //Destructured
    const {account, ifsc, bank, branch} = formData  
    const userData = useSelector(state => state.userAccountReducer);
    const dispatch = useDispatch() 

    const handleChange = (event) => {     
        setFormData ({
            ...formData,           
            [event.target.name]:event.target.value
        })            
    }

    const submitHandler = evnt => {
        evnt.preventDefault(evnt) 
        //setFormData({...formData, loadingaccount:true})
        if(isEmpty(account) || isEmpty(ifsc) || isEmpty(bank) || isEmpty(branch)){       
          dispatch(alertActions.error('All fields are required'))           
          //dispatch(userActions.FailedAction(userConstants.USER_SIGNUP_FAIL,'All Fields are required'))       
        }else{                      
          const {account, ifsc, bank, branch} = formData
          const data = {account, ifsc, bank, branch, _id}
          dispatch(userDataAction.updateAccount(data)) 
          //setFormData({...formData, loadingaccount:false})                  
        }   
                
      }

    const accounts = () => (
    <div className="tab-pane fade" id="account">
        <div className="row">
            <div className="col-lg-12"> 
                <div className="card pd-20 pd-xs-30 shadow-base bd-0">
                    <div className={"card-header bg-transparent d-flex justify-content-between align-items-center mg-b-10-force "+Style.bottomBorderHeadingCard}>                
                        <h6 className="tx-gray-800 tx-uppercase tx-semibold tx-14 mg-b-0 card-title">Account Detiails</h6>
                        <a href="#" class="btn btn-dark btn-icon" data-toggle="modal" data-target="#modalaccount">
                            <div><i class="iocn ion-edit"></i></div>
                        </a>
                        {/* <a href="" class="btn btn-primary tx-11 tx-uppercase pd-y-12 pd-x-25 tx-spacing-2" data-toggle="modal" data-target="#modaldemo"><span className="fas fa-pen" /> Edit</a> */}
                    </div>{/* card-header */}
                    <div className="card-body1">
                        {accoundetails.length > 0 ? 
                        <>
                        <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Account Number</label>
                        <p className="tx-inverse mg-b-25">{accoundetails[0].account}</p>
                        <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">IFSC Code</label>
                        <p className="tx-inverse mg-b-25">{accoundetails[0].ifsc}</p>
                        <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Bank Name</label>
                        <p className="tx-inverse mg-b-25">{accoundetails[0].bank}</p>
                        <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Branch Address</label>
                        <p className="tx-inverse mg-b-25">{accoundetails[0].branch}</p>
                        <label className="tx-10 tx-uppercase tx-mont tx-medium tx-spacing-1 mg-b-2">Income Earned</label>
                        <p className="tx-inverse mg-b-25">&#x20B9; {(accoundetails[0].income)?accoundetails[0].income:'0.0'}</p>                    
                        </> 
                        :<div>No Information available</div>} 
                    </div>{/* card-body */}
                </div>
            </div>           
        </div>
    </div>        
    )   
    
    const accountFormModal = () => (
        <div id="modalaccount" className="modal fade effect-sign">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content tx-size-sm">
                    <div className="modal-header pd-x-20">
                        <h6 className="tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold">Update Account</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form onSubmit={submitHandler}>
                    <div className="modal-body pd-20">                        
                        <div className="form-layout">    
                            <div className="row">
                                <label className="col-sm-4 form-control-label">Account No: <span className="tx-danger">*</span></label>
                                <div className="col-sm-8 mg-t-10 mg-sm-t-0">
                                <input type="text" name="account" onChange={handleChange} value={account} className="form-control" placeholder="Enter Account No" required/>
                                </div>
                            </div>{/* row */}
                            <div className="row mg-t-20">
                                <label className="col-sm-4 form-control-label">IFSC Code: <span className="tx-danger">*</span></label>
                                <div className="col-sm-8 mg-t-10 mg-sm-t-0">
                                <input type="text" name="ifsc" onChange={handleChange} value={ifsc} className="form-control" placeholder="IFSC Code" required/>
                                </div>
                            </div>
                            <div className="row mg-t-20">
                                <label className="col-sm-4 form-control-label">Bank Name: <span className="tx-danger">*</span></label>
                                <div className="col-sm-8 mg-t-10 mg-sm-t-0">
                                <input type="text" name="bank" onChange={handleChange} value={bank} className="form-control" placeholder="Bank Name" required/>
                                </div>
                            </div>
                            <div className="row mg-t-20">
                                <label className="col-sm-4 form-control-label">Branch Name: <span className="tx-danger">*</span></label>
                                <div className="col-sm-8 mg-t-10 mg-sm-t-0">
                                <input type="text" name="branch" onChange={handleChange} value={branch} className="form-control" placeholder="Branch Name" required/>
                                </div>
                            </div>
                        </div>
                    </div>{/* modal-body */}
                    <div className="modal-footer">
                    {(userData.loadingaccount)?<>{showLoadingButton({text:'Updating Account please wait..', btnblock:'btn-block'})}</>:<button className="btn btn-info btn-block tx-size-xs">Save Changes</button>}
                        {/* <button type="button" className="btn btn-primary tx-size-xs">Save changes</button> */}
                        {/* <button type="button" className="btn btn-secondary tx-size-xs" data-dismiss="modal">Close</button> */}
                    </div>
                    </form>
                </div>
            </div>{/* modal-dialog */}
        </div>
    )
    return <>{accounts()}{accountFormModal()}</>
}

export {AccountDetails}