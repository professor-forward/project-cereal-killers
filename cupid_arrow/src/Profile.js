import React, { useState } from 'react'
import './Profile.css'
import database from './firebase';
import { doc, setDoc } from "firebase/firestore/lite";


import { Link, useHistory } from "react-router-dom";

function Profile() {
    const [username, setuserame] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState("");
    const [job, setJob] = useState("");
    const [aboutme, setaboutme] = useState("");
    const [image, setimage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDoc(doc(database, "people", "VAZ8fZb58tbKLvkcCJbw"),{
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
    }
    return (
        //<Link to={`/profile`}>

        <center>
            <form className="form" onSubmit={handleSubmit}>
                <b>username</b><br></br>
                <input type="text" id="username" value={username} onChange={(e) => setuserame(e.target.value)}></input><br></br>
                <b>Gender</b><br></br>
                <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}></input><br></br>
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