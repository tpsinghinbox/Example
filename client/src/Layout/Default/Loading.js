import React from "react";

export const showLoadingSpinner = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};


export const showLoadingButton = (props) =>(   
  <button className={"btn btn-info "+props.btnblock} type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  {props.text}
  </button> 
)

export const showLoadingButtonGrow = () => (
  <button className="btn btn-info" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
</button>
)

export const showLoadingGrow = ()=>(
  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>
)