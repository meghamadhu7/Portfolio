import React from 'react';
import logo from '../assets/images/logo.svg';

import navIcon4 from '../assets/images/nav-icon4.svg';
import navIcon6 from '../assets/images/nav-icon6.svg';


function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg scrolled" style={{backgroundColor:'gray',color:'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="Broken image"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar navbar-expand-lg ms-auto">
        <li className="container-fluid">
          <a className="nav-link" aria-current="page" href="#home" title='Home' >Home</a>
        </li>
        <li className="container-fluid">
          <a className="nav-link" href="#skills" title='Skills' >Skills</a>
        </li>
        <li className="container-fluid">
          <a className="nav-link"  href="#projects" title='Projects' >Projects</a>
        </li>
      </ul>
     <span className="navbar-text">
        <div className='social-icon'>
           
            <a href="https://github.com/meghamadhu7" title='GitHub'><img src={navIcon6} alt="Broken Image"/></a>
            {/* <a href="https://www.instagram.com/__.megha_madhavan.__/"><img src={navIcon3} alt="Broken Image"/></a> */}
            <a href="mmeghag3@gmail.com" title='Email'><img src={navIcon4} alt="Broken Image"/></a>
        </div>
        <br />
     </span>
     <a className='btn1' style={{marginLeft:'20px',marginBottom:'15px',fontWeight:'bolder'}} href='#connect'><span className='btn2'>Let's Connect</span></a>
    </div>
  </div>
</nav>
    </div>

  )
}

export default Navbar