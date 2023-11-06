import React, { Component } from "react";
import "../styles.css";
import hipernap_gif from "../img/hipernap.gif"

function Projects() {

    return (
        <div className="projects-parent">
                <p style={{paddingLeft: '0px'}} className="intro">
                My researach experience is mainly in precision mechatronic system design and flexure mechanisms - I enjoy all faacets of machine design including
                 mechanical design, electronic design, and control design. I also have brief experiences with battery modelling (also at the University of Michigan) 
                and microfluidics (at the University of Hong Kong).
                </p>

                <div className="project-item">
                    <img className="project-gif" src={hipernap_gif}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">high performance flexure-based nanopositioning system</h4>
                        <ul>
                            <li className="project-item-list">Self-written VHDL code for a Cyclone II FPGA to command phases of 50 ultrasonic transducers at &pi;/64 resolution, in addition to receiving 
                                phase commands from an ESP-8266 microcontroller over SPI.</li>
                            <li className="project-item-list">Arduino based C++ library to compute phases and facilitate communications between the FPGA and microcontroller.</li>
                            <li className="project-item-list">Custom PCB in drawn up in KiCAD and manufactured by Aisler; Hand soldered SMD components.</li>
                            <li className="project-item-list">Capable of displaying simple shapes such as [TO BE FIXED]</li>
                            <li className="project-item-list">Heavily inspired by "Acoustophoretic volumetric displays using a fast-moving levitated particle" by A. Marzio et al.</li>
                        </ul>
                    </div>
                </div>
        </div>
        
    )
}

export default Projects