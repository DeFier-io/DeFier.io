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
  background-image: linear-gradient(180deg, #FF5A09 , #576E9A 14%) !important;
  min-height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Router>
        <AppBar/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route  path={process.env.PUBLIC_URL + '/DETF'} component={DETF} />
          <Route  path={process.env.PUBLIC_URL + '/About'} component={About} />
          <Redirect from={process.env.PUBLIC_URL + '/*'}  to={process.env.PUBLIC_URL + '/'}  />
        </Switch>
        <Footer/>
      </Router>
    </Wrapper>
  );
}

export default App;
