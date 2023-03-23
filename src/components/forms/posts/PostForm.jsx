import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function FormPosts(props) {
  const initialValues = {
    title: '',
    description: '',
    pid: props.pid,
    bid: props.bid
  }
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      pid={props.value}
      enableReinitialize
      validationSchema={
        Yup.object({
          title: Yup.string().required().label('Post Name'),
          description: Yup.string().min(6).required().label('Post Description')
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Post Name</label>
              <Field
                className={`form-control ${e?.title && t?.title && 'is-invalid'}`}
                name="title"
                type="title"
                placeholder="Post Name"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="title"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Post Description</label>
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
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark py-2 px-3 mt-3" type="submit" disabled={isSubmitting}>Submit</button>
            </div>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormPosts
