import { useField } from "formik";
import React from "react";

interface InputProps {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [field, meta] = useField(props);

  const { label } = props;

  return (
    <div
      className={
        "relative border rounded-md border-gray-500 group pt-2 px-2" +
        (field.value === "" && field.value.length === 0
          ? " focus-within:border-twitter"
          : " border-twitter")
      }
    >
      <span
        className={
          "absolute left-2 bottom-3 right-0 pointer-events-none transition-all ease-linear" +
          (field.value === "" && field.value.length === 0
            ? " group-focus-within:text-xs group-focus-within:text-twitter group-focus-within:top-1"
            : " text-xs text-twitter top-1")
        }
      >
        {label}
      </span>
      <input
        type={field.name === "password" ? "password" : "text"}
        className="w-full focus:outline-none pt-3 pb-1 autofill:bg-transparent"
        {...field}
        {...props}
      />
    </div>
  );
};

export default Input;
