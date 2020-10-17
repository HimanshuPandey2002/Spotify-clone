import React from "react";

const Header = () => {
  return (
    <header>
      <div className="btns">
        <a href="#" className="circular-btn">
          <i class="fas fa-chevron-left"></i>
        </a>
        <a href="#" className="circular-btn">
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>

      <div className="input">
        <i class="fas fa-search input-search-icon"></i>
        <input type="text" name="" id="input-field" placeholder="Search for Artist, Song or Podcast"/>
      </div>

      <div className="account-details">
        <button className="upgrade">UPGRADE</button>
        <button className="profile">
          <img
            src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
            alt=""
            className="profile-img"
          />
          Joshua
          <i class="fas fa-sort-down"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
