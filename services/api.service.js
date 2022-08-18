import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'

// https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

const getCoordinates = async (city, token) => {
  const { data: cityData } = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: 'Kazan',
      appid: token
    }
  })
  return cityData[0]
}

const getWeather = async (city) => {
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

  console.log(weatherData)
}

// url.searchParams.append('q', 'Kazan');
// url.searchParams.append('appid', token);
//
// https.get(url, (response) => {
//   let res = '';
//   response.on('data', chunk => {
//     res += chunk;
//   })
//
//   response.on('end', () => {
//     console.log(res);
//   })
// });