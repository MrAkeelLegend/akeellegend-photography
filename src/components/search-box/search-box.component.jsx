import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>

    <p className="s"><input
      className='search'
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    /></p>
  </div>
)