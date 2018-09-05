import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: whitesmoke;
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  color: #323232;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <Content>
      <p>{siteTitle} - 2018</p>

      <p>Made with Gatsby</p>
    </Content>
  </FooterWrapper>
)

export default Footer
