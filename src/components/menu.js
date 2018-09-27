import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Nav = styled.nav`
  position: absolute;
  right: 0;
  background: whitesmoke;
  height: 100%;
`

const Ul = styled.ul`
  list-style: none;
  margin: 1.5em;
`
const Li = styled.li``

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`

const Menu = () => (
  <Nav>
    <Ul>
      <Li>
        <LinkItem to="/">about</LinkItem>
      </Li>
      <Li>
        <LinkItem to="/projects">projects</LinkItem>
      </Li>
      <Li>
        <LinkItem to="/resume">resume</LinkItem>
      </Li>
      <Li>
        <LinkItem to="/contact">contact</LinkItem>
      </Li>
    </Ul>
  </Nav>
)

export default Menu
