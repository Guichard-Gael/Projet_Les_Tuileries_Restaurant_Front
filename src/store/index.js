import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

import logMiddleware from '../middlewares/logMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import contactMiddleware from '../middlewares/contactMiddleware';
import cardMiddleware from '../middlewares/cardMiddleware';

const middlewares = applyMiddleware(
  logMiddleware,
  userMiddleware,
  contactMiddleware,
  cardMiddleware,
);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
