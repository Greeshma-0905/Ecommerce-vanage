import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us – The VANAGE</h1>
      <p>Welcome to VANAGE — your ultimate destination for bold style, custom expression, and curated lifestyle.</p>
      <p>We’re not just an e-commerce brand — we’re a movement built on individuality, expression, and community. Whether you’re dressing to impress, searching for the perfect gift, or adding character to your walls, you’ll find something uniquely you at VANAGE.</p>
      {/* Add more content as needed */}
      <section className="about-section">
    <h2 className="section-title">🔥 What We Offer</h2>
    <ul className="offer-list">
      <li>Trendsetting clothing for all ages</li>
      <li>Personalized Canvas Art crafted with soul</li>
      <li>Preloved ThriftBooks for the passionate reader</li>
      <li>Statement-making Handmade Accessories</li>
      <li>A shopping experience that’s smooth, stylish, and smart</li>
    </ul>
  </section>

  <section className="about-section">
    <h2 className="section-title">🎯 Our Vision</h2>
    <p>
      To redefine everyday shopping with a blend of art, authenticity, and affordability — empowering everyone to express their bold side.
    </p>
  </section>

  <p className="about-closing">
    Thank you for being part of the Vanage tribe.
    <br />
    <strong>Bold style. Timeless vibes. Custom to the core.</strong>
  </p>

    </div>
  );
};

export default About;
