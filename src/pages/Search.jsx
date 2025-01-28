import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="container">
      <h1>Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for shoes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}