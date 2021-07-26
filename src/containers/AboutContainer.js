import React from 'react'
import About from '../components/About'
import { Container } from 'react-bootstrap';

const AboutContainer = (props) => {
    return (
        <Container>
            <div className="about-Container">
            <About />
            </div>
        </Container>
    )}


export default AboutContainer;