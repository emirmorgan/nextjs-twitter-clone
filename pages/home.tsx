import { useRouter } from "next/router";
import Head from "next/head";

//Firebase
import { auth } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";

//Components
import LoadingScreen from "../components/LoadingScreen";

//Utils
import { useAppSelector } from "../utils/hooks";
import ListContent from "../components/ListContent";

const Home = () => {
  const router = useRouter();

  const [user, loading] = useAuthState(auth);
  const currentUser = useAppSelector((state) => state.user.user);

  if (loading) {
    return (
      <>
        <div className="w-full max-w-[600px] border-x">
          <LoadingScreen />
        </div>
        <div className="hidden lg:flex flex-col w-[350px] mr-[10px]"></div>
      </>
    );
  }

  if (!user) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div className="w-full max-w-[600px] border-x">
        <span>Homepage</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Home;
