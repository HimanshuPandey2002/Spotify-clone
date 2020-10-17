import React from 'react';
import SearchCard from './SearchCards';

const SearchCardContainer = () => {
  return (
    <div className="search-card-container">
      <div className="top-bar">
        <a href="#" className="card-container-head">
          Browse All
        </a>
      </div>
      <div className="search-card-placement">
        <SearchCard name = "Pop" />
        <SearchCard name = "Hip Hop" />
        <SearchCard name = "Podcasts" />
        <SearchCard name = "Made for You" />
        <SearchCard name = "Charts" />
        <SearchCard name = "New Releseas" />
        <SearchCard name = "Discover" />
        <SearchCard name = "Global Hits" />
        <SearchCard name = "Bollywood" />
        <SearchCard name = "At Home" />
        <SearchCard name = "Party" />

      </div>
    </div>
  );
}
 
export default SearchCardContainer;