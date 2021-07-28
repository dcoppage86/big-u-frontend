import React from 'react'
import BookCard from './BookCard'
import { connect } from 'react-redux'

const Library = ({ books }) => {
    console.log(books)
    const bookCards = books.map(b => <BookCard book={b} key={b.id}/>)
    console.log(bookCards)
    return (
        bookCards.length > 0 ? bookCards : null
    )
}

//  mapStateToProps to redux to get redux to provide the pieces of state to the component as props
const mapStateToProps = state => {
    return {
        books: state.allBooks
    }
}
export default connect(mapStateToProps)(Library)