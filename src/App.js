import React from "react";

import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Token from "./pages/Token";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Token" component={Token} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
