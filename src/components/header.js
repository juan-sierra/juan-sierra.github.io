import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import NavLinks from './nav-links'

// Header // Navbar
const NavBar = styled.header`
  background-color: #fedd00;
  margin-bottom: 1.45em;
`

const NavBarWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const NameLink = styled(Link)`
  text-decoration: none;
  color: #323232;
  &:hover {
    color: #23e4ed;
  }
`

const Header = ({ siteTitle }) => (
  <NavBar>
    <NavBarWrapper>
      <NameLink to="/">
        <h1>{siteTitle}</h1>
      </NameLink>
      <NavLinks />
    </NavBarWrapper>
  </NavBar>
)

export default Header
