const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();

app.post('/login', (req,res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'f3b51652cece4220a9a91ec651cb2851',
    clientSecret: '9e08acb8e9d547e9bd9313a8ee3003e0',
  });

  // retreive access tokens
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })
    })
    .catch((error) => res.sendStatus(400).send(error))
})