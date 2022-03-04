import React from 'react';
import Header from "./Header"
import Cards from "./Cards"
import Buttons from './Buttons';
import Chats from "./chats/Chats";
import Profile from "./Profile"
import ChatScreen from "./chats/ChatScreen";
import Login from "./Login";
import './App.css';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
          <Route path = "/login">
            <Header backButton="/" />
            <Login /> 
          </Route>


          {/* Chats Screen */}
          <Route path = "/messages/:person">
            {/* Header */}
            <Header backButton="/messages" />
            <ChatScreen />
          </Route>

          {/* Chats Screen */}
          <Route path = "/messages">
            {/* Header */}
            <Header backButton="/" />
            <Chats />
          </Route>
          {/* Profile Screen */}
          <Route path="/profile">
            {/* Header */}
            <Header backButton="/" />
            <Profile />
          </Route>
          {/* Main Page */}
          <Route path = "/">
            {/* Header */}
            <Header />
            {/* Cards Container*/}
            <Cards />
            {/* Buttons below */}
            <Buttons />
          </Route>
          
        </Switch>

      </Router>

    </div>
  );
}

export default App;

        
{/* Individual chat screen */}



