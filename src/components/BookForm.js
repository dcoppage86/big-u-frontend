import React from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateBookForm } from '../actions/bookEntryForm'
import { Button } from 'react-bootstrap'

const BookForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Button type="submit" className="btn btn-dark btn-lg btn-block" value="Add Book">Add Book</Button>
        </Form>
    )
}

export default BookForm