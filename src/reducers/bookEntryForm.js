const initialState = {
    book_title: "",
    book_author: "",
    image_url: "",
    book_url: ""
}

const bookEntryForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_BOOK_FORM":
            const returnInfo = {
                ...state,
                [action.bookFormData.name]: action.bookFormData.value
            }
            return returnInfo
        case "RESET_ENTRY_FORM":
            return initialState
        default:
            return state
    }
}

export default bookEntryForm