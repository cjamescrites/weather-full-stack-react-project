import './App.css';
import { useState, useEffect } from 'react';

function App() {

  // const [cityname, setCityName] = useState();
  const [weather, setWeather] = useState();
  const [weatherHistory, setWeatherHistory] = useState();
  
  const cityname = "Houston";

  const getWeather = () => {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=937ce5cf3b3a4bf3549a28703f7531b7`)
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

  useEffect(getWeather, []);
  useEffect(getWeatherHistory, []);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default App;
