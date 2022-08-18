#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import {printError, printHelp, printSuccess} from './services/log.sevice.js'
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js'

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

const initCLI = async () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    await saveCity(args.s)
  }
  if (args.t) {
    await saveToken(args.t);
  }

}

initCLI();