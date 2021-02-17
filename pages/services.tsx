import React from 'react';
import Head from 'next/head';
import { Button, Container, makeStyles } from '@material-ui/core';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

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
  aboutButton: {
    width: 210,
    position: 'fixed',
    left: 'calc(50% - 105px)',
    bottom: 30,
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <Layout isDark>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxWidth={'xl'} className={classes.container}>
        services
        <Link href='/contact'>
          <Button
            variant={'outlined'}
            className={classes.aboutButton}
            color='secondary'
          >
            Kontakt
          </Button>
        </Link>
      </Container>
    </Layout>
  );
}
