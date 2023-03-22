import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  nameOrEmail: '',
  password: ''
}

function FormsAuthLogin(props) {
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      enableReinitialize
      validationSchema={
        Yup.object({
          nameOrEmail: Yup.string().required().label('Name or Email'),
          password: Yup.string().min(6).required().label('Password')
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Name or Email</label>
              <Field
                className={`form-control ${e?.nameOrEmail && t?.nameOrEmail && 'is-invalid'}`}
                name="nameOrEmail"
                type="nameOrEmail"
                placeholder="adam.chan@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="nameOrEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <Field
                className={`form-control ${e?.password && t?.password && 'is-invalid'}`}
                name="password"
                type="password"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="password"
                component="div"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark py-2 px-3 mt-3" type="submit" disabled={isSubmitting}>Submit</button>
            </div>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsAuthLogin
