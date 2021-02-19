import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import classnames from 'classnames';
import ReactFullpage from '@fullpage/react-fullpage';
import Layout from '../components/layout';
import theme from '../styles/theme';
import { Menu } from '../components/menu';
import { handExitComplete } from '../utils/handleTransition';
import About from './about';
import Services from './services';
import Contact from './contact';

const useStyles = makeStyles(() => ({
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
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
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
  section: {
    margin: '0 auto',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '75%',
    maxWidth: 770,
    alignSelf: 'center',
    '& h1': {
      fontWeight: 700,
    },
  },
  leftSection: {
    alignItems: 'flex-start',
  },
  rightSection: {
    alignItems: 'center',
  },
  outerRing: {
    borderRadius: '50%',
    position: 'relative',
    border: '1px solid #707070',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    [theme.breakpoints.up('md')]: {
      width: 550,
      height: 550,
    },
    [theme.breakpoints.up('lg')]: {
      width: 770,
      height: 770,
    },
  },
  innerRing: {
    borderRadius: '50%',
    border: '1px solid #707070',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 270,
    [theme.breakpoints.up('md')]: {
      width: 520,
      height: 520,
    },
    [theme.breakpoints.up('lg')]: {
      width: 740,
      height: 740,
    },
  },
  imageWrapper: {
    position: 'relative',
    width: 240,
    height: 240,
    [theme.breakpoints.up('md')]: {
      width: 490,
      height: 490,
    },
    [theme.breakpoints.up('lg')]: {
      width: 710,
      height: 710,
    },
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
      <Box
        component='section'
        className={classnames(classes.leftSection, classes.section)}
      >
        <Typography variant={'h1'} align={'left'} color={'textSecondary'}>
          Dobrý den, jmenuji se
        </Typography>
        <Typography
          variant={'h1'}
          align={'left'}
          className={classes.highlightedText}
        >
          Jan Dudek
        </Typography>
        <Typography variant={'h1'} align={'left'} color={'textSecondary'}>
          a společně vytvoříme váš nový web
        </Typography>
        <Button
          className={classes.ctaButton}
          onClick={() => handExitComplete('#contact')}
        >
          <Typography variant={'body1'} align={'left'} color={'textSecondary'}>
            Chci web
          </Typography>
        </Button>
      </Box>
      <Box
        component='section'
        className={classnames(classes.rightSection, classes.section)}
      >
        <Box className={classes.outerRing}>
          <Box className={classes.innerRing}>
            <Box className={classes.imageWrapper}>
              <Image
                src={'/images/profile.jpg'}
                className={classes.profilePicture}
                layout='fill'
                objectFit={'cover'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant={'outlined'}
        className={classes.aboutButton}
        color='secondary'
        onClick={() => handExitComplete('#about')}
      >
        <Typography variant={'body1'} align={'left'} color={'textSecondary'}>
          O mě
        </Typography>
      </Button>
    </>
  );
}

export default function Home() {
  const classes = useStyles();

  const [darkMenu, setDarkMenu] = useState(false);

  useEffect(() => {
    if (
      window &&
      (window.location.hash === 'home' || window.location.hash === 'services')
    ) {
      setDarkMenu(true);
    } else {
      setDarkMenu(false);
    }
  }, []);

  return (
    <Layout home>
      <Menu isDark={true} />
      <Box id={'#home'} className={classnames(classes.page, classes.dark)}>
        <ReactFullpage.Wrapper>
          <HomePage />
        </ReactFullpage.Wrapper>
      </Box>
      <Box id={'#about'} className={classes.page}>
        <ReactFullpage.Wrapper>
          <About />
        </ReactFullpage.Wrapper>
      </Box>
      <Box id={'#services'} className={classnames(classes.page, classes.dark)}>
        <ReactFullpage.Wrapper>
          <Services />
        </ReactFullpage.Wrapper>{' '}
      </Box>
      <Box id={'#contact'} className={classes.page}>
        <ReactFullpage.Wrapper>
          <Contact />
        </ReactFullpage.Wrapper>{' '}
      </Box>
    </Layout>
  );
}
