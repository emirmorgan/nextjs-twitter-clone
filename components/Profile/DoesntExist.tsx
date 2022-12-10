import Head from "next/head";
import { useRouter } from "next/router";
import ListContent from "../ListContent";

const DoesntExist = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Head>
        <title>Profile / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex flex-col">
          <div className="flex flex-col px-3 py-1">
            <span className="font-bold text-xl">Profile</span>
          </div>
          <div className="w-full h-44 bg-gray-300"></div>
          <div className="flex flex-col font-chirp">
            <div className="flex px-3 relative">
              <div className="absolute -bottom-16 left-4 border-[4px] bg-gray-100 border-white min-w-[136px] min-h-[136px] rounded-full" />
            </div>
            <div className="flex flex-col px-3 mt-12">
              <div className="flex flex-col ml-3 mt-8">
                <span className="font-bold text-xl">{"@" + username}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center px-8 py-6 mt-6">
              <p className="text-3xl font-bold">
                This account doesn&apos;t exist
              </p>
              <span className="text-sm text-gray-500">
                Try searching for another.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default DoesntExist;
