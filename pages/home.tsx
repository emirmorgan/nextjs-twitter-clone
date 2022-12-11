import { useRouter } from "next/router";
import Head from "next/head";

import { Icons } from "../assets/Icons";

//Firebase
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//Components
import LoadingScreen from "../components/LoadingScreen";
import ListContent from "../components/ListContent";
import SendTweet from "../components/Home/SendTweet";
import Tweets from "../components/Home/Tweets";

const Home = () => {
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

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
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex items-center justify-between p-4 pb-0">
          <span className="font-bold text-xl">Home</span>
          <div className="min-w-[20px] min-h-[20px] max-h-[20px] max-w-[20px]">
            <Icons name="latest" />
          </div>
        </div>
        <div className="border-b">
          <SendTweet />
        </div>
        <Tweets />
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Home;
