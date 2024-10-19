import React, { Component } from "react";
import "../styles.css";
import hipernap_gif from "../img/KLA_Logo.jpg"
import microfluidic from "../img/microfluidics.png"
import battery from "../img/battery.png"
import placeholder_pic from "../img/placeholder.jpeg"

function Projects() {

    return (
        <div className="projects-parent">
                <p style={{paddingLeft: '0px'}} className="intro">
                My research experience is mainly in precision mechatronic system design and flexure mechanisms - I enjoy all facets of machine design including
                 mechanical design, electronic design, and control design. I also have brief experiences with battery research (also at the University of Michigan) 
                and microfluidics (at the University of Hong Kong).
                </p>

                <div className="project-item">
                    <img className="project-gif-fitted" src={hipernap_gif}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">high performance flexure-based nanopositioning system</h4>
                        <h6 className="project-item-title"><i>University of Michigan (partnered with KLA), Prof. Shorya Awtar, Dr. Siddarth Rath, 2022-2023</i></h6>
                        <ul>
                            <li className="project-item-list">Experimentally characterized a novel augmentation on flexure mechanisms that improves out-of-plane bearing stiffnesses while keeping in-plane actuation stiffnesses low.</li>
                            <li className="project-item-list">Collaborated with a PhD student to realize the augmentation in a full-scale XY nano-positioning system and carried the project through design, manufacturing, and early-stage testing,
                            assembly, and debugging, resulting in (pending) patents and publications under review/preparation.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif-fitted" src={battery}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">fast formation cycling for lithium ion batteries</h4>
                        <h6 className="project-item-title"><i>University of Michigan, Prof. Anna Stefanopoulou, Dr. Andrew Weng, 2021-2022</i></h6>
                        <ul>
                            <li className="project-item-list">Investigated effects of fast formation on lithium ion battery lifetime and electrochemistry.</li>
                            <li className="project-item-list">Analyzed large amounts of data from tests such as hybrid pulse power characterization (HPPC) and constant discharge.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={microfluidic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">triggered microfluidic capsule rupture for timed medication release</h4>
                        <h6 className="project-item-title"><i>The University of Hong Kong, Prof. Anderson Shum, 2018</i></h6>
                        <ul>
                            <li className="project-item-list">Conducted individual investigation on the structural strength of an Aqueous Two Phase System (ATPS)
                            capsule created with microfluidics and microparticles with the possible application of timed medication
                            release triggered by capsule rupture from high voltage electric fields and Couette flow.</li>
                            <li className="project-item-list">Assisted and collaborated with graduate students in investigating the application of microfluidics in ATPS.</li>
                        </ul>
                    </div>
                </div>
        </div>
        
    )
}

export default Projects