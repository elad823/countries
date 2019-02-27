import {LIKE,DISLIKE} from '../actions/actionTypes'


const initialState = {

};

const voteReducer = (state = initialState, action) => {
  let newState=null;
  switch (action.type) {
    case LIKE:
      newState = {...state};
      country = newState[action.country];
      if(!country)
      {
        country={};
      }
      if(!country.likes)
      {
        country.likes=0;
      }
      country.likes++;
      newState[action.country]=country;
      return newState
    case DISLIKE:
      newState= {...state}
      country = newState[action.country];
      if(!country)
      {
        country={};
      }
      if(!country.dislikes)
      {
        country.dislikes=0;
      }
      country.dislikes++;
      newState[action.country]=country;
    return newState

    default:
      return state
  }
}


export default voteReducer;
