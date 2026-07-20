import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer-section fs-footer-override">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <div className="logo footer-logo">
            <div className="logo-icon">
              <img src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784019754/a44962e9-259e-4885-a21c-31063e437a8a.png"
                alt="Mongo Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span>Mongo</span>
          </div>
          <p className="brand-desc">Better care. Happier pets.<br />Stronger bond.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">i</a>
          </div>
        </div>
        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="/blog.html">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col links-col company-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/careers.html">Careers</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-col subscribe-col">
          <h4>Stay in the loop</h4>
          <p className="subscribe-desc">Get pet care tips, offers and updates<br />straight to your inbox.</p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PAWMATE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
