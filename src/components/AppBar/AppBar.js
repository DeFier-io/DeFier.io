import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import { FaFilePdf, FaEthereum } from 'react-icons/fa';

import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import logo from '../../assets/img/Logo.svg'
import whiteLogo from '../../assets/img/whiteLogo.svg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    rightToolbar: {
        marginLeft: 'auto'
    },
    appText: {
        textDecoration: 'none',
        fontFamily: "'Gilroy', 'sans-sherif'",
        marginRight: '2vw',
        display: 'inline',
        cursor: 'pointer',
        color: '#f5f5f5',
        fontSize: '1.3vw',

        '&:hover': { color: '#4dd599' },

        '@media (min-width: 320px) and (max-width: 1024px)': {
            fontSize: '2vw !important',
            marginRight: '1vw !important'
        }
    },
    appLogo: {
        width: '9vw !important',

        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '12vw !important',
        }
    },
    appBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    iconList: {
        fontSize: '2.5vh',
        marginRight: "0.2vw",
    },
    whiteLogo: {
        marginRight: '0.2vw',
        width: '2.5vh',
    },
    list: {
        color: '#f5f5f5',
        textDecoration: 'none',
        '&:hover': { color: '#4dd599' }
    }
}));

const muiPaper = createMuiTheme({
    overrides: {
        MuiMenu: {
            paper: {
                backgroundColor: '#272343',
                color: '#f5f5f5',
                marginTop: '1vh'
            }
        }
    }
})

export default function ButtonAppBar() {
    const classes = useStyles();

    const [anchorDoc, setAnchorDoc] = React.useState(null);
    const [anchorDapp, setAnchorDapp] = React.useState(null);
    const [anchorDETF, setAnchorDETF] = React.useState(null);
    const [menuDETF, setMenuDETF] = React.useState(false);

    const open = Boolean(anchorDoc);
    const openDapp = Boolean(anchorDapp);
    const openDETF = Boolean(anchorDETF);

    const handleMenu = event => {
        setAnchorDoc(event.currentTarget);
    };

    const handleMenuDapp = event => {
        setAnchorDapp(event.currentTarget);
    };

    const handleDETF = event => {
        if (!anchorDETF) {
            setAnchorDETF(event.currentTarget);
        }
        setMenuDETF(!menuDETF);
    }

    const handleClose = () => {
        setAnchorDoc(null);
        setAnchorDapp(null);
        setAnchorDETF(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <section>
                        <NavLink draggable="false" to='/'>
                            <img
                                src={logo}
                                className={classes.appLogo}
                                alt="logo"
                                draggable="false"
                            />
                        </NavLink>
                    </section>

                    <section className={classes.rightToolbar}>

                        <NavLink to='/DETF' className={classes.appText} activeStyle={{ color: '#4dd599' }}>
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
                                anchorEl={anchorDoc}
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
                                <MenuItem onClick={handleClose}>
                                    <FaFilePdf className={classes.iconList} />
                                        <a className={classes.list} href='https://hackmd.io/' rel='noopener noreferrer' target='_blank'>
                                            WhitePaper
                                        </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <FaEthereum className={classes.iconList} />
                                        <a className={classes.list} href='https://www.gitbook.com/' rel='noopener noreferrer' target='_blank'>
                                            Smart Contracts
                                        </a>
                                </MenuItem>
                                <MenuItem onClick={handleDETF}>
                                    <img draggable="false" src={whiteLogo} className={classes.whiteLogo} />
                                    <span className={classes.list}>
                                        DETFs
                                    </span>
                                    <ArrowRightIcon />
                                </MenuItem>
                                <Menu
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                    open={openDETF}
                                    anchorEl={anchorDETF}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <img draggable="false" src={whiteLogo} className={classes.whiteLogo} />
                                        <span className={classes.list}>DETF_1</span>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <img draggable="false" src={whiteLogo} className={classes.whiteLogo} />
                                        <span className={classes.list}>DETF_2</span>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <img draggable="false" src={whiteLogo} className={classes.whiteLogo} />
                                        <span className={classes.list}>DETF_3</span>
                                    </MenuItem>
                                </Menu>
                            </Menu>
                        </MuiThemeProvider>

                        <NavLink to='/About' className={classes.appText} activeStyle={{ color: '#4dd599' }}>
                            About Us
                        </NavLink>

                        <MuiThemeProvider theme={muiPaper}>
                            <Typography
                                onClick={handleMenuDapp}
                                aria-haspopup='true'
                                className={classes.appText}>
                                Dapp
                            </Typography>
                            <Menu
                                anchorEl={anchorDapp}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={openDapp}
                                onClose={handleClose}
                                MenuListProps={{ onMouseLeave: handleClose }}
                            >
                                <MenuItem onClick={handleClose}>
                                <img draggable="false" src={whiteLogo} className={classes.whiteLogo} />
                                    <a className={classes.list} href='https://defier.exchange' rel='noopener noreferrer' target='_blank'>
                                        Exchange
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                <img draggable="false" src={whiteLogo} className={classes.whiteLogo} />
                                    <a className={classes.list} href='https://defier.vote' rel='noopener noreferrer' target='_blank'>
                                        Governance
                                    </a>
                                </MenuItem>
                            </Menu>
                        </MuiThemeProvider>
                    </section>
                </Toolbar>
            </AppBar>
        </div >
    );
}