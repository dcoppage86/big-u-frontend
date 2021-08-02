import React from 'react'
import { Card } from 'react-bootstrap'


const BookCard = ({ book }) => {
    return (
        <Card style={{ width: '8rem', boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
            <Card.Body>
                <Card.Img variant="top" src={book.attributes.image_url}/>
                <Card.Title>{book.attributes.book_title}</Card.Title>
                <Card.Text>{book.attributes.book_author}</Card.Text>
                <Card.Link href={book.attributes.book_url}>Find Here</Card.Link>
            </Card.Body>
        </Card>


    )
}

export default BookCard