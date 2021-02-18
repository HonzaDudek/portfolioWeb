import '../styles/global.css';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// The handler to smoothly scroll the element into view

const App = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.route} />;
};

export default App;
