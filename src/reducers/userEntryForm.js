const initialState = {
    title: "",
    content: ""
}

const userEntryForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_ENTRY_FORM":
            const returnInfo = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnInfo
        case "RESET_ENTRY_FORM":
            return initialState
        default:
            return state
    }
}

export default userEntryForm