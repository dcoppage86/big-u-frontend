import React from 'react'
import UserEntries from '../components/UserEntries'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 25px
`

const CardContainer = (props) => {
    return (
        <StyledContainer>
            <div className="Card-Container">
            <h3>Daily Entries</h3>
            <p>Keep track of your daily struggles and victories, no matter how big or small</p>
            <br></br>
            <UserEntries/>
            </div>
        </StyledContainer>
    )}


export default CardContainer;