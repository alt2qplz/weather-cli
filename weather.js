#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import {printHelp} from './services/log.sevice.js'



const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // сохранить город
  }
  if (args.t) {
    // сохранить token
  }
  //вывести погоду
}

initCLI();