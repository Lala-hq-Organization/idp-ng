import React, { useEffect } from 'react';
import { Box, Form, Text, ResponsiveContext } from 'grommet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import styles from './styles';
import layoutStyles from '../layout/styles';
import Input from './Input';
import logo from '../../assets/logo.png';
import loginAction from './login.action';
import request from '../../request';
import FormError from '../error/index';
import { clearErrorsAction } from '../data/data.action';

const App = props => {
  useEffect(() => {
    props.clearError();
  }, [props]);
  const error = useSelector(({ error }) => error);
  const { loading } = useSelector(({ user }) => user);

  return (
    <ResponsiveContext.Consumer>
      {size => {
        return (
          <Box style={styles.loginContainer}>
            <Box style={styles.formContainer}>
              <Box direction="row" justify="center">
                <Box style={{ ...layoutStyles.logo, ...styles.logo }}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: '100%', objectFit: 'none' }}
                  />
                </Box>
              </Box>
              <Box
                style={{
                  ...styles.form
                }}
              >
                <Box
                  style={{
                    ...styles.innerFormBox,
                    padding: size === 'xsmall' ? '2em 1em' : '2em 2.4em 4em'
                  }}
                >
                  <Box style={{ marginBottom: '2em' }}>
                    <Text size="xlarge" style={styles.text}>
                      Login
                    </Text>
                  </Box>

                  <Formik
                    initialValues={{ userName: '', password: '' }}
                    validationSchema={Yup.object({
                      userName: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .min(1, 'Must be more than one character')
                        .required('Please provide username'),
                      password: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .min(6, 'must 6 characters or more')
                        .required('Please provide password')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      const navigateToDashboard = () =>
                        props.history.push('/dashboard');
                      props.login(
                        { email: values.userName, password: values.password },
                        request,
                        navigateToDashboard
                      );
                      setSubmitting(false);
                    }}
                  >
                    {formik => (
                      <Form
                        onSubmit={formik.handleSubmit}
                        style={{ textAlign: 'center', width: '100%' }}
                      >
                        <FormError error={error.error} />
                        <Input
                          type="text"
                          value={formik.values.userName}
                          handleChange={formik.handleChange}
                          name="userName"
                          password={false}
                          onBlur={formik.handleBlur}
                          formikTouched={formik.touched.userName}
                          formikError={formik.errors.userName}
                          label="username"
                        />
                        <Input
                          value={formik.values.password}
                          handleChange={formik.handleChange}
                          name="password"
                          password={true}
                          onBlur={formik.handleBlur}
                          formikTouched={formik.touched.password}
                          formikError={formik.errors.password}
                          label="password"
                        />
                        <button
                          className="btn"
                          style={{
                            ...styles.btn,
                            ...styles.formButtonText,
                            width: size === 'xsmall' ? '80%' : '90%'
                          }}
                          onClick={loading ? null : formik.handleSubmit}
                        >
                          {loading ? <BeatLoader color="#fff" /> : 'Continue'}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};

const mapDispatchToProps = {
  login: loginAction,
  clearError: clearErrorsAction
};

export default connect(null, mapDispatchToProps)(withRouter(App));
