import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const white = '#FFFF'
const offWhite = '#EEEE'
const orange = '#FA9581'
const blue = '#8BACBD'

const IndexWrapper = styled.div`
  height: 100vh;
  max-width: 980px;
  margin: 0 auto;
  margin-top: 15em;
`

const Header = styled.header`
  min-width: 100%;
  background: #ffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5em;
  border-bottom: 2px solid #eeee;
  box-shadow: 2px 2px 2px #eeee;
`

const FirstName = styled.h1`
  font-size: 7em;
  margin: 0;
  padding: 0;
`

const LastName = styled.h1`
  font-size: 7em;
  margin: 0;
  padding: 0;
  right: 0.62em;
  bottom: 0.62em;
  position: relative;
`

const IndexPage = () => (
  <Layout>
    <Header />
    <IndexWrapper>
      <section>
        <FirstName>Juan</FirstName>
        <LastName>Sierra</LastName>
        <p>
          Juan Sierra is a Front End Developer based in the DMV area specifally
          Virginia. He focus on building minimal yet meaning experiences on the
          web. For jobs or freelance work get in touch - here -
        </p>
      </section>
      <section>
        <h2>Contact</h2>

        <ul>
          <li>
            <a href="#">jasierra.garcia@gmail.com</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </section>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
