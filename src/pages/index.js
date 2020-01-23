import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Image from "../components/image";

const Wrapper = styled.section`
  max-width: 970px;
  margin: auto;
  padding: 1.5em;
`;

const HomeWrapper = styled.section`
  min-height: 90vh;
  display flex;
  flex-direction: column;
  justify-content: center;
`;

const SpecialLink = styled.a`
  background: #32dbca;
`;

const H1 = styled.h1`
  font-size: 3em;
  margin: 0;
  line-height: 1.5em;
  margin-bottom: 1.2em;
  @media (max-width: 900px) {
    font-size: 2em;
  }
`;

const H2 = styled.h2`
  font-size: 2.5em;
  margin: 0;
  line-height: 1.5em;
  margin-bottom: 1.2em;
`;

const H3 = styled.h3`
  font-size: 2em;
  margin: 0;
  line-height: 1.5em;
  margin-bottom: 1.2em;
`;

const P = styled.p`
  font-size: 1.2em;
  margin: 0;
  max-width: 800px;
  line-height: 1.5em;
`;

const ProjectsWrapper = styled.section`
  height: 100vh;
  display flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactWrapper = styled.section`
  height: 90vh;
  display flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  padding: 1.5em;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5em;
`;

const Button = styled.button`
  border: 1px solid #23282d;
  color: #23282d;
  font-size: 1em;
  padding: 5px;
  cursor: pointer;
  background: none;
  &:hover button {
    background: #32dbca;
    color: #eee;
    border: none;
    color: #fff;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <HomeWrapper id="Home">
        <Image />
        <H1>
          Hello! Juan is a Web Developer, musican, and coffee connoisseur who is
          passionate about building fast and beautiful websites.
        </H1>
        <P>
          Well, you have stumbled upon my website so welcome! I'm currently in
          school finishing up my Web Development degree. While I'm studying I
          work part-time for two companies making graphics for upcoming U.S.
          holidays and company's anniversaries. On my spare time I like to
          explore new web technologies, make music, photography, and travel
          whenever I have the chance.
        </P>
      </HomeWrapper>
      <ProjectsWrapper id="Projects">
        <H2>Projects</H2>
        <P>
          While I get this section polished and shiny feel free to checkout my{" "}
          <SpecialLink href="https://github.com/juan-sierra">
            Github
          </SpecialLink>{" "}
          for previous and current projects.
        </P>
        <P>
          At the moment I'm working on a web application to learn Spanish called{" "}
          <SpecialLink href="https://github.com/loquela-espanol">
            Loquela
          </SpecialLink>
          .
        </P>
      </ProjectsWrapper>
      <ContactWrapper id="Contact">
        <H3>Contact me via the form below</H3>

        <Form
          name="Portfolio Form"
          method="POST"
          data-netlify="true"
          honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Portfolio Form" />
          <P>
            <Label>
              Your Name: <input type="text" name="name" />
            </Label>
          </P>
          <P>
            <Label>
              Your Email: <input type="email" name="email" />
            </Label>
          </P>
          <P>
            <Label>
              Message: <textarea name="message"></textarea>
            </Label>
          </P>
          <P>
            <Button type="submit">Send</Button>
          </P>
        </Form>
      </ContactWrapper>
    </Wrapper>
  </Layout>
);

export default IndexPage;
