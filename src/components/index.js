import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import Main from './main'
import Nav from './nav'
import Settings from './settings'

import 'react-toastify/dist/ReactToastify.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial;
    font-weight:500;
  } 

  body {
    margin:0;
    padding:0;
  }
  .Toastify__toast {
    min-height: auto !important;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const App = () => (
  <MainContainer>
    <ToastContainer
      autoClose={2000}
    />
    <GlobalStyle />
    <Nav />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </MainContainer>
);

export default App;
