import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello Guys <br />
        Welcome to my Portforlio 
      </SectionTitle>
      <SectionText>
        I'm an enthusiastic Junior MERN stack developer who's willing to learn and push myself to giving my best effort to your company.😃
      </SectionText>
      <Button onClick ={() => window.location = "https://www.github.com"}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
