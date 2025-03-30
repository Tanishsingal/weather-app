# 🌦️ Weather Dashboard Web App  

## 📌 Overview  
The **Weather Dashboard Web App** is a simple and intuitive application that allows users to search for any city and view its **real-time weather information**. Built with **React.js (Vite)** and styled using **Tailwind CSS**, the app integrates with the **Weatherstack API** to fetch live weather data. It is deployed on **Vercel** for fast and seamless access.  

🔗 **Live Demo:** [Weather App](https://weather-app-chi-three-85.vercel.app/)  

## 🚀 Features  

### 🌍 Core Features  
✅ **Search Functionality** – Users can enter a city name to retrieve real-time weather data.  
✅ **Weather Information** – Displays:  
   - 🌆 City Name  
   - 🌡️ Current Temperature (°C)  
   - 🌦️ Weather Condition (e.g., Sunny, Rainy)  
   - 💧 Humidity (%)  
   - 🌬️ Wind Speed (km/h)  
   - 🌤️ Weather Icon from the API  
✅ **Loading & Error Handling** –  
   - Displays a loader while fetching data  
   - Shows user-friendly error messages for invalid city names or API failures  
✅ **Responsive UI** – Works seamlessly on both **mobile and desktop**  

### ✨ Bonus Features  
🌟 **Recent Search History** – Displays the last 5 searched cities for quick access.  
🌟 **Dark/Light Theme Toggle** – Allows users to switch between themes.  
🌟 **Refresh Button** – Re-fetches weather data for the current city.  
🌟 **Smooth Animations** – Implemented using **Framer Motion** or CSS.  

## 🛠️ Tech Stack  
- **Frontend:** React.js (Vite)  
- **State Management:** React Hooks  
- **Styling:** Tailwind CSS   
- **API Integration:** Weatherstack API  
- **Deployment:** Vercel  

## 💄 Project Structure  
```
/src
│── /component       # Reusable components (SearchBar, WeatherCard, etc.)
│── App.jsx           # Main App component
│── main.jsx          # Entry point
│── index.css        # Global styles
│── .env              # Environment variables (API key)
```

## 📦 Installation & Setup  

1️⃣ **Clone the Repository:**  
```bash
git clone https://github.com/Tanishsingal/weather-app.git
cd weather-app
```  

2️⃣ **Install Dependencies:**  
```bash
npm install
```  

3️⃣ **Set Up API Key:**  
- Sign up at [Weatherstack](https://weatherstack.com/)  
- Create a `.env` file in the root directory and add:  
  ```sh
  VITE_WEATHER_API_KEY=your_api_key_here
  ```  

4️⃣ **Run the App Locally:**  
```bash
npm run dev
```  
Visit `http://localhost:5173` in your browser.  

## 🌍 Deployment on Vercel  
The app is deployed at **[https://weather-app-chi-three-85.vercel.app/](https://weather-app-chi-three-85.vercel.app/)**.  


## 📝 Future Enhancements  
🔹 Add hourly & weekly weather forecasts  
🔹 Implement geolocation to detect the user’s location automatically  
🔹 Improve UI with more weather details (feels-like temp, UV index, etc.)  

## 🐟 License  
This project is **MIT Licensed**.  

---  

Let me know if you need any modifications! 😊
