import React from 'react'
import SignUp from '../components/SignUp';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding: 100px;
    height: 500px;
    width: 500px;
    justify-content: centered;
    `


const SignupContainer = (props) => {
    return (
        <StyledContainer>
            <div className="signup-container">
            <SignUp/>
            </div>
        </StyledContainer>
    )}


export default SignupContainer;