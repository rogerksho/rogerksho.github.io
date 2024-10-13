import React, { Component } from "react";
import "../styles.css";
import hipernap_gif from "../img/hipernap.gif"
import microfluidic from "../img/microfluidics.png"
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
                    <img className="project-gif" src={placeholder_pic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">high performance flexure-based nanopositioning system</h4>
                        <h6 className="project-item-title"><i>University of Michigan, Prof. Shorya Awtar</i></h6>
                        <ul>
                            <li className="project-item-list">Experimentally characterized a novel strucutral augmentation on flexure mechanisms that improves out-of-plane bearing stiffnesses while keeping in-plane actuation stiffnesses low.</li>
                            <li className="project-item-list">Designed a flexure-based XY nano-positioning system and carried the project through manufacturing,
                            assembly, and debugging, resulting in patents and publications under preparation</li>
                            <li className="project-item-list">Information is kept vague at this time prior to patents being filed.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={microfluidic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">triggered microfluidic capsule rupture for timed medication release</h4>
                        <h6 className="project-item-title"><i>The University of Hong Kong, Prof. Anderson Shum</i></h6>
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