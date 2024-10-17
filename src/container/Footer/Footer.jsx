import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="app__footer">
            <div className="app__footer-content">
                <p className="footer-text">© 2024 Moin K. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">GitHub</a>
                    <a href="#" className="social-link">Twitter</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
