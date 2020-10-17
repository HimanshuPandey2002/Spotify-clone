import React from 'react';

const SearchCard = ({ name }) => {
  return (
    <div className="search-card">
      <h1 className="search-card-head">
        {name}
      </h1>
    </div>
  );
}
 
export default SearchCard;