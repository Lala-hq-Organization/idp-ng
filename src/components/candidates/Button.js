import React from 'react';

import { Box, Text } from 'grommet';

const App = props => {
  return (
    <Box style={props.boxStyle} onClick={props.handleButton}>
      <Text style={props.textStyle}>{props.text}</Text>
    </Box>
  );
};

export default App;
