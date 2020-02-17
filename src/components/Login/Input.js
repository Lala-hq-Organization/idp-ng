import React, { useState, useContext } from 'react';
import { Box, TextInput, Button, ResponsiveContext } from 'grommet';
import { View, Hide } from 'grommet-icons';

import styles from './styles';

const App = props => {
  const [reveal, setReveal] = useState(false);
  const size = useContext(ResponsiveContext);

  let passwordType = reveal ? 'text' : 'password';

  return (
    <Box>
      <Box
        direction="row"
        width="100%"
        pad="small"
        style={{
          border: '1px solid #9FDBD2',
          margin: size === 'xsmall' ? '0.5em auto' : '1.5em auto'
        }}
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
            icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
            onClick={() => setReveal(!reveal)}
          />
        )}
      </Box>
      {props.formikTouched && props.formikError ? (
        <small style={styles.validation}>{props.formikError}</small>
      ) : null}
    </Box>
  );
};

export default App;
