import React from "react";
import {Link} from "react-router-dom"
import './Footer.css'
export const Footer = () => {

  
  return (
    <footer className="main-footer" style={{marginLeft:0}}>
      <div className="float-right d-none d-sm-inline">We Will write this later</div>
      <strong>
        Copyright &copy; 2020-2021 <Link to="http://localhost">SeEngr</Link>
        .
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};