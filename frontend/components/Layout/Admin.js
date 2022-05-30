import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// @material-ui/icons components
import Search from "@material-ui/icons/Search";

// core components
import Sidebar from "../Sidebar/Sidebar.js";
import NavbarDropdown from "../Dropdowns/NavbarDropdown.js";

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

const Admin = (props) => {
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
      <div className={classes.mainContent}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default Admin;
