import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  return store;
}
