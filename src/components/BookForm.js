import React from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateBookForm } from '../actions/bookEntryForm'
import { Button } from 'react-bootstrap'

const BookForm = ({bookFormData, updateBookForm}) => {

    const {book_title, book_author, image_url, book_url} = bookFormData

    const handleInputChange = event => {
        const {name, value} = event.target
        updateBookForm(name, value)
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="book_title" onChange={ handleInputChange } value={book_title} placeholder="Enter book title..." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Book Image</Form.Label>
                <Form.Control/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Book Url</Form.Label>
                <Form.Control/>
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
        categories: state.categories,
        userId
    }
}

export default connect(mapStateToProps, { updateBookForm })(BookForm)