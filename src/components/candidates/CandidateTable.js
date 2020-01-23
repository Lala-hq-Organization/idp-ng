import React, { useState, useContext, useEffect } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { connect } from 'react-redux';

import Layout from '../layout/Layout';
import styles from './styles';
import Filter from './Filter';
import ElaborateFilter from './ElaborateFilter';
import Button from './Button';
import AlternateTableMenu from './AlternateTableMenu';
import { getIndividualsData, getFamiliesData } from '../data/data.action';
import request from '../../request';

import FamiliesTable from './FamiliesTable';
import IndividualTable from './IndividualTable';

import './paginate.css';

const Candidates = props => {
  const [state, setState] = useState({
    pageNum: null,
    displayFilters: false,
    showTable: false
  });

  const size = useContext(ResponsiveContext);

  const showIndividual = () => {
    setState({ ...state, showTable: true });
  };

  const hideIndividual = () => {
    setState({ ...state, showTable: false });
  };

  const handleFilterDisplay = () => {
    setState({
      ...state,
      displayFilters: !state.displayFilters
    });
  };

  useEffect(() => {
    if (!state.showTable) {
      props.getFamiliesData(request, state.pageNum);
    } else {
      props.getIndividualsData(request, state.pageNum);
    }
  }, [props, state]);

  return (
    <Layout>
      <Box
        align="center"
        pad={{ vertical: 'small' }}
        style={{
          ...styles.mainDiv,
          width: size === 'xsmall' ? '97%' : '90%',
          paddingLeft: size === 'xsmall' ? '1em' : '6rem'
        }}
        name="Candidates"
      >
        {state.displayFilters ? (
          <ElaborateFilter handleFilterDisplay={handleFilterDisplay} />
        ) : (
          <Filter
            align="center"
            justify="start"
            pad="large"
            style={styles.filter}
            handleFilterDisplay={handleFilterDisplay}
          />
        )}
        <Box style={styles.table}>
          {size === 'large' || size === 'medium' ? (
            <Box
              direction="row"
              width="100%"
              justify="between"
              style={styles.header}
            >
              <Box direction="row" justify="between" style={styles.btnBox}>
                <Button
                  boxStyle={styles.individuals}
                  handleButton={showIndividual}
                  textStyle={styles.individualsText}
                  text="Individuals"
                />
                <Button
                  boxStyle={styles.families}
                  handleButton={hideIndividual}
                  textStyle={styles.familyText}
                  text="Families"
                />
              </Box>
              <Button
                boxStyle={styles.exportData}
                // handleButton={setFamilyTable}
                textStyle={styles.exportDataText}
                text="Export Data"
              />
            </Box>
          ) : (
            <AlternateTableMenu
              handleFamily={hideIndividual}
              handleIndividuals={showIndividual}
            />
          )}

          {state.showTable ? (
            <IndividualTable contState={state} setContState={setState} />
          ) : (
            <FamiliesTable contState={state} setContState={setState} />
          )}
        </Box>
      </Box>
    </Layout>
  );
};

const mapDispatchToProps = {
  getIndividualsData,
  getFamiliesData
};

export default connect(null, mapDispatchToProps)(Candidates);
