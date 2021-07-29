import React from 'react'
import UserEntries from '../components/UserEntries'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
import UserEntryForm from '../components/UserEntryForm'

const StyledContainer = styled(Container)`
    padding-top: 25px
`

const CardContainer = ({currentUser, Logout}) => {
    return (
        <StyledContainer>
            {currentUser ? <div className="Card-Container">
            <div className="header-div">
                <h3>Daily Entries</h3>
                <p>Keep track of your daily struggles and victories, no matter how big or small</p>
            </div>
            <div>
                <h4>New Entry Here</h4>
                <UserEntryForm/>
            </div>
            <br></br>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between" }} className="Entry-Card-Container">
                    <UserEntries/>
                </div>
            </div> : "YOU DO NOT HAVE ACCESS!"}
        </StyledContainer>
    )}

    const mapStateToProps = ({ currentUser }) => {
        return {
          currentUser
        }
      }

export default connect(mapStateToProps, {Logout})(CardContainer)
