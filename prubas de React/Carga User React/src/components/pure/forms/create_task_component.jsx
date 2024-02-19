import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, useFormik, FormikProps } from "formik";
import { Task } from "../../../models/task";
import { LEVEL } from "../../../models/LEVEL.enum";
const CreateTaskComponent = ({add}) => {
  return (
    <div>
      <Formik
        initialValues={{
          task: "",
          description: "",
          level: LEVEL.NORMAL,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            add(values)
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="task" type="text" placeholder="add your task" />
            {errors.task && touched.task ? <div>{errors.task}</div> : null}
            <Field
              name="description"
              type="text"
              placeholder="add your description"
            />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <Field as="select" name="levela">
              <option value={LEVEL.NORMAL}>Normal</option>
              <option value={LEVEL.URGENT}>Urgent</option>
              <option value={LEVEL.BLOCKING}>Blocking</option>
            </Field>
            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTaskComponent;
