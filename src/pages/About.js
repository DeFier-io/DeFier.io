import React from 'react';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';

import { FaUndo } from 'react-icons/fa';

import styled from 'styled-components';

import simpleLogo from '../assets/img/simpleLogo.svg'
import defi from '../assets/img/defi.svg'
import ethereum from '../assets/img/ethereum.svg'

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 3vw;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5vw;
  }
`
const useStyles = makeStyles({
    card: {
        width: '30vw',
        backgroundColor: 'transparent',

        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '40vw'
        }
    },
    media: {
        height: '4vw'
    },
    text: {
        color: '#faf0e6',
        textAlign: 'justify',
        fontSize: '1vw',
        fontFamily: "'Gilroy_bold', 'sans-sherif'",
    },
    text2: {
        color: '#faf0e6',
        textAlign: 'justify',
        fontSize: '1vw',
        fontFamily: "'Gilroy', 'sans-sherif'",
    },
    title: {
        fontSize: "2vw",
        color: '#FF5A09',
        fontFamily: "'Gilroy', 'sans-sherif'"
    },
    cardAction: {
        display: "flex",
        justifyContent: "center",
    },
    fa: {
        color: "#fff",
        "&:hover": { color: "#FF5A09" }
    },
    side: {
        padding: "0.5vw"
    },
    icons: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "5%",

        '@media (min-width: 320px) and (max-width: 1024px)': {
            marginTop: "0",
        }
    }
});

export default function About() {
    const classes = useStyles();

    return (
        <Container >
            <Flippy
                flipOnClick={true}
            >
                <BackSide className={classes.side}>
                    <div className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={simpleLogo}
                        />
                        <CardContent>
                            <Typography className={classes.title}>
                                DeFi<span style={{color:"#faf0e6"}}>er</span>
                            </Typography>
                            <Typography className={classes.text}>
                                Our mission is to <span style={{ color: "#FF5A09" }}>promote</span> the
                                <spa> <u style={{ cursor: "pointer" }}>DeFi</u></spa> movement to
                                the general public by facilitating the <span style={{ color: "#FF5A09" }}>production</span>,
                                <span style={{ color: "#FF5A09" }}> issuance</span>, and <span style={{ color: "#FF5A09" }}>
                                    redemption </span> of tokenized Decentralized Exchange Traded Funds also known
                                as <span style={{ color: "#FF5A09" }}>DETFs</span> on the Ethereum network.
                            </Typography>
                        </CardContent>
                        <div className={classes.icons}>
                            <a href="https://defi.network/" rel="noopener noreferrer" draggable="false"target="_blank" >
                                <img style={{ width: "8vw" }} src={defi} draggable="false"/>
                            </a>
                            <a href="https://ethereum.org/" rel="noopener noreferrer" draggable="false" target="_blank" >
                                <img style={{ width: "12vw" }} src={ethereum} draggable="false"/>
                            </a>
                        </div>
                    </div>
                </BackSide>

                <FrontSide className={classes.side}>
                    <div className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={simpleLogo}
                        />
                        <CardContent>
                            <Typography className={classes.title}>
                                DeFi
                            </Typography>
                            <Typography className={classes.text2}>
                                Decentralized Finance also known as <span style={{ color: "#FF5A09" }}>DeFi</span> is a
                                movement promoting the idea that anyone can redesign traditional financial instruments and
                                services in a decentralized architecture leveraging <span style={{ color: "#FF5A09" }}>decentralized networks</span>, <span style={{ color: "#FF5A09" }}>open source libraries</span> and <span style={{ color: "#FF5A09" }}>smart contracts </span> to
                                offer users a permissionless, trustless and transparent financial industry.
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                            <IconButton style={{ fontSize: "1.5vw" }}>
                                <FaUndo className={classes.fa} />
                            </IconButton>
                        </CardActions>
                    </div>
                </FrontSide>
            </Flippy>

        </Container>
    );
}