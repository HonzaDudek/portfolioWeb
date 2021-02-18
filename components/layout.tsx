import {
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Box,
  Container,
} from '@material-ui/core';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { ServerStyleSheets } from '@material-ui/styles';
import { theme } from '../styles/theme';

export const siteTitle = 'Jan Dudek - Web development';

interface LayoutProps {
  home?: boolean;
  isDark?: boolean;
}

const useStyles = makeStyles(() => ({
  root: ({ isDark }: LayoutProps) => ({
    height: '100vh',
    width: '100vw',
  }),

  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: '100vw',
    justifyContent: 'space-evenly',
  },
}));

const Layout = ({
                  children,
                  isDark,
                }: PropsWithChildren<LayoutProps>): JSX.Element => {
  const classes = useStyles({ isDark });

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <script
          src='https://kit.fontawesome.com/306260bfc2.js'
          crossOrigin='anonymous'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box className={classNames(classes.root)}>
          <main>
            <Container maxWidth={'xl'} className={classes.container}>
              {children}
            </Container>
          </main>
        </Box>
      </ThemeProvider>
    </>
  );
};

Layout.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  return {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key='styles'>{sheets.getStyleElement()}</React.Fragment>,
    ],
  };
};

export default Layout;
