import React from "react";
import Player from "./components/player";
import Sidebar from "./components/Sidebar";
import SearchMain from './components/SearchMain'
import "./App.css";
import "./searchApp.css";

const Search = () => {
  return (
    <div className="app-container">
      <div className="App">
        <Sidebar />
        <SearchMain />
      </div>
      <Player />
    </div>
  );
};

export default Search;
