import React from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <CardContainer headname="Shortcuts" />
      <CardContainer headname="Recently Played" />
      <CardContainer headname="Made for you" />
    </div>
  );
};

export default Main;
