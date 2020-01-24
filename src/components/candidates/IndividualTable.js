import React, { useState, useEffect, useContext } from 'react';
import { Box, DataTable, Text, ResponsiveContext } from 'grommet';
import { connect, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FormNext, FormPrevious } from 'grommet-icons';

import { individualColumns, Avatar } from './fakeData';

import styles from './styles';

import { getIndividualsData, getFamiliesData } from '../data/data.action';
import request from '../../request';

import './paginate.css';

const App = props => {
  const [pageNum, setPageNum] = useState(null);
  const [newPage, setNewPage] = useState(false);
  const size = useContext(ResponsiveContext);

  const { individuals } = useSelector(({ data }) => data);

  const candidates = () => {
    if (individuals.data) {
      return individuals.data.map(item => ({
        name: (
          <Box direction="row" style={styles.profile}>
            <Avatar image={item.image} />
            <Text style={styles.profileName}>{item.name}</Text>
          </Box>
        ),
        Date: item.date_added,
        State: item.state,
        Gender: item.gender,
        Family: item.family,
        Age: item.age_group,
        Occupation: item.occupation,
        id: item._id
      }));
    }
    return [];
  };
  const handlePageClick = ({ selected }) => {
    setNewPage(true);
    setPageNum(selected + 1);
    props.setContState({ ...props.contState, pageNum: selected + 1 });
    props.getIndividualsData(request, selected + 1);
    return;
  };

  useEffect(() => {
    if (newPage) {
      props.getIndividualsData(request, pageNum);
    }
    props.getIndividualsData(request, pageNum);
  }, [pageNum, props, newPage]);

  const pageCount = individuals.count
    ? Math.ceil(individuals.count.candidates / 7)
    : 10;

  return (
    <>
      <Box
        style={{
          display: 'block',
          width: '100%',
          overflowX: 'auto'
        }}
      >
        <DataTable
          primaryKey="id"
          style={styles.tableStyle}
          columns={individualColumns}
          data={candidates()}
          pad={{
            body: {
              horizontal: 'large',
              vertical: 'medium'
            },
            header: {
              horizontal: 'large',
              vertical: 'xsmall'
            }
          }}
          background={{
            header: '#F1F3F9',
            body: ['#F7FAFC', '#FFFFFF'],
            footer: 'dark-3'
          }}
          border={{ body: 'bottom' }}
          rowProps={{
            Eric: {
              background: 'accent-2',
              pad: 'large'
            }
          }}
        />
      </Box>
      <Box
        style={{
          ...styles.pageBox,
          justifyContent: size === 'small' ? 'center' : 'flex-end'
        }}
      >
        <ReactPaginate
          previousLabel={<FormPrevious />}
          nextLabel={<FormNext />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'paginateContainer'}
          pageClassName="page-links"
          previousClassName="previous-btn"
          previousLinkClassName="previous-btn-link"
          nextClassName="previous-btn"
          nextLinkClassName="previous-btn-link"
          // subContainerClassName={'pages pagination'}
          // activeClassName={'active'}
        />
      </Box>
    </>
  );
};

const mapDispatchToProps = {
  getIndividualsData,
  getFamiliesData
};

export default connect(null, mapDispatchToProps)(App);
