/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import styled from "styled-components"
import Header from "../components/header"

const Container = styled.main``

const Footer = styled.footer`
  text-align: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer>
          <p>
            Made by Juan Siera with{" "}
            <a href="https://www.gatsbyjs.org/">Gatsby JS</a> ©{" "}
            {new Date().getFullYear()}
            {` `}
          </p>
        </Footer>
      </Container>
    </>
  )
}

export default Layout
