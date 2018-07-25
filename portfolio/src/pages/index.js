import React from 'react'
import Projects from "../components/Projects"
import Nav from "../components/Nav"
import About from "../components/About"
import { Container } from "../layouts/matrix"

const IndexPage = () => (
  <Container>
    <About />
    <Projects />
    <Nav />
  </Container>
)

export default IndexPage
