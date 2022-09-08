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
        </div>
    )
}

export default PreviousWeather;