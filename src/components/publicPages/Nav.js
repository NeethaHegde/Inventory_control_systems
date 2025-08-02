import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#223843",height:"8.5vh"}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" style={{ paddingLeft: "20px"}} href="#">Team 7</a>
        <div className="position-absolute start-50 translate-middle-x d-flex gap-4" style={{fontSize:"18px"}}>
          <a href="#" className="nav-link text-white">Features</a>
          <a href="#" className="nav-link text-white">Pricing</a>
          <a href="#" className="nav-link text-white">Resources</a>
          <a href="#" className="nav-link text-white">Contact</a>
        </div>
        <div className="d-flex gap-3">
          <Link to ="Register" className="nav-link text-white" style={{fontSize: "18px"}}>Register</Link>
          <Link to ="Login" className="nav-link text-white" style={{fontSize: "18px"}}>Login</Link>
          <button className="btn btn-light">Get Started</button>
        </div>
      </div>
    </nav>
  );
}


export default Nav;
