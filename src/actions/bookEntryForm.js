// sync
export const bookEntryForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_ENTRY_FORM",
        formData
    }
}
