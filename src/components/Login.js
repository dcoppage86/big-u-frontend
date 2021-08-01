import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm';
import { useHistory } from 'react-router';
import { login } from '../actions/currentUser';
import styled from 'styled-components';

const StyledForm = styled.form `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
`


const Login = ({ loginFormData, updateLoginForm, login, currentUser }) => {
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
        <StyledForm onSubmit={ handleSubmit }>
        <h3>Already Signed Up?</h3>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" placeholder="username" value={loginFormData.username} name="username" type="text" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="password" value={loginFormData.password} name="password" type="password" onChange={ handleInputChange } />
            </div>
            <br></br>
            <button type="submit" className="btn btn-dark btn-lg btn-block" value="login" >Login</button>
        </StyledForm>
    )
}
const mapStateToProps = (state, { currentUser }) => {
    return {
        loginFormData: state.loginForm,
        currentUser
    }
}
export default connect(mapStateToProps, { updateLoginForm, login })(Login);