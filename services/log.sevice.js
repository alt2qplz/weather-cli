import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
  console.log(chalk.bgRed.whiteBright(` ERROR `), err);
}

const printSuccess = (msg) => {
  console.log(chalk.bgGreen.whiteBright(` SUCCESS `), msg);
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan.whiteBright(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] - установить город
    -t [API_KEY] - установить токен
    -h - помощь
    `
  )
}

export { printError, printSuccess, printHelp }