import React, { useEffect } from 'react';

import { Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import { connect } from 'react-redux';

import request from './request';
import { authAction } from '../src/components/Login/login.action';

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

function App(props) {
  useEffect(() => {
    props.auth(request);
  }, [props]);

  return (
    <div className="App">
      <Grommet theme={customBreakpoints}>
        <Root />
      </Grommet>
    </div>
  );
}

const mapDispatchToProps = {
  auth: authAction
};

export default connect(null, mapDispatchToProps)(App);
