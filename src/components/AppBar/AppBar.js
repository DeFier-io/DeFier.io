import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FaFilePdf, FaEthereum } from 'react-icons/fa';

import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

import './AppBar.css';

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar className="appBarContainer">
                    <section>
                        <NavLink to="/" className="appLogo">
                            <b>DeFi</b>er
                        </NavLink>
                    </section>

                    <section className={classes.rightToolbar}>

                        <NavLink to="/DETF" className="appText" activeClassName="hurray">
                            DETFs
                        </NavLink>

                        <Typography
                            onClick={handleMenu}
                            aria-haspopup="true"
                            className="appText">
                            Documents
                        </Typography>
                        <Menu
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                        >
                            <MenuItem className="list" onClick={handleClose}><FaFilePdf className="iconList" /> WhitePaper</MenuItem>
                            <MenuItem className="list" onClick={handleClose}><FaEthereum className="iconList" /> Smart Contracts</MenuItem>
                        </Menu>

                        <NavLink to="/About" className="appText" activeClassName="hurray">
                            About Us
                        </NavLink>

                        <Typography className="appText">
                            Dapp
                        </Typography>
                    </section>
                </Toolbar>
            </AppBar>
        </div >
    );
}