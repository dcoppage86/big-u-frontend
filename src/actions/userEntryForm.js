import { getCurrentUser } from "./currentUser"
import { setUserEntries } from "./userEntries"

// sync
export const updateEntryForm = (formData) => {
    return {
        type: "UPDATE_ENTRY_FORM",
        formData
    }
}

// async

export const resetEntryForm = () => {
    return{
        type: "RESET_ENTRY_FORM"
    }
}

export const newEntry = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
        const dailyEntryInfo = {
            daily_entry: credentials
        }
        return fetch("http://localhost:3001/api/v1/daily_entries", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dailyEntryInfo)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.error) {
                alert(response.error)
            } else {
                getCurrentUser()
                setUserEntries()
                dispatch(updateEntryForm(response))
                dispatch(resetEntryForm())
            }
        })
        .catch(console.log)
    }
}