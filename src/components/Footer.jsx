import React from 'react';

import linkedinLogo from '../assets/pics/LI-In-Bug.png';
import githubLogo from '../assets/pics/GitHub_Logo_White.png';
import stackOverflowLogo from '../assets/pics/logo-stackoverflow.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; Feb 2025 My Portfolio. All rights reserved.</p>
      <p>
        <a href="https://github.com/muthukonar" className="text-white" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" style={{ width: '70px', marginRight: '16px' }} />

        </a>
        <a href="https://linkedin.com/in/muthu-konar-052340112" className="text-white" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px', marginRight: '16px' }} />
        </a>
        <a href="https://stackoverflow.com" className="text-white" target="_blank" rel="noopener noreferrer">
          <img src={stackOverflowLogo} alt="Stack Overflow" style={{ width: '90px', marginRight: '24px' }} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
