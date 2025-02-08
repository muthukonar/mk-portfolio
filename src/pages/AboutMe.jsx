import React from 'react';
import '/src/css/portfolio.css';

import WeatherImg from '../assets/pics/weather.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="container my-5 bg-secondary">
      <h2 className="text-left mb-4 bold-underline">About Me</h2>
      <div className="project1-card">
        <img src={WeatherImg} alt="Your Avatar" className="img-fluid mb-3" />
      </div>
      <p>
        Hi! Hope you all doing well!.......
        Currently a full stack developer, learning front end and backend development skills from UoFT.
        Please check the Portfolio page to view my projects submitted so far and contact me using the contact page for any questions.
        You can also download my resume from Resume page.
      </p>

    </section>
  );
}

export default AboutMe;