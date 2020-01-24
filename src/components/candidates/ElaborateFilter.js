import React, { useState } from 'react';
import { Box, Grid } from 'grommet';
import { useSelector, connect } from 'react-redux';
import request from '../../request';

import {
  getDashboardData,
  getFamiliesData,
  getIndividualsData,
  getCampsData,
  getFilterData
} from '../data/data.action';

import Select from './Select';
import Filter from './Filter';
import styles from './styles';
import Button from './Button';

const App = props => {
  // eslint-disable-next-line
  const [pageNum, setPageNum] = useState(props.pageNum);

  const [values, setValues] = useState({
    gender: '',
    data_added: '',
    state: '',
    family: ''
  });

  const { dashboard, families } = useSelector(({ data }) => data);

  let statesArr = dashboard[4] ? dashboard[4].states : [];
  let famArr = families.data ? families.data : [];

  const handleFilter = () => {
    props.getFilterData(request, pageNum, values);
  };

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
          <Select
            placeholder="Camps"
            id="camps"
            options={['Kano', 'LA', 'Lagos', 'Kebbi', 'Yola', 'Yobe']}
            value={values.camps}
            setValues={setValues}
            name="camp"
            values={values}
          />
          <Select
            placeholder="Family"
            id="family"
            name="family"
            options={getFamilyNames(famArr)}
            value={values.family}
            setValues={setValues}
            values={values}
          />
          <Select
            placeholder="State"
            id="state"
            name="state"
            options={getState(statesArr)}
            value={values.state}
            setValues={setValues}
            values={values}
          />
          <Select
            placeholder="Gender"
            id="gender"
            options={['Male', 'Female']}
            value={values.gender}
            setValues={setValues}
            name="gender"
            values={values}
          />
          <Select
            placeholder="LGA"
            id="lga"
            options={['LGA', 'LGA']}
            value={values.lga}
            setValues={setValues}
            name="lga"
            values={values}
          />
          <Select
            placeholder="Date"
            id="date_added"
            options={['Date1', 'Date2']}
            value={values['date_added']}
            setValues={setValues}
            name="date_added"
            values={values}
          />
          <Button
            boxStyle={styles.go}
            handleButton={handleFilter}
            textStyle={styles.goText}
            text="Go"
          />
        </Grid>
      </Box>
    </Box>
  );
};

const getState = arr => {
  return arr.map(item => item.state);
};

const getFamilyNames = arr => {
  return arr.map(item => item.name);
};

const mapDispatchToProps = {
  getDashboardData,
  getFamiliesData,
  getIndividualsData,
  getCampsData,
  getFilterData
};

export default connect(null, mapDispatchToProps)(App);
