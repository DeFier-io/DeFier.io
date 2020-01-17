import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import defi from '../assets/img/DeFi.png'
import ethereum from '../assets/img/Ethereum.png'

import styled, { createGlobalStyle } from 'styled-components'

import imgMobile from '../assets/img/AboutPageMobile.png';
import imgDesktop from '../assets/img/backgroundAboutUs.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    background-image: url(${imgDesktop});
    background-position: top right;
    background-repeat: no-repeat;    
    background-size: 50vw auto;

    @media (min-width: 320px) and (max-width: 1024px) {
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
  margin-top: 3vh;
  justify-content: space-around;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 1024px) {
    margin: 0;
    flex-direction: column;
    justify-content: none;
  }
`

const useStyles = makeStyles({
    card: {
        width: '30vw',
        backgroundColor: 'transparent',

        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '100vw'
        }
    },
    text: {
        color: '#f5f5f5',
        textAlign: 'justify',
        fontSize: '1.5vw',
        fontFamily: "Muli, sans-sherif",

        "@media (min-width: 320px) and (max-width: 1024px)": {
            fontSize: '4vw',
        }
    },
    text2: {
        color: '#272343',
        textAlign: 'justify',
        fontSize: '1.5vw',
        fontFamily: "Muli, sans-sherif'",
        
        "@media (min-width: 320px) and (max-width: 1024px)": {
            fontSize: '4vw',
        }
    },
    rightTitle: {
        fontSize: "3vw",
        color: '#f5f5f5',
        fontFamily: "Gilroy_Bold, sans-sherif",

        "@media (min-width: 320px) and (max-width: 1024px)": {
            fontSize: '7vw',
        }
    },
    leftTitle: {
        fontSize: "3vw",
        color: '#272343',
        fontFamily: "Gilroy_Bold, sans-sherif",

        "@media (min-width: 320px) and (max-width: 1024px)": {
            fontSize: '7vw',
        }
    },
    leftCard: {
        backgroundColor: "transparent"
    },
    rightCard: {
        backgroundColor: "transparent"
    },
    logo: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "5%",

        '@media (min-width: 320px) and (max-width: 1024px)': {
            marginTop: "0",
        }
    },
    img1: {
        width: "8vw",

        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: "27vw",
        }
    },
    img2: {
        width: "12vw",

        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: "30vw",
        }
    }
});

export default function About() {
    const classes = useStyles();

    return (
        <Container >
            <GlobalStyle />
            <Card elevation={0} className={classes.rightCard}>
                <div className={classes.card}>
                    <CardContent>
                        <Typography className={classes.leftTitle}>
                            DeFi
                            </Typography>
                        <Typography className={classes.text2}>
                            Decentralized Finance also known as <span style={{ color: "#4dd599" }}>DeFi</span> is a
                            movement promoting the idea that anyone can redesign traditional financial instruments and
                                services in a decentralized architecture leveraging <span style={{ color: "#4dd599" }}>decentralized networks</span>, <span style={{ color: "#4dd599" }}>open source libraries</span> and <span style={{ color: "#4dd599" }}>smart contracts </span> to
                            offer users a permissionless, trustless and transparent financial industry.
                            </Typography>
                    </CardContent>
                    <div className={classes.logo}>
                        <a href="https://defi.network/" rel="noopener noreferrer" draggable="false" target="_blank" >
                            <img className={classes.img1} src={defi} draggable="false" />
                        </a>
                    </div>
                </div>
            </Card>

            <Card elevation={0} className={classes.leftCard}>
                <div className={classes.card}>
                    <CardContent>
                        <Typography className={classes.rightTitle}>
                            DeFier
                            </Typography>
                        <Typography className={classes.text}>
                            Our mission is to <span style={{ color: "#4dd599" }}>promote</span> the
                                <span> DeFi </span> movement to
                                the general public by facilitating the <span style={{ color: "#4dd599" }}>production</span>,
                                <span style={{ color: "#4dd599" }}> issuance</span>, and <span style={{ color: "#4dd599" }}>
                                redemption </span> of tokenized Decentralized Exchange Traded Funds also known
                                as <span style={{ color: "#4dd599" }}>DETFs</span> on the Ethereum network.
                            </Typography>
                    </CardContent>
                    <div className={classes.logo}>
                        <a href="https://ethereum.org/" rel="noopener noreferrer" draggable="false" target="_blank" >
                            <img className={classes.img2} src={ethereum} draggable="false" />
                        </a>
                    </div>
                </div>
            </Card>


        </Container>
    );
}