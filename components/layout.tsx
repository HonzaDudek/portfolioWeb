import {
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import React, { PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import { JSXElement } from '@babel/types';
import { ServerStyleSheets } from '@material-ui/styles';
import Document from 'next/document';
import { theme } from '../styles/theme';
import MyDocument from '../pages/_document';
import styles from './layout.module.css';

export const siteTitle = 'Jan Dudek - Web development';

interface LayoutProps {
  home?: boolean;
  isDark?: boolean;
}

const useStyles = makeStyles(() => ({
  root: ({ isDark }: LayoutProps) => ({
    backgroundColor: isDark ? '#152840' : '#F2F2F2',
    height: '100vh',
    width: '100vw',
  }),
  header: {},
  menu: {
    display: 'flex',
    width: 600,
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
  },
  menuItem: ({ isDark }: LayoutProps) => ({
    color: isDark ? '#F2F2F2' : '#152840',
  }),
}));

const Layout = ({
                  children,
                  home,
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
          <header className={classes.header}>
            <List className={classes.menu}>
              <Link href='/'>
                <ListItem button>
                  <ListItemText className={classes.menuItem}>Domů</ListItemText>
                </ListItem>
              </Link>
              <Link href='/about'>
                <ListItem button>
                  <ListItemText className={classes.menuItem}>O mě</ListItemText>
                </ListItem>
              </Link>
              <Link href='/services'>
                <ListItem button>
                  <ListItemText className={classes.menuItem}>
                    Služby
                  </ListItemText>
                </ListItem>
              </Link>
              <Link href='/contact'>
                <ListItem button>
                  <ListItemText className={classes.menuItem}>
                    Kontakt
                  </ListItemText>
                </ListItem>
              </Link>
            </List>
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href='/'>
                <span>← Back to home</span>
              </Link>
            </div>
          )}
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
