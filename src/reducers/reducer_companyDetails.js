import {FETCH_COMPANY_DETAILS} from '../actions/index';
export default function(state=[],action){
  switch (action.type) {
    case FETCH_COMPANY_DETAILS:
    if(action.payload.data)
    return state.concat(action.payload.data);
    default:
    return state
  }

  return state;
}
