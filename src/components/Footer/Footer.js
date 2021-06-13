import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:9149650087">9149650087</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:ag.arjungupta98@gmail.com">ag.arjungupta98@gmail.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Download my Resume</LinkTitle>
      <LinkItem href="https://drive.google.com/file/d/1mfvhQXUGwmXSsVSsob69XwEVDf8-nsxV/view?usp=sharing">Click to Download</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Focus at developing one project at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/arjuncodearjun">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/arjun-gupta-2b842a175/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/hey_its_arjun/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UC6d0u8mBftZ5285oZPEqKEA">
        <AiFillYoutube size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
