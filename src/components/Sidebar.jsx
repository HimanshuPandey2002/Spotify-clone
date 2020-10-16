import React from "react";
import Links from "./links";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
        alt="logo"
        className="logo"
      />

      <ul className="main-pages">
        <Links name="Home" classname="fas fa-home"/>
        <Links name="Search" classname="fas fa-search" />
        <Links name="Your Library" classname="fas fa-compact-disc" />
      </ul>
      <p className="sidebar-head">PLAYLISTS</p>
      <ul className="main-pages">
        <Links name="Create Playlist" classname="fas fa-plus-square" />
        <Links name="Liked Songs" classname="fas fa-heart" />
      </ul>
      <hr />
      <ul className="list">
        <li><a href="#" className="sidebar-link-list">This is Queen</a></li>
        <li><a href="#" className="sidebar-link-list">5AM Bnagers</a></li>
        <li><a href="#" className="sidebar-link-list">Elliot choy</a></li>
        <li><a href="#" className="sidebar-link-list">This is Justin Bieber</a></li>
        <li><a href="#" className="sidebar-link-list">This is Charlie Puth</a></li>
        <li><a href="#" className="sidebar-link-list">Eminem</a></li>
        <li><a href="#" className="sidebar-link-list">MKBHD videos</a></li>
        <li><a href="#" className="sidebar-link-list">Heart of EDM</a></li>
        <li><a href="#" className="sidebar-link-list">This is Anne-marie</a></li>
        <li><a href="#" className="sidebar-link-list">Gone-acoustic radio</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
