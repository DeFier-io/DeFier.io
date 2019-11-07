import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './appBar.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    rightToolbar: {
        marginLeft: 'auto',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar width="1">
                    <Typography edge="start" variant="h5" className="appText">
                        <b>DeFi</b>er
                    </Typography>

                    <section className={classes.rightToolbar}>
                        <Typography variant="h6" className="appText">
                            <a href="">DETFs</a>
                        </Typography>
                        <Typography variant="h6" className="appText">
                            <a href="">Documents</a>
                        </Typography>
                        <Typography variant="h6" className="appText">
                            <a href="">Company</a>
                        </Typography>
                        <Typography variant="h6" className="appText">
                            <a href="">Dapp</a>
                        </Typography>
                    </section>

                </Toolbar>
            </AppBar>
        </div>
    );
}