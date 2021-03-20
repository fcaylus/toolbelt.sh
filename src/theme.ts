import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { responsiveFontSizes } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: ['"JetBrains Mono"', 'monospace', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
    },
    palette: {
      primary: {
        main: '#00204a',
      },
      secondary: {
        main: '#70a3c4',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  })
);

export default theme;
