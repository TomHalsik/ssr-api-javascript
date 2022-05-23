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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import theme from "../../lib/styles/theme";
import LoginMenu from "./LoginMenu";

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
      zIndex: theme.zIndex.drawer + 1000,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1000,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const computerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpen, setIsOpen] = useState(false);

  let user = useSelector((state: RootState) => state.userStore.value);

  console.log(">>>", user);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.overDrawer}>
          <Typography variant="h6" className={classes.title}>
            Title
          </Typography>
          {computerScreen && (
            <>
              <div className={classes.computerMenu}>
                <Button color="inherit">
                  <Link href="/">Accueil</Link>
                </Button>
              </div>
              <div>
                <LoginMenu />
              </div>
            </>
          )}
          {!computerScreen && (
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
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
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
              <ListItemText primary={"Accueil"} />
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
          {!user ? (
            <Link href="/login">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItem>
            </Link>
          ) : (
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
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
}
