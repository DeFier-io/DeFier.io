import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled, { keyframes } from 'styled-components';

import { FaFilePdf } from 'react-icons/fa';

import prices from './helpers/coinGecko';

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 3vw;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5vw;
    flex-direction: column;
  }
`
const Composition = styled.div`
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
`
const AssetValue = styled.div`
    margin-top: 1%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: row;
`
const Network = styled.div`
    margin-bottom: 2%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: row;
`
const spin = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`
const Logo = styled.img`
    width: 5vw;
    margin-top: 0.4vw;
    color: black;
    animation: ${spin} 2s ease-in-out infinite
`
const Image = styled.img`
    width: 2.5vw;
    margin-top: 0.4vw;
`
const useStyles = makeStyles({
    card: {

        maxWidth: '50vw',
        minHeight: '30vh',
        color: "#f5f5f5",
        textAlign: "center",

        "@media (min-width: 320px) and (max-width: 1024px)": {
            minWidth: '50vw',
            minHeight: '15vh',
        }
    }
});

const StyledButton = styled(Button)`
  margin-top: 3vh !important;
  margin-left: 1vw !important;
  margin-right: 1vw !important;
  font-size: 1vw !important;
  font-weight: bold !important;
  border-radius: 30px !important;
  width: 10vw;

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

    const [data, setData] = useState(null);

    if (data === null) {
        prices.then(data => setData(data))
    }

    return (
            <Container>
                {data === null ? <Logo src={require(`../assets/img/Logo_fav.png`)} alt="icon" /> :
                    <Card raised={true} className={classes.card}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom variant="h4" component="h2">
                                DeFier Uniswap 5A
                    </Typography>
                            <Typography variant="h5" color="textSecondary" component="p">
                                Ticker: DU5A
                    </Typography>
                            <Typography variant="h6" color="textSecondary" component="p">
                                Next Vote: N/A
                    </Typography>

                            <AssetValue>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Market Capitalization: N/A
                        </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Net Asset Value: N/A
                        </Typography>
                            </AssetValue>

                            <Composition>
                                {data.map(el => {
                                    if (el.ticker === "XCHF") {
                                        return null;
                                    }
                                    return <div style={{ margin: "0.5vw" }}>
                                        <Typography variant="body1" color="textPrimary" component="p">{el.name} ({el.ticker})</Typography>

                                        <Image src={require(`../assets/img/${el.ticker.toLowerCase()}.png`)} alt="icon" />

                                        <Typography variant="body2" color="textSecondary" component="p">${
                                            el.ticker === "BAT" || el.ticker === "CDAI" ? el.USDlast.toFixed(4) : el.USDlast.toFixed(2)
                                        }</Typography>

                                        <Typography variant="body2" color="textSecondary" component="p">DETF Weigth: N/A</Typography>
                                    </div>

                                })}
                            </Composition>
                            <Network>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    MainNet: Not Launched
                        </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    TestNet: Not Launched
                        </Typography>
                            </Network>

                            <FaFilePdf color='#272343' style={{ cursor: "pointer" }} />

                            <div>
                                <MuiThemeProvider theme={ButtonColor}>
                                    <StyledButton style={{ color: "#272343" }} href='https://defier.vote/'>
                                        Vote Now
                                </StyledButton>
                                    <StyledButton style={{ color: "#f5f5f5" }} variant="contained" href='https://defier.exchange'>
                                        Trade Now
                                </StyledButton>
                                </MuiThemeProvider>
                            </div>
                        </CardContent>
                    </Card>
            }
            </Container>
    );
}