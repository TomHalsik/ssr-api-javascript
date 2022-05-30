import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import Clear from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  listRoot: {
    marginTop: "2rem",
    height: "100%",
  },
  listItemRoot: {
    display: "flex",
    fontSize: ".9rem",
    color: theme.palette.sidebarLinks.main,
    padding: ".65rem 1.5rem !important",
    "&:hover": {
      color: theme.palette.sidebarLinks.dark,
    },
  },
  listItemSelected: {
    color: theme.palette.sidebarLinks.dark,
    "&$listItemRoot,&$listItemRoot:hover": {
      backgroundColor: "unset",
    },
    "&:before": {
      top: ".25rem",
      bottom: ".25rem",
      left: 0,
      right: "auto",
      borderLeft: "2px solid " + theme.palette.primary.main,
      borderBottom: 0,
      content: '""',
      position: "absolute",
    },
  },
  listItemIconRoot: {
    minWidth: "2.25rem",
    fontSize: ".9375rem",
    lineHeight: "1.5rem",
    display: "inline-block",
    top: "2px",
  },
  divider: {
    marginBottom: "1rem",
    marginTop: "1rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  title: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
    fontSize: ".75rem",
    textTransform: "uppercase",
    letterSpacing: ".04em",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    color: theme.palette.gray[600],
  },
  logoClasses: {
    maxHeight: "2rem",
    maxWidth: "100%",
    verticalAlign: "middle",
    borderStyle: "none",
    [theme.breakpoints.up("md")]: {
      maxHeight: "2.5rem",
    },
  },
  logoLinkClasses: {
    fontSize: "1.25rem",
    lineHeight: "inherit",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  textPrimaryLight: {
    color: theme.palette.primary.light,
  },
  textError: {
    color: theme.palette.error.main,
  },
  textErrorLight: {
    color: theme.palette.error.light,
  },
  textWarning: {
    color: theme.palette.warning.main,
  },
  textWarningLight: {
    color: theme.palette.warning.light,
  },
  textInfo: {
    color: theme.palette.info.main,
  },
  textInfoLight: {
    color: theme.palette.info.light,
  },
  menuPaper: {
    width: "calc(100% - 2rem)",
  },
  outlineNone: {
    outline: "none!important",
  },
}));

export default function Sidebar({ routes, logo, dropdown, input }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "responsive-menu-id";
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.divider) {
        return <Divider key={key} classes={{ root: classes.divider }} />;
      } else if (prop.title) {
        return (
          <Typography
            key={key}
            variant="h6"
            component="h6"
            classes={{ root: classes.title }}
          >
            {prop.title}
          </Typography>
        );
      }
      let textContent = (
        <>
          <Box minWidth="2.25rem" display="flex" alignItems="center">
            {typeof prop.icon === "string" ? (
              <Box
                component="i"
                className={prop.icon + " " + classes["text" + prop.iconColor]}
              />
            ) : null}
            {typeof prop.icon === "object" ? (
              <Box
                component={prop.icon}
                width="1.25rem!important"
                height="1.25rem!important"
                className={classes["text" + prop.iconColor]}
              />
            ) : null}
          </Box>
          {prop.name}
        </>
      );
      if (prop.href) {
        return (
          <ListItem
            key={key}
            component={"a"}
            href={prop.href}
            onClick={handleMenuClose}
            classes={{
              root:
                classes.listItemRoot +
                (prop.upgradeToPro
                  ? " " + classes.listItemRootUpgradeToPro
                  : ""),
              selected: classes.listItemSelected,
            }}
            target="_blank"
            selected={prop.upgradeToPro === true}
          >
            {textContent}
          </ListItem>
        );
      } else {
        return (
          <ListItem
            key={key}
            onClick={handleMenuClose}
            classes={{
              root:
                classes.listItemRoot +
                (prop.upgradeToPro
                  ? " " + classes.listItemRootUpgradeToPro
                  : ""),
              selected: classes.listItemSelected,
            }}
            selected={location.pathname === prop.path}
          >
            <Box minWidth="2.25rem" display="flex" alignItems="center">
              {typeof prop.icon === "string" ? (
                <Box
                  component="i"
                  className={prop.icon + " " + classes["text" + prop.iconColor]}
                />
              ) : null}
              {typeof prop.icon === "object" ? (
                <Box
                  component={prop.icon}
                  width="1.25rem!important"
                  height="1.25rem!important"
                  className={classes["text" + prop.iconColor]}
                />
              ) : null}
            </Box>
            <Link href={prop.path}>{prop.name}</Link>
          </ListItem>
        );
      }
    });
  };
  let logoImage = <img />;
  let logoObject =
    logo && logo.innerLink ? (
      <Link href={logo.innerLink} className={classes.logoLinkClasses}>
        {logoImage}
      </Link>
    ) : logo && logo.outterLink ? (
      <a href={logo.outterLink} className={classes.logoLinkClasses}>
        {logoImage}
      </a>
    ) : null;
  return (
    <>
      <Hidden mdDown implementation="css">
        <Drawer variant="permanent" anchor="left" open>
          <Box paddingBottom="1rem">{logoObject}</Box>
          <List classes={{ root: classes.listRoot }}>
            {createLinks(routes)}
          </List>
        </Drawer>
      </Hidden>
      <Hidden lgUp implementation="css">
        <AppBar position="relative" color="default" elevation={0}>
          <Toolbar>
            <Container
              display="flex!important"
              justifyContent="space-between"
              alignItems="center"
              marginTop=".75rem"
              marginBottom=".75rem"
              component={Box}
              maxWidth={false}
              padding="0!important"
            >
              <Box
                component={MenuIcon}
                width="2rem!important"
                height="2rem!important"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
              />
              {logoObject}
              {dropdown}
            </Container>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          classes={{ paper: classes.menuPaper }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
            paddingBottom="1rem"
            className={classes.outlineNone}
          >
            {logoObject}
            <Box
              component={Clear}
              width="2rem!important"
              height="2rem!important"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuClose}
            />
          </Box>
          <Box
            component={Divider}
            marginBottom="1rem!important"
            marginLeft="1.25rem!important"
            marginRight="1.25rem!important"
          />
          <Box paddingLeft="1.25rem" paddingRight="1.25rem">
            {input}
          </Box>
          <List classes={{ root: classes.listRoot }}>
            {createLinks(routes)}
          </List>
        </Menu>
      </Hidden>
    </>
  );
}

Sidebar.defaultProps = {
  routes: [],
};

Sidebar.propTypes = {
  // this is the input/component that will be rendered on responsive
  // in our demo, we add this input component since the AdminNavbar
  // will not be visible on responsive mode
  input: PropTypes.node,
  // this is the dropdown/component that will be rendered on responsive
  // in our demo, it is the same with the dropdown from the AdminNavbar
  // since the AdminNavbar will not be visible on responsive mode
  dropdown: PropTypes.node,
  // NOTE: we recommend that your logo has the following dimensions
  // // 135x40 or 487x144 or a resize of these dimensions
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this generates an anchor (<a href="href">..</a>) link
      // this is a link that is sent outside the app
      PropTypes.shape({
        // if this is set to true, than the link will have an absolute position
        // use wisely and with precaution
        upgradeToPro: PropTypes.bool,
        href: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.oneOfType([
          // this refers to icons such as ni ni-spaceship or fa fa-heart
          PropTypes.string,
          // this refers to icons from @material-ui/icons
          PropTypes.object,
        ]),
        iconColor: PropTypes.oneOf([
          "Primary",
          "PrimaryLight",
          "Error",
          "ErrorLight",
          "Warning",
          "WarningLight",
          "Info",
          "InfoLight",
        ]),
      }),
      // this generates a Link (<Link to="layout + path">..</Link>) link
      // this is a link that is sent inside the app
      PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
        layout: PropTypes.string,
        component: PropTypes.func,
        icon: PropTypes.oneOfType([
          // this refers to icons such as ni ni-spaceship or fa fa-heart
          PropTypes.string,
          // this refers to icons from @material-ui/icons
          PropTypes.object,
        ]),
        iconColor: PropTypes.oneOf([
          "Primary",
          "PrimaryLight",
          "Error",
          "ErrorLight",
          "Warning",
          "WarningLight",
          "Info",
          "InfoLight",
        ]),
      }),
      // this is just a title without any action on it
      // you can think of it as a disabled link
      PropTypes.shape({
        title: PropTypes.string,
      }),
      // this is just a divider line
      PropTypes.shape({
        divider: true,
      }),
    ])
  ),
};
