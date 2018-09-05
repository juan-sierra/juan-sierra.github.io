import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const EmailLink = styled.a`
  text-decoration: none;
  color: #323232;
  font-family: sans-serif;
`

const Contact = () => (
  <div>
    <h3>If interested on talking further..</h3>
    <p>Feel free to reach me at:</p>
    <EmailLink href="malito:jasierra.garcia@gmail.com">
      jasierra.garcia@gmail.com
    </EmailLink>
  </div>
)

export default Contact
