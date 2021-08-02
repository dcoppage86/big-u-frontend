// sync
export const updateBookForm = (name, value) => {
    const bookFormData = { name, value }
    return {
        type: "UPDATE_BOOK_FORM",
        bookFormData
    }
}
