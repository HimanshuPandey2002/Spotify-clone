import React from "react";
import Links from "./links";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <ul className="main-pages">
        <Link to="/">
          <Links name="Home" classname="fas fa-home" />
        </Link>
        <Link to="/search">
          <Links name="Search" classname="fas fa-search" />
        </Link>
        <Link to="/library">
          <Links name="Your Library" classname="fas fa-compact-disc" />
        </Link>
      </ul>
      <p className="sidebar-head">PLAYLISTS</p>
      <ul className="main-pages">
        <Links name="Create Playlist" classname="fas fa-plus-square" />
        <Link to="/liked-songs">
          <Links name="Liked Songs" classname="fas fa-heart" />
        </Link>
      </ul>
      <hr />
      <ul className="list">
        <Link to="playlist#1">
          <li className="sidebar-link-list">This is Charlie Puth</li>
        </Link>
        <Link to="playlist#2">
          <li className="sidebar-link-list">This is Eminem</li>
        </Link>
        <Link to="playlist#3">
          <li className="sidebar-link-list">This is Justin Bieber</li>
        </Link>
        <Link to="playlist#4">
          <li className="sidebar-link-list">This is Anne-marie</li>
        </Link>
        <Link to="playlist#5">
          <li className="sidebar-link-list">Elliot-choy</li>
        </Link>
        <Link to="playlist#6">
          <li className="sidebar-link-list">5AM Bangers</li>
        </Link>
        <Link to="playlist#7">
          <li className="sidebar-link-list">Eminem Favs</li>
        </Link>
        <Link to="playlist#8">
          <li className="sidebar-link-list">Old is Gold</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
