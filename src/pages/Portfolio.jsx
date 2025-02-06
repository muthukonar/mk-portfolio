import React from 'react';
import '/src/css/portfolio.css';
import WeatherDashboardImg from '../assets/pics/weather.jpg'
import VehicleBuilderImg from '../assets/pics/vehicle.jpg'
import BUMSYSTImg from '../assets/pics/BUMSYST.jpg'
import EmployeeTrackerImg from '../assets/pics/employeetracker.jpg'
import ReadMeGeneratorImg from '../assets/pics/READMEMAKER.jpg'
import PreWorkImg from '../assets/pics/prework.jpg'
const Portfolio = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      image: WeatherDashboardImg,
      deployedLink: 'https://weatherdashboard-1chl.onrender.com',
      githubLink: 'https://github.com/muthukonar/WeatherDashboard',
    },
    {
      title: 'Vehicle Builder',
      image: VehicleBuilderImg,
      deployedLink: 'https://drive.google.com/file/d/1N0XzP8dQ1f7hKvBiSiNQ5enkrLzLNJYp/view?usp=drive_link',
      githubLink: 'https://github.com/muthukonar/vehiclebuilder',
    },
    {
      title: 'BUMSYST - Budget Management System',
      image: BUMSYSTImg,
      deployedLink: 'https://muthukonar.github.io/group4-project1',
      githubLink: 'https://github.com/muthukonar/group4-project1',
    },
    {
      title: 'Employee Tracker',
      image: EmployeeTrackerImg,
      deployedLink: 'https://drive.google.com/file/d/1JxPJKHiIcJ68ANqc7sPW2lWxgMryJfOj/view?usp=drive_link',
      githubLink: 'https://github.com/muthukonar/EmployeeTracker',
    },
    {
      title: 'README Generator',
      image: ReadMeGeneratorImg,
      deployedLink: 'https://drive.google.com/file/d/1uGMPkxLf4PXKVbEpbDOPmjLUWMXBdnZV/view?usp=sharing',
      githubLink: 'https://github.com/muthukonar/readmemaker',
    },
    {
      title: 'Prework Study Guide',
      image: PreWorkImg,
      deployedLink: 'https://muthukonar.github.io/prework-study-guide/',
      githubLink: 'https://github.com/muthukonar/prework-study-guide',
    },
  ];
  return (
    <section id="portfolio" className="container my-5">
      <h2 className="text-left mb-4 bold-underline">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <div className="project-card">
              <img src={project.image} alt={project.title} className="img-fluid mb-3" />
              <h3>{project.title}</h3>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-info me-3">
                App Screenshot/Video
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-link me-3">
                GitHub Project link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;