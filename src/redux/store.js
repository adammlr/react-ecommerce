import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const midddlewares = [];

if (process.env.NODE_ENV === 'development') {
  midddlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...midddlewares));

export const persistor = persistStore(store);
