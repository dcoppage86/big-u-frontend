import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/userEntries'

const EntryCard = ({ daily_entry, deleteEntry }) => {
    const entryId = daily_entry ? daily_entry.id : null

    const handleClick = event => {
        console.log(deleteEntry)
        event.preventDefault()
        deleteEntry(entryId)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{daily_entry.attributes.title}</Card.Title>
                <Card.Text>
                    {daily_entry.attributes.content}
                </Card.Text>
                <Button type="submit" className="btn btn-dark btn-lg btn-block" value="Delete" onClick={ handleClick }>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default connect(null, { deleteEntry })(EntryCard)
