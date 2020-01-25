import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

import { FaChevronRight, FaChevronLeft, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

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
const ArrowContain = styled.div`
    display: flex;
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
    "@keyframes fade": {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    fade: {
        color: "#f5f5f5",
        textAlign: "center",
        width: "65vw",
        animationName: '$fade',
        animationDuration: '1.5s',
        animationTimingFunction: 'fadein', 
    },
    card: {
        color: "#f5f5f5",
        textAlign: "center",
        width: "65vw"
    },
    FaIcon: {
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
    },
    faChevronLeft: {
        marginRight: "1%",
        fontSize: "2vw",
        cursor: "pointer",
        color: "#4dd599",

        "&:hover": {
            opacity: "0.5"
        },

        "@media (max-width: 1024px)": {
            fontSize: "7vw !important"
        }
        
    },
    faChevronRight: {
        marginLeft: "1%",
        fontSize: "2vw",
        cursor: "pointer",
        color: "#4dd599",

        "&:hover": {
            opacity: "0.5"
        },

        "@media (max-width: 1024px)": {
            fontSize: "7vw !important"
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
    const [fade, setFade] = useState(false);
    const [selectedDETF, setSelectedDETF] = useState("DU5A");

    if (data === null) {
        prices.then(data => setData(data))
    }

    const DETFs = {
        DU5A: {
            name: "DeFier Uniswap 5A",
            ticker: "DU5A",
            coins: ["BAT", "MKR", "SNX", "WBTC", "CDAI"],
            href: "https://drive.google.com/file/d/1vvZBEaO7FG-6BlbJeEBoHV5klB5ShjWj",
            mainnet: false,
            testnet: false
        },
        DU4A: {
            name: "DeFier Uniswap 4A",
            ticker: "DU4A",
            coins: ["BAT", "MKR", "WBTC", "CDAI"],
            href: "https://drive.google.com/file/d/1iRCkgsKj9WWIjsalI9_nFInzEHK05Plh",
            mainnet: false,
            testnet: false
        },
        DU4B: {
            name: "DeFier Uniswap 4B",
            ticker: "DU4B",
            coins: ["BAT", "MKR", "WBTC", "SNX"],
            href: "https://drive.google.com/file/d/1DNet5xIUSVNaevtObVXUbXmOT2vtojLH",
            mainnet: false,
            testnet: false
        },
        DU3A: {
            name: "DeFier Uniswap 3A",
            ticker: "DU3A",
            coins: ["BAT", "MKR", "SNX"],
            href: "https://drive.google.com/file/d/11E7vmCm36wj_eL3GjArGK_6hoCouI5nq",
            mainnet: false,
            testnet: false
        },
        DU2A: {
            name: "DeFier Uniswap 2A",
            ticker: "DU2A",
            coins: ["DAI", "XCHF"],
            href: "https://drive.google.com/file/d/10HbRgQzeRKy9f8zdFsjG2R-v6bQjHzjE",
            mainnet: false,
            testnet: false
        }
    }

    const nextDETF = (name, num) => {
        const keys = Object.keys(DETFs);
        const location = keys.indexOf(name);
        let position = location + num;

        if (position < 0) {
            position = 4;
        } else if (position > 4) {
            position = 0;
        }

        const nextDETF = DETFs[keys[position]];
        setSelectedDETF(nextDETF.ticker)
        setFade(true);
    }


    return (
        <Container>

            <GlobalStyle />
            {data === null ? <Logo src={require(`../assets/img/Logo_fav.png`)} className={classes.animatedLogoImage} alt="icon" /> :
                <ArrowContain>
                    <FaChevronLeft className={classes.faChevronLeft} onClick={() => nextDETF(DETFs[selectedDETF].ticker, -1)} />
                    <Card
                        onAnimationEnd={() => setFade(false)}
                        raised={true}
                        className={fade ? classes.fade : classes.card}
                    >
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom variant="h4" component="h2">
                                {DETFs[selectedDETF].name} 
                            </Typography>
                            
                            <Tooltip title="Term Sheet" aria-label="termSheet" placement="right">
                                <a target="_blank" rel="noopener noreferrer" href={DETFs[selectedDETF].href}>
                                    <Image src={require(`../assets/img/PDF_${DETFs[selectedDETF].ticker}.svg`)} alt="icon" className={classes.FaIcon} />
                                </a>
                            </Tooltip>

                            <Typography variant="h5" color="textSecondary" component="p">
                                Ticker: {DETFs[selectedDETF].ticker}
                            </Typography>

                            <Typography variant="h6" color="textSecondary" component="p">
                                Next Vote: N/A
                            </Typography>

                            <AssetValue>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Market Cap: N/A
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Net Asset Value: N/A
                                </Typography>
                            </AssetValue>

                            <Composition>
                                {data.map(el => {
                                    if (!DETFs[selectedDETF].coins.includes(el.ticker)) {
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
                                <div>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    MainNet
                                </Typography>
                                    { !DETFs[selectedDETF].mainnet ? 
                                        <FaTimesCircle color='red' className={classes.FaIcon} /> : 
                                        <FaCheckCircle color='green' className={classes.FaIcon} /> 
                                    }
                                </div>
                                <div>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    TestNet
                                </Typography>
                                    { !DETFs[selectedDETF].testnet ? 
                                        <FaTimesCircle color='red' className={classes.FaIcon} /> : 
                                        <FaCheckCircle color='green' className={classes.FaIcon} /> 
                                    }
                                </div>
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
                    <FaChevronRight className={classes.faChevronRight} onClick={() => nextDETF(DETFs[selectedDETF].ticker, +1)} />
                </ArrowContain>
            }
        </Container>
    );
}