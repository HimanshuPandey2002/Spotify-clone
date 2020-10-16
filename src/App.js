import React from 'react'
import './App.css'
import Main from './components/mainpage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
