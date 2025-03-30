import React from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

export const WeatherCard = ({ data, darkMode }) => {
  const { current, location } = data;
  
  return (
    <div className={`rounded-xl shadow-lg mt-6 p-6 w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{location.name}</h2>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{location.country}</p>
        </div>
        <img src={current.weather_icons[0]} alt={current.weather_descriptions[0]} className="w-16 h-16"/>
      </div>
      
      <div className="mb-4">
        <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {current.temperature}°C
        </div>
        <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          {current.weather_descriptions[0]}
        </div>
      </div>

      <div className="space-y-3">
        <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <Thermometer className="w-5 h-5 mr-2 text-blue-500" />
          <span>Feels like: {current.feelslike}°C</span>
        </div>
        <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <Droplets className="w-5 h-5 mr-2 text-blue-500" />
          <span>Humidity: {current.humidity}%</span>
        </div>
        <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <Wind className="w-5 h-5 mr-2 text-blue-500" />
          <span>Wind Speed: {current.wind_speed} km/h</span>
        </div>
        <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <Cloud className="w-5 h-5 mr-2 text-blue-500" />
          <span>Cloud Cover: {current.cloudcover}%</span>
        </div>
      </div>
    </div>
  );
};