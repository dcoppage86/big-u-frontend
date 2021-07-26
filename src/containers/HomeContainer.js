import React from 'react'
import HomePage from '../components/HomePage';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 25px
`

const HomeContainer = (props) => {
    return (
        <StyledContainer>
            <div className="home-page-container">
            <HomePage/>
            </div>
        </StyledContainer>
    )}


export default HomeContainer;