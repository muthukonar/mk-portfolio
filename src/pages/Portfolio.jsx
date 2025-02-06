import React from 'react';
import './portfolio.css'
const Portfolio = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      image: 'project1.jpg',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com/muthukonar/WeatherDashboard',
    },
    {
      title: 'Vehicle Builder',
      image: 'project2.jpg',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com/muthukonar/vehiclebuilder',
    },
    {
      title: 'BUMSYST - Budget Management System',
      image: 'project2.jpg',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com/muthukonar/group4-project1',
    },
    {
      title: 'Employee Tracker',
      image: 'project2.jpg',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com/muthukonar/EmployeeTracker',
    },
    {
      title: 'README Generator',
      image: 'project2.jpg',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com/muthukonar/readmemaker',
    },
    {
      title: 'Prework Study Guide',
      image: 'project2.jpg',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com/muthukonar/prework-study-guide',
    },
  ];

  return (
    <section id="portfolio" className="container my-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <div className="project-card">
              <img src={project.image} alt={project.title} className="img-fluid mb-3" />
              <h3>{project.title}</h3>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                App Screenshot/Video
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
