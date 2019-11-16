import React from 'react';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

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
        minWidth: '30vw',
        minHeight: '30vh',
        backgroundColor: 'transparent',
    }
});

export default function DETF() {
    const classes = useStyles();

    return (
        <Container>
            <Card raised='true' className={classes.card}>
                Coming Soon
            </Card>
        </Container>
    );
}