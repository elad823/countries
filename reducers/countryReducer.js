
import {generateMockCountries} from '../data/DataGenerator';

const initialState = {
  countries:generateMockCountries()
};

const countryReducer = (state = initialState, action) => state


export default countryReducer;
