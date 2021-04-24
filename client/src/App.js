import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Helmet from 'react-helmet';
import Seo from './components/Seo';
import Login from './components/Login'


function App() {


  return (
    <>
      <CssBaseline />
      <Seo title="Home" />
      <Container maxWidth="md">
        <div>
          <h1>Welcome to MoodyFi!</h1>
          <h3>Discover your mood based on your Spotify listening history!</h3>
         <Login/>
        </div>
    </Container>
    </>
  );
}

export default App;
