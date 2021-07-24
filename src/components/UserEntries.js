import React from 'react'
import EntryCard from './EntryCard'
import { connect } from 'react-redux'

const UserEntries = props => {
    const entryCards = props.entries.map(ec => <EntryCard daily_entry={ec} key={ec.id}/>)
    return (
        entryCards.length > 0 ? entryCards : null
    )
}

//  mapStateToProps to redux to get redux to provide the pieces of state to the component as props
const mapStateToProps = state => {
    return {
        entries: state.userEntries
    }
}
export default connect(mapStateToProps)(UserEntries)