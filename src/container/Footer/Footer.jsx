import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="app__footer">
            <div className="app__footer-content">
                <p className="footer-text">Crafted with care and innovation. Built with <span style={{ color: 'red' }}>❤</span> by Moin Khan</p>
                <div className="social-links">
                    <a href="https://linkedin.com/in/mk-moin-khan" className="social-link">LinkedIn</a>
                    <a href="https://github.com/MoinKhan2000" className="social-link">GitHub</a>
                    <a href="https://leetcode.com/u/Moin-Khan/" className="social-link">LeetCode</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
