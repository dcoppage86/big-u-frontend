const initialState = []

const allBooks = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return action.books
        case "ADD_BOOK":
            return state.concat(action.book)
        case "DELETE_BOOK":
            return state.filter(book => book.id === action.bookId ? false : true)
        default:
            return state
    }
}

export default allBooks