import React from 'react';
import '../../App.css';


// put an array of the projects up here that will be looped through to render a card for each project
const projects = [
    {
        name : 'Bugtracker',
        description : 'Track bugs in projects',
        skills : ['React', 'Express', 'Node', 'Socket.io'],
    },
    {
        name : 'Calorie Tracker',
        description : 'Track calorie intake and shit',
        skills : ['React', 'Express', 'Node', 'MaterialUI'],
    },
]

export default function ProjectCards() {


    const cards = projects.map(project => {
        return (
            <div className="main-card-cont">
                <div className="card">
                    <div className="front-card">
                        <div className="card-header">{project.name}</div>
                        <div className="card-content">
                            <div>{project.description}</div>
                            <div className="skills-cont">
                                {project.skills.map(skill => {
                                    return (
                                        <div className="skill">{skill}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="demo-source-code">
                            <div className="btn-demo-source">DEMO</div>
                        </div>
                    </div>
                    <div className="back-card">
                        <div>HERE IS THE BACK OF THE CARD</div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="cards-container">
            {cards}
        </div>
    )
}
