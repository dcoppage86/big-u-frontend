import React from 'react'
import Contact from '../components/Contact'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 10%;
    padding-bottom: 10%
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