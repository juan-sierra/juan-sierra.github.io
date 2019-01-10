import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Card from "../components/card";

const ProjectsWrapper = styled.div`
  padding: 10vmin 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const ProjectsHeader = styled.header`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsH1 = styled.h1`
  font-size: 8em;
`;

const ProjectsShowCase = styled.section``;

const Projects = () => (
  <Layout>
    <ProjectsWrapper>
      <ProjectsHeader>
        <ProjectsH1>Projects</ProjectsH1>
      </ProjectsHeader>

      <ProjectsShowCase>
        <Card />
      </ProjectsShowCase>
    </ProjectsWrapper>
  </Layout>
);

export default Projects;
