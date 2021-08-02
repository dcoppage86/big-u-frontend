import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteBook } from '../actions/books'


const BookCard = ({ book, deleteBook }) => {
    const bookId = book ? book.id : null

    const handleClick = event => {
        console.log("this deletes the book")
        event.preventDefault()
        deleteBook(bookId)
    }
    return (
        <Card style={{ width: '8rem', boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
            <Card.Body>
                <Card.Img variant="top" src={book.attributes.image_url}/>
                <Card.Title>{book.attributes.book_title}</Card.Title>
                <Card.Text>{book.attributes.book_author}</Card.Text>
                <Card.Link href={book.attributes.book_url}>Find Here</Card.Link>
                <Button type="submit" className="btn btn-dark btn-sm btn-block" value="Delete" onClick={ handleClick }>Remove</Button>
            </Card.Body>
        </Card>


    )
}

export default connect(null, {deleteBook})(BookCard)