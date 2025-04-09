import React from 'react';
import './Contact.css';

const Contact = () => {
  const email = 'support@thevanage.com';
  const phone = '+91-98765-43210';
  const address = 'The Vanage HQ, 123 Art Street, Hyderabad, India';
  const supportHours = 'Monday to Saturday, 10 AM – 7 PM IST';
  const socialLinks = {
    instagram: 'https://instagram.com/thevanage',
    facebook: 'https://facebook.com/thevanage',
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>{`If you have any questions, feel free to reach out to us. We're here to help!`}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
      <p>Address: {address}</p>
      <p>Support Hours: {supportHours}</p>
      <p>
        Follow us on:{' '}
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>{' | '}
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
      </p>
    </div>
  );
};

export default Contact;
