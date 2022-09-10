import { combineReducers } from 'redux';
import itemsReducer from './items/phone-book-items-reducer';
import filterReducer from './filter/phoneBookFilter-reducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default rootReducer;