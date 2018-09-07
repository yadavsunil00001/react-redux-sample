import { combineReducers } from 'redux';

import Prices from './reducer_prices';


const rootReducer = combineReducers({
  Prices:Prices
});

export default rootReducer;
