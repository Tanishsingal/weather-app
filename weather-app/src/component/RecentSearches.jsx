import React from 'react';
import { History } from 'lucide-react';

export const RecentSearches = ({ searches, onSelect, darkMode }) => {
  if (searches.length === 0) return null;

  return (
    <div className={`w-full max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      <div className={`flex items-center mb-2  ${darkMode ? 'text-gray-900' : 'text-gray-200'}`}>
        <History className="w-4 h-4 mr-2" />
        <span className="text-sm ">Recent Searches</span>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {searches.map((city, index) => (
          <button key={`${city}-${index}`}
            onClick={() => onSelect(city)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`}>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};