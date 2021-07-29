const initialState = {
    title: "",
    content: ""
}

const userEntryForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_ENTRY_FORM":
            return action.formData
        case "RESET_ENTRY_FORM":
            return initialState
        default:
            return state
    }
}

export default userEntryForm