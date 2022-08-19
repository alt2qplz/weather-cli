import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'

const getCoordinates = async (city, token) => {
  const { data } = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: token
    }
  })
  return data[0]
}

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) throw new Error('Нет токена');
  const cityData = await getCoordinates(city, token);
  if (!cityData) throw new Error(`Не существующий город: ${city}`)
  const { data: weatherData } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: cityData.lat,
      lon: cityData.lon,
      appid: token,
      units: 'metric',
      lang: 'ru'
    }
  })

  return weatherData;
}