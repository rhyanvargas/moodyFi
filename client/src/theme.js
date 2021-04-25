import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {colors} from '@material-ui/core';

/*******************
 * 
 * Using Spotify Guidelines:
 * https://developer.spotify.com/documentation/general/design-and-branding/
 * 
 *******************/

let defaultTheme = createMuiTheme({
  breakpoints: {
    values: {
      tablet: 768,
      laptop: 992,
    }
  },
  typography: {
    p: {
      fontSize: '16px',
      linHeight: '1.5',
    },
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#1db954'
    },
    secondary: {
      main:'#191414',
    } ,
  },
});

let theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "32px",
        fontWeight: '900',
        letterSpacing: '-.02em',
        lineHeight: '1.2',
        [defaultTheme.breakpoints.up("tablet")]: {
          fontSize: "40px"
        },
        [defaultTheme.breakpoints.up("laptop")]: {
          fontSize: "48px"
        },
      }
    }
  }
}

// theme = responsiveFontSizes(theme)


export default theme