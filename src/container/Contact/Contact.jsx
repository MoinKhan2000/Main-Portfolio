import React from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiReplit } from "react-icons/si";
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className='app__primarybg app__contact'>
      <motion.h2
        className="head-text"
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        Get in Touch
      </motion.h2>
      <motion.div
        className='app__contact-options'
        variants={contactVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='app__contact-card'>
          <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href="tel:+917987427096" className="contact-link">
            <FaPhoneAlt className='contact-icon' />
            <h4>Call Us</h4>
            <p>+91 7987427096</p>
          </a>
        </div>
        <div className='app__contact-card'>
          <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href="mailto:moink3181@gmail.com" className="contact-link">
            <FaEnvelope className='contact-icon' />
            <h4>Email Us</h4>
            <p>moink3181@gmail.com</p>
          </a>
        </div>
        <div className='app__contact-card'>
          <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href="https://wa.me/7987427096" target='_blank' rel='noopener noreferrer' className="contact-link">
            <AiOutlineWhatsApp className='contact-icon' />
            <h4>WhatsApp Us</h4>
            <p>Chat with us!</p>
          </a>
        </div>
        <div className='app__contact-card'>
          <h4>Follow Us</h4>
          <div className='app__contact-socials'>
            <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href='https://linkedin.com/in/mk-moin-khan' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='contact-social-icon' />
            </a>
            <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href='https://github.com/MoinKhan2000' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='contact-social-icon' />
            </a>
            <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href='https://leetcode.com/u/Moin-Khan/' target='_blank' rel='noopener noreferrer'>
              <SiLeetcode className='contact-social-icon' />
            </a>
            <a style={{ color: `var(--gray-color)`, textDecoration: 'none' }} href='https://replit.com/@MoinKhan16' target='_blank' rel='noopener noreferrer'>
              <SiReplit className='contact-social-icon' />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, 'contact'), 'contact', 'app__primarybg');
