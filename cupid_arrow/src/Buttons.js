import React from 'react'
import "./Buttons.css"

// Import Icons
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function Buttons() {
  return (
    <div class ="buttons">
        <IconButton className='btn_repeat'>
          <ReplayIcon fontSize='large' />
        </IconButton>
          
        <IconButton className='btn_like'>
          <CloseIcon fontSize='large' />
        </IconButton>

        <IconButton className='btn_start'>
          <StarRateIcon fontSize='large' />
        </IconButton>  

        <IconButton className='btn_dislike'>
          <FavoriteIcon fontSize='large' />
        </IconButton>
        
        <IconButton className='btn_listening'>
          <FlashOnIcon fontSize='large' />  
        </IconButton>
        
        
        
    </div>
  )
}

function likeClick() {
  
}



export default Buttons