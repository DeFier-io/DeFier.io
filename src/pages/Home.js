import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styled, { createGlobalStyle }  from 'styled-components';

import img from '../assets/img/Background.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img});
    background-position: top right;
    background-repeat: no-repeat;    
    background-size: 50vw auto;
  }
  `

const Container = styled.div`
  display: flex;
  align-items: left;
  margin-top: 15vh !important;
  height: auto;
  flex-direction: column;
  font-size: 3vw;
  margin-left: 2vw;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5vw;
  }
`

const Title = styled.h1`
  color: #272343;
  font-size: 5vw;
  padding: 0;
  margin: 0;
  font-family: 'Gilroy_Bold', 'sans-sherif';
`
const SubTitle = styled.h2`
  color: #4dd599;
  font-size: 2vw;
  padding: 0;
  margin: 0;
  font-family: 'Muli', 'sans-sherif';
`


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

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Title>DeFi the Odds</Title>
        <SubTitle>Tokenized Decentralized ETFs</SubTitle>
        <div>
          <MuiThemeProvider theme={ButtonColor}>
            <StyledButton style={{ color: "#272343" }}  href='https://hackmd.io/'>
              WhitePaper
          </StyledButton>
            <StyledButton style={{ color: "#f5f5f5" }} variant="contained" href='https://defier.exchange'>
              Trade Now
          </StyledButton>
          </MuiThemeProvider>
        </div>
      </Container>

    </React.Fragment>
  )
}
