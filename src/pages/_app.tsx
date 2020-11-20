import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyle from 'styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
