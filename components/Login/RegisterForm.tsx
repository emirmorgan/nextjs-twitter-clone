import { Form, Formik } from "formik";
import Input from "../Input";
import registerSchema from "../../validation/registerSchema";

import { userRegistration } from "../../firebase.js";
import { useRouter } from "next/router";

interface initialTypes {
  email: string;
  password: string;
  username: string;
}

interface Props {
  setActive: any;
}

const RegisterForm: React.FC<Props> = ({ setActive }) => {
  const router = useRouter();

  const initalValues: initialTypes = {
    email: "",
    password: "",
    username: "",
  };

  const handleSignin = () => {
    setActive(true);
  };

  return (
    <div className="flex flex-col w-full">
      <Formik
        initialValues={initalValues}
        validationSchema={registerSchema}
        onSubmit={async (values, actions) => {
          const email = values.email;
          const password = values.password;
          const username = values.username;

          await userRegistration(email, username, password);

          router.push("/");
        }}
      >
        {(formControl) => (
          <Form className="flex flex-col gap-3">
            <Input label="Username" name="username" />
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
              Sign up
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-center mt-2 text-sm text-gray-700 font-semibold">
        By signing up, you agree to the{" "}
        <a href="" className="!text-blue-600 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="" className="!text-blue-600 hover:underline">
          Privacy Policy
        </a>
        , including{" "}
        <a href="" className="!text-blue-600 hover:underline">
          Cookie Use
        </a>
        .
      </p>
      <p className="flex items-center justify-center gap-1 mt-2">
        Already have an account?
        <span
          onClick={handleSignin}
          className="text-blue-500 cursor-pointer hover:underline font-semibold"
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
