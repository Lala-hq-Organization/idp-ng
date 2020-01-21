import React, { useEffect } from 'react';
import { Box } from 'grommet';
import { connect, useSelector } from 'react-redux';
import { getDashboardData } from '../../components/data/data.action';
import request from '../../request';

import GridLayout from '../../components/layout/Layout';

import { styles } from './styles';

import DashCard from './DashCards';
import Charts from './Charts';

function Dashboard(props) {
  useEffect(() => {
    props.allData(request);
  }, [props]);

  const { dashboard } = useSelector(({ data }) => data);

  return (
    <GridLayout>
      <Box
        name="Dashboard"
        style={styles.container}
        direction="column"
        pad="medium"
        background="transparent"
        justify="between"
      >
        <DashCard dashboard={dashboard} />
        <Charts dashboard={dashboard} />
      </Box>
    </GridLayout>
  );
}

const mapDispatchToProps = {
  allData: getDashboardData
};

export default connect(null, mapDispatchToProps)(Dashboard);
