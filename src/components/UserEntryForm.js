import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { updateEntryForm } from '../actions/userEntryForm';
import { newEntry } from '../actions/userEntryForm';
import { Button } from 'react-bootstrap';


const EntryForm = ({ entryFormData, updateEntryForm, newEntry }) => {

    const handleInputChange = event => {
        const {name, value} = event.target
        const updateEntryInfo = {
            ...entryFormData,
            [name]: value
        }
        updateEntryForm(updateEntryInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        newEntry(entryFormData)
    }

    return(
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={ handleInputChange } value={entryFormData.title} placeholder="Enter your title..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} onChange={ handleInputChange } value={entryFormData.content} placeholder="Enter your Content" />
            </Form.Group>
            <Button type="submit" className="btn btn-dark btn-lg btn-block" value="Create Entry">Create Entry</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        entryFormData: state.userEntryForm
    }
}
export default connect(mapStateToProps, { updateEntryForm, newEntry})(EntryForm);