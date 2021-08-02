import React from 'react'
import UserEntries from '../components/UserEntries'
import { Container } from 'react-bootstrap';

import UserEntryForm from '../components/UserEntryForm'
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 5%;
    padding-bottom: 5%
`

const StyledDiv2 = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const StyledDiv1 = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: auto;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
`

const CardContainer = () => {
    return (
        <StyledContainer>
            <StyledDiv1 className="Card-Container">
                <div className="header-div">
                    <h3>Daily Entries</h3>
                    <p>Keep track of your daily struggles and victories, no matter how big or small</p>
                </div>
                <div>
                    <h4>New Entry Here</h4>
                    <UserEntryForm/>
                </div>
                <br></br>
                <StyledDiv2 className="Entry-Card-Container">
                    <UserEntries/>
                </StyledDiv2>
            </StyledDiv1>
        </StyledContainer>
    )}

export default CardContainer
