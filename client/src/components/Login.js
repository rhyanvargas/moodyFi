import React from 'react'
import { Button } from '@material-ui/core';


const redirect_uri = 'http://localhost:3000'
const client_id = 'f3b51652cece4220a9a91ec651cb2851'
const scopes = 'user-top-read%20user-read-recently-played'

const api_top_tracks = 'https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0'
const api_audio_analysis = 'https://api.spotify.com/v1/audio-analysis/{id}'

/*** Authorized url
 http://localhost:3000/?code=AQA-GXZTz0DekPR05oS7uMkh4aAd-pVhBIK83mFjRcMxylzqGPVdWwkjuwM8Uc-zHrFldYzpNwrJNs2S1Wcb73mdcuffMv2VeHRvIuK9uo4srxZRAnvHr4DuQyN_gOPc2dMQrySFuNz5G_GBImkupa6V7bIpFyP0ojK4yPfB7aQiqXAhRR9Le_lYRoiJBOlv29xeNBaXKqnxVqw3njDnhGr1CQ&state=34fFs29kd09#_=_
 ***/


const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}&state=34fFs29kd09`

const Login = () => {

  return (
    <>
    <Button color="primary" variant="contained" href={AUTH_URL}>
            Login with Spotify
    </Button>
       {/* <a className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 " href={AUTH_URL}>
        </a> */}
    </>
  )
}

export default Login
