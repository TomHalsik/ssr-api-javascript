import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import SearchIcon from "@material-ui/icons/Search";

import boxShadows from "../../lib/styles/box-shadow";

// core components
import NavbarDropdown from "../Dropdowns/NavbarDropdown";

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandTitle: {
    color: "white",
    textTransform: "uppercase",
    margin: "0",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchBox: {
    color: "white",
    borderRadius: "2rem",
    border: "2px solid",
    backgroundColor: "initial",
    boxShadow: boxShadows.inputBoxShadow,
    transition: "box-shadow .15s ease",
  },
  searchIcon: {
    color: "white",
    marginRight: "0.5rem",
    marginLeft: "1rem",
  },
  searchInput: {
    color: "white",
    width: "270px",
    backgroundColor: "initial",
    border: 0,
    boxShadow: "none",
    padding: "0",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
}));

export default function Navbar({ brandText }) {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop="0.5rem"
            >
              <div>
                <Typography
                  className={classes.brandTitle}
                  variant="h4"
                  component="a"
                >
                  {brandText}
                </Typography>
              </div>
              <Box display="flex" alignItems="center" width="auto">
                <Box
                  display="flex"
                  alignItems="center"
                  width="auto"
                  marginRight="1rem"
                  classes={{
                    root: classes.searchBox,
                  }}
                >
                  <SearchIcon className={classes.searchIcon} />
                  <InputBase
                    placeholder="Search"
                    classes={{
                      input: classes.searchInput,
                    }}
                  />
                </Box>
                <NavbarDropdown />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
