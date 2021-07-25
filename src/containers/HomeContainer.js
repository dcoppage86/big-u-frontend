import React from 'react'
import HomePage from '../components/HomePage';
import { Container } from 'react-bootstrap';

const HomeContainer = (props) => {
    return (
        <Container>
            <div className="home-page-container">
            <HomePage/>
            </div>
        </Container>
    )}


export default HomeContainer;