import React from 'react';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    width: 100%;
    justify-content: center;
    position: fixed;
    bottom: 1%;

    @media (max-width: 764px) {
        visibility: hidden;   
    }
`;


const Icon = styled.a`
    font-size: 2.7vw;
    color:#4dd599;
    display: inline;
    margin: 0.5vw;
    
    &:hover {color: #272343};

    @media (max-width: 1024px) {
        font-size: 6vw;
        margin: 2.5vw; 
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
                    <Icon href="https://github.com/" rel="noopener noreferrer" target="_blank" >
                        <FaMedium color="primary" />
                    </Icon>
                    <Icon href="https://twitter.com/defier" target="_blank" rel="noopener noreferrer">
                        <FaTwitter color="primary" />
                    </Icon>
                    <Icon href="https://discordapp.com/" rel="noopener noreferrer" target="_blank" >
                        <FaDiscord color="primary" />
                    </Icon>
                    <Icon href="https://linkedin.com/company/defier" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin color="primary" />
                    </Icon>
                    <Icon href="https://github.com/defier-io" rel="noopener noreferrer" target="_blank" >
                        <FaGithub color="primary" />
                    </Icon>
        </FooterWrapper>
    )
}

