import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

// white = '#FFFF'
// offWhite = '#EEEE'
// orange = '#FA9581'
// blue = '#8BACBD'

const IndexWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`

const NameIntro = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: Domine;
`

const FirstName = styled.h1`
  font-size: 8em;
  margin: 0;
  padding: 0;
  z-index: 1;
`

const LastName = styled.h1`
  font-size: 8em;
  margin: 0;
  padding: 0;
  right: 0.43em;
  position: relative;
`

const About = styled.section`
  font-family: Open Sans;
`

const AboutP = styled.p`
  font-size: 1.5em;
`

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <NameIntro>
        <FirstName>Juan</FirstName>
        <LastName>Sierra</LastName>
      </NameIntro>
      <About>
        <AboutP>
          Hello! Welcome to this website mad with GatsbyJS. I'm a Front End
          Developer focusing on building minimal yet meaningful experiences on
          the web. Currently finishing up my Bachelor's in Computer Science, but
          I'm more than open to work with you or your company full-time,
          contract, or as freelancer.
        </AboutP>
        <AboutP>
          I'm based in Virginia near the DC-Metro area, but I was raised abroad
          for more than 10 years. I currently find myself traveling to Mexico
          quite often, where the only real tacos can be found...Trust me. While
          I'm not coding or studying, I can be found playing guitar recording
          random ideas, gaming with my awesome friends all over the US, and or
          running to keep my mind sane.
        </AboutP>
      </About>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
