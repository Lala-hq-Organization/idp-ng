import React, { useState } from 'react';
import { Box, TextInput, Button } from 'grommet';
import { View, Hide } from 'grommet-icons';

import styles from './styles';

const App = props => {
  const [reveal, setReveal] = useState(false);

  let passwordType = reveal ? 'text' : 'password';

  return (
    <Box>
      <Box
        direction="row"
        width="100%"
        margin="1.5em auto"
        pad="small"
        style={{ border: '1px solid #9FDBD2' }}
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
