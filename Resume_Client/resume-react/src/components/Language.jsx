import { useState, useEffect } from 'react';

function Language() {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchLanguages();
    }, []);

    const fetchLanguages = () => {
        fetch('https://resumeeden.azurewebsites.net/api/languages')
            .then(response => response.json())
            .then(data => setLanguages(data));
    };

    return (
        <div id="languages-container">
            {languages.map(language => (
                <div key={language.languagesName}>
                    <p>{language.languagesName}</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: '100%' }}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Language;