import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [weather, setWeather] = useState([]);
  const [weatherHistory, setWeatherHistory] = useState([]);
  
  const getWeatehr = () => {
    fetch ("")
    .then((response) => {
      return response.json()
    })
    .then((data => {
      const weatherDataObj = data;
      setWeather(weatherDataObj);
      console.log(weatherDataObj);
    }))
  };

  const getWeatherHistory = () => {
    fetch ("http://localhost:3024")
    .then((response) => {
      return response.json()
    })
    .then((data => {
      const weatherHistoryDataObj = data;
      setWeatherHistory(weatherHistoryDataObj);
      console.log(weatherHistoryDataObj);
    }))
  };

  useEffect(getWeatherHistory, []);
  
  return (
    <div>
    </div>
  );
}

export default App;
