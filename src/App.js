import React from 'react'
import './App.css'
import Main from './components/mainpage'
import Sidebar from './components/Sidebar'
import Player from './components/player';

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <Sidebar />
        <Main />
      </div>
      <Player />
    </div>
  );
}

export default App;
