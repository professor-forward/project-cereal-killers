import React from 'react';
import Header from "./Header"
import Cards from "./Cards"
import Buttons from './Buttons';
import Chats from "./chats/Chats";
import ChatScreen from "./chats/ChatScreen";
import './App.css';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from 'react-tinder-card';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
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
          
          <Route path = "/">
            {/* Header */}
          <Header />
            {/* Cards */}
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



