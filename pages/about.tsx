import React from 'react';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Container, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { theme } from '../styles/theme';
import { handExitComplete } from '../utils/handleTransition';

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
  leftSection: {
    width: '50%',
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightSection: {
    width: '50%',
    maxWidth: 770,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerRing: {
    width: 770,
    height: 770,
    borderRadius: '50%',
    border: '1px solid #707070',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    width: 700,
    height: 700,
    borderRadius: '50%',
    border: '1px solid #707070',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    borderRadius: '50%',
  },
  ctaButton: {
    backgroundColor: theme.customTheme.colors.terciary,
    height: 60,
    width: 300,
    marginTop: 30,
  },
  aboutButton: {
    width: 210,
    position: 'absolute',
    left: 'calc(50% - 105px)',
    bottom: 30,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Box component='section' className={classes.leftSection}>
        <Image
          src={'/images/profile.jpg'}
          height={'630px'}
          width={'630px'}
          className={classes.profilePicture}
        />
      </Box>
      <Box component='section' className={classes.rightSection}>
        <Typography variant={'body1'} color={'textPrimary'}>
          Vystudoval jsem Vysokou školu ekonomickou v Praze, během studií jsem
          se věnoval marketingu, nejprve průzkumu trhu v Komerční bance a
          následně online marketingu konzultant v rámci reklamní skupiny
          Publicis Groupe. Programování bylo vždy mým koníčkem a tak jsem se v
          roce 2018 rozhodl se tomuto oboru věnovat naplno. Prozatím jsem se
          věnoval spíše práci na týmových projektech, ať už například aplikace
          Effento nebo v poslední době především Alza.cz. Rád bych se ale také
          věnoval projektům, které mohu s klienty napřímo.
        </Typography>
      </Box>
      <Button
        variant={'outlined'}
        className={classes.aboutButton}
        color='primary'
        onClick={() => handExitComplete('#services')}
      >
        Služby
      </Button>
    </>
  );
}
