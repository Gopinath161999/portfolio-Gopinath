import React from 'react';
import { Link } from "react-scroll";
import "./header.css";

const header = () => {
  return (
    <div className="header">
     <div className='header__left'>
     <h1>Gopinath <span>K</span></h1>
     </div> 
     <div className='header__right'>
      <Link to="about" smooth={true} duriation={500}>
        <h4>About Me</h4>
      </Link>
      <Link to="skills" smooth={true} duriation={500}>
        <h4>skills</h4>
      </Link>
      <Link to="Projects" smooth={true} duriation={700}>
        <h4>Projects </h4>
      </Link>
      <Link to="Contact" smooth={true} duriation={500}>
        <h4>Contact</h4>
      </Link>
      <h4 className='header__rightbuttton'>Join with ME</h4>
     </div>
    </div>
  )
}

export default header