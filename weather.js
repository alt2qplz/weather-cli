#!/usr/bin/env node

import { getArgs } from './helpers/args.js';

const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(args);
  if (args.h) {
    // вывод хелп
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