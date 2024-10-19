import React, { Component } from "react";
import "../styles.css";
import face from "../img/toronto_face_cropped.JPG"

import resumepdf from '../resume/Roger_Ho_CV_Oct_2024.pdf'
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
              <p className="intro">I am a recent graduate of the University of Michigan, where I
              majored in Mechanical Engineering and minored in Computer Science. My passions and interests revolve around all things precision, including precision machine design, 
              levitators/tweezers, precise manipulators, and just about any shiny metallic thing that is highly precise and/or accurate. In general, I like to work on technologies that 
              that have societally relevant, immediate, practical applications.
              </p>
              <p className="intro">
              I currently work full-time as a Design Engineer at a stealth-mode robotics startup. During my time at the university, I mainly worked on the design and testing of a flexure-based high-performance (large range, high speed, high precision and accuracy)
              nanopositioning system (HIPERNAP) under Professor <a href="https://me.engin.umich.edu/people/faculty/shorya-awtar/">Shorya Awtar</a> at the <a href="https://psdl.engin.umich.edu/">
              Precision Systems Design Laboratory</a>.
              </p>
              </div>

          </div>

        </div>
    );
  }
  
  export default Header;