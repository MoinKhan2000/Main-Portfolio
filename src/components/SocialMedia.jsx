import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiReplit } from 'react-icons/si';
const SocialMedia = () => {
    return (
        <div className='app__social'>
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
    );
}

export default SocialMedia;
