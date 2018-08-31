import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 1.5em;
`

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
`

const NavItem = styled.li``

const NavLink = styled(Link)`
  text-decoration: none;
  color: #323232;
`

const NavLinks = () => (
  <Nav>
    <NavUl>
      <NavItem>
        <NavLink>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Resume</NavLink>
      </NavItem>
    </NavUl>
  </Nav>
)

export default NavLinks
