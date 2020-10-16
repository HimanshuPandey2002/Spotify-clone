import React from 'react';

const Links = ({ name, classname }) => {
  return (
    <div className="links">
      <a href="#" className="sidebar-links">
        <i class={classname}></i>
        <span className="link-name">{name}</span>
      </a>
    </div>
  );
}
 
export default Links;