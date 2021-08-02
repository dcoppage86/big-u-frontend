import React from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateBookForm } from '../actions/bookEntryForm'
import { newBook } from '../actions/books'
import { Button } from 'react-bootstrap'

const BookForm = ({bookFormData, updateBookForm, newBook}) => {

    const {book_title, book_author, image_url, book_url} = bookFormData

    const handleInputChange = event => {
        const {name, value} = event.target
        updateBookForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        newBook(bookFormData)
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="book_title" onChange={ handleInputChange } value={book_title} placeholder="Enter book title..." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="book_author" onChange={ handleInputChange } value={book_author} placeholder="Enter book author..."/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Book Image</Form.Label>
                <Form.Control type="text" name="image_url" onChange={ handleInputChange } value={image_url} placeholder="Enter book image..."/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Book Url</Form.Label>
                <Form.Control type="text" name="book_url" onChange={ handleInputChange } value={book_url} placeholder="Where to buy...?"/>
            </Form.Group>
            <br></br>
            <Button type="submit" className="btn btn-dark btn-lg btn-block" value="Add Book">Add Book</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        bookFormData: state.bookEntryForm,
        userId
    }
}

export default connect(mapStateToProps, { updateBookForm, newBook })(BookForm)