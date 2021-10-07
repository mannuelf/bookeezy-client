import React from 'react';
import { Formik, Form } from 'formik';

interface registerProps {
  username: string;
  password: string;
}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}>
      <Form>
        <div>hello</div>
      </Form>
    </Formik>
  );
};

export default Register;