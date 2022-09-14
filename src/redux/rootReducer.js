import { combineReducers } from 'redux';
import contactsReducer from './items/itemsSlice';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;