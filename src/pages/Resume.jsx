import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="container my-5" >
      <h2 className='bold-underline'>Resume</h2>
      <a href="./src/assets/pics/MuthuKonar-resume.pdf" download className="text-black">Download my Resume</a>
      <h3>Skills & Proficiencies</h3>
      <h4>Front End</h4>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML, CSS</li>
        <li>Git/GitHub</li>
      </ul>
      <h4>Back End</h4>
      <li>Postgressql</li>
    </section>
  );
}

export default Resume;
