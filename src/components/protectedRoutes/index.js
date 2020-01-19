import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = props => {
  const { isLoggedIn } = useSelector(({ user }) => user);

  return (
    <>
      {!isLoggedIn && <Redirect to="/login" />}
      {props.children}
    </>
  );
};

export default App;
