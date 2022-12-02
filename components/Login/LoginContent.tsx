import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginContent = () => {
  const [isLoginActive, setLoginActive] = useState<boolean>(true);

  return (
    <div className="flex flex-col justify-center items-center lg:justify-center lg:items-start p-8 w-full">
      <div className="flex">
        <svg
          className="fill-current text-twitter h-6 w-6 lg:h-12 lg:w-12"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
      </div>
      <div className="mt-10">
        <div className="flex flex-col font-chirp-extended lg:gap-6 xl:gap-6">
          <h1 className="hidden lg:block text-5xl">Happening now</h1>
          <h2 className="hidden lg:block text-xl lg:text-3xl">
            Join Twitter today.
          </h2>
        </div>
        <div className="flex flex-col mt-6 min-w-[320px] max-w-[320px]">
          <h2 className="block lg:hidden text-3xl font-chirp-extended mb-10">
            See what&apos;s happening in the world right now.
          </h2>
          {isLoginActive ? (
            <LoginForm setActive={setLoginActive} />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
