import React from 'react'
import { Card } from 'react-bootstrap'


const BookCard = ({ book }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={book.attributes.image_url}/>
                <Card.Title><h3>{book.attributes.title}</h3></Card.Title>
                <Card.Text><h4>{book.attributes.author}</h4></Card.Text>
                <Card.Link href={book.attributes.book_url}>Find Here</Card.Link>
            </Card.Body>
        </Card>


    )
}

export default BookCard