import axios from 'axios';

export const FETCH_PRICE='DELETE_OBSERVATION';

export function fetchPrices(symbol) {
const url=`http://localhost:8090/biodiv-api/data/list?symbol=${symbol}`;
const request = axios.get(url);
  return {
    type:FETCH_PRICE,
    payload:request
  }
}
