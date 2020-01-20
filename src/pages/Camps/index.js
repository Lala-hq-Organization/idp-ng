import React from 'react';
import GridLayout from '../../components/layout/Layout';
import { useParams } from 'react-router-dom';

import States from './state';
import Overview from './overview';

export default function Camps() {
  let { state } = useParams();
  console.log(state);
  return <GridLayout>{setCurrentView(state)}</GridLayout>;
}

function setCurrentView(page) {
  switch (page) {
    case undefined:
      return <Overview />;
    default:
      return <States />;
  }
}
