import React from 'react';
import AppBar from './components/AppBar/AppBar';

import DETF from './pages/DETF';
import Home from './pages/Home';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route component={AppBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/DETF" component={DETF} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
