import React, { useEffect, useContext } from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';
import { connect, useSelector } from 'react-redux';
import { getCampsData } from '../../../components/data/data.action';
import request from '../../../request';

import DashCard from './DashCards';

import { styles } from './styles';
import states from '../../../assets/states.png';

function States(props) {
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    props.campData(request);
  }, [props]);

  const { camps } = useSelector(({ data }) => data);

  return (
    <Box
      name="Camps"
      style={{
        ...styles.container,
        marginLeft: size === 'small' ? '1em' : '3em',
        width: size === 'small' ? '92%' : '85%'
      }}
      direction="column"
    >
      <Box
        direction="row"
        wrap={true}
        style={{ marginBottom: '5em', minHeight: 'unset' }}
      >
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
