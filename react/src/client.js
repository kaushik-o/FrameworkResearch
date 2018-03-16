import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from 'pages/AppComponent';
import configureStore from 'state/store';
import { applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

const store = applyMiddleware(reduxPromise)(configureStore)();

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('pages/AppContainer', () => {
    const NextApp = require('pages/AppContainer').default; // eslint-disable-line global-require

    ReactDOM.render(
      <BrowserRouter>
        <AppContainer>
          <Provider store={store}>
            <NextApp />
          </Provider>
        </AppContainer>
      </BrowserRouter>,
      document.getElementById('app')
    );
  });
}
