import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const About = styled.section``

const IndexPage = () => (
  <About>
    <h1>
      Juan is currently a Computer Science Major focusing on Web Development. He
      aims to create responsive web applications along with meaningful
      experiences while maintaning carefully crafted code.
    </h1>
    <p>
      Since graduating High School in Virginia in 2013, Juan was offered an
      internship at a local IT firm which kick-started his journey in tech which
      allowed him to work some awesome companies such as Facebook (as a
      contractor.)
    </p>
    <p>
      Ever since he started working in tech, Juan also became a memeber of the
      freeCodeCamp community and started a Facebook group for his city city. He
      attended as well as organized coding events with his friend who he met
      through the freeCodeCamp Facebook group.
    </p>
    <p>
      When not in front a computer, Juan can be found either in Leesburg,
      Virginia or somewhere in Mexico going out for runs, biking, hanging out
      with friends or family and looking for the best street tacos.
    </p>
    <Link>View projects</Link>
  </About>
)

export default IndexPage
