import React from 'react'
import UserEntries from '../components/UserEntries'
import { Container } from 'react-bootstrap';


const CardContainer = (props) => {
    return (
        <Container>
            <div className="Card-Container">
            <h3>Daily Entries</h3>
            <p>Keep track of your daily struggles and victories, no matter how big or small</p>
            <br></br>
            <UserEntries/>
            </div>
        </Container>
    )}


export default CardContainer;