import React from 'react';

import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';

import DETF from './pages/DETF';
import Home from './pages/Home';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(180deg, #FF5A09 , #576E9A 40%) !important;
  min-height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Router>
        <AppBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/DETF" component={DETF} />
          <Route  path="/About" component={About} />
          <Redirect from="/*" to="/" />
        </Switch>
        <Footer/>
      </Router>
    </Wrapper>
  );
}

export default App;
//ef4a4e
