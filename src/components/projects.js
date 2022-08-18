import React, { Component } from "react";
import "../styles.css";
import ultrasonic_gif from "../img/ultrasonic.gif"
import chamber_pic from "../img/chamber.jpg"

function Projects() {
    return (
        <div className="projects-parent">
            <h1 style={{padding: '2px'}}>Projects</h1>
            <p style={{paddingLeft: '0px'}} className="intro">
            One of my interests include understanding complex yet interesting systems and attempting to reconstruct
            them from ground up. Another interest of mine is automating processes and daily tasks, especially those
            involving growing food.
            </p>
            <div className="project-item">
                <img className="project-gif" src={ultrasonic_gif}/>
                <div className="project-item-content">
                    <h4 className="project-item-title">3D Display with holographic acoustic tweezers (HAT)<text className="separator">|</text> <a href="">Github</a></h4>
                    <ul>
                        <li className="project-item-list">Wrote Verilog HDL code Cylcone II FPGA to command phases of 50 ultrasonic transducers at &pi;/64 resolution, in addition to receiving 
                            phase commands with ESP-8266 microcontroller over SPI.</li>
                        <li className="project-item-list">Built an Arduino based C++ library to facilitate phase calculations and communications between the FPGA and microcontroller.</li>
                        <li className="project-item-list">Designed custom PCB in KiCAD and had it manufactured; Hand soldered SMD components </li>
                        <li className="project-item-list">Heavily inspired by "Acoustophoretic volumetric displays using a fast-moving levitated particle" by A. Marzio et al.</li>
                    </ul>
                </div>
            </div>

            <div className="project-item">
                <img className="project-gif" src={chamber_pic}/>
                <div className="project-item-content">
                    <h4 className="project-item-title">Indoor gourmet mushroom fruiting chamber<text className="separator">|</text> <a href="">Github</a></h4>
                    <ul>
                        <li className="project-item-list">Upcycled old rack into an ESP8266 SoC (System on Chip) based fruiting chamber.</li>
                        <li className="project-item-list">Designed and fabricated chamber to contain humidity of up to 90% while minimizing harmful microorganism growth.</li>
                        <li className="project-item-list"></li>
                        <li className="project-item-list">Developed a MicroPython based library to control the chamber, implementing PID regulation for humidity and 
                        establishing a TCP connection between the ESP8266 and a "base station" PC to routinely send humidity and temperature data.</li>
                    </ul>
                </div>
            </div>

            <div className="project-item">
                <img className="project-gif" src={chamber_pic}/>
                <div className="project-item-content">
                    <h4 className="project-item-title">Automated windowsill herb planter<text className="separator">|</text> <a href="">Github</a></h4>
                    <ul>
                        <li className="project-item-list">Upcycled old rack into an ESP8266 SoC (System on Chip) based fruiting chamber.</li>
                        <li className="project-item-list">Designed simple circuit with a boost converter and a transistor-driven relay to control a pump off a single voltage input.</li>
                        <li className="project-item-list">Developed a MicroPython based library to control the chamber, implementing PID regulation for humidity and 
                        establishing a TCP connection between the ESP8266 and a "base station" PC to routinely send humidity and temperature data.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects