import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

import img from '../assets/img/Background.png'

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1
`

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  font-size: 3vw;
  margin-left: 2vw;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5vw;
  }
`

const Title = styled.h1`
  color: #272343;
  padding: 0px;
  margin: 0px;
  font-family: 'Gilroy_Bold', 'sans-sherif';
`
const SubTitle = styled.h5`
  color: #4dd599;
  padding: 0px;
  margin: 0px;
  font-family: 'Gilroy', 'sans-sherif';
`

const Text = styled.h6`
  color: #4dd599;
  padding: 0px;
  margin: 0px;
  font-family: 'Gilroy', 'sans-sherif';
`

const StyledButton = styled(Button)`
  margin: 1vw !important;
  font-size: 1vw !important;
  color: #4dd599;
  font-weight: bold !important;

  &:hover {
    color: #272343 !important;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    margin: 2vw !important;
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
      <Image
       src={img}
       alt='illustration'
      />
      <Container>
        <Title>DeFi the Odds</Title>
        <SubTitle>Tokenized Decentralized ETFs</SubTitle>
        <div>
          <MuiThemeProvider theme={ButtonColor}>
            <StyledButton href='https://hackmd.io/'>
              WhitePaper
          </StyledButton>
            <StyledButton style={{ color: "#faf0e6" }} variant="contained" href='https://defier.exchange'>
              Trade Now
          </StyledButton>
          </MuiThemeProvider>
        </div>
      </Container>
      
    </React.Fragment>
  )
}
