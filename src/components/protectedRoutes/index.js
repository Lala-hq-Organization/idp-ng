import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = props => {
  // const { isLoggedIn } = useSelector(({ user }) => user);
  const { token } = useSelector(({ authentication }) => authentication);

  return (
    <>
      {!!!token && <Redirect to="/login" />}
      {props.children}
    </>
  );
};

export default App;
