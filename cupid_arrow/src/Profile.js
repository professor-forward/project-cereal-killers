import React, { useState } from 'react'
import './Profile.css'
import database from './firebase';
import { doc, setDoc, getDoc } from "firebase/firestore/lite";
import { getAuth} from "firebase/auth";

import { Link, useHistory } from "react-router-dom";

function Profile() {
    const [username, setuserame] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState("");
    const [job, setJob] = useState("");
    const [aboutme, setaboutme] = useState("");
    const [image, setimage] = useState("");

    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {var uid = user.uid;}

    const docRef = doc(database, `people/${uid}`);
    async function getData() {
        var docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDoc(doc(database, "people", uid),{
            name:username,
            gender:gender,
            age:age,
            birthday:birthday,
            job:job,
            aboutme:aboutme,
            url:image
        }).then(() => {
            alert("Profile uploaded");
        })
        .catch((error) => {
            alert(error.message);
        })

        setuserame("");
        setAge("");
        setBirthday("");
        setJob("");
        setaboutme("");
        setGender("");
        getData();
    }
    return (
        //<Link to={`/profile`}>

        <center>
            <form className="form" onSubmit={handleSubmit}>
                <b>username</b><br></br>
                <input type="text" id="username" value={username} onChange={(e) => setuserame(e.target.value)}></input><br></br>
                <b>Gender</b><br></br>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option selected="selected">--Choose Your Gender--</option>
                    <option value="male"> Male </option>
                    <option value="female"> Female</option>
                    <option value="secret"> Secret </option>
                </select><br></br>
                <b>Age</b><br></br>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}></input><br></br>
                <b>Birthday</b><br></br>
                <input type="date" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)}></input><br></br>
                <b>Job Status</b><br></br>
                <input type="text" id="job" value={job} onChange={(e) => setJob(e.target.value)}></input><br></br>
                <b>About me</b><br></br>
                <textarea id="textarea" value={aboutme} onChange={(e) => setaboutme(e.target.value)}></textarea><br></br>
                <b>Image</b><br></br>
                <input type="file" id="image" value={image} onChange={(e) => setimage(e.target.value)}></input><br></br>
                <button type="submit" id="submit">Submit</button>
            </form>
            
        </center>

        //</Link>

    )
}

export default Profile