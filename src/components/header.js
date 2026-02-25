import React, { Component } from "react";
import "../styles.css";
import face from "../img/toronto_face_cropped.JPG"

import resumepdf from '../resume/RogerHoCV.pdf'
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div className="header">

          <h1 className="name">Roger Ho</h1>
          <p style={{textAlign: 'center', paddingBottom: '1.5%'}}>rogerho [at] andrew.cmu.edu | <a href="https://www.linkedin.com/in/roger-ho-576548199/">LinkedIn</a> | <a href="https://github.com/rogerksho">Github</a></p>
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
              <p className="intro">I am currently a PhD student at Carnegie Mellon University doing research in the Surgical Mechatronics Lab of the Robotics Institute (RI) under Prof. Cameron Riviere. 
                While much of ongoing research in robotics aims to replicate human performance, I aim to design robots that exceed human performance in terms of precision and 
                optimality. My research interests broadly include optimal control, active learning, and (autonomous) precise manipulation of small, compliant objects.
              </p>

              <p className="intro">
              Previously, I did my undergrad at the University of Michigan where I majoring in mechanical engineering and minoring in computer science. During my time at UMich, I also 
              worked on the design and testing of a flexure-based high performance (large range, high speed, high precision and accuracy) nanopositioning system (HIPERNAP) under  
              Professor <a href="https://me.engin.umich.edu/people/faculty/shorya-awtar/">Shorya Awtar</a> at the <a href="https://psdl.engin.umich.edu/">
              Precision Systems Design Laboratory</a>.
              </p>

              <p className="intro">
                Between my undergrad and PhD, I also spent two years developing affordable robotic surgical devices at a stealth-mode startup as mechatronics lead.
              </p>
              </div>

          </div>

        </div>
    );
  }
  
  export default Header;