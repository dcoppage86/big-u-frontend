export const setUserEntries = entries => {
    return {
        type: "SET_USER_ENTRIES",
        entries
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