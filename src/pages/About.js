import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import defi from "../assets/img/DeFi.png";
import ethereum from "../assets/img/Ethereum.png";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000A25;
  }
`;

const Container = styled.div`
  min-height: 100%;
  display: flex;
  margin-top: 10vh;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: 480px) {
    justify-content: space-around;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const useStyles = makeStyles({
  card: {
    width: "35vw",
    backgroundColor: "transparent",
    height: "60vh",

    "@media (max-width: 480px)": {
      height: "40vh !important"
    },

    "@media (max-width: 1024px)": {
      width: "auto",
      height: "40vh !important"
    }
  },
  text: {
    color: "#f5f5f5",
    textAlign: "justify",
    fontSize: "1.5vw",
    fontFamily: "Muli, sans-sherif",

    "@media (max-width: 1024px)": {
      fontSize: "3vw"
    }
  },
  text2: {
    color: "#f5f5f5",
    textAlign: "justify",
    fontSize: "1.5vw",
    fontFamily: "Muli, sans-sherif'",

    "@media (max-width: 1024px)": {
      fontSize: "3vw"
    }
  },
  rightTitle: {
    fontSize: "3vw",
    color: "#00cc99",
    fontFamily: "Gilroy_Bold, sans-sherif",

    "@media (max-width: 1024px)": {
      fontSize: "7vw"
    }
  },
  leftTitle: {
    fontSize: "3vw",
    color: "#00cc99",
    fontFamily: "Gilroy_Bold, sans-sherif",

    "@media (max-width: 1024px)": {
      fontSize: "7vw"
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

    "@media (max-width: 1024px)": {
      marginTop: "0"
    }
  },
  img1: {
    width: "8vw",

    "@media (max-width: 1024px)": {
      width: "27vw"
    }
  },
  img2: {
    width: "12vw",

    "@media (max-width: 1024px)": {
      width: "30vw"
    }
  }
});

export default function About() {
  const classes = useStyles();

  return (
    <Container>
      <GlobalStyle />
      <Card elevation={0} className={classes.rightCard}>
        <div className={classes.card}>
          <CardContent>
            <Typography className={classes.leftTitle}>DeFi</Typography>
            <Typography className={classes.text2}>
              Decentralized Finance also known as{" "}
              <span style={{ color: "#00cc99" }}>DeFi</span> is a movement
              promoting the idea that anyone can redesign traditional financial
              instruments and services in a decentralized architecture
              leveraging{" "}
              <span style={{ color: "#00cc99" }}>decentralized networks</span>,{" "}
              <span style={{ color: "#00cc99" }}>open source libraries</span>{" "}
              and <span style={{ color: "#00cc99" }}>smart contracts </span> to
              offer users a permissionless, trustless and transparent financial
              industry.
            </Typography>
          </CardContent>
          <div className={classes.logo}>
            <a
              href="https://defi.network/"
              rel="noopener noreferrer"
              draggable="false"
              target="_blank"
            >
              <img
                className={classes.img1}
                src={defi}
                alt="defi_logo"
                draggable="false"
              />
            </a>
          </div>
        </div>
      </Card>

      <Card elevation={0} className={classes.leftCard}>
        <div className={classes.card}>
          <CardContent>
            <Typography className={classes.rightTitle}>DeFier</Typography>
            <Typography className={classes.text}>
              Our mission is to
              <span style={{ color: "#00cc99" }}> promote</span> the
              <span> DeFi </span> movement to the general public by facilitating
              the <span style={{ color: "#00cc99" }}>creation </span> of innovative
              <span style={{ color: "#00cc99" }}> Decentralized Financial Applications </span>
              on the Ethereum network. <a href="https://www.gitbook.com/" style={{ color: "#00cc99" }}>
                DeFier Token (DFR)</a> holders will shape the innovation process by
                voting on critical issues.
            </Typography>
          </CardContent>
          <div className={classes.logo}>
            <a
              href="https://ethereum.org/"
              rel="noopener noreferrer"
              draggable="false"
              target="_blank"
            >
              <img
                className={classes.img2}
                src={ethereum}
                alt="ethereum_logo"
                draggable="false"
              />
            </a>
          </div>
        </div>
      </Card>
    </Container>
  );
}
