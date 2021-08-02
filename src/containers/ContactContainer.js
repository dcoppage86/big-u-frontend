import React from 'react'
import Contact from '../components/Contact'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 5%;
    padding-bottom: 5%
`


const ContactContainer = (props) => {
    return (
        <StyledContainer>
            <div className="contact-Container">
            <Contact />
            </div>
        </StyledContainer>
    )}


export default ContactContainer;