import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {Redirect} from 'react-router-dom'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Formato de email inválido")
    .required("El email es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida"),
});


function LoginForm({logged, fetching, onLogin}) {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>LoginFormik</h4>
      <Formik
        initialValues={initialCredentials}
        //*** Acá hacemos la validación de Yup
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          onLogin(values.email, values.password)
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}
            <button type="submit">Submit</button>
            { fetching ? (<p>LOADING...</p>) : null}
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

LoginForm.propTypes = {
  logged: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default LoginForm
