import "./Cards.css"
import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import database from "./firebase"
import { collection, getDocs } from 'firebase/firestore/lite';
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore/lite";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Cards() {
    const [lastDirection, setLastDirection] = useState([])
    const [people, setPeople] = useState([]);

    // Every time swipe the card , call swiped function to log the swipe name and direction
    async function swiped (direction, nameToSwipe, peopleId) {
        setLastDirection(direction)
        if (direction == "right") {
            console.log("removing: "+ nameToSwipe)
            const docRef = doc(database, 'people/'+peopleId)
            await updateDoc(docRef, {
                matches: arrayUnion("SL3GgUJDB3v3hpC1c1Zx") //User's document id 
            })
            console.log("Add "+ nameToSwipe+" to like")
        } else {
            console.log("Dislike")
        }
        
    }

    // Log which person leave the screen
    function outOfFrame(name) {
        console.log(name + "left the screen")
    }

    useEffect(() => {
        // collection(database,'people').onSnapshot(snapshot => (
        //     snapshot.docs.map(doc => doc.data())
        // ))

        // const peopleSnapshot = await getDocs(collection(database, 'people'))
        // peopleSnapshot.docs.map(doc => doc.data())
        
        async function getPeople(){
            const peopleSnapshot = await getDocs(collection(database, 'people'));
            const peopleList = peopleSnapshot.docs.map(doc => {
                    const id = doc.id;
                    const data = doc.data();
                    return {id, ...data};
                });
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

    function havePic (person) {
        if (person.name != null && person.url != null) return true
    }

    return ( 
        <div className="swipe_container">
            <ArrowBackIosIcon className="arrowBack" sx={{ fontSize: 100 }} color="disabled"/>
            <div className="cards_container">
                {people.map(person => (
                    <TinderCard className = "swipe"
                                key = {person.name}
                                preventSwipe = {['up', 'down']}
                                onSwipe = {(dir) => swiped(dir, person.name, person.id)}
                                onCardLeftScreen = {() => outOfFrame(person.name)} >
                            {havePic(person) ? (
                                <div className = "card" style = {{backgroundImage: `url(${person.url})`}}>
                                <div className = "info">
                                    <h3>{person.name}</h3>
                                    <h5>Age: {person.age} Job: {person.job}</h5>
                                </div>
                                
                                </div>
                            ) : (
                                <div></div>
                            )}
                            
                    </TinderCard>
                ))}
                
            </div>
            <ArrowForwardIosIcon className="arrowFor" sx={{ fontSize: 100 }} color="disabled"/>
        </div>
            
    )
}



export default Cards