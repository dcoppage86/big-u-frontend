const initialState = {
    title: "",
    author: "",
    image_url: "",
    book_url: ""
}

const bookEntryForm = (state=initialState, action) => {
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

export default bookEntryForm