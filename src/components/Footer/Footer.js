import React from "react";

import styled from "styled-components";
import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaTelegram
} from "react-icons/fa";

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding: 0 0 0px !important;
`;

const Icon = styled.a`
  font-size: 2.6vw;
  color: #00cc99;
  display: inline;
  margin: 0.6vw;

  &:hover {
    color: #f5f5f5;
  }

  @media (max-width: 440px) {
    font-size: 7vw;
    margin: 1.5vw;
  }

  @media (max-width: 1024px) {
    font-size: 6vw;
    margin: 1.5vw;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Icon
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color="primary" />
      </Icon>
      <Icon
        href="https://telegram.org/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTelegram color="primary" />
      </Icon>
      <Icon
        href="https://discord.gg/qXBWaNX"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaDiscord color="primary" />
      </Icon>
      <Icon
        href="https://linkedin.com/company/defier"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="primary" />
      </Icon>
      <Icon
        href="https://github.com/defier-io"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub color="primary" />
      </Icon>
    </FooterWrapper>
  );
}
