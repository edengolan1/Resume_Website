import { useState, useEffect } from 'react';
import 'C:/Azure/ResumeAzure/Resume_Client/resume-react/src/styles/Image.css';

function Image() {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = () => {
        fetch('https://resumeeden.azurewebsites.net/api/UserDetails')
            .then(response => response.json())
            .then(data => setUserDetails(data));
    };

    return (
        <div id="UserDetailsNameImg-container">
            {userDetails.map(user => (
                <div key={user.userFullName} className="w3-display-container">
                    <img src="/images/ImgResume.jpg" style={{ width: '100%' }} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                        <h2 className='fullName'>{user.userFullName}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Image;
