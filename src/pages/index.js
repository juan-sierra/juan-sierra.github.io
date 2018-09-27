import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const H1 = styled.h1`
  font-size: 8rem;
  text-align: right;
  display: grid;
  grid-template-columns: 2;
`

const FirstName = styled.span``
const LastName = styled.span`
  font-size: 8.5rem;
  position: relative;
  top: -50px;
  left: -20px;
  z-index: -1;
`

const AboutPara = styled.p`
  font-size: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <H1>
      <FirstName>Juan</FirstName>
      <LastName>Sierra</LastName>
    </H1>
    <AboutPara>
      Currently a Computer Science Major focusing on Web Development. I aim to
      create responsive web applications along with meaningful experiences while
      mainting carefully crafted code.
    </AboutPara>
    <AboutPara>
      Since graduating High School in Virginia in 2013, I was offered an
      internship at a local Startup which kickstarted my journey in tech. This
      opportunity opened the door to work with other awesome companies such as
      Facebook (as a contractor.)
    </AboutPara>
    <AboutPara>
      When I started working in tech, I became a memember of the freeCodeCamp
      community and started a Facebook group for my city. I attened as well as
      organized coding events with a friend who I met through the freeCodeCamp
      group.
    </AboutPara>
    <AboutPara>
      When I'm not infront of a computer I can be found either in Leesburg,
      Virgnia or somewhere in Mexico going out for runs, biking, hanging out
      with friends or family, and looking for the best street tacos.
    </AboutPara>
  </Layout>
)

export default IndexPage
