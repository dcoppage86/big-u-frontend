export const setUserEntries = entries => {
    return {
        type: "SET_USER_ENTRIES",
        entries
    }
}


// async

export const getUserTrips = () => {
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
                dispatch(setUserEntries([]))
            }
        })
        .catch(console.log)
    }
}