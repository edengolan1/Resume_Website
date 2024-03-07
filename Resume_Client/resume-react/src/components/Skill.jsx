import { useState, useEffect } from 'react';

function Skill() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = () => {
        fetch('https://resumeeden.azurewebsites.net/api/Skills').
            then(response => response.json()).
            then(data => setSkills(data));
    }

    return (
        <div id="skills-container">
            {skills.map(skill => 
                <div key={skill.skillName}>
                    <p>{skill.skillName}</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: skill.skillPrecent + '%' }}>
                            {skill.skillPrecent}%
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Skill;