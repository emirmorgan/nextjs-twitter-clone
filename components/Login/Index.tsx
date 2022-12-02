import LoginBanner from "./LoginBanner";
import LoginContent from "./LoginContent";
import LoginFooter from "./LoginFooter";

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex h-full min-h-[655px]">
        <LoginBanner />
        <LoginContent />
      </main>
      <LoginFooter />
    </div>
  );
};

export default Login;
