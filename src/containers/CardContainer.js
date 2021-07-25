import React from 'react'
import UserEntries from '../components/UserEntries'
import { Container } from 'react-bootstrap';

const CardContainer = (props) => {
    return (
        <Container>
            <div className="MainContainer">
            <UserEntries/>
            </div>
        </Container>
    )}


export default CardContainer;