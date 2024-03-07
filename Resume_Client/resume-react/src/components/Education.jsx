import { useState, useEffect } from 'react';
import formatDate from './FormatDate';
import 'C:/Azure/ResumeAzure/Resume_Client/resume-react/src/styles/Education.css';

function Education() {
    const [education, setEducation] = useState([]);
    useEffect(() => {
        fetchEducation();
    },[]);

    const fetchEducation = () => {
        fetch('https://resumeeden.azurewebsites.net/api/educations')
            .then(response => response.json())
            .then(data => setEducation(data));
    };

    return (
        <div id="Education-container">
            {education.map(edu => (
                <div key={edu.nameSchool} className="w3-container">
                    <h5 className="w3-opacity"><b>{edu.nameSchool}</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{formatDate(edu.educationStartDate)} - {formatDate(edu.educationEndDate)}</h6>
                    <p className='titleEducation'>Course Software Development{edu.EducationTitle}</p>
                    <p>{edu.educationDescription}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
export default Education;