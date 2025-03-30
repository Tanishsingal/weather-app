import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const SearchBar = ({ onSearch, isLoading, darkMode }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className={`w-full px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 ${
            darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400': 'bg-white border-gray-300 text-gray-700'}`}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}
          className={`absolute right-2 p-1 hover:text-blue-500 disabled:opacity-50 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};