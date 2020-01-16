import React from 'react';
import { Box, Tabs, Tab, DataTable, Grommet } from 'grommet';

import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import { columns, DATA } from './data';
import { styles } from './styles';

const theme = deepMerge(grommet, {
  tab: {
    active: { color: 'red' }
  }
});

export default function RightSection() {
  const [index, setIndex] = React.useState();

  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <Box style={styles.secondBox}>
      <Grommet theme={theme}>
        <Tabs style={{ width: '100%' }} activeIndex={index} onActive={onActive}>
          <Tab title="Candidates" style={{ marginRight: '1em', color: 'red' }}>
            <Box>
              <h2>This is a summary of candidates in this camp</h2>
              <DataTable
                columns={columns}
                data={DATA}
                step={5}
                pad={{ horizontal: 'small', vertical: 'small' }}
                background={{
                  header: '#fff',
                  body: ['#fff', '#F4F6F8']
                }}
                border={{
                  header: {
                    color: '#fff',
                    side: 'bottom'
                  }
                }}
              />
            </Box>
          </Tab>
          <Tab title="Families">
            <Box>
              <h2>This is a summary of families in this camp</h2>
              <DataTable
                columns={columns}
                data={DATA}
                step={5}
                pad={{ horizontal: 'small', vertical: 'small' }}
                background={{
                  header: '#fff',
                  body: ['#fff', '#F4F6F8']
                }}
                border={{
                  header: {
                    color: '#fff',
                    side: 'bottom'
                  }
                }}
              />
            </Box>
          </Tab>
        </Tabs>
      </Grommet>
    </Box>
  );
}
