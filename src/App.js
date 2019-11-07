import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from './components/AppBar';
import Button from '@material-ui/core/Button';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './App.css';

const ButtonTheme = createMuiTheme({
  palette: { primary: { main: '#faf0e6' } },
  overrides: {
    MuiButton: {
      root: {
        margin: "1vw",
      }
    },
  }
})


function App() {

  return (
    <div className="app">
      <AppBar />
      <MuiThemeProvider theme={ButtonTheme}>
        <div className="container">
          <h1>DeFi the Odds</h1>
          <h5>Tokenized Decentralised ETFs</h5>
          <div>
            <Button size="large" variant="outlined" color="primary">
              WhitePaper
            </Button>
            <Button size="large" variant="outlined" color="primary">
              Trade Now
            </Button>
          </div>
        </div>
        <div className="footer">
          <a href="https://twitter.com/defier" target="_blank"><FaTwitter className="icon" color="primary" /></a>
          <a href=""><FaDiscord className="icon" color="primary" /></a>
          <a href="https://www.linkedin.com/company/defier" target="_blank" ><FaLinkedin className="icon" color="primary" /></a>
          <a href=""><FaGithub className="icon" color="primary" /></a>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
