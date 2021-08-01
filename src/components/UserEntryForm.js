import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { updateEntryForm } from '../actions/userEntryForm';
import { newEntry } from '../actions/userEntries';
import { Button } from 'react-bootstrap';


const EntryForm = ({ formData, updateEntryForm, newEntry, userId }) => {

    const {title, content} = formData

    const handleInputChange = event => {
        const {name, value} = event.target
        updateEntryForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        newEntry(formData)
    }

    return(
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={ handleInputChange } value={title} placeholder="Enter your title..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} onChange={ handleInputChange } value={content} placeholder="Enter your Content" />
            </Form.Group>
            <Button type="submit" className="btn btn-dark btn-lg btn-block" value="Create Entry">Create Entry</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.userEntryForm,
        userId
    }
}
export default connect(mapStateToProps, { updateEntryForm, newEntry })(EntryForm);