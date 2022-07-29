import React, { Component } from "react";
import "../styles.css";
import face from "../img/face.jpg"

function Header() {
    return (
        <div className="header">
          <h1 className="name">Roger Ho</h1>
          <div className="intro-div">
            <div className="intro-paragraph-div">
            <p className="intro">I am a rising senior (undergraduate) at the University of Michigan, 
            majoring in mechanical engineering and minoring in computer science. With experience in both 
            software and hardware, I aim to develop a well rounded skillset to realize sophisticated mechatronic systems.
            </p>
            <p className="intro">
            One of my interests include understanding complex yet interesting systems and attempting to reconstruct
            them from ground up. Another interest of mine is automating processes and daily tasks, especially those
            involving growing food. See below section "Projects".
            </p>
            <p className="intro">
            I am currently working on the design of a high performance (large range, high speed, nanometric motion quality)
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