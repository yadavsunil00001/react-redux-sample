import { combineReducers } from 'redux';

import Prices from './reducer_prices';
import CompanyDetails from './reducer_companyDetails';

import FetchTimeSeries from './reducer_timeSeries';

const rootReducer = combineReducers({
  Prices:Prices,
  CompanyDetails:CompanyDetails,
  TimeSeriesData:FetchTimeSeries
});

export default rootReducer;
