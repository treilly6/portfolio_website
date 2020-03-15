import React from 'react';
import './Skills.css';


const skills = {
    Design : ["HTML", "CSS", "React", "Bootstrap"],
    Database : ["PostgreSQL", "PrestoDB", "MongoDB"],
    Languages : ["Python", "JavaScript"],
    Software : ["Git", "GitHub/GitLab", "Linux", "AWS EMR/EC2/S3"],
}

export default function SkillCards() {

    const skillCards = Object.keys(skills).map(skillKey => {
        return (
            <div className="skill-card">
                <div className="img-container">HERE WILL BE AN Image</div>
                <div className="skill-title">{skillKey}</div>
                <div className="skills-list">
                    {skills[skillKey].map(skill => {
                        return (
                            <div>{skill}</div>
                        )
                    })}
                </div>
            </div>
        )
    })
    return (
        <div className="skill-cards-container">
            {skillCards}
        </div>
    )
}
