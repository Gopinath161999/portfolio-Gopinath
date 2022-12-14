import React from 'react';
import { Element } from 'react-scroll';
import "./footercontent.css";
import img1 from '../../icon/fb2.png';
import img2 from "../../icon/download.png";
import img3 from "../../icon/wapp.png";
import img4 from "../../icon/git.png";
import img5 from "../../icon/codepen.png";
import img6 from "../../icon/in.png";

const footercontent = () => {
  return (
    <Element className='footercontiner' id='Contact'>
      <div className='footer__content'> 
        <h1>Contact</h1>
        <div className='footer__text'>
           <input type="name" placeholder='If you what anything text ME'></input>
           <br></br>
           <button>Message ME</button>
        </div>
      </div>
      <div className='footer__text2'>
        <hr></hr>
        <footer>
          <h1>Gopinath K</h1>
          <h5>1/138 Anna Nagar Street,<br>
          </br>Manmalai Palakkadu (PO),<br></br>
          Gengavalli (TK), Salem (DT),<br></br>
          Pincode-636 110.
          </h5>
          <div className='footer__img'>
          <a href='https://www.facebook.com/GosopiNath?mibextid=ZbWKwL'>
            <img src={img1} alt="fb"></img>
          </a>
          <a href='https://instagram.com/g_o_so_p_i_n_a_t_h?igshid=ZmVmZTY5ZGE='>
            <img src={img2} alt="fb"></img>
          </a>
          <a href='6374846404'>
            <img src={img3} alt="fb"></img>
          </a>
          <a href='https://github.com/Gopinath161999'>
            <img src={img4} alt="fb"></img>
          </a>
          <a href='https://codepen.io/Gopinath161999'>
            <img src={img5} alt="fb"></img>
          </a>
          <a href='https://www.linkedin.com/in/k-gopinath-be-653b4a247/'>
            <img src={img6} alt="fb"></img>
          </a>
          </div>
          <p>All rights to be recived &#64; 2022  / copyrignt &#169;  2022
             <br></br>(*Terms and conditions apply)
          </p>
        </footer>
        
      </div>
    </Element>
  )
}

export default footercontent