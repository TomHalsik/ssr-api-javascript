/* eslint-disable react/jsx-props-no-spreading */

// CSR for Header
// import dynamic from 'next/dynamic';
// const Header = dynamic(import('../components/Header'), {ssr: false});

import App from "next/app";
import Head from "next/head";
import React from "react";
import PropTypes, { any } from "prop-types";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";
import { store } from "../lib/redux/store";
import Navbar from "../components/Navbar/Navbar";
import theme from "../lib/styles/theme";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import StickyFooter from "../components/Footer/Footer";
import "../lib/styles/app.css";
import Layout from "../components/Layout/Default";

let persistor = persistStore(store);

const propTypes = {
  Component: PropTypes.elementType.isRequired,
};
class MyApp extends App<any, any> {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const props = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <CssBaseline />
            <Layout {...props} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
