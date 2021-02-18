import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import classnames from 'classnames';
import Layout from '../components/layout';
import { theme } from '../styles/theme';
import { Menu } from '../components/menu';
import { handExitComplete } from '../utils/handleTransition';
import About from './about';
import Services from './services';
import Contact from './contact';

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
  page: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    margin: 'auto',
    backgroundColor: '#F2F2F2',
    position: 'relative',
  },
  dark: {
    backgroundColor: '#152840',
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
    color: theme.palette.text.secondary,
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

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Box component='section' className={classes.leftSection}>
        <Typography variant={'h3'} align={'left'} color={'textSecondary'}>
          Dobrý den, jmenuji se
        </Typography>
        <Typography
          variant={'h3'}
          align={'left'}
          className={classes.highlightedText}
        >
          Jan Dudek
        </Typography>
        <Typography variant={'h3'} align={'left'} color={'textSecondary'}>
          a společně vytvoříme váš nový web
        </Typography>
        <Button
          className={classes.ctaButton}
          onClick={() => handExitComplete('#contact')}
        >
          Chci web
        </Button>
      </Box>
      <Box component='section' className={classes.rightSection}>
        <Box className={classes.outerRing}>
          <Box className={classes.innerRing}>
            <Image
              src={'/images/profile.jpg'}
              height={'630px'}
              width={'630px'}
              className={classes.profilePicture}
            />
          </Box>
        </Box>
      </Box>
      <Button
        variant={'outlined'}
        className={classes.aboutButton}
        color='secondary'
        onClick={() => handExitComplete('#about')}
      >
        O mě
      </Button>
    </>
  );
}

export default function Home() {
  const classes = useStyles();

  return (
    <Layout home>
      <Box id={'#home'} className={classnames(classes.page, classes.dark)}>
        <Menu isDark />
        <HomePage />
      </Box>
      <Box id={'#about'} className={classes.page}>
        <Menu />
        <About />
      </Box>
      <Box id={'#services'} className={classnames(classes.page, classes.dark)}>
        <Menu isDark />
        <Services />
      </Box>
      <Box id={'#contact'} className={classes.page}>
        <Menu />
        <Contact />
      </Box>
    </Layout>
  );
}
