import React from "react";


export const ShowErrorMsg = (Msgs) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {Msgs}
      </div>
    </div>
  );
};

export const ShowSuccessMsg = (Msgs) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {Msgs}
      </div>
    </div>
  );
};


