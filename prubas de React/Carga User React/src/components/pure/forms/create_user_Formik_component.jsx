import React from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import { User } from '../../../models/user.class';
import { useNavigate} from "react-router-dom"
const CreateUserFormikComponent = ({add}) => {

    const location = useNavigate() 

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
     add(newUser)
     

     }
    return (
        <div>
        <h1>Create a new User</h1>
        <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={chargeUser}
          
       
      >
      {({ errors, touched }) => (
          <Form>
          <Field name="name" type="text" placeholder="add your name" />
          {errors.name && touched.name ? (<div>{errors.name}</div>): null}
          <Field  name="email" type="email" placeholder="add your email" />
          {errors.email && touched.email ? (<div>{errors.email}</div>): null}
          <Field  name="password" type="password" placeholder="add your password"/>
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

export default CreateUserFormikComponent;
