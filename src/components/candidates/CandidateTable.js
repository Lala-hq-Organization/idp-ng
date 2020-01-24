import React, { useState, useContext, useEffect } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { connect, useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';

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

  const reduxData = useSelector(({ data }) => data);
  const csvData = state.showTable ? reduxData.individuals : reduxData.families;

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
          <ElaborateFilter
            handleFilterDisplay={handleFilterDisplay}
            pageNum={state.pageNum}
          />
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
                  boxStyle={{
                    ...styles.individuals,
                    background: state.showTable
                      ? '#E8850F 0% 0% no-repeat padding-box'
                      : '',
                    color: state.showTable ? '#fff' : '#9A50C8'
                  }}
                  handleButton={showIndividual}
                  textStyle={styles.individualsText}
                  text="Individuals"
                />
                <Button
                  boxStyle={{
                    ...styles.families,
                    background: !state.showTable
                      ? '#E8850F 0% 0% no-repeat padding-box'
                      : '',
                    color: !state.showTable ? '#fff' : '#9A50C8'
                  }}
                  handleButton={hideIndividual}
                  textStyle={styles.familyText}
                  text="Families"
                />
              </Box>
              {Object.keys(csvData).length === 0 ? (
                <div style={{ ...styles.exportData, ...styles.exportDataText }}>
                  loading
                </div>
              ) : (
                <CSVLink
                  style={{ ...styles.exportData, ...styles.exportDataText }}
                  data={csvData.data.map(data => {
                    const { id, ...rest } = data;
                    return rest;
                  })}
                  filename={'data.csv'}
                  target="_blank"
                >
                  Export Data
                </CSVLink>
              )}
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
