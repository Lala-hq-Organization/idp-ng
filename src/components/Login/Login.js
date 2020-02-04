import React, { useEffect } from 'react';
import { Box, Form, Text, ResponsiveContext } from 'grommet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BeatLoader } from 'react-spinners';

import styles from './styles';
import layoutStyles from '../layout/styles';
import Input from './Input';
import logo from '../../assets/logo.png';
import Button from '../candidates/Button';
import loginAction from './login.action';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        console.log(size);
        return (
          <Box style={styles.formBox} pad="large">
            <Box style={{ ...layoutStyles.logo, ...styles.logo }}>
              <img
                src={logo}
                alt="logo"
                style={{ width: '100%', objectFit: 'none' }}
              />
            </Box>
            <Box
              style={{
                ...styles.form,
                height:
                  size === 'xsmall'
                    ? '100%'
                    : size === 'medium' || 'small'
                    ? '80%'
                    : '50%'
              }}
            >
              <Box style={styles.innerFormBox}>
                <Box
                  stle={styles.textBox}
                  pad={{
                    bottom: size === 'xsmall' || 'medium' ? 'large' : null
                  }}
                >
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
                      style={{ textAlign: 'center' }}
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
                          margin: size === 'xsmall' ? '2em' : '1em auto',
                          width:
                            size === 'xsmall'
                              ? '220px'
                              : size === 'small'
                              ? '294px'
                              : '327px'
                        }}
                      >
                        <Button
                          boxStyle={{
                            ...styles.formButton
                          }}
                          handleButton={loading ? null : formik.handleSubmit}
                          textStyle={styles.formButtonText}
                          text={
                            loading ? <BeatLoader color="#fff" /> : 'Continue'
                          }
                        />
                      </button>
                    </Form>
                  )}
                </Formik>
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
