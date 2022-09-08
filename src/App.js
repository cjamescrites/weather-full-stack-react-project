// need to post from react to API

import './App.css';
import { useState, useEffect } from 'react';
import CurrentWeather from "./containers/CurrentWeather/CurrentWeather";
import PreviousWeather from "./containers/PreviousWeather/PreviousWeather";
import PostWeather from "./components/PostWeather/PostWeather";

function App() {


  const [weather, setWeather] = useState();
  const [weatherHistory, setWeatherHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityname, setCityName] = useState("");

  const getWeather = () => {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=937ce5cf3b3a4bf3549a28703f7531b7&units=imperial`)
    .then((response) => {
      return response.json()
    })
    .then((data => {
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

  useEffect(() => {
    if (cityname){
      postWeather
     }
  }, [weather]);
  
  useEffect(getWeatherHistory, [cityname]);

  console.log(weather);
  

  return (
    <div className="mainContainer">
      <div className="currentContainer">
        <h2>Current Weather</h2>
        <CurrentWeather weather={weather} cityname={cityname} setCityName={setCityName} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {weather && <PostWeather weather={weather} />}
      </div>
      <div className="previousContainer">
        <h2>Previous Weather Searches</h2>
        <PreviousWeather weatherHistory={weatherHistory}/>
      </div>
    </div>
  );
}

export default App;
