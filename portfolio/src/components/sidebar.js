import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import NavLinks from './nav-links'

// sidebar
const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #fedd00;
  font-family: sans-serif;
`

const LinkWrapper = styled.div`
  transform: rotate(-90deg);
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #323232;
`

const SideBar = ({ siteTitle }) => (
  <Sidebar>
    <NavLinks />
  </Sidebar>
)

export default SideBar
