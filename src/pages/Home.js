import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styled, { createGlobalStyle } from 'styled-components';

import img from '../assets/img/Background.png';
import imgMobile from '../assets/img/HomePageMobile.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img});
    background-position: top right;
    background-repeat: no-repeat;    
    background-size: 53vw auto;
    
    @media (max-width: 1024px) {
      background-image: url(${imgMobile});
      background-position: bottom;
      background-repeat: no-repeat;    
      background-size: 100vw auto;
      margin: 0;
    }
  }
  `

const Container = styled.div`
  font-size: 3vw;
  margin-left: 2vw;
  margin-top: 20vh;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    font-size: 5vw;
    margin-top: 6vh;
  }
`

const Title = styled.h1`
  color: #272343;
  padding: 0;
  margin: 0;
  font-family: 'Gilroy_Bold', 'sans-sherif';
  font-weight: normal;

  @media (max-width: 1024px) {
    align-items: center;
    font-size: 10vw;
  }

`
const SubTitle = styled.h2`
  color: #4dd599;
  font-size: 2.5vw;
  padding: 0;
  margin: -2vh 0 0 0;
  font-family: 'Muli', 'sans-sherif';

  @media (max-width: 1024px) {
    font-size: 5vw;
    margin: 0 0 0 0;
  }
`


const StyledButton = styled(Button)`
  margin-top: 4vh !important;
  margin-left: 0 !important;
  margin-right: 2vw !important;
  font-size: 1.5vw !important;
  font-weight: bold !important;
  border-radius: 30px !important;

  @media (max-width: 1024px) {
    margin-top: 2vh !important;
    font-size: 3vw !important;
    margin-top: 3vh !important;
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

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Title>DeFi the Odds</Title>
      <SubTitle>Tokenized Decentralized ETFs</SubTitle>
      <div>
        <MuiThemeProvider theme={ButtonColor}>
          <StyledButton style={{ color: "#272343" }} href='https://hackmd.io/'>
            WhitePaper
          </StyledButton>
          <StyledButton style={{ color: "#f5f5f5" }} variant="contained" href='https://defier.exchange'>
            Trade Now
          </StyledButton>
        </MuiThemeProvider>
      </div>
    </Container>
  )
}
