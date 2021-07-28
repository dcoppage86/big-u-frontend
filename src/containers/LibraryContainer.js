import React from 'react'
import Library from '../components/Library';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledContainer = styled(Container)`
    padding-top: 25px;
`

const LibraryContainer = ({currentUser}) => {
    return (
        <StyledContainer>
            {currentUser ? <div className="Library-Container">
                <h3>Library</h3>
                <p>These are books may help in your journey, Feel free to add more to the list!</p>
                <br></br>
                    <div style={{display: 'flex', flexDirection: 'row'}} className="Card-Container">
                        <Library />
                    </div>
            </div> : "YOU DO NOT HAVE ACCESS!"}
        </StyledContainer>
    )}

    const mapStateToProps = ({ currentUser }) => {
        return {
          currentUser
        }
      }

export default connect(mapStateToProps)(LibraryContainer)