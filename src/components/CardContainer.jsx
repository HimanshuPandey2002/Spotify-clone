import React from "react";
import Card from "./card";

const CardContainer = ({ headname }) => {
  return (
    <div className="card-container">
      <div className="top-bar">
        <a href="#" className="card-container-head">
          {headname}
        </a>
        <a href="#" className="see-all">
          SEE ALL
        </a>
      </div>
      <div className="card-placement">
        <Card
          imgAdd="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
          alt="Drake's image"
          heading="This is Drake"
          content="Hear Drake's all biggest and best hits of all"
        />
        <Card
          imgAdd="https://i.scdn.co/image/ab67706f000000037a181d9fed936372672c40ca"
          alt="Eminem's image"
          heading="This is Eminem"
          content="Hear Eminem's all biggest and best hits of all"
        />
        <Card
          imgAdd="https://i.pinimg.com/474x/7b/f8/45/7bf8457da588933925ee944935809a74.jpg"
          alt="Ed sheeran's image"
          heading="This is Ed Sheeran"
          content="Hear Ed's all biggest and best hits of all"
        />
        <Card
          imgAdd="https://i.scdn.co/image/ab67706f000000020d3a8d8d4db44c2209d725e1"
          alt="Justin's image"
          heading="This is Justin Bieber"
          content="Hear Justin's all biggest and best hits of all"
        />
        <Card
          imgAdd="https://i.scdn.co/image/ab67706f000000036705dfb8f5445fa4fdddf374"
          alt="Queen's image"
          heading="This is Queen"
          content="Hear Queen's all biggest and best hits of all"
        />
      </div>
    </div>
  );
};

export default CardContainer;
