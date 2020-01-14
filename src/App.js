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


function App() {
  return (
      <Router>
        <AppBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/DETF' component={DETF} />
          <Route  path='/About' component={About} />
          <Redirect from='/*'  to='/'  />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
