import React from 'react'
import './Login.css'
import styleColors from '../styles';
import { Button } from '@mui/material';
function Login() {
  const baseStyle = {
    border: `2px solid`,
    width: '96px',
    margin: '10px',
    borderRadius: '5px'
  }
  const btnStyleLogin = {
    color: styleColors.spotifyGreen,
    borderColor: styleColors.spotifyGreen,
  }
  const btnStyleInfo = {
    borderColor: styleColors.spotifyWhite,
    color: styleColors.spotifyWhite,

  }

  return (
    <div className='container'>
      <h1 className='login-header'>Spotiapp</h1>
      <Button variant='outline' className='btn-padding' sx={{...btnStyleLogin, ...baseStyle}}>Login</Button>
      <Button variant='outline' className = 'btn-padding'  sx={{...btnStyleInfo, ...baseStyle}}>Info</Button>
    </div>
    
   
  );
}
export default Login