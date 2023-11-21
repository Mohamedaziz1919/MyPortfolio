import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gofur1m', 'template_kmocimm', e.target, 'Z4en5rJteFlbSIyRT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <h1>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />
        
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required /><br /><br />
        
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" required></textarea><br /><br />
        
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
