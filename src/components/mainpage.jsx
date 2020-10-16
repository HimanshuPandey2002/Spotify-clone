import React from "react";
import CardContainer from "./CardContainer";

const Main = () => {
  return (
    <div className="main">
      <header>
        <div className="btns">
          <a href="#" className="circular-btn">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#" className="circular-btn">
            <i class="fas fa-chevron-right"></i>
          </a>
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
      <CardContainer headname="Shortcuts" />
      <CardContainer headname="Recently Played" />
      <CardContainer headname="Made for you" />
    </div>
  );
};

export default Main;
