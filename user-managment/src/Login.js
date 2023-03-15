import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>LOGİN</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (!values.password) {
              alert('Please enter a password');
              setSubmitting(false);
            } else {
              navigate('/Home');
            }
          }}
        >
          <Form>
            <label htmlFor="firstName">Fırst Name</label>
            <Field id="firstName" name="firstName" placeholder="ebru"/>

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="tarı" />

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="ebrus1923"
              type="password"
            />
            <button type="submit" className="login-btn" required>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
