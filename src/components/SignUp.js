import React from 'react';
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm';
// import { signup } from '../actions/currentUser';


const Signup = ({ signupFormData, updateSignupForm }) => {
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
        // signup(signupFormData)
    }

    return (
        < form onSubmit={ handleSubmit }>
            <h3>Register</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" value={signupFormData.first_name} name="first_name" onChange={ handleInputChange } className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input input type="text" className="form-control" placeholder="Last name" value={signupFormData.last_name} name="last_name" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Childs Name (Optional)</label>
                <input type="text" className="form-control" placeholder="childs_name" value={signupFormData.childs_name} name="childs_name" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="email" value={signupFormData.email} name="email" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input input type="password" className="form-control" placeholder="username" value={signupFormData.username} name="username" onChange={ handleInputChange } />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" value="signup">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">log in?</a>
            </p>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}
export default connect(mapStateToProps, { updateSignupForm})(Signup);