import React from 'react';
import { CssBaseline, colors } from '@material-ui/core';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import IndexRouter from './router';

// import {} from "his"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4212BA",
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#fff'
    },
    error: {
      main: '#F03031',
    },
    grey: {
      '50': '#c7c9cd',
      '500': '#737284',
      '900': '#35323d',
    },
    text: {
      'primary': '#212529',
      'secondary': "#ffffff"
    },
    action: {
      selected: '#F9F9FB',
      hover: '#F9F9FB',
    },
    background: {
      default: '#f7f7fa',
    },
    info: {
      main: '#4aade6',
    },
  },
  shape: {
    borderRadius: 3,
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'Montserrat',
      'sans-serif'
    ].join(','),
    button: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 500,
    }
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
      <IndexRouter />
    </MuiThemeProvider>
  );
}

export default App;
