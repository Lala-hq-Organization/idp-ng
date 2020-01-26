import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';

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
      <CardBox>
        <Select placeholder="Camps" id="camps" />
        <Select placeholder="Family" id="family" />
        <Select placeholder="State" id="state" />
        <Select placeholder="Gender" id="gender" />
        <Select placeholder="LGA" id="lga" />
        <Select placeholder="Date" id="date" />
        <Button
          boxStyle={styles.go}
          // handleButton={setIndividualTable}
          textStyle={styles.goText}
          text="Go"
        />
      </CardBox>
    </Box>
  );
};

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9em, 1fr));
  grid-gap: 2.5em;
  align-items: stretch;
`;

export default App;
