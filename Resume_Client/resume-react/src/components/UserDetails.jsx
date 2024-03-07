import { useState, useEffect } from 'react';

function UserDetails() {
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
                <div key={user.userJob}>
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{user.userJob}</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{user.userAddress}</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{user.userEmail}</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{user.userPhone}</p>
                </div>
            ))}
        </div>
    )
}
export default UserDetails;
