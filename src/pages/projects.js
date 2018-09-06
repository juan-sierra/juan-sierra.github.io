import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
`
const Card = styled.article`
  background: whitesmoke;
  padding: 1.5em;
  margin-bottom: 1em;
`

const ProDescription = styled.p`
  font-family: sans-serif;
`

const PageTitle = styled.h1`
  display: flex;
  align-self: center;
  font-weight: 400;
`

const CardWrapper = styled.div``

const Projects = () => (
  <ProjectWrapper>
    <PageTitle>Projects I've built</PageTitle>
    <CardWrapper>
      <Card>
        <header>
          <h2>Pixel Art Maker</h2>
        </header>
        <ProDescription>
          Made with plain HTML, CSS, and JavaScript you can create pixel art
          right in your browser!
        </ProDescription>
      </Card>
      <Card>
        <header>
          <h2>Memory Game</h2>
        </header>
        <ProDescription>
          Fun card game made with HTML, CSS, and JavaScript. Try to finish it as
          fast as you can.
        </ProDescription>
      </Card>
      <Card>
        <header>
          <h2>immigrationRightsHub</h2>
        </header>
        <ProDescription>
          The Immigration Rights Hub is a free, comprehensive guide to laws that
          uniquely affect immigrants. Hackathon project that won 3rd place.
        </ProDescription>
      </Card>
    </CardWrapper>
  </ProjectWrapper>
)

export default Projects
