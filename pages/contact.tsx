import React from 'react';
import Head from 'next/head';
import { Container, makeStyles } from '@material-ui/core';
import Layout, { siteTitle } from '../components/layout';
import { theme } from '../styles/theme';

const useStyles = makeStyles(() => ({
  section: {
    margin: '0 auto',
  },
  services: {
    width: '100%',
    display: 'flex',
    padding: 20,
    maxWidth: 1280,
    margin: '0 auto',
  },
  service: {
    padding: 10,
    width: 200,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '& .icon': {
      marginBottom: 20,
    },
  },
  container: {
    display: 'flex',
    width: '100vw',
    height: 'calc(100vh - 67px)',
    justifyContent: 'space-evenly',
  },
  highlightedText: {
    color: theme.customTheme.colors.terciary,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxWidth={'xl'} className={classes.container}>
        Contact
      </Container>
    </Layout>
  );
}
