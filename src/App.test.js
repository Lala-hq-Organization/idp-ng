import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>,
    div
  );
});
