import React from 'react'
import Login from '../components/Login';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 10%;
    padding-bottom: 10%
`


const LoginContainer = ({ currentUser }) => {
    return (
        <StyledContainer>
            <div className="login-container">
            {currentUser ? "You're Already Logged In!" : null} 
            {currentUser ?  null : <Login/> }
            </div>
        </StyledContainer>
    )}

    const mapStateToProps = ({ currentUser }) => {
        return {
          currentUser
        }
      }

export default connect(mapStateToProps)(LoginContainer);