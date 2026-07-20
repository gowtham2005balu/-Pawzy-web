import React from 'react';

export default function Navbar({ currentPage = 'home' }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">
          <img 
            src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784019754/a44962e9-259e-4885-a21c-31063e437a8a.png"
            alt="Mongo Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>
        <span>Mongo</span>
      </div>
      <ul className="nav-links">
        <li><a href="/" className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="/careers.html" className={currentPage === 'careers' ? 'active' : ''}>Careers</a></li>
        <li><a href="/features.html" className={currentPage === 'features' ? 'active' : ''}>Features</a></li>
        <li><a href="/about.html" className={currentPage === 'about' ? 'active' : ''}>About us</a></li>
        <li><a href="/blog.html" className={currentPage === 'blog' ? 'active' : ''}>Blog</a></li>
      </ul>
      <a href="#" className="btn btn-primary">Download App</a>
    </nav>
  );
}
