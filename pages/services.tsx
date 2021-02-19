import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { handExitComplete } from '../utils/handleTransition';
import { DevelopmentIcon } from '../public/images/svg/developmentIcon';
import theme from '../styles/theme';
import { OnlineMarketingIcon } from '../public/images/svg/onlineMarketingIcon';
import { SeoIcon } from '../public/images/svg/seoIcon';

const useStyles = makeStyles(() => ({
  section: {
    margin: '0 auto',
  },
  services: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    maxWidth: 1280,
    margin: '0 auto',
  },
  service: {
    borderRadius: 10,
    padding: 10,
    width: '25%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.secondary.main,
    '& .MuiSvgIcon-root': {
      fill: 'none',
      width: '30%',
      height: '30%',
    },
  },
  serviceHeader: {
    fontWeight: 700,
    marginBottom: 20,
  },
  serviceText: {
    fontSize: '1.2rem',
  },
  container: {
    display: 'flex',
    width: '100vw',
    height: 'calc(100vh - 67px)',
    justifyContent: 'space-evenly',
  },
  aboutButton: {
    width: 210,
    position: 'absolute',
    left: 'calc(50% - 105px)',
    bottom: 30,
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.services}>
        <Box className={classes.service}>
          <DevelopmentIcon stroke={theme.palette.text.primary} fill='none' />
          <Typography variant={'h5'} className={classes.serviceHeader}>
            Web development
          </Typography>
          <Typography
            variant={'body1'}
            align={'center'}
            className={classes.serviceText}
          >
            Vytvořím vám webové stránky na míru podle vašeho návrhu nebo pro vás
            návrh sám zajistím.
          </Typography>
        </Box>
        <Box className={classes.service}>
          <SeoIcon stroke={theme.palette.text.primary} fill='none' />
          <Typography variant={'h5'} className={classes.serviceHeader}>
            SEO
          </Typography>
          <Typography
            variant={'body1'}
            align={'center'}
            className={classes.serviceText}
          >
            Tvorba stránek nekončí jejich spuštěním. Web má především vydělávat.
            Společně se postaráme o to, aby tomu tak skutečně bylo.
          </Typography>
        </Box>
        <Box className={classes.service}>
          <OnlineMarketingIcon
            stroke={theme.palette.text.primary}
            fill='none'
          />
          <Typography variant={'h5'} className={classes.serviceHeader}>
            Online marketing
          </Typography>
          <Typography
            variant={'body1'}
            align={'center'}
            className={classes.serviceText}
          >
            Občas pouze vyhledávání nestačí, v tu chvíli vám pomohu zkrotit
            sociální sítě a placenou reklamu ve vyhledávání.
          </Typography>
        </Box>
      </Box>
      <Button
        variant={'outlined'}
        className={classes.aboutButton}
        color='secondary'
        onClick={() => handExitComplete('#contact')}
      >
        Kontakt
      </Button>
    </>
  );
}
