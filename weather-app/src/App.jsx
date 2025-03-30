import { useEffect, useState } from 'react'
import './App.css'
import { Cloud, RefreshCw, Sun, Moon } from 'lucide-react';
import { SearchBar } from './component/SearchBar';
import { LoadingSpinner } from './component/LoadingSpinner';
import { ErrorMessage } from './component/ErrorMessage';
import { WeatherCard } from './component/WeatherCard';
import { RecentSearches } from './component/RecentSearches';
import { ForecastCard } from './component/ForecastCard';

const API_KEY = '';
const API_BASE_URL = 'https://api.weatherstack.com/current';
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [currentCity, setCurrentCity] = useState('');

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addToRecentSearches = (city) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item !== city);
      return [city, ...filtered].slice(0, 5);
    });
  };


  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setCurrentCity(city);
    
    try {
      const response = await fetch(
        `${API_BASE_URL}?access_key=${API_KEY}&query=${encodeURIComponent(city)}`
      );
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(
          data.error.code === 615
            ? 'City not found. Please check the spelling and try again.'
            : 'Failed to fetch weather data. Please try again later.'
        );
      }
      console.log(data)
      setWeather(data);
      addToRecentSearches(city);
      const forecastResponse = await fetch(
        `${API_BASE_URL}/forecast?access_key=${API_KEY}&query=${encodeURIComponent(city)}&forecast_days=5`
      );
      
      const forecastData = await forecastResponse.json();
      if (!forecastData.error) {
        console.log(forecastData);
        
        setForecast(forecastData);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (

    <div
        className="h-screen w-full pr-6 pl-6 bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: darkMode
            ? 'url("https://c4.wallpaperflare.com/wallpaper/138/193/254/painting-minimalism-pink-sky-clouds-hd-wallpaper-preview.jpg")'
            : 'url("https://img.freepik.com/premium-photo/night-background-panorama-free-photo-hd-background_915071-124913.jpg?ga=GA1.1.385471705.1743279265&semt=ais_hybrid")',
        }}>
    
        <div className=''>
          <button onClick={toggleTheme} className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 ${darkMode ? 'text-gray-800' :'text-white'}`}>
              {darkMode ? <Sun className="w-6 h-6 "  /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

      
        <div className='h-full pt-4 text-lg md:text-2xl font-mono'>
          <div className={`text-center flex  items-center justify-center ${darkMode ? 'text-gray-800' :'text-white'}`}>
            <h1>Weather App</h1>
            {currentCity && (
              <button
                onClick={handleRefresh}
                className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500"
                disabled={loading}>
                <RefreshCw className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`} />
              </button>
            )}
          </div>
          <div className='mt-5'>
            <SearchBar onSearch={fetchWeather} isLoading={loading} />
          </div>
        
          <div className='mt-10'>
            <RecentSearches searches={recentSearches} onSelect={fetchWeather} darkMode={darkMode}/>
            {loading && <LoadingSpinner />}
      
            {error && <ErrorMessage message={error} />}
            
            {weather && !loading && !error && (
              <>
                <WeatherCard data={weather} darkMode={darkMode} />
                {forecast && <ForecastCard data={forecast} darkMode={darkMode} />}
              </>
            )}
          </div>
        </div>
      </div>
     
  )
}

export default App
