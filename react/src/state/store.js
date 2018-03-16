import { createStore, combineReducers } from 'redux';
import * as reducers from './ducks';

function reduxStore(initialState) {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension && window.devToolsExtension());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./ducks', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('./ducks');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
