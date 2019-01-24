import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Card from "../components/card";

const ProjectsWrapper = styled.div`
  padding: 10vmin 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectsHeader = styled.header`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsH2 = styled.h2``;

const ProjectsShowCase = styled.section``;

const Projects = () => (
  <Layout>
    <ProjectsWrapper>
      <ProjectsHeader>
        <ProjectsH2>Projects</ProjectsH2>
      </ProjectsHeader>

      <ProjectsShowCase>
        <Card />
      </ProjectsShowCase>
    </ProjectsWrapper>
  </Layout>
);

export default Projects;
