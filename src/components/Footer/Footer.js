import React from 'react';

import { FaGithub, FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
                <a href="https://twitter.com/defier" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" color="primary" /></a>
                <a href="https://discordapp.com/" rel="noopener noreferrer" target="_blank" ><FaDiscord className="icon" color="primary" /></a>
                <a href="https://linkedin.com/company/defier" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="icon" color="primary" /></a>
                <a href="https://github.com/" rel="noopener noreferrer" target="_blank" ><FaGithub className="icon" color="primary" /></a>
        </div>
    )
}

