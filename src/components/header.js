import React, { Component } from "react";
import "../styles.css";
import face from "../img/face.jpg"

function Header() {
    return (
        <div className="header">
          <h1 className="name">Roger Ho</h1>
          <p style={{textAlign: 'center', paddingBottom: '1.5%'}}>rogerho [at] umich.edu | <a href="https://www.linkedin.com/in/roger-ho-576548199/">LinkedIn</a> | <a href="https://github.com/rogerksho">Github</a></p>
          <div className="intro-div">
            <div className="intro-paragraph-div">
            <p className="intro">I am a senior (undergraduate) at the University of Michigan, 
            majoring in mechanical engineering and minoring in computer science. With experience in both 
            software and hardware, I aim to develop a well rounded skillset to realize sophisticated mechatronic systems.
            </p>
            <p className="intro">
            I am currently working on the design and testing of a flexure-based high performance (large range, high speed, nanometric motion quality)
            nanopositioning stage (HIPERNAP) under Professor <a href="https://me.engin.umich.edu/people/faculty/shorya-awtar/">Shorya Awtar</a> at the <a href="https://psdl.engin.umich.edu/">
            Precision Systems Design Laboratory</a> here at the University of Michigan.
            </p>
            </div>

            <img className="face" src={face}/>
          </div>

        </div>
    );
  }
  
  export default Header;