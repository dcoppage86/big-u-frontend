import React from 'react'
import styled from 'styled-components';

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

const Contact = () => {
    return (
        <StyledDiv>
            <h3>Thank You For Being A Part of Big-U</h3>
            <p>If you have any issues at all you may contact us:</p>
            <br></br>
            <strong>Email</strong>
            <p>bigU@gmail.com</p>
        </StyledDiv>
    )
}

export default Contact;