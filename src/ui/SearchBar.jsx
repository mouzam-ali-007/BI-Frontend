// src/ui/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search blogs..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
