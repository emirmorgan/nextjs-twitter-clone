import React from "react";
import { Formik, Form } from "formik";

import LoginWithApp from "./LoginWithApp";
import loginSchema from "../../validation/loginSchema";
import Input from "./Input";

interface Props {
  setActive: any;
}

interface initialTypes {
  email: string;
  password: string;
}

const LoginForm: React.FC<Props> = ({ setActive }) => {
  const initalValues: initialTypes = {
    email: "",
    password: "",
  };

  const handleSignup = () => {
    setActive(false);
  };

  return (
    <div className="flex flex-col w-full">
      <Formik
        initialValues={initalValues}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {(formControl) => (
          <Form className="flex flex-col gap-3">
            <Input label="Email" name="email" />
            <Input label="Password" name="password" />
            <button
              type="submit"
              className="text-white bg-twitter rounded-full p-2 hover:bg-opacity-90 disabled:opacity-30"
              disabled={
                !(
                  formControl.isValid &&
                  formControl.dirty &&
                  !formControl.isSubmitting
                )
              }
            >
              Log in
            </button>
            <button
              onClick={handleSignup}
              className="text-twitter border border-twitter bg-white rounded-full p-2 hover:bg-twitter hover:bg-opacity-10"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <LoginWithApp />
    </div>
  );
};

export default LoginForm;
