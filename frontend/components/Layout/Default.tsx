import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Container from "@material-ui/core/Container";
// @material-ui/icons components
import Search from "@material-ui/icons/Search";

// core components
import Sidebar from "../Sidebar/Sidebar";
import NavbarDropdown from "../Dropdowns/NavbarDropdown";
import Navbar from "../Navbars/Navbar";
import Footer from "../Footers/Footer";

import routes from "../../lib/routes/routes";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginLeft: "250px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
}));

const Default = (props) => {
  const classes = useStyles();
  const { Component, pageProps } = props;

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainContent.current.scrollTop = 0;
  });

  return (
    <>
      <Sidebar
        routes={routes}
        dropdown={<NavbarDropdown />}
        input={
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-search-responsive">
              Search
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-search-responsive"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <Box
                    component={Search}
                    width="1.25rem!important"
                    height="1.25rem!important"
                  />
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        }
      />
      <Box position="relative" className={classes.mainContent}>
        <Navbar brandText={"test"} />
      </Box>
      <div className={classes.mainContent}>
        <Component {...pageProps} />
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Default;
