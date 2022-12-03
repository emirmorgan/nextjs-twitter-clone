import { Form, Formik } from "formik";
import Input from "../Input";
import registerSchema from "../../validation/registerSchema";

interface initialTypes {
  email: string;
  password: string;
  username: string;
}

interface Props {
  setActive: any;
}

const RegisterForm: React.FC<Props> = ({ setActive }) => {
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
            <Input label="Username" name="username" />
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
