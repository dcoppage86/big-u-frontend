import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm';
import { useHistory } from 'react-router';
import { login } from '../actions/currentUser';


const Login = ({ loginFormData, updateLoginForm, login }) => {
    let history = useHistory();

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
        history.push("/user-entries")
    }

    return (
        <form onSubmit={ handleSubmit }>
        <h3>Already Signed Up?</h3>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" placeholder="username" value={loginFormData.username} name="username" type="text" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="password" value={loginFormData.password} name="password" type="text" onChange={ handleInputChange } />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block" value="login" >Login</button>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}
export default connect(mapStateToProps, { updateLoginForm, login })(Login);