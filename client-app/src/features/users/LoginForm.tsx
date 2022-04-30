import { Form, Formik } from "formik";
import React from "react";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
        {({handleSubmit}) => (
            <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                
            </Form>
        )}
    </Formik>
  );
};

export default LoginForm;
