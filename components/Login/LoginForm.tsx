import React from "react";
import { Formik, Form } from "formik";

import LoginWithApp from "./LoginWithApp";
import loginSchema from "../../validation/loginSchema";
import Input from "../Input";
import { userLogin } from "../../firebase";

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
        onSubmit={async (values, actions) => {
          const email = values.email;
          const password = values.password;

          await userLogin(email, password);
        }}
      >
        {(formControl) => (
          <Form className="flex flex-col gap-3">
            <Input data-cy="email" label="Email" name="email" />
            <Input data-cy="password" label="Password" name="password" />
            <button
              data-cy="login"
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
              data-cy="signup"
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
