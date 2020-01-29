import React, { useState } from 'react';
import { Box, TextInput, Button, ResponsiveContext } from 'grommet';
import { View, Hide } from 'grommet-icons';

import styles from './styles';

const App = props => {
  const [reveal, setReveal] = useState(false);

  let passwordType = reveal ? 'text' : 'password';
  return (
    <ResponsiveContext.Consumer>
      {size => {
        return (
          <Box>
            <Box
              direction="row"
              border
              width={
                size === 'large'
                  ? 'medium'
                  : size === 'medium'
                  ? '335px'
                  : size === 'small'
                  ? '303px'
                  : size === 'xsmall'
                  ? '239px'
                  : 'medium'
              }
              margin={size === 'xsmall' ? '20px auto' : 'medium'}
              pad="small"
            >
              <TextInput
                plain
                type={props.password ? passwordType : props.type}
                value={props.value}
                dropProps={{ height: 'small' }}
                onChange={props.handleChange}
                name={props.name}
                onBlur={props.onBlur}
                placeholder={props.label}
              />
              {props.password && (
                <Button
                  icon={
                    reveal ? <View size="medium" /> : <Hide size="medium" />
                  }
                  onClick={() => setReveal(!reveal)}
                />
              )}
            </Box>
            {props.formikTouched && props.formikError ? (
              <small style={styles.validation}>{props.formikError}</small>
            ) : null}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};

export default App;
