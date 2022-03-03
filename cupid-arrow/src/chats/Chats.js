import React from 'react'
import './Chats.css'
import Chat from  "./Chat"

function Chats() {
  return (
    <div className='chats'>
        <Chat
          name = "Ellen"
          message = "Hello World"
          timestamp = "years ago"
          profilePic = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0508%2F505976f4j00qa0fop0010c000h800lic.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648895496&t=18c54765142c26343efd08fcaa257695"
        >
            
        </Chat>
    </div>
  )
}

export default Chats