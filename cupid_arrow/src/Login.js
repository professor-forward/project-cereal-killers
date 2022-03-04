import React from 'react'
import "./Login.css"

import { useRef, useState } from "react";

import { signup, login, logout, useAuth, createUserDoc } from "./firebase";
import { collection, Firestore } from 'firebase/firestore/lite';
import { getIdToken } from 'firebase/auth';

export default function Login() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      
    } catch {
      alert("The email or the password doesn't meet the requirment!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("The email or the password is wrong!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
    

  } 

  return (
    <center>
      
      <div>Currently logged in as: { currentUser?.email } </div>

      <div id="fields">
   
        <input ref={emailRef} type="text" placeholder="Email" />
        
      </div>

      <div id="fields">
        <input ref={passwordRef} type="password" placeholder="Password" />
       
        
      </div>
      

      <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
      <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
    
    </center>
  );
}
