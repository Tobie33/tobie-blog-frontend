import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  title: '',
  description: ''
}

function FormProjectsCreate(props) {
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      enableReinitialize
      validationSchema={
        Yup.object({
          title: Yup.string().required().label('Project Name'),
          description: Yup.string().min(6).required().label('Project Description')
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Project Name</label>
              <Field
                className={`form-control ${e?.title && t?.title && 'is-invalid'}`}
                name="title"
                type="title"
                placeholder="Project Name"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="title"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Project Description</label>
              <Field
                className={`form-control ${e?.description && t?.description && 'is-invalid'}`}
                name="description"
                type="textarea"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="description"
                component="div"
              />
            </div>

            <button className="btn btn-primary float-end" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormProjectsCreate
