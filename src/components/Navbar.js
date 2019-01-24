import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: #eeee;
  padding: 3vmin 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  h1 {
    font-size: 7vmin;
  }
`;

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  padding: 3vmin;
`;

const GatsLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  font-size: 4vmin;
`;

const Navbar = () => (
  <NavWrapper>
    <Logo>
      <h1>JS</h1>
    </Logo>
    <NavUl>
      <NavItem>
        <GatsLink to="/">about</GatsLink>
      </NavItem>
      <NavItem>
        <GatsLink to="/projects">projects</GatsLink>
      </NavItem>
      <NavItem>
        <GatsLink to="/contact">contact</GatsLink>
      </NavItem>
    </NavUl>
  </NavWrapper>
);
export default Navbar;
