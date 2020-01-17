import React from 'react';
import { Box, Grid } from 'grommet';

import Select from './Select';
import Filter from './Filter';
import styles from './styles';
import Button from './Button';

const App = props => {
  return (
    <Box style={styles.elaborateFilterBox}>
      <Filter
        justify="start"
        style={styles.filter2}
        handleFilterDisplay={props.handleFilterDisplay}
      />
      <Box>
        <Grid
          columns={{
            count: 4,
            size: 'auto'
          }}
          gap="small"
        >
          <Select placeholder="Camps" />
          <Select placeholder="Family" />
          <Select placeholder="State" />
          <Select placeholder="Gender" />
          <Select placeholder="LGA" />
          <Select placeholder="Date" />
          <Button
            boxStyle={styles.go}
            // handleButton={setIndividualTable}
            textStyle={styles.goText}
            text="Go"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
