import React from 'react';
import { Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet';

function App() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Flavor
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <strong>Eric</strong>
          </TableCell>
          <TableCell>Coconut</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Chris</strong>
          </TableCell>
          <TableCell>Watermelon</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default App;
