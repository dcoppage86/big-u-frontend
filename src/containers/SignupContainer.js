import React from 'react'
import SignUp from '../components/SignUp';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 10%;
    padding-bottom: 10%
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