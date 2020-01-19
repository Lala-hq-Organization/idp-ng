import React from 'react';
import errorMessageExtrator from './errorMessageExtractor';

const FormError = ({ error }) =>
  error ? (
    <small
      className="error"
      style={{
        color: 'red',
        textAlign: 'center',
        marginBottom: '0.75rem'
      }}
    >
      {errorMessageExtrator(error)}
    </small>
  ) : null;

export default FormError;
