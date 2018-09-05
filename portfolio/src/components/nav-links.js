import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 1.5em;
`

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: right;
`

const NavItem = styled.li`
  margin-top: -1em;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #323232;
  font-family: sans-serif;
`

const NavLinks = () => (
  <Nav>
    <NavUl>
      <NavItem>
        <NavLink to="/">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/contact">Contact</NavLink>
      </NavItem>
    </NavUl>
  </Nav>
)

export default NavLinks
