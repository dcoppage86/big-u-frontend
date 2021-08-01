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


const About = () => {
    return (
        <StyledDiv className="about-div">
            <h3>About Us </h3>
            <br></br>
            <p>At <b>Big-U</b> we believe in making a safe environment for parents of children with autism and adults struggling with autism.</p>
            <br></br>
            <strong>Hi, I'm Dakota Coppage</strong>
            <br></br>
            <br></br>
            <p>At the age of 6 our daughter, Fynleigh, was diagnosed with ASD aka Austism Spectrum Disorder. This was hard for us at first,
            and many questions arose.</p>
            <ol>
                <li>Will Fynleigh be able to lead a normal life?</li>
                <li>Will we be able to handle all the changes in our lives to accomodate our daughters needs?</li>
                <li>Will people understand?</li>
                <li>How can we teach them?</li>
                <li>Are we in this alone?</li>
            </ol>

            <br></br>
            <p>This is definitely normal but we found that most of these answer themselves. MOST IMPORTANTLY...</p>
            <strong>YOU ARE NOT ALONE</strong>
            <br></br>
            <br></br>
            <p>This site is about <b>UNITY</b>. and gaining knowledge is what is important to us. At <b>Big-U</b> you will find the resources
            to aid in your own families/self development and connect with others that our in the same place.</p>
        </StyledDiv>
    )
}

export default About;