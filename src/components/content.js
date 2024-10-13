import React, { Component } from "react";
import "../styles.css";

import Projects from './projects'
import Patents from './patents'
import ResearchProjects from './researchprojects'
import Publications from './publications'
import Food from './food'

import Accordion from 'react-bootstrap/Accordion';

import './accordion_custom.css';

function Content() {

    return (
        <div className="projects-parent">
            <Accordion defaultActiveKey={['1']} alwaysOpen>


            <Accordion.Item eventKey="1">
            <Accordion.Header>research</Accordion.Header>
                <Accordion.Body>
                    <ResearchProjects/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
            <Accordion.Header>projects</Accordion.Header>
            <Accordion.Body>
                <Projects/>
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>inventions</Accordion.Header>
                <Accordion.Body>
                    <Patents/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>publications</Accordion.Header>
                <Accordion.Body>
                    <Publications/>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
                <Accordion.Header>food</Accordion.Header>
                <Accordion.Body>
                    <Food />
                </Accordion.Body>
            </Accordion.Item>
            
            </Accordion>
        </div>
        
    )
}

export default Content