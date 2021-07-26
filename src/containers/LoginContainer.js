import React from 'react'
import Login from '../components/Login';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledContainer = styled(Container)`
    padding: 100px;
    height: 500px;
    width: 500px;
    justify-content: centered;
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