import React from 'react';
import { BarChart, User, Home } from 'grommet-icons';

export default [
  { Dashboard: ['/dashboard', <BarChart color="#fff" />] },
  { Candidates: ['/candidates', <User color="#fff" />] },
  { Camps: ['/camps', <Home color="#fff" />] }
];
