import React from 'react';
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/SignUp';
import { signup } from '../actions/currentUser';


const Signup = ({ signupFormData, updatesignupForm, signup }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={ handleInputChange } />
            <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={ handleInputChange } />
            <input type="submit" value="signup" />
        </form>
    )
}
const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}
export default connect(mapStateToProps, { updatesignupForm, signup })(signup);