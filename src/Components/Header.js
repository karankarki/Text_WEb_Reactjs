import React from 'react';
import {Link} from "react-router-dom"


export default function Header(props) {

  return (
    // navbar

    <>
<nav className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TExtcHNG</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-4 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">{props.H}</Link>
         
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/about">{props.A}</Link>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled">Contact_us</a>
        </li>
        
      </ul>
      <form className="d-flex ">
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.Chan} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`text-${props.mod==="dark"?"light":"dark"} form-check-label`} htmlFor="flexSwitchCheckDefault">Select MOde </label>
</div>
  
      </form>

    </div>
  </div>
</nav>
    </>
  )
}
// console.log(" header hello world!\n");