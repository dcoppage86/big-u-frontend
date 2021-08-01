import React from 'react';
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledH3 = styled.h3 `
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
`
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




const Signup = ({ signupFormData, updateSignupForm, signup }) => {
    let history = useHistory();

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
        history.push("/")
    }

    return (
        < StyledForm onSubmit={ handleSubmit }>
            <StyledH3>Register</StyledH3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" value={signupFormData.first_name} name="first_name" onChange={ handleInputChange } className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" value={signupFormData.last_name} name="last_name" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Childs Name (Optional)</label>
                <input type="text" className="form-control" placeholder="childs_name" value={signupFormData.childs_name} name="childs_name" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" value={signupFormData.username} name="username" onChange={ handleInputChange }/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="email" value={signupFormData.email} name="email" onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password" value={signupFormData.password} name="password" onChange={ handleInputChange } />
            </div>
            <br></br>
            <button type="submit" className="btn btn-dark btn-lg btn-block" value="signup">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">log in?</a>
            </p>
        </StyledForm>
    )
}
const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}
export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);