import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const StyledContainer = styled(Container)`
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    justify-content: space-evenly
    
`

const BookCard = ({ book }) => {
    return (
        <StyledContainer>
        <Card>
            <Card.Body>
                <Card.Title>{book.attributes.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Card.Link href="#">Delete</Card.Link>
                <Card.Link href="#">Edit</Card.Link>
            </Card.Body>
        </Card>
        </StyledContainer>


    )
}

export default BookCard