import React from 'react';
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Text,
  Grommet
} from 'grommet';

import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

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
          <Tab
            // plain={true}
            title="Candidates"
            style={{ marginRight: '1em', color: 'red' }}
          >
            <Box>
              <h2>This is a summary of candidates in this camp</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    {header.map(h => (
                      <TableCell key={h} scope="col" align="center">
                        <Text>{h}</Text>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHeader>
                {/* <TableBody>
                {data.map(datum => (
                  <TableRow key={datum.id}>
                    {columns.map(c => (
                      <TableCell
                        key={c.property}
                        scope={c.dataScope}
                        align={c.align}
                      >
                        <Text>
                          {c.format ? c.format(datum) : datum[c.property]}
                        </Text>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody> */}
              </Table>
            </Box>
          </Tab>
          <Tab title="Families">
            <Box>
              <h2>This is a summary of families in this camp</h2>
            </Box>
          </Tab>
        </Tabs>
      </Grommet>
    </Box>
  );
}

const header = ['Name', 'Gender', 'Age Group', 'Date added'];
