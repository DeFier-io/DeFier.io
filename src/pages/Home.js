import React from "react";

import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import whiteLogo from "../assets/img/whiteLogo.svg";
import UniswapLogo from "../assets/img/Governance.svg";

import styled, { createGlobalStyle } from "styled-components";

import homePage from "../assets/img/homePage.png";

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${homePage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

const useStyles = makeStyles(theme => ({
  logo: {
    marginRight: "0.2vw",
    width: "2.3vw",
    "@media (max-width: 1024px)": {
      marginRight: "1vw",
      width: "5vw"
    }
  }
}));

const Container = styled.div`
  font-size: 3vw;
  margin-left: 2vw;
  margin-top: 20vh;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 5vw;
  }
`;

const Title = styled.h1`
  color: #00cc99;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  font-family: "Gilroy_Bold", "sans-sherif";
  font-weight: normal;

  @media (max-width: 1024px) {
    align-items: center;
    font-size: 10vw;
  }
`;
const SubTitle = styled.h2`
  color: #f5f5f5;
  font-size: 2.5vw;
  padding: 0 0 0 0;
  margin: -1vh 0 0 0;
  font-family: "Muli", "sans-sherif";

  @media (max-width: 1024px) {
    font-size: 5vw;
    margin: 0 0 0 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 4vh;
  margin-left: 0;
  margin-right: 2vw;
  font-size: 1.5vw;
  font-weight: bold;
  border-radius: 30px;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    margin-top: 2vh;
    font-size: 3vw;
    margin-top: 3vh;
  }
`;
StyledButton.defaultProps = {
  color: "primary",
  variant: "outlined",
  size: "large",
  component: "button",
  rel: "noopener noreferrer",
  target: "_blank",
};

const ButtonColor = createMuiTheme({
  palette: { primary: { main: "#00cc99" } }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <GlobalStyle />
      <Title>DeFi the Odds</Title>
      <SubTitle>Next-gen DeFi Applications</SubTitle>
      <div>
        <MuiThemeProvider theme={ButtonColor}>
          <StyledButton style={{ color: "#f5f5f5" }}>
            <img
              draggable="false"
              src={UniswapLogo}
              alt=""
              className={classes.logo}
            />
            ICO (TBA)
          </StyledButton>
          <StyledButton
            variant="contained"
            style={{ color: "#f5f5f5" }}
            href="https://defier.finance/"
          ><img
              draggable="false"
              src={whiteLogo}
              alt=""
              className={classes.logo}
            />
            DashBoard
          </StyledButton>
        </MuiThemeProvider>
      </div>
    </Container>
  );
}
