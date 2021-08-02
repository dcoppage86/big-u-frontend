// sync
export const updateBookForm = (name, value) => {
    const bookFormData = { name, value }
    return {
        type: "UPDATE_BOOK_FORM",
        bookFormData
    }
}

export const resetBookForm = () => {
    return {
        type: "RESET_BOOK_FORM"
    }
}
