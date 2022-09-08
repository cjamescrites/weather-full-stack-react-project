import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { useState, useEffect } from 'react';

const PreviousWeather = (props) => {

    const { weatherHistory } = props;

    const mappedWeatherHistory = weatherHistory.map((weatherH, index) => {
        return <WeatherCard 
        key={index}
        name={weatherH.name} 
        temp={weatherH.temp}
        temp_max={weatherH.temp_max} 
        temp_min={weatherH.temp_min} 
        humidity={weatherH.humidity}/>
    })
      
    console.log(weatherHistory)
    console.log(mappedWeatherHistory);
    
    return (
        <div className="previousWeatherContainer">
            {mappedWeatherHistory}
            {/* {weatherHistory && <WeatherCard 
            name={weatherHistory[0].name} 
            temp={weatherHistory[0].temp}
            temp_max={weatherHistory[0].temp_max} 
            temp_min={weatherHistory[0].temp_min} 
            humidity={weatherHistory[0].humidity}/>} */}
        </div>
    )
}

export default PreviousWeather;