import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedLink: 'https://project1.com',
      githubLink: ' https://github.com/muthukonar/WeatherDashboard',
    },
    {
      title: 'Project 2',
      image: 'project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/muthukonar/vehiclebuilder',
    },
 

    {
      title: 'Project 3',
      image: 'project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/muthukonar/group4-project1',
    },

    {
      title: 'Project 4',
      image: 'project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/muthukonar/vehiclebuilder',
    },

    {
      title: 'Project 5',
      image: 'project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/muthukonar/readmemaker',
    },


    {
      title: 'Project 6',
      image: 'project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/muthukonar/prework-study-guide',
    },



   

   

   

    

   









  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;