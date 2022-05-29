import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";
import { RootState } from "../../lib/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../lib/redux/user/userStore";
import {
  Drawer,
  useMediaQuery,
  List,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useScrollTrigger,
  CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import theme from "../../lib/styles/theme";
import LoginMenu from "./LoginMenu";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: "-15px",
    },
    title: {
      flexGrow: 1,
    },
    overDrawer: {
      [theme.breakpoints.down("sm")]: {
        zIndex: theme.zIndex.drawer + 400,
      },
    },
    appBar: {
      [theme.breakpoints.down("sm")]: {
        zIndex: theme.zIndex.drawer + 400,
      },
      width: "100vw",
      backgroundColor: "transparent",
      boxShadow: "unset",
      transition: "all .3s ease-out",
    },
    appBarElevate: {
      [theme.breakpoints.down("sm")]: {
        zIndex: theme.zIndex.drawer + 400,
      },
      width: "100vw",
      backgroundColor: "white",
      boxShadow: "0 2px 12px rgb(0 0 0 / 10%)",
      transition: " all .3s ease-out",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    computerMenu: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    menuLink: {
      display: "inline-block",
      cursor: "pointer",
      padding: "25px",
      margin: "0 25px",
      fontSize: "15px",
      boxSizing: "border-box",
      borderBottom: `3px solid transparent`,
      position: "relative",
      fontFamily: "sans-serif",
      textTransform: "uppercase",
      "&:hover": {
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
      },
    },
  })
);

const ElevationScroll = (props: Props) => {
  const { children, classes, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    className: trigger ? classes.appBarElevate : classes.appBar,
  });
};

export default function ButtonAppBar(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isOpen, setIsOpen] = useState(false);

  let user = useSelector((state: RootState) => state.userStore.value);

  console.log(">>>", user);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll props={props} classes={classes}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="initial">
              Title
            </Typography>
            {!mobileScreen && [
              <>
                <div className={classes.computerMenu}>
                  <div className={classes.menuLink}>
                    <Link href="/">
                      <a className={classes.menuItemLink}>Accueil</a>
                    </Link>
                  </div>
                  <div className={classes.menuLink}>
                    <Link href="/">test</Link>
                  </div>
                </div>
                <div>
                  <LoginMenu />
                </div>
              </>,
            ]}
            {mobileScreen && [
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <MenuIcon />
              </IconButton>,
            ]}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        variant="temporary"
        anchor="top"
        open={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={classes.drawerHeader}></div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Acceuil"} />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"test"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {!user
            ? [
                <Link href="/login">
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Login"} />
                  </ListItem>
                </Link>,
              ]
            : [
                <ListItem
                  button
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItem>,
              ]}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
