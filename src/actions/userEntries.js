export const setUserEntries = entries => {
    return {
        type: "SET_USER_ENTRIES",
        entries
    }
}

export const removeUserEntry = entryId => {
    return {
        type: "DELETE_ENTRY",
        entryId
    }
}


// async

export const getUserEntries = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/daily_entries", {
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
                dispatch(setUserEntries(response.data))
            }
        })
        .catch(console.log)
    }
}

export const deleteEntry = (entryId) => {
    return dispatch => {
        dispatch(removeUserEntry)
        return fetch(`http://localhost:3001/api/v1/daily_entries/${entryId}`, {
            credentials: "include",
            method: "DELETE"
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(removeUserEntry(entryId))
            }
        })
    }
}
