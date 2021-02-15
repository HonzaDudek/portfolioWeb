import React from 'react';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

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
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box component='section' className={utilStyles.headingMd}>
        <Typography variant={'body1'} align={'center'}>
          Jsem frontend vývojář s přesahem do backendu. Specializuji se na vývoj
          v Reactu, ale není mi cizí ani Angular.
        </Typography>
      </Box>
      <Grid
        container
        justify={'space-evenly'}
        className={classes.services}
        spacing={3}
      >
        <Paper elevation={2} className={classes.service}>
          <SvgIcon fontSize={'large'} className={`icon`}>
            <path
              fill='currentColor'
              d='M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z'
            />
          </SvgIcon>
          Web development
        </Paper>
        <Paper elevation={2} className={classes.service}>
          <SvgIcon
            fontSize={'large'}
            className={`icon svg-inline--fa fa-chart-network fa-w-20`}
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='chart-network'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
          >
            <path
              fill='currentColor'
              d='M576 192c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM64 240c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm449.6-37.2l-19.2-25.6-48 36 19.2 25.6 48-36zM576 384c-14.4 0-27.6 5-38.3 13l-96-57.6c3.8-11.2 6.3-23 6.3-35.5 0-61.9-50.1-112-112-112-8.4 0-16.6 1.1-24.4 2.9l-40.8-87.4C281.4 96 288 80.8 288 64c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64c1.1 0 2.1-.3 3.2-.3l41 87.8C241.5 235.9 224 267.8 224 304c0 61.9 50.1 112 112 112 32.1 0 60.8-13.7 81.2-35.3l95.8 57.5c-.5 3.2-1 6.5-1 9.8 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64zm-240-32c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm-184-32h48v-32h-48v32z'
            />
          </SvgIcon>
          Digital marketing
        </Paper>
        <Paper elevation={2} className={classes.service}>
          <SvgIcon fontSize={'large'} className={`icon`}>
            <path
              fill='currentColor'
              d='M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z'
            />
          </SvgIcon>
          Web development{' '}
        </Paper>
      </Grid>
    </Layout>
  );
}
