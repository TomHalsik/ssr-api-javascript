/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const enhanceApp = (App: any) => {
      return (props: any) => sheets.collect(<App {...props} />);
    };

    const { html, head } = await ctx.renderPage({ enhanceApp });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      html,
      head,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 1. MetaData
                    2. Static Resources
                    3. Global Styles */}
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <style>
            {`
                  a, a:focus {
                  font-weight: 400;
                  color: #080808;
                  text-decoration: none;
                  outline: none;
                  }
                  a:hover, button:hover {
                  opacity: 0.75;
                  cursor: pointer;
                  }
                  li.tab-item {
                    list-style-type: none;
                    padding: 1rem 2rem;
                    background-color: #b2beb5;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    cursor: pointer;
                    transition: all 0.5s ease;
                  }
          
                  li.tab-item:hover,
                  li.tab-item.active {
                    background-color: #76fa97;
                  }
                  .tab-list {
                    padding: 0;
                    display: flex;
                  }
          
                  .tab-content {
                    padding: 0 1rem;
                  }
          
                  .tab-content p {
                    text-align: justify;
                  }
              `}
          </style>
        </Head>
        <body
          style={{
            font: "18px Muli",
            fontWeight: 300,
            padding: 0,
            margin: 0,
            backgroundColor: "#f7f7f7",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
