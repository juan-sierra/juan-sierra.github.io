import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";

const H1 = styled.h1`
    font-size: 5em;
    color: pink;
`;

const Ul = styled.ul``;

const ListItem = styled.li``;

const Header = ({ siteTitle }) => (
    <header>
        <H1>{siteTitle}</H1>
        <Ul>
            <ListItem>
                <Link to="/">home</Link>
            </ListItem>
            <ListItem>
                <Link>portfolio</Link>
            </ListItem>
            <ListItem>
                <Link>resume</Link>
            </ListItem>
            <ListItem>
                <Link>contact</Link>
            </ListItem>
        </Ul>
    </header>
);

export default Header;
