import React from "react"
import { H1 } from "../layouts/matrix"
import styled from "styled-components"

const About = () => (
    <section>
        <MyName>Juan Sierra</MyName>
        <MyRole>Front End Developer</MyRole>
    </section>
)

const MyName = styled(H1)`
    font-size: 5rem;
    font-family: Arial;
    font-weight: lighter;
`
const MyRole = styled(H1)`
    font-size: 3rem;
    font-family: Arial;
    font-weight: lighter;
`

export default About