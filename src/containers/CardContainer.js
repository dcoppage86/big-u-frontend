import React from 'react'
import UserEntries from '../components/UserEntries'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Logout from '../components/Logout';

const StyledContainer = styled(Container)`
    padding-top: 25px
`

const CardContainer = ({currentUser, Logout}) => {
    return (
        <StyledContainer>
            {currentUser ? <div className="Card-Container">
            <h3>Daily Entries</h3>
            <p>Keep track of your daily struggles and victories, no matter how big or small</p>
            <br></br>
            <UserEntries/>
            </div> : "YOU DO NOT HAVE ACCESS!"}
        </StyledContainer>
    )}

    const mapStateToProps = ({ currentUser }) => {
        return {
          currentUser
        }
      }

export default connect(mapStateToProps, {Logout})(CardContainer)
