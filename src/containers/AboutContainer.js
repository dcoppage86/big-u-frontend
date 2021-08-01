import React from 'react'
import About from '../components/About'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 10%;
    padding-bottom: 10%
`

const AboutContainer = (props) => {
    return (
        <StyledContainer>
            <div className="about-Container">
            <About />
            </div>
        </StyledContainer>
    )}


export default AboutContainer;