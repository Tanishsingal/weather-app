import React from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

export const WeatherCard = ({ data }) => {
  const { current, location } = data;
  
  return (
    <div className=" rounded-xl shadow-xl backdrop-blur-10 p-6 w-full max-w-md">
    {/* <div className=" rounded-xl shadow-xl p-6 w-full max-w-md"> */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{location.name}</h2>
          <p className="text-gray-600">{location.country}</p>
        </div>
        <img
          src={current.weather_icons[0]}
          alt={current.weather_descriptions[0]}
          className="w-16 h-16"
        />
      </div>
      
      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {current.temperature}°C
        </div>
        <div className="text-gray-600 capitalize">
          {current.weather_descriptions[0]}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <Thermometer className="w-5 h-5 mr-2 text-blue-500" />
          <span>Feels like: {current.feelslike}°C</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Droplets className="w-5 h-5 mr-2 text-blue-500" />
          <span>Humidity: {current.humidity}%</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Wind className="w-5 h-5 mr-2 text-blue-500" />
          <span>Wind Speed: {current.wind_speed} km/h</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Cloud className="w-5 h-5 mr-2 text-blue-500" />
          <span>Cloud Cover: {current.cloudcover}%</span>
        </div>
      </div>
    </div>
  );
};