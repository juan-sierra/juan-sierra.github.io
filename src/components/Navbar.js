import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: #eeee;
  padding: 3vmin 1rem;
`;

const NavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: flex-end;
`;

const NavLi = styled.li`
  padding: 1em;
`;

const GatsLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  font-size: 2.5vmin;
  color: black;
`;

const Navbar = () => (
  <NavWrapper>
    {/* <h1>JS</h1> */}
    <NavUl>
      <NavLi>
        <GatsLink to="/">Home</GatsLink>
      </NavLi>
      <NavLi>
        <GatsLink to="/projects">Projects</GatsLink>
      </NavLi>
      <NavLi>
        <GatsLink to="/contact">Contact</GatsLink>
      </NavLi>
    </NavUl>
  </NavWrapper>
);

export default Navbar;
