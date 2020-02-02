import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavLink } from "react-router-dom";

import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import logo from "../../assets/img/Logo.svg";
import twoA from "../../assets/img/2A.svg";
import threeA from "../../assets/img/3A.svg";
import fourA from "../../assets/img/4A.svg";
import fourB from "../../assets/img/4B.svg";
import fiveA from "../../assets/img/5A.svg";
import Exchange from "../../assets/img/Exchange.svg";
import Governance from "../../assets/img/Governance.svg";
import whiteLogo from "../../assets/img/whiteLogo.svg";
import SmartContractLogo from "../../assets/img/SmartContract.svg";
import whitepaper from "../../assets/img/Whitepaper.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menu: {},
  rightToolbar: {
    marginLeft: "auto"
  },
  appText: {
    textDecoration: "none",
    fontFamily: "'Gilroy', 'sans-sherif'",
    marginRight: "2vw",
    display: "inline",
    cursor: "pointer",
    color: "#f5f5f5",
    fontSize: "1.3vw",

    "&:hover": { color: "#4dd599" },

    "@media (max-width: 1024px)": {
      fontSize: "3vw",
      marginRight: "2vw",
      color: "#272343"
    }
  },
  appLogo: {
    width: "9vw",

    "@media (max-width: 1024px)": {
      width: "30vw"
    }
  },
  appBar: {
    background: "transparent",
    boxShadow: "none"
  },
  iconList: {
    fontSize: "1.6vw",
    marginRight: "0.2vw",

    "@media (max-width: 1024px)": {
      fontSize: "5vw",
      marginRight: "1vw"
    }
  },
  whiteLogo: {
    marginRight: "0.2vw",
    width: "2vw",
    "@media (max-width: 1024px)": {
      marginRight: "1vw",
      width: "5vw"
    }
  },
  list: {
    color: "#f5f5f5",
    fontSize: "1.3vw",
    textDecoration: "none",
    "&:hover": { color: "#4dd599" },
    "@media (max-width: 1024px)": {
      fontSize: "4vw",
      marginRight: "1vw"
    }
  }
}));

const muiPaper = createMuiTheme({
  overrides: {
    MuiMenu: {
      paper: {
        backgroundColor: "#272343",
        color: "#f5f5f5",
        marginTop: "1vh"
      }
    }
  }
});

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
  };

  const handleClose = () => {
    setAnchorDoc(null);
    setAnchorDapp(null);
    setAnchorDETF(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <section>
            <NavLink draggable="false" to="/">
              <img
                src={logo}
                className={classes.appLogo}
                alt="logo"
                draggable="false"
              />
            </NavLink>
          </section>

          <section className={classes.rightToolbar}>
            <div className={classes.menu}>
              <NavLink
                to="/DETF"
                className={classes.appText}
                activeStyle={{ color: "#4dd599" }}
              >
                DETFs
              </NavLink>

              <MuiThemeProvider theme={muiPaper}>
                <Typography
                  onClick={handleMenu}
                  aria-haspopup="true"
                  className={classes.appText}
                >
                  Documents
                </Typography>
                <Menu
                  anchorEl={anchorDoc}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <MenuItem onClick={handleClose}>
                    <img
                      draggable="false"
                      src={whitepaper}
                      alt="whitepaper_logo"
                      className={classes.whiteLogo}
                    />

                    <a
                      className={classes.list}
                      href="https://hackmd.io/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      WhitePaper
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <img
                      draggable="false"
                      src={SmartContractLogo}
                      alt="smartContract_logo"
                      className={classes.whiteLogo}
                    />
                    <a
                      className={classes.list}
                      href="https://www.gitbook.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Smart Contracts
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleDETF}>
                    <img
                      draggable="false"
                      src={whiteLogo}
                      alt="detf_logo"
                      className={classes.whiteLogo}
                    />
                    <span className={classes.list}>DETFs</span>
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
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1vvZBEaO7FG-6BlbJeEBoHV5klB5ShjWj"
                      >
                        <img
                          draggable="false"
                          src={fiveA}
                          alt="DU5A_logo"
                          className={classes.whiteLogo}
                        />
                        <span className={classes.list}>DU5A</span>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1iRCkgsKj9WWIjsalI9_nFInzEHK05Plh"
                      >
                        <img
                          draggable="false"
                          src={fourA}
                          alt="DU4A_logo"
                          className={classes.whiteLogo}
                        />
                        <span className={classes.list}>DU4A</span>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1DNet5xIUSVNaevtObVXUbXmOT2vtojLH"
                      >
                        <img
                          draggable="false"
                          src={fourB}
                          alt="DU4B_logo"
                          className={classes.whiteLogo}
                        />
                        <span className={classes.list}>DU4B</span>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/10zImGbZAr2a1ivDYQwTQHeMifICmYkNP"
                      >
                        <img
                          draggable="false"
                          src={threeA}
                          alt="DU3A_logo"
                          className={classes.whiteLogo}
                        />
                        <span className={classes.list}>DU3A</span>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/10HbRgQzeRKy9f8zdFsjG2R-v6bQjHzjE"
                      >
                        <img
                          draggable="false"
                          src={twoA}
                          alt="DU2A_logo"
                          className={classes.whiteLogo}
                        />
                        <span className={classes.list}>DU2A</span>
                      </a>
                    </MenuItem>
                  </Menu>
                </Menu>
              </MuiThemeProvider>

              <NavLink
                to="/About"
                className={classes.appText}
                activeStyle={{ color: "#4dd599" }}
              >
                About Us
              </NavLink>

              <MuiThemeProvider theme={muiPaper}>
                <Typography
                  onClick={handleMenuDapp}
                  aria-haspopup="true"
                  className={classes.appText}
                >
                  Dapp
                </Typography>
                <Menu
                  anchorEl={anchorDapp}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  open={openDapp}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <MenuItem onClick={handleClose}>
                    <img
                      draggable="false"
                      src={Exchange}
                      alt="defierEx_logo"
                      className={classes.whiteLogo}
                    />
                    <a
                      className={classes.list}
                      href="https://defier.exchange"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Exchange
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <img
                      draggable="false"
                      src={Governance}
                      alt="defierVote_logo"
                      className={classes.whiteLogo}
                    />
                    <a
                      className={classes.list}
                      href="https://defier.vote"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Governance
                    </a>
                  </MenuItem>
                </Menu>
              </MuiThemeProvider>
            </div>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}
