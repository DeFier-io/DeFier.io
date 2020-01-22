import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

import { FaFilePdf } from 'react-icons/fa';

import prices from './helpers/coinGecko';

import imgDesktop from '../assets/img/backgroundAboutUs.png';
import imgMobile from '../assets/img/AboutPageMobile.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    background-image: url(${imgDesktop});
    background-position: top right;
    background-repeat: no-repeat;    
    background-size: 50vw auto;

    @media (max-width: 1024px) {
        background-image: url(${imgMobile});
        background-position: bottom;
        background-repeat: no-repeat;    
        background-size: 100vw 50vh;
        margin: 0;
        height: 100vh;
    }
  }
`

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Composition = styled.div`
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;

    @media (max-width: 760px) {
        display: none;
    }
`
const AssetValue = styled.div`
    margin-top: 1%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: row;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`
const Network = styled.div`
    margin-top: 1%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: row;

    @media (max-width: 760px) {
        flex-direction: column;
    }
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
        color: "#f5f5f5",
        textAlign: "center",
    },
    pdfImage: { 
        cursor: "pointer", 
        fontSize: "2vw",

        "@media (max-width: 1024px)": {
            fontSize: "4vh" 
        }
    },
    animatedLogoImage: {
        "@media (max-width: 1024px)": {
            width: "10% !important" 
        }
    }
});

const StyledButton = styled(Button)`
  margin-top: 2%;
  margin-left: 1vw;
  margin-right: 1vw;
  font-size: 1vw;
  font-weight: bold;
  border-radius: 30px;

  @media (max-width: 1024px) {
    margin-top: 2vh;
    font-size: 3vw;
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
                <GlobalStyle />
                {data === null ? <Logo src={require(`../assets/img/Logo_fav.png`)} className={classes.animatedLogoImage} alt="icon" /> :
                    <Card raised={true} className={classes.card}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom variant="h4" component="h2">
                                DeFier Uniswap 5A
                            </Typography>

                            <FaFilePdf color='#272343' className={classes.pdfImage} />

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
                                    return <div style={{ margin: "0.5vw", marginBottom: "0.5vw" }}>
                                        <Typography variant="body1" color="textPrimary" component="p">{el.name} ({el.ticker})</Typography>

                                        <Image src={require(`../assets/img/${el.ticker.toLowerCase()}.png`)} alt="icon" />

                                        <Typography variant="body2" color="textSecondary" component="p">Price: ${
                                            el.ticker === "BAT" || el.ticker === "CDAI" ? el.USDlast.toFixed(4) : el.USDlast.toFixed(2)
                                        }</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">Net Asset: N/A</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">Current Weigth: N/A</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">Target Weigth: N/A</Typography>
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