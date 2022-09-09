import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { LinkContainer, Section } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+(234)916-397-5784">+(234)916-397-5784</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:stephennwachukz007@gmail.com">
            stephennwachukz007@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>Striving to achieving Greatness</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/stephennwac007">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/nwac_stephen">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
