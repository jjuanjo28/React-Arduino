import React from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import { User } from '../../../models/user.class';

const LinkUserFormik = ({link , verify}) => {
    let userSchema = Yup.object({
        name : Yup.string().required("Es requerido"),
        email : Yup.string().email("debe ser tipo email").required("Es  requerido"),
        password: Yup.string().required("es requerido")
    })
    const chargeUser = (e) => {
       
      let newUser = new User(
        e.name,
        e.email,
        e.password
      )
    // link(newUser)
     verify(newUser)
     }
    return (
        <div>
        <h1>Insert your user:</h1>
        <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={chargeUser}
          
       
      >
      {({ errors, touched }) => (
          <Form>
          <Field name="name" type="text" placeholder="name" />
          {errors.name && touched.name ? (<div>{errors.name}</div>): null}
          <Field  name="email" type="email" placeholder="email" />
          {errors.email && touched.email ? (<div>{errors.email}</div>): null}
          <Field  name="password" type="password" placeholder="password"/>
          {errors.password && touched.password ? (<div>{errors.password}</div>): null}
         
         <div style={{margin:"10px"}}>
      
          <button type="submit">Add new User</button>
          <button type="reset">Clear Form</button>
         </div>
        </Form>
      )}
      </Formik>
            
        </div>
    );
}

export default LinkUserFormik;

