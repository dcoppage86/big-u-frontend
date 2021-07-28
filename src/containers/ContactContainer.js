import React from 'react'
import Contact from '../components/Contact'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding: 100px;
    height: 700px;
    width: 700px;
    justify-content: centered;
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