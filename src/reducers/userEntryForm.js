const initialState = {
    title: "",
    content: ""
}

const userEntryForm = (state=initialState, action) => {
    switch (action.type) {
        case "NEW_USER_ENTRY":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initialState
        default:
            return state
    }
}

export default userEntryForm