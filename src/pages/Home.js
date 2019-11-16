import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

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

const Title = styled.h1`
  color: #FF5A09;
  padding: 0px;
  margin: 0px;
  font-family: 'Gilroy_Bold', 'sans-sherif';
`
const SubTitle = styled.h5`
  color: #faf0e6;
  padding: 0px;
  margin: 0px;
  font-family: 'Gilroy', 'sans-sherif';
`

const Text = styled.h6`
  color: #faf0e6;
  padding: 0px;
  margin: 0px;
  font-family: 'Gilroy', 'sans-sherif';
`

const StyledButton = styled(Button)`
  margin: 1vw !important;
  -webkit-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  -moz-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  
  &:hover {
    color: #576E9A;
    background: linear-gradient(to bottom right, #FF5A09 , #faf0e6);
    transition: all 0.4s ease 0s;
    -webkit-box-shadow: 0 6px 6px -6px black;
    -moz-box-shadow: 0 6px 6px -6px black;
    box-shadow: 0 6px 6px -6px black;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    margin: 2vw !important;
    font-size: 2.3vw !important;
  }
`
StyledButton.defaultProps = {
  variant: 'outlined',
  color: 'primary',
  size: 'large',
  component: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
};

const ButtonColor = createMuiTheme({
  palette: { primary: { main: '#faf0e6' } }
})

export default function Home() {
  return (
    <Container>
      <Title>DeFi the Odds</Title>
      <SubTitle>Tokenized Decentralized ETFs</SubTitle>
      <Text>coming soon</Text>
      <div>
        <MuiThemeProvider theme={ButtonColor}>
          <StyledButton href='https://www.gitbook.com'>
            WhitePaper
          </StyledButton>
          <StyledButton href='https://defier.exchange'>
            Trade Now
          </StyledButton>
        </MuiThemeProvider>
      </div>
    </Container>
  )
}
