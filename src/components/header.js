import React, { Component } from "react";
import "../styles.css";
import face from "../img/face_japan_cropped.png"

import resumepdf from '../resume/RogerCVDec2023.pdf'
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
                    ⤓ CV
                    </button>
                </a>
          </div>


            <div className="intro-paragraph-div">
              <p className="intro">I am a recent graduate of the University of Michigan, 
              majoring in mechanical engineering and minoring in computer science. My passions and interests include precision machine design, 
              levitation/tweezers of all kinds (electromagnetic, optical, acoustic), and yummy food. In general, I like to build systems that 
              accomplish what a human cannot, i.e. move precisely and accurately, or suspend/levitate things in the air (jedi and sith don't count)
              </p>
              <p className="intro">
              I currently develop affordable robotic surgical devices at a stealth-mode startup
              as mechatronics lead. During my time at the university, I worked on the design and testing of a flexure-based high performance (large range, high speed, high precision and accuracy)
              nanopositioning system (HIPERNAP) under Professor <a href="https://me.engin.umich.edu/people/faculty/shorya-awtar/">Shorya Awtar</a> at the <a href="https://psdl.engin.umich.edu/">
              Precision Systems Design Laboratory</a> at the University of Michigan.
              </p>
              </div>

          </div>

        </div>
    );
  }
  
  export default Header;