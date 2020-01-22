import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 1.5em;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Brand = styled.div`
  background: #f7df1d;
  height: 120px;
  width: 120px;
  padding: 1.5em;
  @media (max-width: 900px) {
    margin-bottom: 1.5em;
  }
`;

const H1 = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Ul = styled.ul``;

const ListItem = styled.li`
  list-style: none;
  display: inline;
  padding: 1.5em;
  font-size: 1.2em;
`;
const Header = () => (
  <HeaderWrapper>
    <Nav>
      <Brand>
        <H1>Juan Sierra</H1>
      </Brand>
      <Ul>
        <ListItem>
          <a href="#Home">Home</a>
        </ListItem>
        <ListItem>
          <a href="#Projects">Projects</a>
        </ListItem>
        <ListItem>
          <a href="#Contact">Contact</a>
        </ListItem>
        <ListItem>
          <a href="https://drive.google.com/file/d/1Hfpohuz2xs4znvAPKDsmidXKI4BI0jFr/view?usp=sharing">
            Resume
          </a>
        </ListItem>
      </Ul>
    </Nav>
  </HeaderWrapper>
);

export default Header;
