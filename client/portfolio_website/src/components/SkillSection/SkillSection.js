import React from 'react';
import bgImg from '../../media/space.jpg';
import SkillCards from './SkillCards';

export default function SkillSection() {

    return (
        <div style={sectionStyle}>
            <SkillCards />
        </div>
    )
};

const sectionStyle = {
    height : "700px",
    margin : "30px 0px",
    padding : "5em 0",
    backgroundImage : `linear-gradient(to right, rgba(153, 0, 153, .6), rgb(122, 0, 204, .6)), url(${bgImg})`,
    transform : "skewY(-2deg)",
    backgroundSize : "cover",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
}
