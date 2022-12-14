import React from 'react';
import {Element} from "react-scroll";
import skillimg from "../../ME/leptop.jpg";
import "./skillcontainer.css";

const skillcontainer = () => {
  return (
    <Element className='skillcontainer' id="skills">
     <div className='skillcontainer__image'>
        <img src={skillimg} alt="" />
     </div> 
     <div className='skillcontainer__text'>
        <h2>SKILLSET</h2>
        
        <div className='skillcontainer__skillset'>
          <h5>HTML/CSS</h5>
          <div className='skillcontainer__slider skillcontainer__slider1'>
           90%
           <hr></hr>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>JavaScript</h5>
          <div className='skillcontainer__slider skillcontainer__slider2'>
           80%
           <hr></hr>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>Bootstrap</h5>
          <div className='skillcontainer__slider skillcontainer__slider3'>
           70%
           <hr></hr>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>React JS</h5>
          <div className='skillcontainer__slider skillcontainer__slider4'>
           65%
           <hr></hr>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>Git/GitHub</h5>
          <div className='skillcontainer__slider skillcontainer__slider5'>
           60%
           <hr></hr>
          </div>
        </div>
     </div>
    </Element>
  )
}

export default skillcontainer