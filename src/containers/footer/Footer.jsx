import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <section className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <article className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo' />

          <p>35, Old Yaba Road Ebute Metta Lagos, All right Reserved</p>
        </article>
        <article className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </article>

        <article className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>

          <p>Contact</p>
        </article>

        <article className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>

          <p>35, Old Yaba Road Ebute Metta Lagos, All right Reserved</p>
          <p>+2348059737342</p>
          <p>segunajiboye1@gmail.com</p>
        </article>
      </div>
      <div className='gpt3__footer-copyright'>
        <p> &copy; 2023 Gpt-3. All rights reserved </p>
      </div>
    </section>
  );
};

export default Footer;
