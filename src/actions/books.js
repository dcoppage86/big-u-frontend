import { updateBookForm, resetBookForm } from "./bookEntryForm"

export const setBooks = books => {
    return {
        type: "SET_BOOKS",
        books
    }
}

export const addBook = book => {
    return {
        type: "ADD_BOOK",
        book
    }
}

export const removeBook = bookId => {
    return {
        type: "DELETE_BOOK",
        bookId
    }
}

export const getBooks = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/books", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log(response.data)
                dispatch(setBooks(response.data))
            }
        })
        .catch(console.log)
    }
}

export const newBook = (bookData) => {
    return dispatch => {
        const sendBookData = {
            book_title: bookData.book_title,
            book_author: bookData.book_author,
            image_url: bookData.image_url,
            book_url: bookData.book_url,
            user_id: bookData.userId
        }
        return fetch("http://localhost:3001/api/v1/books", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendBookData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addBook(response.data))
                setBooks(response.data)
                dispatch(updateBookForm(response))
                dispatch(resetBookForm())
            }
        })
        .catch(console.log)
    }
}

export const deleteBook = (bookId) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/books/${bookId}`, {
            credentials: "include",
            method: "DELETE"

        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(removeBook(bookId))
            }
        })
    }
}