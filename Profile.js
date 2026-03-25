import React from "react";
import Peter from "../images/Peter.jff.jpg"
function Profile() {
  return (
    <div className="container-fluid min-vh-100 bg-primary text-white py-5">
      
      {/* Profile Section */}
      <div className="text-center mb-5">
        <img src={Peter} alt="profile"></img>
        <h2 className="fw-bold">Petter Mullians</h2>
        <p className="text-light"> peter.mullins@email.com / Rochester, New York </p>
      </div>

      {/* Experience Section */}
      <div className="container">
        <h3 className="text-success mb-4">Experience</h3>

        <h5 className="fw-bold">Senior Front End Developer</h5>

        <ul className="mt-3">
          <li>
            Design web applications according to client briefs and modify
            designs to meet changes.
          </li>
          <li>
            Develop web products by coding wireframes into interactive
            elements.
          </li>
          <li>
            Work with designers, backend developers and UX designers.
          </li>
          <li>
            Debug code, improve performance and user experience.
          </li>
          <li>
            Supervise junior developers and provide training.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;