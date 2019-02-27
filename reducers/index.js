import { combineReducers } from 'redux';

import countryReducer from './countryReducer';
import voteReducer from './voteReducer';




const rootReducer = combineReducers({
  countryReducer,
  voteReducer
})



export default rootReducer;
