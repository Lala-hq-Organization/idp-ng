import React, { useState, useCallback } from 'react';
import { Box, DataTable, Text } from 'grommet';
import { connect, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FormNext, FormPrevious } from 'grommet-icons';

import { columns, Avatar } from './fakeData';
import styles from './styles';

import { getIndividualsData, getFamiliesData } from '../data/data.action';
import request from '../../request';

import './paginate.css';

const Candidates = props => {
  const [pageNum, setPageNum] = useState(null);
  const { families } = useSelector(({ data }) => data);

  const familiesData = useCallback(() => {
    if (families.data) {
      return families.data.map(item => ({
        name: (
          <Box direction="row" style={styles.profile}>
            <Avatar />
            <Text style={styles.profileName}>{item.name}</Text>
          </Box>
        ),
        Date: item.date_added,
        State: item.state,
        Number: item.total_number,
        Children: item.children,
        id: item._id
      }));
    }
    return [];
  }, [families.data]);

  const handlePageClick = ({ selected }) => {
    setPageNum(selected + 1);
    props.setContState({ ...props.contState, pageNum: selected + 1 });
    props.getFamiliesData(request, pageNum);
  };

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
          columns={columns}
          data={familiesData()}
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
      <Box style={styles.pageBox}>
        <ReactPaginate
          previousLabel={<FormPrevious />}
          nextLabel={<FormNext />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={28}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
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

export default connect(null, mapDispatchToProps)(Candidates);
