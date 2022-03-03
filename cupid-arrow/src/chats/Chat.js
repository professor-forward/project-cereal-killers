import React from 'react'
import './Chat.css'
import Avatar from '@mui/material/Avatar'; //To show the profile image
import { Link , useHistory} from "react-router-dom";

function Chat({name, message, profilePic, timestamp}) {
  return (
    <Link to={`/messages/${name}`}>
          <div className='chat'>
        <Avatar className="chat_image" alt={name}  src={profilePic}></Avatar>
        <div className='chat_details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chat_timestamp'>{timestamp}</p>
    </div>
    </Link>

  )
}

export default Chat