import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import EventNote from "@material-ui/icons/EventNote";
import LiveHelp from "@material-ui/icons/LiveHelp";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    padding: ".25rem 0 .25rem 1rem",
    border: "0",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      minWidth: "unset",
      borderRadius: "50%",
    },
  },
  buttonLabel: {
    fontSize: ".875rem",
    fontWeight: "600",
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    marginRight: "0.5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
  },
  dividerRoot: {
    height: "0",
    margin: ".5rem 0",
    overflow: "hidden",
    borderTop: "1px solid " + theme.palette.gray[200],
  },
  menuTitle: {
    margin: "0",
    textTransform: "uppercase",
    display: "block",
    padding: ".5rem 1rem",
    whiteSpace: "nowrap",
  },
}));

export default function NavbarDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes.menuTitle }}
      >
        Welcome!
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width="1.25rem"
          height="1.25rem"
          marginRight="1rem"
        />
        <span>My profile</span>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width="1.25rem"
          height="1.25rem"
          marginRight="1rem"
        />
        <span>Settings</span>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={EventNote}
          width="1.25rem"
          height="1.25rem"
          marginRight="1rem"
        />
        <span>Activity</span>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={LiveHelp}
          width="1.25rem"
          height="1.25rem"
          marginRight="1rem"
        />
        <span>Support</span>
      </Box>
      <Divider component="div" classes={{ root: classes.dividerRoot }} />
      <Box
        display="flex"
        alignItems="center"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={DirectionsRun}
          width="1.25rem"
          height="1.25rem"
          marginRight="1rem"
        />
        <span>Logout</span>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt="..."
          classes={{
            root: classes.avatarRoot,
          }}
        />
        <Hidden style={{ color: "white" }} smDown>
          Jessica Jones
        </Hidden>
      </Button>
      {renderMenu}
    </>
  );
}
