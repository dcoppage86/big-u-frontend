import React from 'react'
import { Card } from 'react-bootstrap'

const EntryCard = ({ daily_entry }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{daily_entry.attributes.title}</Card.Title>
                <Card.Text>
                    {daily_entry.attributes.content}
                </Card.Text>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default EntryCard
