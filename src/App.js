import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import { Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

import store from './store';
import Root from './Root';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      },
      medium: {
        value: 1500
      },
      large: {
        value: 3000
      }
    }
  }
});

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className="App">
          <Grommet theme={customBreakpoints}>
            <Root />
          </Grommet>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
