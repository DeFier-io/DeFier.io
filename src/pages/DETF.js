import React from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styled, { createGlobalStyle } from 'styled-components';

let prices = require('./helpers/uniswap').then(result => prices = result)

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 3vw;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5vw;
    flex-direction: column;
  }
`

const useStyles = makeStyles({
    card: {
        maxWidth: '30vw',
        minHeight: '30vh',
        color: "#f5f5f5",
        textAlign: "center",
        marginBottom: "2vh",

        "@media (min-width: 320px) and (max-width: 1024px)": {
            minWidth: '50vw',
            minHeight: '15vh',
        }
    }
});

const StyledButton = styled(Button)`
  margin-top: 3vh !important;
  margin-left: 0 !important;
  margin-right: 2vw !important;
  font-size: 1vw !important;
  font-weight: bold !important;
  border-radius: 30px !important;

  @media (min-width: 320px) and (max-width: 1024px) {
    margin-top: 2vh !important;
    font-size: 2.3vw !important;
  }
`
StyledButton.defaultProps = {
    color: 'primary',
    variant: "outlined",
    size: 'large',
    component: 'button',
    rel: 'noopener noreferrer',
    target: '_blank'
};

const ButtonColor = createMuiTheme({
    palette: { primary: { main: '#4dd599' } }
})

export default function DETF() {
    const classes = useStyles();

    console.log(prices)

    return (
        <Container>
            <Card raised={true} className={classes.card}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom variant="h5" component="h2">
                        Defier Uniswap 5 A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ticker: DU5A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Composition: BAT (31%), cDAI (6%), MKR (47%), SNX (15%), WBTC (1%)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Asset Value: N.A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Net Asset Value: N.A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        YTD Return (%)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Next Vote: N.A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div>MainNet: Not Launched</div>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div>TestNet: Not Launched</div>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        PDF: Fact Sheet
                    </Typography>
                    <div>
                        <MuiThemeProvider theme={ButtonColor}>
                            <StyledButton style={{ color: "#272343" }} href='https://hackmd.io/'>
                                Vote Now
                            </StyledButton>
                            <StyledButton style={{ color: "#f5f5f5" }} variant="contained" href='https://defier.exchange'>
                                Trade Now
                            </StyledButton>
                        </MuiThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
}