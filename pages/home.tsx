import { useRouter } from "next/router";
import Head from "next/head";

//Firebase
import { auth, userLogout } from "../firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

//Components
import LoadingScreen from "../components/LoadingScreen";
import Sidebar from "../components/Sidebar";

//Utils
import { useAppSelector } from "../utils/hooks";

const Home = () => {
  const router = useRouter();

  const [user, loading] = useAuthState(auth);
  const currentUser = useAppSelector((state) => state.user.user);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    router.push("/");
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div className="flex flex-1 shrink-0 items-stretch h-screen">
        <Sidebar />
        <main className="flex flex-col grow md:grow-[2] shrink basis-auto w-full md:w-auto items-stretch md:items-start">
          <div className="flex w-full md:w-[600px] lg:w-[920px] xl:w-[990px] h-full lg:gap-6">
            <div className="w-full max-w-[600px] border-x"></div>
            <div className="hidden lg:flex flex-col w-[350px] mr-[10px]"></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
