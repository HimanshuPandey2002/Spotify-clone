import React from 'react';

const Card = ({ imgAdd, alt, heading, content}) => {
  return (
    <div className="card">
      <img
        src={imgAdd}
        alt={alt}
        className="artist-img"
      />
      <div className="card-details">
        <h3 className="card-head">{heading}</h3>
        <p className="card-detail">{content}</p>
      </div>
    </div>
  );
}
 
export default Card;