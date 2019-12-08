import React from 'react';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 3vw;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5vw;
    flex-direction: column;
  }
`

const useStyles = makeStyles({
    card: {
        minWidth: '20vw',
        minHeight: '30vh',
        backgroundColor: 'transparent',
        color: "#f5f5f5",
        textAlign: "center",

        "@media (min-width: 320px) and (max-width: 1024px)": {
            minWidth: '50vw',
            minHeight: '15vh',
        }
    }
});

export default function DETF() {
    const classes = useStyles();

    return (
        <Container>
            <Card raised='true' className={classes.card}>
                <h3>DETF_1</h3>
            </Card>
            <Card raised='true' className={classes.card}>
                <h3>DETF_2</h3>
            </Card>
            <Card raised='true' className={classes.card}>
                <h3>DETF_3</h3>
            </Card>
        </Container>
    );
}