import React, { useState } from 'react';
import { Box, TextInput, Button } from 'grommet';
import { View, Hide } from 'grommet-icons';

import styles from './styles';

const App = props => {
  const [reveal, setReveal] = useState(false);
  let passwordType = reveal ? 'text' : 'password';
  return (
    <Box>
      <Box direction="row" border width="medium" margin="medium" pad="small">
        <TextInput
          plain
          type={props.password ? passwordType : props.type}
          value={props.value}
          dropProps={{ height: 'small' }}
          onChange={props.handleChange}
          name={props.name}
          onBlur={props.onBlur}
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
