import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducers from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import userEntries from './reducers/userEntries.js'
import signupForm from './reducers/signupForm'
import allBooks from './reducers/books.js'
import userEntryForm from './reducers/userEntryForm.js'
import bookEntryForm from './reducers/bookEntryForm.js'

const reducer = combineReducers({
  users: usersReducers,
  currentUser,
  loginForm,
  userEntries,
  signupForm,
  allBooks,
  userEntryForm,
  bookEntryForm
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store