import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ setBooks }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    setBooks(response.data.docs);
  };

  return (
    <div className="search-container">
      <h2>Encontre o Livro que deseja</h2>
      <div className="search-bar">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Pesquise um livro..." 
        />
        <button onClick={handleSearch}>🔍</button>
      </div>
    </div>
  );
};

export default Search;
