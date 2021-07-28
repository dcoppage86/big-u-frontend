export const setBooks = books => {
    return {
        type: "SET_BOOKS",
        books
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