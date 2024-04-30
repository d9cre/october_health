import axios from 'axios';

// Create an instance of axios to make requests to the OpenWeatherMap API
export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
