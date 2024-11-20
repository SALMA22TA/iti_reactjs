import React, { useState } from 'react';
import './Styles.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <h2>Search Students</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
 