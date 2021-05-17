import React from 'react';
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { eFacilTheme, eFacilThemeMaterialUI } from './eFacilTheme';
// import GlobalStyles from './global';

const EFacilUiProvider: React.FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MUIThemeProvider theme={eFacilThemeMaterialUI}>
      <StyledThemeProvider theme={eFacilTheme}>
        {/* <GlobalStyles /> */}
        {children}
      </StyledThemeProvider>
    </MUIThemeProvider>
  </StylesProvider>
);

export default EFacilUiProvider;
