#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import {printError, printHelp, printSuccess, printWeather} from './services/log.sevice.js'
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue} from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess(`Токен сохранен: ${token}`)
  } catch (e) {
    printError(e.message)
  }
}

const saveCity = async (city) => {
  try {
    await saveKeyValue('city', city)
    printSuccess(`Город сохранен: ${city}`)
  } catch (e) {
    printError(e.message)
  }
}

const getForcast = async () => {
  const city = await getKeyValue(TOKEN_DICTIONARY.city);
  if (!city) printError('Город не выбран');
  try {
    const weather = await getWeather(city)
    printWeather(weather, )
  } catch (e) {
    printError(e.message)
  }
}

const initCLI = async () => {
  const args = getArgs(process.argv)
  if (Object.keys(args).length) {
    if (args.h) {
      printHelp();
      return;
    }
    if (args.s) await saveCity(args.s)
    if (args.t) await saveToken(args.t)
  } else {
    await getForcast();
  }
}

initCLI();