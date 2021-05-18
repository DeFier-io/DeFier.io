import React from "react";

import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Alert } from "@material-ui/lab";
import Collapse from '@material-ui/core/Collapse'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import { PieChart } from 'react-minimal-pie-chart';

import coinGecko from "../assets/img/CoinGecko.png";
import unicrypt from "../assets/img/unicrypt.svg";
import tokenomics from "../assets/img/Whitepaper.svg";
import etherscan from "../assets/img/etherscan.png";
import uniswap from "../assets/img/uniswapWhite.png";
import github from "../assets/img/SmartContract.svg";

import FlipCountdown from '@rumess/react-flip-countdown';

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const useStyles = makeStyles({
    page: {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    alert: {
        marginTop: "1vh"
    },
    card1: {
        width: "27%",
        backgroundColor: "transparent",
        height: "auto",
        textAlign: "center",

        "@media (max-width: 1024px)": {
            width: "100%",
        }
    },
    card2: {
        width: "27%",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        "@media (max-width: 480px)": {
            display: "none"
        },

        "@media (max-width: 1024px)": {
            display: "none"
        }
    },
    pieChart: {
        width: "60%",
        marginTop: "2%",
        marginBottom: "6%",
    },
    title: {
        fontSize: "4vw",
        color: "#00cc99",
        fontFamily: "Gilroy_Bold, sans-sherif",

        "@media (max-width: 1024px)": {
            fontSize: "7vw"
        }
    },
    subTitle: {
        fontSize: "3.5vw",
        color: "#00cc99",
        fontFamily: "Gilroy_Bold, sans-sherif",

        "@media (max-width: 1024px)": {
            fontSize: "5vw"
        }
    },
    text: {
        color: "#f5f5f5",
        fontSize: "1.1vw",
        fontFamily: "Muli, sans-sherif'",
        textAlign: "center",

        "@media (max-width: 1024px)": {
            fontSize: "3vw"
        }
    },
    img: {
        width: "1.8vw",
        cursor: "pointer",
        marginBottom: "4%",

        "@media (max-width: 1024px)": {
            width: "5vw"
        }
    },
    textIcon: {
        color: "#00cc99",
        fontSize: "1.1vw",
        fontFamily: "Gilroy_Bold, sans-sherif",
        textAlign: "center",

        "@media (max-width: 1024px)": {
            fontSize: "3vw"
        }
    }
})

export default function About() {
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    const dataEntry = [
        { title: 'Pre-Sale', value: 200000, color: '#f5f5f5', label: 5 },
        { title: 'ICO', value: 800000, color: 'orange', label: 20 },
        { title: 'Uniswap', value: 400000, color: '#F578FF', label: 10 },
        { title: 'Team', value: 600000, color: '#00cc99', label: 15 },
        { title: 'ClaimWar', value: 400000, color: '#CE2029', label: 10 },
        { title: 'Dapps', value: 1600000, color: '#ffff00', label: 40 },
    ]

    return (
        <div className={classes.page}>
            <Collapse in={open} timeout="auto">
                <Alert className={classes.alert} severity="error" variant="filled" onClose={() => setOpen(false)}>
                    Please be aware of fake tokens, only use links on this website!
                </Alert>
            </Collapse>
            <Container>
                <Card elevation={0} className={classes.card1}>
                    <CardContent>
                        <Typography className={classes.title}>DeFier Token</Typography>
                        <div style={{ marginBottom: "6%" }}>
                            <Typography className={classes.textIcon}>
                                ICO Launch (TBA)
                            </Typography>
                        </div>
                        <div style={{ marginBottom: "4%" }}>
                            <Typography className={classes.text}>
                                Symbol: DFR
                        </Typography>
                            <Typography className={classes.text}>
                                Price: $0.5
                        </Typography>
                            <Typography className={classes.text}>
                                Token Supply: 4'000'000
                        </Typography>
                            <Typography className={classes.text}>
                                Deflationary: 1% Burn
                        </Typography>
                            <Typography className={classes.text}>
                                Uniswap Liqudity: $400k
                        </Typography>
                        </div>

                        <Grid container style={{ marginTop: "5%" }} spacing={1}>
                            <Grid xs={4}>
                                <Typography className={classes.textIcon}>
                                    Tokenomics
                                </Typography>
                                <img
                                    className={classes.img}
                                    src={tokenomics}
                                    alt=""
                                    draggable="false"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <Typography className={classes.textIcon}>
                                    Smart Contract
                                </Typography>
                                <a 
                                href="https://github.com/DeFier-io/DeFier_Token_Contracts"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                <img
                                    className={classes.img}
                                    src={github}
                                    alt=""
                                    draggable="false"
                                />
                                </a>
                            </Grid>
                            <Grid xs={4}>
                                <Typography className={classes.textIcon}>
                                    Uniswap
                                </Typography>
                                <img
                                    className={classes.img}
                                    src={uniswap}
                                    alt=""
                                    draggable="false"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <Typography className={classes.textIcon}>
                                    CoinGecko
                                </Typography>
                                <img
                                    className={classes.img}
                                    src={coinGecko}
                                    alt=""
                                    draggable="false"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <Typography className={classes.textIcon}>
                                    Etherscan
                                </Typography>
                                <img
                                    className={classes.img}
                                    src={etherscan}
                                    alt=""
                                    draggable="false"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <Typography className={classes.textIcon}>
                                    UniCrypt
                                </Typography>
                                <img
                                    className={classes.img}
                                    src={unicrypt}
                                    alt=""
                                    draggable="false"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card elevation={0} className={classes.card2}>
                    <Typography className={classes.subTitle}>
                        Distribution
                        </Typography>
                    <div className={classes.pieChart}>
                        <PieChart
                            data={dataEntry}
                            lineWidth={21}
                            paddingAngle={15}
                            totalValue={4000000}
                            rounded
                            animationDuration={2500}
                            animate
                            labelStyle={{
                                fontSize: "5px",
                                fontFamily: "sans-serif",
                                fontWeight: "bold",
                                fill: "#f5f5f5",
                            }}
                            label={({ dataEntry }) =>
                                dataEntry.label + "%"
                            }
                            labelPosition={65}
                        />
                    </div>
                    <Grid container style={{ width: "75%" }} spacing={1}>
                        {dataEntry.map((el, index) =>
                            <Grid item xs={6}>
                                <Typography style={{
                                    backgroundColor: el.color,
                                    color: "black"
                                }} className={classes.textSupply}>
                                    {el.title}: {el.value.toLocaleString()}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Card>
            </Container>
        </div >
    )
}

/*
   <FlipCountdown
        size='small'
        hideYear
        theme='dark'
        titlePosition='bottom'
        endAt={'2021-10-16 19:00:00'}
    />
                            */