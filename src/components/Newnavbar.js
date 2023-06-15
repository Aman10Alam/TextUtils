import React from 'react'
import PropTypes from 'prop-types'
export default function Newnavbar(props) {
  return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Types oF Mode
          </a>
          <ul className="dropdown-menu">
            <li>
                <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
                </div>
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li>
                <div className={`form-check form-switch text-${props.mode=='light'?'grey':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Grey Mode</label>
                </div>
            </li>
          </ul>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}
