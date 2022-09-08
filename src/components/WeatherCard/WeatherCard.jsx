const WeatherCard = ({ name, temp, temp_max, temp_min, humidity}) => {

    return (
            <div className="weatherCard">
                <h2>{name}</h2>
                <p>Temperature: {temp} F</p>
                <p>High: {temp_max} F</p>
                <p>Low: {temp_min} F</p>
                <p>Humidity: {humidity}%</p>
            </div>
    )
}

export default WeatherCard;