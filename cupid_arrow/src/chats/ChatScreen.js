import "./ChatScreen.css"
import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0508%2F505976f4j00qa0fop0010c000h800lic.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648895496&t=18c54765142c26343efd08fcaa257695',
      message: 'Hello'
    },
    {
      name: 'Ellen',
      image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0508%2F505976f4j00qa0fop0010c000h800lic.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648895496&t=18c54765142c26343efd08fcaa257695',
      message: 'How are you'
    },
    {
      message: 'Good!'
    }
  ])

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput("");
  }

  return (
    <div className='chatScreen'>
        <p className="chatScreen_timestamp">YOU MATCHED WITH ON 10/23/22</p>
        
        {messages.map(message => message.name ? (
          <div className="chatScreen_message">
            <Avatar className="chatScreen_image" alt ={message.name} src = {message.image} />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_usertext">{message.message}</p>
          </div>
        ))}

        <form className="chatScreen_input">
          <input className="chatScreen_inputfield" 
            value = {input}
            onChange = {e => setInput(e.target.value)}
            placeholder="Type a message..." 	
            type="text" />
          <button className="chatScreen_inputBtn" type="submit" onClick={handleSend} >SEND</button>
        </form>
    </div>
  )


}

export default ChatScreen