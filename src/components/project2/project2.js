import React from 'react';
import {Element} from "react-scroll";
import "./project2.css";
import projectimg from "../../project img/kmg.PNG";
import projectimg2 from "../../project img/tnshop.PNG";
import projectimg3 from "../../project img/mytrafr.PNG";

const projects = () => {
  return (
    
    <Element className='projectcontainer' id="Projects">
       <div className='project__title'>
       
        <h2>Projects</h2>
        
        <h6>There are some projects i made using <span>FRONTEND DEVELOPMENT</span> tools like <br></br><br></br>JavaScript,React,Bootstrap,HTML/CSS</h6>
       </div>
        <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={projectimg} alt="imag"/>
                    <h3>KMG CAFE</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Description : This project based on demo client requirement. Any customer can 
                choose their table by booking at online. And also, online delivery available 
                at your home. My contribution is creating a website to user friendly and 
                responsive to use users. And use multicolor combination to create and user 
                attraction on this project. This project completed to best of my knowledge 
                and skills.</p>
                    
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={projectimg2} alt="imag"/>
                    <h3>TN Shop</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Description : This project based on e-commerce website to create myself. A 
                       website that allows people to buy and sell physical goods and services, and 
                       digital products over the internet rather than any location. Through an ecommerce website, a business can process orders, accept payments, 
                       manage shipping and provide customer service. This project process on 
                       going.
                       </p>
                    
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={projectimg3} alt="imag"/>
                    <h3>MyTrade</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Description : This is tradingview clone website. This project based on online paper trading website to use buy and sell
                     the stock in realtime market at demo trading. To experience how market
                     works and global market report. Its reduce real time market fairness. This 
                     website uses to user friendly and responsive web design. This project
                     completed ahead of time schedule.
                     </p>
                    
                </div>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={projectimg} alt="imag"/>
                    <h3>KMG CAFE</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Description : This project based on demo client requirement. Any customer can 
                choose their table by booking at online. And also, online delivery available 
                at your home. My contribution is creating a website to user friendly and 
                responsive to use users. And use multicolor combination to create and user 
                attraction on this project. This project completed to best of my knowledge 
                and skills.</p>
                    
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={projectimg2} alt="imag"/>
                    <h3>TN Shop</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Description : This project based on e-commerce website to create myself. A 
                      website that allows people to buy and sell physical goods and services, and 
                      digital products over the internet rather than any location. Through an ecommerce website, a business can process orders, accept payments, 
                      manage shipping and provide customer service. This project process on 
                      going.
                      </p>
                    
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={projectimg3} alt="imag"/>
                    <h3>MyTrade</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Description : This project based on online paper tradingwebsite tousebuy and sell
                      the stock in realtime market at demo trading. To experience how market
                      works and global market report. Its reduce real time market fairness. This 
                      website uses to user friendly and responsive web design. This project
                      completed ahead of time schedule.
                      </p>
                    
                </div>
            </div>
        </div>
    </div>


    </Element>
    
  )
}

export default projects