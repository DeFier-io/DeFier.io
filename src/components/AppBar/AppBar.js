import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import { FaFilePdf, FaEthereum } from 'react-icons/fa';

import logoWhite from '../../assets/img/logo_white.svg'
import logo from '../../assets/img/logo.svg'
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
        marginRight: '1vw',
        display: 'inline',
        cursor: 'pointer',
        color: '#faf0e6',
        fontSize: '1.1vw',

        '&:hover': { color: '#576E9A' },

        '@media (min-width: 320px) and (max-width: 1024px)': {
            fontSize: '2.7vw !important',
            marginRight: '2vw !important'
        }
    },
    appLogo:{
        width: '6vw !important',

        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '12vw !important',
        }
    },
    appBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    iconList: {
        marginRight: '5%',
        fontSize: '2.5vh'
    },
    whiteLogo:{
        marginRight: '5%',
        width: '2.5vh',
    },
    list: {
        '&:hover': { color: '#FF5A09' }
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
    const [img, setImg] = React.useState(logoWhite);

    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handelHover = () => {
        setImg(logo);
    };

    const handelLeave = () => {
        setImg(logoWhite);
    };

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <section>
                        <NavLink draggable="false" to={process.env.PUBLIC_URL + '/'} >
                            <img 
                                src={img} 
                                className={classes.appLogo} 
                                alt="logo"
                                onMouseEnter={handelHover}
                                onMouseLeave={handelLeave}
                                draggable="false"
                                />
                        </NavLink>
                    </section>

                    <section className={classes.rightToolbar}>

                        <NavLink to={process.env.PUBLIC_URL + '/DETF'}  className={classes.appText} activeStyle={{ color: '#576E9A' }}>
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
                                <MenuItem onClick={handleClose}><FaFilePdf className={classes.iconList} /><span className={classes.list}>WhitePaper</span></MenuItem>
                                <MenuItem onClick={handleClose}><FaEthereum className={classes.iconList} /><span className={classes.list}>Smart Contracts</span></MenuItem>
                                <MenuItem onClick={handleClose}><img draggable="false" src={whiteLogo} className={classes.whiteLogo} /><span className={classes.list}>DETFs</span></MenuItem>
                            </Menu>
                        </MuiThemeProvider>

                        <NavLink to={process.env.PUBLIC_URL + '/About'}  className={classes.appText} activeStyle={{ color: '#576E9A' }}>
                            About Us
                        </NavLink>

                        <a className={classes.appText} href='https://defier.exchange' rel='noopener noreferrer' target='_blank'>Dapp</a>

                    </section>
                </Toolbar>
            </AppBar>
        </div >
    );
}