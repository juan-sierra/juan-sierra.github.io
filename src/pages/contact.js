import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const ContactWrapper = styled.section`
  padding: 10vmin 1rem;
`;

const SocialLinks = styled.a`
  color: black;
  cursor: pointer;
`;

const Contact = () => (
  <Layout>
    <ContactWrapper>
      <h2>Contact me:</h2>
      <ul>
        <li>
          <SocialLinks href="#">github</SocialLinks>
        </li>
        <li>
          <SocialLinks href="#">linkedin</SocialLinks>
        </li>
        <li>
          <SocialLinks href="#">email</SocialLinks>
        </li>
      </ul>
    </ContactWrapper>
  </Layout>
);

export default Contact;
