import React from "react";
import Typical from "react-typical";
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">

          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Rapha</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-end Developer 😃",
                    1000,
                    "Javascript Developer 😎 ",
                    1000,
                    "React Developer 🤯",
                    1000,
                   
                  ]}
                />
              </h1>
             
            </span>
          </div>
          <div className="profile-options">
            
            <a href="RealCV.pdf" download="RealCV.pdf">
              <button className="btn highlighted-btn">Get My Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
