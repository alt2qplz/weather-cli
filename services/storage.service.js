import { homedir } from 'os';
import { join, basename, dirname, extname, relative } from 'path';
import { promises } from 'fs';

const FILE_PATH = join(homedir(), 'weather-data.json');
const TOKEN_DICTIONARY = {
 token: 'token',
 city: 'city'
}

const saveKeyValue = async ( key, value ) => {
  const data = readFile(FILE_PATH);
  data[key] = value;
  await promises.writeFile(FILE_PATH, JSON.stringify(data));
}

const readFile = async (filePath) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    return JSON.parse(file.toString('utf8'));
  } else {
    return {}
  }
}

const getKeyValue = async (key) => {
  const data = await readFile(FILE_PATH);
  if (data[key]) return data[key]
  else return undefined
}

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true
  } catch {
    return false
  }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }