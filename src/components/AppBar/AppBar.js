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

import logo from "../../assets/img/logo_white.svg";
import Claimwar from "../../assets/img/Claimwar.svg";
import Governance from "../../assets/img/Governance.svg";
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

    "&:hover": { color: "#00cc99" },

    "@media (max-width: 1024px)": {
      fontSize: "3vw",
      marginRight: "2vw",
      color: "#f5f5f5"
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
    "&:hover": { color: "#00cc99" },
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
        backgroundColor: "#000A25",
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

  const open = Boolean(anchorDoc);
  const openDapp = Boolean(anchorDapp);

  const handleMenu = event => {
    setAnchorDoc(event.currentTarget);
  };

  const handleMenuDapp = event => {
    setAnchorDapp(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorDoc(null);
    setAnchorDapp(null);
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
                  Dapps
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
                      src={Claimwar}
                      alt="defierEx_logo"
                      className={classes.whiteLogo}
                    />
                    <a
                      className={classes.list}
                      href="https://claimwar.io"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      ClaimWar
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
