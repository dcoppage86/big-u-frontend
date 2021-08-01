import React from 'react'
import Library from '../components/Library';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 10%;
    padding-bottom: 10%
`

const StyledDiv = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: auto;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
`

const LibraryContainer = () => {
    return (
        <StyledContainer>
            <StyledDiv className="library-div">
                <div className="Library-Container">
                    <h3>Library</h3>
                    <p>These are books may help in your journey, Feel free to add more to the list!</p>
                    <br></br>
                        <div style={{display: 'flex', flexDirection: 'row'}} className="Card-Container">
                            <Library />
                        </div>
                </div>
            </StyledDiv>
        </StyledContainer>
    )}

export default LibraryContainer