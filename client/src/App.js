import React from 'react'
import { Container, Typography, createMuiTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Helmet from 'react-helmet';
import Seo from './components/Seo';
import Login from './components/Login'
import theme from './theme'

const code = new URLSearchParams(window.location.search).get('code')
console.log(code)

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Seo title="Home" />
      <Container maxWidth="md">
        <div>
          <Typography variant="h1">Welcome to MoodyFi!</Typography>
          <h3>Discover your mood based on your Spotify listening history!</h3>
          <Login/>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;


