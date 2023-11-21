import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer id="louta">
        <div className="footer-container">
          <div className="cadre">
          <h1>Mohamed Aziz Guerfala</h1>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/guerfala-mohamed-aziz-256717270/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/mohamed.aziz.guerfala" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/mohamed_aziz_guerfala/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://github.com/Mohamedaziz1919" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> Phone: +216 96-226-650/29-700-427</p>
              <p><i className="far fa-envelope"></i> Email: guerfalamohamed2001@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
