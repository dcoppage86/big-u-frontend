import React from 'react'
import Library from '../components/Library';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import BookForm from '../components/BookForm.js'

const StyledContainer = styled(Container)`
    padding-top: 5%;
    padding-bottom: 5%
`

const StyledDiv1 = styled.div `
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
const StyledDiv2 = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const LibraryContainer = () => {
    return (
        <StyledContainer>
            <StyledDiv1 className="library-div">
                <h3>Library</h3>
                <p>These are books may help in your journey, Feel free to add more to the list!</p>
                <br></br>
                <div>
                    <BookForm/>
                </div>
                <br></br>
                <StyledDiv2 style={{display: 'flex', flexDirection: 'row'}} className="Card-Container">
                    <Library />
                </StyledDiv2>
            </StyledDiv1>
        </StyledContainer>
    )}

export default LibraryContainer