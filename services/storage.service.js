import { homedir } from 'os';
import { join, basename, dirname, extname, relative } from 'path';

const filePath = join(homedir(), 'weather-cli', 'weather-data.json');

const saveKeyValue = ( key, value ) => {
  // console.log(basename(filePath));
  // console.log(dirname(filePath));
  // console.log(extname(filePath));
  // console.log(relative(filePath, dirname(filePath)));


}

export { saveKeyValue }