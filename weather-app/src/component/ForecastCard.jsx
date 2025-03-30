import React from 'react';
import { Calendar } from 'lucide-react';

export const ForecastCard = ({ data, darkMode }) => {
  if (!data.forecast) return null;

  return (
    <div className={`w-full max-w-md rounded-xl shadow-lg p-6 mt-4 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex items-center mb-4">
        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
        <h3 className={`font-semibold ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>5-Day Forecast</h3>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(data.forecast).map(([date, forecast]) => (
          <div key={date} className="text-center">
            <p className={`text-sm mb-1 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img
              src={forecast.weather_icons?.[0]}
              alt={forecast.weather_descriptions?.[0]}
              className="w-8 h-8 mx-auto"
            />
            <p className={`text-sm font-semibold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {forecast.avgtemp}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};