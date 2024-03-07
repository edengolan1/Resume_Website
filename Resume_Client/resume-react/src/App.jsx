import Education from "./components/Education"
import Skill from "./components/Skill"
import Language from "./components/Language"
import UserDetails from "./components/UserDetails"
import WorkExperience from "./components/WorkExperience"
import Image from "./components/Image"

function App() {
  return (
    <>
      <div className="w3-content w3-margin-top">
        <div className="w3-row-padding">
            <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                    <div id="UserDetailsNameImg-container">
                      <Image/>
                    </div>
                    <div className="w3-container">
                        <div id="UserDetails-container">
                          <UserDetails/>
                          <a href="http://linkedin.com/in/eden--golan" className="linkedin">
                            <i className="fa fa-linkedin w3-hover-opacity"></i>
                          </a>
                          <a href="https://github.com/edengolan1" className="gitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                          </a>
                        </div>
                        <hr/>
                        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                        <div id="skills-container">
                          <Skill/>
                        </div>
                        <br/>
                        <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                        <div id="languages-container">
                          <Language/>
                        </div>
                        <br/>
                    </div>
                </div><br/>
            </div>
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                    <div id="Education-container">
                      <Education/>
                    </div>
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Experience</h2>
                    <div id="WorkExperience-container">
                      <WorkExperience/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i className=""></i>
        <a href="http://linkedin.com/in/eden--golan">
            <i className="fa fa-linkedin w3-hover-opacity"></i>
        </a>
        <a href="https://github.com/edengolan1" className="gitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
        </a>
    </footer>
    </>
  )
}
export default App
