import React from 'react';
import {Link} from "react-scroll";
import "./topcontent.css";

const topcontent = () => {
  return (
    
    <div className='topcontent'>
          <div className='topcontent__container'>
            
            <h1>Mr.Gopinath Kandhasamy</h1>
            <p>A professional FRONTEND WEB DEVELOPER</p>
            <a href="https://drive.google.com/file/d/1KYyUlqvVWyEAn0CzoU8jFJtXl-ShN7d4/view?usp=sharing">
              <button className='topcontent__downloadbutton'>Download CV</button>
              </a>
            <Link to="Projects" smooth={true} duration={500}>
                <button className='topcontent__workbutton'>My Work</button>
            </Link>
          </div>
    </div>
  )
}

export default topcontent