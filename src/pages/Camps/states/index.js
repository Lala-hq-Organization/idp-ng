import React from 'react';
import { Box, Image } from 'grommet';

import DashCard from './DashCards';

import { styles } from './styles';
import states from '../../../assets/states.png';

export default function States() {
  return (
    <Box name="Camps" style={styles.container} direction="column">
      <Box direction="row">
        <DashCard />
      </Box>
      <Box style={styles.imageBox} margin="4em 0em 0em 0em">
        <Image src={states} fit="cover" />
      </Box>
    </Box>
  );
}
