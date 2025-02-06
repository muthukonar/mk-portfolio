import React from 'react';
import '/src/css/portfolio.css';

const AboutMe = () => {
  return (
    <section id="about" className="container my-5">
      <h2 className="text-center mb-4">About Me</h2>
      
      <div className="project-card">
      <img src="./src/assets/pics/weather.jpg" alt="Your Avatar" className="img-fluid mb-3" />
      <p>
    Hi! Hope you all doing well!.......
    I am a full stack developer, learning front end and backend development skills from UoFT. 
    Please check the Portfolio page to view my projects submitted so far and contact me using the contact page for any questions. 
    You can also download my resume from Resume page.
      </p>
      </div>
    </section>
  );
}

export default AboutMe;
