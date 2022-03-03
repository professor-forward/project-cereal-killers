import React from 'react'
import './Header.css'
// Import Icon
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { IconButton } from '@mui/material';
import { Link , useHistory} from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    // BEM
    <div className='header'>
        {backButton? (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosNewIcon fontSize="large" className="header_icon" />
          </IconButton>
            
        ) : (
          <IconButton>
            <PersonIcon className = "header_icon" fontSize ="large"/>
          </IconButton>
        )}

        


        <Link to="/">
          <img 
            className='header_logo'
            src="https://pngset.com/images/heart-bow-arrow-icon-download-for-free-u2013-iconduck-bow-logo-symbol-silhouette-stencil-transparent-png-2596757.png" 
            alt="Cupid Arrow Logo"
          />
        </Link>
        

        <Link to="/messages">
          <IconButton>
            <ChatIcon className = "header_icon" fontSize ="large"/>
          </IconButton>
        </Link>

        
    </div>
  )
}

export default Header