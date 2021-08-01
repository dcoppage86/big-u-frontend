import React from 'react'
import Login from '../components/Login';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    ppadding-top: 50%;
    padding-bottom: 50%
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