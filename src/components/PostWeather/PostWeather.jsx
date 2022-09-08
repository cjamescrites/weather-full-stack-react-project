const PostWeather = (props) => {

  const { weather } = props;

  const weatherJSON = {
     name: weather.name,
     temp: weather.temp,
     temp_max: weather.temp_max,
     temp_min: weather.temp_min,
     humidity: weather.humidity
  

 } 
 fetch('http://localhost:3024/', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(weatherJSON)})
   .then((response) => {
     console.log(response)
   })
   .catch(err => {
     console.log(err)
   })

   return (
    <p>{weather.name}</p>
   )
  }

  export default PostWeather;