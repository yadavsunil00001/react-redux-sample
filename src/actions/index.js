import axios from 'axios';

export const FETCH_PRICE='DELETE_OBSERVATION';
export const FETCH_COMPANY_DETAILS ='FETCH_COMPANY_DETAILS';
export const FETCH_TIME_SERIES ='FETCH_TIME_SERIES';



export function fetchPrices(symbol) {
const url=`http://localhost:8090/biodiv-api/sample/list?symbol=${symbol}`;
const request = axios.get(url);
  return {
    type:FETCH_PRICE,
    payload:request
  }
}
export function fetchCompanyDetails(symbol) {
const url=`http://localhost:8090/biodiv-api/sample/companylist`;
const request = axios.get(url);
  return {
    type:FETCH_COMPANY_DETAILS,
    payload:request
  }
}
export function fetchTimeSeries(symbol) {
const url=`https://www.alphavantage.co/query?apikey=T5AHI8D52K8ONEH9&function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}`;
const request = axios.get(url);
  return {
    type:FETCH_TIME_SERIES,
    payload:request
  }
}
