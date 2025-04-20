import React from 'react';
import { useBookContext } from '../context/BookContext';

const SearchBar = () => {
  const { setSearchQuery } = useBookContext();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Cari judul buku..."
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
    </div>
  );
};

export default SearchBar;
