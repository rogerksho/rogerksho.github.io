import React, { Component } from "react";
import "../styles.css";
import face from "../img/face_japan_cropped.png"

import resumepdf from '../resume/RogerResumeNov23.pdf'
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div className="header">

          <h1 className="name">Roger Ho</h1>
          <p style={{textAlign: 'center', paddingBottom: '1.5%'}}>rogerho [at] umich.edu | <a href="https://www.linkedin.com/in/roger-ho-576548199/">LinkedIn</a> | <a href="https://github.com/rogerksho">Github</a></p>
          <div class="flex-wrap" className="intro-div">

          <div className="face-resume">
            <img className="face" src={face}/>
                
                <a href={resumepdf} without rel="noopener noreferrer" target="_blank">
                    <button trailingIcon="picture_as_pdf" label="resume">
                    ⤓ resume
                    </button>
                </a>
          </div>


            <div className="intro-paragraph-div">
              <p className="intro">I am a recent graduate of the University of Michigan, 
              majoring in mechanical engineering and minoring in computer science. My passions and interests include precision machine design, electromagnetic actuators and sensors, and yummy food.
              </p>
              <p className="intro">
              I currently work at a stealth-mode surgical robotics startup
              as a mechatronics engineer. During my time at the university, I previously worked on the design and testing of a flexure-based high performance (large range, high speed, nanometric motion quality)
              nanopositioning stage (HIPERNAP) under Professor <a href="https://me.engin.umich.edu/people/faculty/shorya-awtar/">Shorya Awtar</a> at the <a href="https://psdl.engin.umich.edu/">
              Precision Systems Design Laboratory</a> at the University of Michigan.
              </p>
              </div>

          </div>

        </div>
    );
  }
  
  export default Header;