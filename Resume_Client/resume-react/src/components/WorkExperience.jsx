import { useState, useEffect } from 'react';
import formatDate from './FormatDate';

function WorkExperience() {
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        fetchWorkExperience();
    }, []);

    const fetchWorkExperience = () => {
        fetch('https://resumeeden.azurewebsites.net/api/WorkExperiences')
            .then(response => response.json())
            .then(data => setWorkExperience(data));
    };

    return (
        <div id="WorkExperience-container">
            {workExperience.map(exp => (
                <div key={exp.jobTitle} className="w3-container">
                    <h5 className="w3-opacity"><b>{exp.jobTitle}</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{formatDate(exp.jobStartDate)} - <span className="w3-tag w3-teal w3-round">{formatDate(exp.jobEndDate)}</span></h6>
                    <p>{exp.jobSummary}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default WorkExperience;