import React from 'react';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import styled from 'styled-components';

const FooterWrapper = styled.section`
    display: flex;
    flex-direction: row;
    position: fixed;
    justify-content: center;
    bottom: 1vh;
    width: 100%;
`;

const FooterMiddle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
`;

const Icon = styled.a`
    font-size: 2.3vw;
    color:#4dd599;
    display: inline;
    margin: 0.5vw;

    &:hover {color: #272343};

    @media (min-width: 320px) and (max-width: 1024px) {
        font-size: 4vw !important;
        margin: 0.6vw !important; 
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterMiddle>
                <div>
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
                </div>
            </FooterMiddle>
        </FooterWrapper>
    )
}

