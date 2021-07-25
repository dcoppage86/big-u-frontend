import React from 'react'
import { Container } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container>
            <div className="home-container">
                <h1>Welcome to Big-U</h1>
                <h3>A place to vent, discuss and educate</h3>
                <br></br>
                <br></br>
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
        </Container>
    )
}

export default HomePage;