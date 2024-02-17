import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  const [aboutData, setAboutData] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    fetch('/api/about-us')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => setAboutData(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  return (
    <header>
      <div>
      <h1>{aboutData.title}</h1>
      <p>Hello everyone, my name is Zhuang Liu. You can call me Jason. I am a senior student at NYU. My major is math & CS.</p>
      {aboutData.imageUrl && <img src={aboutData.imageUrl} alt="About Us" />}
    </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default AboutUs;
