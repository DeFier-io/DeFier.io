import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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

export default function Home() {
  return (
    <MuiThemeProvider theme={ButtonTheme}>
      <div className="container">
        <h1>DeFi the Odds</h1>
        <h5>Tokenized Decentralized ETFs</h5>
        <div>
          <Button size="large" variant="outlined" color="primary">
            WhitePaper
          </Button>

          <a href='https://defier.exchange' target="_blank" >
            <Button size="large" variant="outlined" color="primary">
              Trade Now
            </Button>
          </a>
        </div>

      </div>

    </MuiThemeProvider>
  )
}
