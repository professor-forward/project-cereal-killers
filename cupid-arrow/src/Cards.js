import "./Cards.css"
import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import database from "./firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function Cards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // collection(database,'people').onSnapshot(snapshot => (
        //     snapshot.docs.map(doc => doc.data())
        // ))

        // const peopleSnapshot = await getDocs(collection(database, 'people'))
        // peopleSnapshot.docs.map(doc => doc.data())
        
        async function getPeople(){
            const peopleSnapshot = await getDocs(collection(database, 'people'))
            const peopleList = peopleSnapshot.docs.map(doc => doc.data())
            setPeople(peopleList);
            return peopleList;
        }
        (async() => {
            const unsubscribe = await getPeople();
            
            return() => {
                unsubscribe();
            }
        })();
        

    },[])

    return (
      <div>
            
            <div className="cards_container">
                {people.map(person => (
                    <TinderCard 
                        className = "swipe"
                        key = {person.name}
                        preventSwipe = {['up', 'down']}
                    >
                        <div className = "card" style = {{backgroundImage: `url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
      </div>
    )
}



export default Cards