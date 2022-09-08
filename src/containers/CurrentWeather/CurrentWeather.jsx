import WeatherCard from "../../components/WeatherCard/WeatherCard"
import SearchBar from "../../components/SearchBar/SearchBar"

const CurrentWeather = (props) => {
    const { weather, setSearchTerm, cityname, searchTerm, setCityName } = props;
  
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
      };

    const handleClick = () => {
        setCityName(searchTerm);
      }


      return (
        <div>
          <>
            <SearchBar handleInput={handleInput} handleClick={handleClick} searchTerm={searchTerm} setCityName={setCityName}/>
          </>
          <div className="currentWeatherContainer">
            {weather && <WeatherCard 
            name={weather.name} 
            temp={weather.main.temp}
            temp_max={weather.main.temp_max} 
            temp_min={weather.main.temp_min} 
            humidity={weather.main.humidity}
            />}
          </div>
        </div>
      )

}

export default CurrentWeather;
