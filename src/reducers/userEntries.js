const initialState = []

const userEntries = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_ENTRIES":
            return action.entries
        case "ADD_ENTRY":
            return state.concat(action.entry)
        case "DELETE_ENTRY":
            return state.filter(entry => entry.id === action.entryId ? false : true)
        default:
            return state
    }
}

export default userEntries