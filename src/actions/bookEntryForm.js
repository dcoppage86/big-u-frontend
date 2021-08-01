// sync
export const updateBookForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_ENTRY_FORM",
        formData
    }
}
