import React, { Component } from "react";
import "../styles.css";
import ultrasonic_gif from "../img/ultrasonic.gif"
import chamber_pic from "../img/chamber.jpg"
import cloud_chamber_pic from "../img/cloud_chamber.png"
import btc_pic from "../img/Bitcoin.png"
import planter_pic from "../img/planter.png"
import voicecoil_gif from "../img/voicecoil.gif"
import placeholder_pic from "../img/placeholder.jpeg"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Projects() {
    const [open, setOpen] = useState(true);

    return (
        <div className="projects-parent">
                <p style={{paddingLeft: '0px'}} className="intro">
                My passions are driven by the desire to understand complex yet interesting systems and attempting to reconstruct
                them from scratch. Another interest of mine is automating processes and daily tasks, especially those
                involving growing food. I am also interested in making precision motion more accessible to people outside of industry and academia.
                </p>

                <div className="project-item">
                    <img className="project-gif" src={voicecoil_gif}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">high precision 3D printed voice coil actuator with integrated sensor [ONGOING]<text className="separator"></text></h4>
                        <ul>
                            <li className="project-item-list">Uses fully 3D printed frame components, as well as cheap fridge neodymium magnets</li>
                            <li className="project-item-list">Diaphragm flexure in parallel configuration to maximise bearing stiffnesses and minimize unwanted off-axis motions (only single diapgrahm shown)</li>
                            <li className="project-item-list">Integrated capacitive sensor for active feedback control in development.</li>
                            <li className="project-item-list">Capacitance probe driving/sensing circuitry in development..</li>
                            <li className="project-item-list">High precision current driver w/ DAC in development.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={placeholder_pic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">irrigator mk2<text className="separator"></text></h4>
                        <ul>
                            <li className="project-item-list">Raspberry Pi Pico and MicroPython based system to water my plants automatically 
                            (because I am forgetful and sometimes will not be home for extended periods of time).</li>
                            <li className="project-item-list">Moves a watering head (analagous to 3D printer print head) along a 
                            linear rail with a NEMA-17 stepper motor to water multiple plants selectively with a single pump </li>
                            <li className="project-item-list">Regulates soil moisture in a closed-loop manner with sensor readings from 10+ multiplexed capacitive sensors. </li>
                            <li className="project-item-list">Controls growlight based on daylight cycles.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={ultrasonic_gif}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">holographic acoustic tweezers (HAT)<text className="separator">|</text> <a href="https://github.com/rogerksho/acousticlevitator">github</a></h4>
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

                <div className="project-item">
                    <img className="project-gif" src={chamber_pic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">indoor gourmet mushroom fruiting chamber<text className="separator">|</text> <a href="">github</a></h4>
                        <ul>
                            <li className="project-item-list">Upcycled old rack transformed into an ESP-8266 SoC (System on Chip) based fruiting chamber.</li>
                            <li className="project-item-list">Chamber capable of maintaining humidity of up to 95% while minimizing harmful microorganism growth with UV-C irradiation.</li>
                            <li className="project-item-list">Driven by custom MicroPython based library to control the chamber, with PID regulation for humidity, as well as a
                            TCP connection between the ESP-8266 and a "base station" PC to routinely send humidity and temperature data.</li>
                            <li className="project-item-list">Has housed many gourmet and medicinal mushroom species such as pink oyster, golden oyster, lion's mane, shiitake, red reishi (lingzhi), pioppino.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={planter_pic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">irrigator mk1</h4>
                        <ul>
                            <li className="project-item-list">Automated irrigation for up to 9 flower pots on the windowsill, as well as timed high CRI LED grow lights.</li>
                            <li className="project-item-list">Arduino based periodic control of LED grow lights and irrigation pump.</li>
                            <li className="project-item-list">Simple tricks to overcome annoying head loss associated with cheap plastic pipe tees.</li>
                            <li className="project-item-list">Simple circuit with a boost converter and a transistor-driven relay to power the pump, relay, and the controller with a single voltage input.</li>
                            <li className="project-item-list">Monthly pesto!</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={btc_pic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">bitcoin price forecaster<text className="separator">|</text> <a href="https://github.com/rogerksho/crypto-social-model">github</a></h4>
                        <ul>
                            <li className="project-item-list">Developed a Bitcoin price forecaster by using different regression methods from scikit-learn (Python) 
                                on data generated using VADER sentiment analysis on Tweets and Google search frequency, trained on self-scraped tweets.</li>
                            <li className="project-item-list">Encapsulated predictor in a lightweight Docker Image to run on AWS EC2 and used Flask to build a rudimentary API, exposing API endpoints to provide predictions whenever pinged.</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-gif" src={cloud_chamber_pic}/>
                    <div className="project-item-content">
                        <h4 className="project-item-title">peltier-cooled cloud chamber</h4>
                        <ul>
                            <li className="project-item-list">Upcycled old wine crate into main chassis of cloud chamber.</li>
                            <li className="project-item-list">Custom built water cooling solution for cascaded peltiers to maximise temperature differential and cooling. </li>
                            <li className="project-item-list">Arduino based LCD panel for displaying cooling plate temperature.</li>
                            <li className="project-item-list">Reached low temperature down to -20 ˚C. </li>
                        </ul>
                    </div>
                </div>
        </div>
        
    )
}

export default Projects