import React from 'react';
import { Box, Text } from 'grommet';
import { CaretDown } from 'grommet-icons';
import styles from './styles';

const App = props => {
  return (
    <Box align={props.align} justify={props.justify} pad={props.pad}>
      <Box style={props.style}>
        <Text style={styles.filterText}>Filters</Text>
        <CaretDown
          size="1.5rem"
          style={styles.filterIcon}
          color="#fff"
          onClick={props.handleFilterDisplay}
        />
      </Box>
    </Box>
  );
};

export default App;
