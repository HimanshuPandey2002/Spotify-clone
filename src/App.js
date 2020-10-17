import React from 'react'
import './App.css'
import './searchApp.css'
import Main from './components/mainpage'
import SearchMain from './components/SearchMain';
import Sidebar from './components/Sidebar'
import Player from './components/player';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app-container">
      <div className="App">
        <Router>
          <Sidebar />
          <Route path="/" exact component={Main} />
          <Route path="/search" component={SearchMain} />
        </Router>
      </div>
      <Player />
    </div>
  );
}

export default App;
