import {FETCH_TIME_SERIES} from '../actions/index';
export default function(state=[],action){
  switch (action.type) {
    case FETCH_TIME_SERIES:
    if(action.payload.data)
    return state.concat(action.payload.data);
    default:
    return state
  }

  return state;
}
