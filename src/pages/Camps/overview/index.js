import React, { useEffect } from 'react';
import { Box, Image } from 'grommet';
import { connect, useSelector } from 'react-redux';
import { getCampsData } from '../../../components/data/data.action';
import request from '../../../request';

import DashCard from './DashCards';

import { styles } from './styles';
import states from '../../../assets/states.png';

function States(props) {
  useEffect(() => {
    props.campData(request);
  }, [props]);

  const { camps } = useSelector(({ data }) => data);

  return (
    <Box name="Camps" style={styles.container} direction="column">
      <Box direction="row" wrap={true} style={{ marginBottom: '10em' }}>
        <DashCard campData={camps} />
      </Box>
      <Box style={styles.imageBox}>
        <Image src={states} fit="cover" style={styles.image} />
      </Box>
    </Box>
  );
}

const mapDispatchToProps = {
  campData: getCampsData
};

export default connect(null, mapDispatchToProps)(States);
