import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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
                        <Typography variant="h6" className="appLogo">
                            <b>DeFi</b>er
                        </Typography>
                    </section>

                    <section className={classes.rightToolbar}>
                        <Typography variant="h6" className="appText">
                            <a href="">DETFs</a>
                        </Typography>
                        <Typography variant="h6" className="appText">
                            <a href="">Company</a>
                        </Typography>
                        <Typography
                            onClick={handleMenu}  
                            aria-haspopup="true"
                            variant="h6"
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
                                <MenuItem className="list" onClick={handleClose}>WhitePaper</MenuItem>
                                <MenuItem className="list" onClick={handleClose}>Smart Contracts</MenuItem>
                            </Menu>
                        <Typography variant="h6" className="appText">
                            <a href="">Dapp</a>
                        </Typography>
                    </section>

                </Toolbar>
            </AppBar>
        </div>
    );
}