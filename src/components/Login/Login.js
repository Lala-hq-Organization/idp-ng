import React from 'react';
import { Box, Form, Text } from 'grommet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import layoutStyles from '../layout/styles';
import Input from './Input';
import logo from '../../assets/logo.png';
import Button from '../candidates/Button';

const App = () => (
  <Box style={styles.formBox} pad="large">
    <Box style={{ ...layoutStyles.logo, ...styles.logo }}>
      <img src={logo} alt="logo" style={{ width: '100%', objectFit: 'none' }} />
    </Box>
    <Box style={styles.form}>
      <Box style={styles.innerFormBox}>
        <Box stle={styles.textBox}>
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
            console.log(values);
            setSubmitting(false);
          }}
        >
          {formik => (
            <Form
              onSubmit={formik.handleSubmit}
              style={{ textAlign: 'center' }}
            >
              <Input
                type="text"
                value={formik.values.userName}
                handleChange={formik.handleChange}
                name="userName"
                password={false}
                onBlur={formik.handleBlur}
                formikTouched={formik.touched.userName}
                formikError={formik.errors.userName}
              />
              <Input
                value={formik.values.password}
                handleChange={formik.handleChange}
                name="password"
                password={true}
                onBlur={formik.handleBlur}
                formikTouched={formik.touched.password}
                formikError={formik.errors.password}
              />
              <button style={styles.btn}>
                <Button
                  boxStyle={styles.formButton}
                  handleButton={formik.handleSubmit}
                  textStyle={styles.formButtonText}
                  text="Continue"
                />
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  </Box>
);

export default App;
