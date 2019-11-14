import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import { FaFilePdf, FaEthereum } from 'react-icons/fa';

import SVGAnimation from '../SVGAnimation/SVGAnimation'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    rightToolbar: {
        marginLeft: 'auto',
    },
    appText: {
        textDecoration: 'none',
        color: '#faf0e6',
        fontFamily: "'Gilroy', 'sans-sherif'",
        marginRight: '1vw',
        display: 'inline',
        cursor: 'pointer',
        color: '#faf0e6',
        fontSize: '1.1vw',

        '&:hover': { color: '#576E9A' },

        ['@media (min-width: 320px) and (max-width: 1024px)']: {
            fontSize: '2.7vw !important',
            marginRight: '2vw !important'
        }
    },
    appLog: {
        ['@media (min-width: 320px) and (max-width: 1024px)']: {
            fontSize: '2.7vw !important',
            marginRight: '2vw !important'
        }
    },
    appBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    iconList: {
        marginRight: '5%',
        fontSize: '2vh'
    },
    list: {
        '&:hover': { color: '#ef4a4e' }
    }
}));

const muiPaper = createMuiTheme({
    overrides: {
        MuiMenu: {
            paper: {
                backgroundColor: '#576E9A',
                color: '#faf0e6',
                marginTop: '1vh'
            }
        }
    }
})

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
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <section>
                        <NavLink to='/'>
                            <SVGAnimation className={classes.appLogo}/>
                        </NavLink>
                    </section>

                    <section className={classes.rightToolbar}>

                        <NavLink to='/DETF' className={classes.appText} activeStyle={{ color: '#576E9A' }}>
                            DETFs
                        </NavLink>

                        <MuiThemeProvider theme={muiPaper}>
                            <Typography
                                onClick={handleMenu}
                                aria-haspopup='true'
                                className={classes.appText}>
                                Documents
                        </Typography>
                            <Menu

                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{ onMouseLeave: handleClose }}
                            >
                                <MenuItem className={classes.list} onClick={handleClose}><FaFilePdf className={classes.iconList} /> WhitePaper</MenuItem>
                                <MenuItem className={classes.list} onClick={handleClose}><FaEthereum className={classes.iconList} /> Smart Contracts</MenuItem>
                            </Menu>
                        </MuiThemeProvider>

                        <NavLink to='/About' className={classes.appText} activeClassName='hurray'>
                            About Us
                        </NavLink>

                        <a className={classes.appText} href='https://defier.exchange' rel='noopener noreferrer' target='_blank'>Dapp</a>

                    </section>
                </Toolbar>
            </AppBar>
        </div >
    );
}