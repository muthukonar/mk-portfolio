import React from 'react';
import './portfolio.css'
const Portfolio = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      image: './src/pages/weather.jpg',
      deployedLink: 'https://weatherdashboard-1chl.onrender.com',
      githubLink: 'https://github.com/muthukonar/WeatherDashboard',
    },
    {
      title: 'Vehicle Builder',
      image: './src/pages/vehicle.jpg',
      deployedLink: 'https://drive.google.com/file/d/1N0XzP8dQ1f7hKvBiSiNQ5enkrLzLNJYp/view?usp=drive_link',
      githubLink: 'https://github.com/muthukonar/vehiclebuilder',
    },
    {
      title: 'BUMSYST - Budget Management System',
      image: './src/pages/BUMSYST.jpg',
      deployedLink: 'https://muthukonar.github.io/group4-project1',
      githubLink: 'https://github.com/muthukonar/group4-project1',
    },
    {
      title: 'Employee Tracker',
      image: './src/pages/employeetracker.jpg',
      deployedLink: 'https://drive.google.com/file/d/1JxPJKHiIcJ68ANqc7sPW2lWxgMryJfOj/view?usp=drive_link',
      githubLink: 'https://github.com/muthukonar/EmployeeTracker',
    },
    {
      title: 'README Generator',
      image: './src/pages/READMEMAKER.jpg',
      deployedLink: 'https://drive.google.com/file/d/1uGMPkxLf4PXKVbEpbDOPmjLUWMXBdnZV/view?usp=sharing',
      githubLink: 'https://github.com/muthukonar/readmemaker',
    },
    {
      title: 'Prework Study Guide',
      image: './src/pages/prework.jpg',
      deployedLink: 'https://muthukonar.github.io/prework-study-guide/',
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
