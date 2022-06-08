import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [search, setSearch] = useState('');

  const handleChange = (q) => {
    setSearch(q);
    getQuery(q);
  };
  return (
    <div className="search">
      <form>
        <input
          value={search}
          type="text"
          className="form-control"
          placeholder="Search Charackters"
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
