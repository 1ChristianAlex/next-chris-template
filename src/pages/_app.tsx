import React, { useEffect } from 'react';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import '@theme/style.css';
import EFacilThemeProvider from '../theme/EFacilThemeProvider';

const MyApp: React.FC<AppPropsType> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    // <Provider store={Store}>
    <EFacilThemeProvider>
      <Component {...pageProps} />
    </EFacilThemeProvider>
    // </Provider>
  );
};

export default MyApp;
