const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();

app.post('/login', (req,res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'f3b51652cece4220a9a91ec651cb2851',
    clientSecret: '9e08acb8e9d547e9bd9313a8ee3003e0',
  });
})