const errorMessageExtrator = error => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.error
  ) {
    return error.response.data.message || error.response.data.error;
  } else {
    // if (
    //   error.message === 'Request failed with status code 404' ||
    //   error.message === 'Request failed with status code 401'
    // )
    //   return 'Error! process failed';
    return error.message;
  }
};

export default errorMessageExtrator;
