import axios from 'axios';
import config from '../config/config.mjs';

let storedNumbers = [];

export async function fetchNumbers(id) {
  const endpoints = {
    p: 'primes',
    f: 'fibo',
    e: 'even',
    r: 'rand'
  };

  const endpoint = endpoints[id];
  const url = `${config.TEST_SERVER_URL}/${endpoint}`;

  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Fetch failed for ${id}:`, error.message);
    return [];
  }
}

export function getStoredNumbers() {
  return [...storedNumbers];
}

export function storeNumbers(numbers) {
  storedNumbers = numbers;
}