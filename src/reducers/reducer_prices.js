import {FETCH_PRICE} from '../actions/index';
export default function(state=[],action){
  switch (action.type) {
    case FETCH_PRICE:
    if(action.payload.data)
    return state.concat(action.payload.data);
    default:
    return state
  }

  return state;
}
