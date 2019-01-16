import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items:center;
    height: 10vh;
    background-color: lightblue;

    a {
        padding: 0 1rem;
        text-decoration: none;
        color: grey;
    }
`;

const Nav = () => (
  <NavBar>
    <Link to="/">Home</Link>
    <Link to="/settings">Settings</Link>
  </NavBar>
);

export default Nav;
