import React from "react";
import {
  DiAws,
  DiFirebase,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Listw,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in web deveopment world
      especially Back-End Technologies.
    </SectionText>
    <List>
      <ListItem>
        <Listw>
          <DiReact size="5rem" />
        </Listw>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Listw>
          <DiFirebase size="4rem" />
          <DiNodejs size="4rem" />
          <DiMongodb size="4rem" />
        </Listw>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs, MongoDb and, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Listw>
          <DiAws size="5rem" />
        </Listw>
        <ListContainer>
          <ListTitle>Cloud Dev.☁️</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS cloud services
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
