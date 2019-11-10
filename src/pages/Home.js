import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

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

export default function DETF() {
    return (
        <MuiThemeProvider theme={ButtonTheme}>
            <div className="container">
                <h1>DeFi the Odds</h1>
                <h5>Tokenized Decentralized ETFs</h5>
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
                <a href="https://twitter.com/defier" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" color="primary" /></a>
                <a href="https://discordapp.com/" rel="noopener noreferrer"><FaDiscord className="icon" color="primary" /></a>
                <a href="https://linkedin.com/company/defier" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="icon" color="primary" /></a>
                <a href="https://github.com/" rel="noopener noreferrer"><FaGithub className="icon" color="primary" /></a>
            </div>
        </MuiThemeProvider>
    )
}
