import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/img/icons/logo.png";
import { getIsSignedIn } from "../../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import HeaderMenus from "./HeaderMenu";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#444"
  },
  toolBar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%"
  },
  iconButtons: {
    margin: "0 0 0 auto"
  }
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <img
            src={logo}
            alt="Trahack Logo"
            width="128px"
            onClick={() => dispatch(push("/"))}
          />
          {isSignedIn && (
            <div className={classes.iconButtons}>
              <HeaderMenus />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
