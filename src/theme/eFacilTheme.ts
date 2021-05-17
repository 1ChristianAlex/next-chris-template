import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const primary = '#072AD8';

const eFacilTheme = {
  colors: {
    primary,
  },
};

const eFacilThemeMaterialUI = createMuiTheme({
  props: {},
  palette: {
    primary: {
      main: primary,
    },
    secondary: {},
  },
});

export { eFacilTheme, eFacilThemeMaterialUI };
