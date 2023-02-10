import { combineReducers } from 'redux';

import siteReducer from './siteReducer';
import userReducer from './user';
import contactReducer from './contact';
import buyCard from './buyCard';

const rootReducer = combineReducers({
  site: siteReducer,
  user: userReducer,
  contact: contactReducer,
  buyCard: buyCard,
});

export default rootReducer;
