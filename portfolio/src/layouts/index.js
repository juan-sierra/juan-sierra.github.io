import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SideBar from '../components/sidebar'
import './index.css'
import styled from 'styled-components'

// container
// <SideBar siteTitle={data.site.siteMetadata.title} />

const Container = styled.div`
  margin: auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: sans-serif;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Container>{children()}</Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
