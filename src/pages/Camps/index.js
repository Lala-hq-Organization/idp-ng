import React, { lazy, Suspense } from 'react';
import GridLayout from '../../components/layout/Layout';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading';

const States = lazy(() => import('./state'));
const Overview = lazy(() => import('./overview'));

export default function Camps() {
  let { state } = useParams();

  return (
    <Suspense fallback={<Loading />}>
      <GridLayout>{setCurrentView(state)}</GridLayout>
    </Suspense>
  );
}

function setCurrentView(page) {
  switch (page) {
    case undefined:
      return <Overview />;
    default:
      return <States />;
  }
}
