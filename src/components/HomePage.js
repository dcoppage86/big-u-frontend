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

const HomePage = () => {
    return (
        <StyledDiv className="home-container">
            <div className="welcome-div">
                <h1>Welcome to Big-U</h1>
                <h3>A place to vent, discuss and educate</h3>
            </div>
            <br></br>
            <br></br>
            <div className="list-1">
                <strong>What is Autism?</strong>
                    <ul>
                        <li>Autism is a bio-neurological developmental disability that generally appears before the age of 3</li>
                        <li>Autism impacts the normal development of the brain in the areas of social interaction, communication skills, and cognitive function. Individuals with autism typically have difficulties in verbal and non-verbal communication, social interactions, and leisure or play activities</li>
                        <li>Individuals with autism often suffer from numerous co-morbid medical conditions which may include: allergies, asthma, epilepsy, digestive disorders, persistent viral infections, feeding disorders, sensory integration dysfunction, sleeping disorders, and more</li>
                        <li>Autism is diagnosed four times more often in boys than girls. Its prevalence is not affected by race, region, or socio-economic status. Since autism was first diagnosed in the U.S. the incidence has climbed to an alarming one in 54 children in the U.S.</li>
                        <li>Autism itself does not affect life expectancy, however research has shown that the mortality risk among individuals with autism is twice as high as the general population, in large part due to drowning and other accidents.</li>
                        <li>Currently there is no cure for autism, though with early intervention and treatment, the diverse symptoms related to autism can be greatly improved and in some cases completely overcome.</li>
                    </ul>
            </div>
            <br></br>
            <br></br>
            <div className="list-2">
                <strong>Autism Facts & Stats</strong>
                    <ul>
                        <li>Autism now affects 1 in 54 children; over half are classified as having an intellectual disability or borderline intellectual disability</li>
                        <li>Boys are four times more likely to have autism than girls</li>
                        <li>About 40% of children with autism do not speak. About 25%–30% of children with autism have some words at 12 to 18 months of age and then lose them. Others might speak, but not until later in childhood</li>
                        <li>Autism greatly varies from person to person (no two people with autism are alike)</li>
                        <li>The rate of autism has steadily grown over the last twenty years</li>
                        <li>Autism is the fastest growing developmental disorder, yet most underfunded</li>
                        <li>2008 Danish Study found that the mortality risk among those with autism was nearly twice that of the general population</li>
                        <li>Children with autism do progress – early intervention is key</li>
                        <li>Autism is treatable, not a hopeless condition</li>
                    </ul>
            </div>
                <strong>Source: </strong><a href="https://nationalautismassociation.org/resources/autism-fact-sheet/?gclid=Cj0KCQjw9O6HBhCrARIsADx5qCRQQOTQom7rIdPqpRoPS2M8ZxqfJI9v2daNhqvHs4aRFcTNSnZ5KmQaAoG7EALw_wcB">National Autism Association</a>
        </StyledDiv>
    )
}

export default HomePage;