import React from 'react'

const EntryCard = ({ daily_entry }) => {
    return (
        <p>{daily_entry.attributes.title}</p>

    )
}

export default EntryCard
