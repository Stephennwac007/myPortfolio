import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// const projectsDemo = [
//   {
//     title: "PROJECT 1",
//     description: "Touring API",
//   },
//   {
//     title: "PROJECT 2",
//     description: "Touring API",
//   },
//   {
//     title: "PROJECT 3",
//     description: "Touring API",
//   },{
//     title: "PROJECT 4",
//     description: "Touring API",
//   },
// ]

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, source, visit, tags }) => (
          // <div>
          //   {project.title}
          //   <br />
          //   {project.description}
          // </div>
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <Hr />
            <TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Frameworks</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code 🥲</ExternalLinks>
                <ExternalLinks href={source}>Source 😶</ExternalLinks>
              </UtilityList>
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
