import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>+54 9 11 65155169</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:gustavodelatorre77@gmail.com'>gustavodelatorre77@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Creating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/XDrimer' target="_blank">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/gustavo-de-la-torre-309a581ba/' target="_blank">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
