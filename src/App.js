// need to post from react to API

import './App.css';
import { useState, useEffect } from 'react';
import CurrentWeather from "./containers/CurrentWeather/CurrentWeather";
import PreviousWeather from "./containers/PreviousWeather/PreviousWeather";


function App() {


  const [weather, setWeather] = useState();
  const [weatherHistory, setWeatherHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityname, setCityName] = useState("");

  const weatherJSON = (weather) => {
    return {
    name: weather.name,
    temp: weather.main.temp,
    temp_max: weather.main.temp_max,
    temp_min: weather.main.temp_min,
    humidity: weather.main.humidity
 }}

 const postWeather = (weather) => {
  console.log('weather log', weather)
  const body = JSON.stringify(weatherJSON(weather))
  console.log("body", body)
  fetch('http://localhost:3024/', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: body})
   .then((response) => {
     console.log(response)
   })
   .catch(err => {
     console.log(err)
   })
}

  const getWeather = () => {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=937ce5cf3b3a4bf3549a28703f7531b7&units=imperial`)
    .then((response) => {
      return response.json()
    })
    .then((data => {
      console.log("hi", data)
      postWeather(data)
      setWeather(data);
    }))
  };

  const getWeatherHistory = () => {
    fetch ("http://localhost:3024")
    .then((response) => {
      return response.json()
    })
    .then((data => {
      setWeatherHistory(data);
    }))
    
  };


  useEffect(() => {
    if (cityname) {
      getWeather();
    }
  }, [cityname]);
  
  useEffect(getWeatherHistory, [cityname]);

  console.log(weather);
  

  return (
    <div className="mainContainer">
      <div className="currentContainer">
        <h2>Current Weather</h2>
        <CurrentWeather weather={weather} cityname={cityname} setCityName={setCityName} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div className="previousContainer">
        <h2>Previous Weather Searches</h2>
        <PreviousWeather weatherHistory={weatherHistory}/>
      </div>
    </div>
  );
}

export default App;
