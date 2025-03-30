import { useState } from 'react'
import './App.css'
import { SearchBar } from './component/SearchBar';
import { LoadingSpinner } from './component/LoadingSpinner';
import { ErrorMessage } from './component/ErrorMessage';
import { WeatherCard } from './component/WeatherCard';

const API_KEY = '8fd9fe1c533cfb505daf7e2deb2598f8'; // Replace with your Weatherstack API key
const API_BASE_URL = 'http://api.weatherstack.com/current';
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
   
      <div className='h-screen w-full  bg-[url(https://c4.wallpaperflare.com/wallpaper/138/193/254/painting-minimalism-pink-sky-clouds-hd-wallpaper-preview.jpg)] bg-cover bg-center flex justify-center items-center'>
   
      {/* // <div className='h-screen w-full  text-white bg-[url(https://img.freepik.com/premium-photo/night-background-panorama-free-photo-hd-background_915071-124913.jpg?ga=GA1.1.385471705.1743279265&semt=ais_hybrid)] bg-cover bg-center  flex justify-center content-center'>  */}
      {/* <div className='h-screen w-full  text-white bg-[url(https://img.freepik.com/premium-photo/night-background-panorama-free-photo-hd-background_915071-124913.jpg?ga=GA1.1.385471705.1743279265&semt=ais_hybrid)] bg-cover bg-center  flex justify-center content-center'>  */}


      
        <div className='h-full pt-15 text-lg md:text-2xl font-mono'>
          <div className='text-center'>
            <h1>Weather App</h1>
          </div>
          <div className='mt-5'>
          {/* <input className=' border border-white rounded-md' type="text" /> */}
          <SearchBar onSearch={fetchWeather} isLoading={loading} />
          </div>
        
        <div className='mt-10'>
        {/* <RecentSearches 
            searches={recentSearches} 
            onSelect={fetchWeather}
            darkMode={darkMode}
          /> */}
        {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} />}
          
          {weather && !loading && !error && <WeatherCard data={weather} />}

        </div>
        </div>
      </div>
     
  )
}

export default App
