import { CssBaseline, Container } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'Jan Dudek';
export const siteTitle = 'Jan Dudek - Osobní stránká';

interface LayoutProps {
  home?: boolean;
}

const Layout = ({ children, home }: PropsWithChildren<LayoutProps>) => (
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
    <Container maxWidth='xl'>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <span className={utilStyles.colorInherit}>{name}</span>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <span>← Back to home</span>
          </Link>
        </div>
      )}
    </Container>
  </>
);

export default Layout;
