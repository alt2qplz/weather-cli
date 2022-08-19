import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'

const getCoordinates = async (city, token) => {
  const { data: cityData } = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: token
    }
  })
  return cityData[0]
}

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) throw new Error('Нет токена');
  const { lat, lon } = await getCoordinates(city, token);

  const { data: weatherData } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: lat,
      lon: lon,
      appid: token,
      units: 'metric',
      lang: 'ru'
    }
  })

  return weatherData;
}