const userEntries = (state = [], action) => {
    switch (action.type) {
        case "SET_USER_ENTRIES":
            return action.entries
        default:
            return state
    }
}

export default userEntries