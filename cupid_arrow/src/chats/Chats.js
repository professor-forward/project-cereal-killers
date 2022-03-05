import React ,{ useState, useEffect }from 'react'
import './Chats.css'
import Chat from  "./Chat"
// s


function Chats() {
  // const auth = getAuth();
  // const user = auth.currentUser;
  // const [likesList, setLikesList] = useState([]);

  // useEffect(() => {
  //   async function getLikes() {
  //     if (user !== null) {
  //       var uid = user.uid;
  //       const docRef = doc(database, "people", uid);
  //       const docSnap = await getDoc(collection(database, 'people', uid));
  //       const likes = docSnap.doc.map(doc => {
  //         return (doc.data().likes)
  //       })
  //       setLikesList(likes);
  //       console.log(likesList);
  //     }
  //   }
    
  //   (async() => {
  //     const unsubscribe = await getLikes();
      
  //     return() => {
  //         unsubscribe();
  //     }
  //   })();
    
  // },[]);
  

  return (
    
    <div className='chats'>
        {/* <div>{likesList.map(likess => (<div>{likess}</div>))}</div> */}
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