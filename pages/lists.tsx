import Head from "next/head";
import { Icons } from "../assets/Icons";
import ListContent from "../components/ListContent";
import { useAppSelector } from "../utils/hooks";

const Lists = () => {
  const currentUser: any = useAppSelector((state) => state.user.user);

  return (
    <>
      <Head>
        <title>Lists / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="flex flex-col">
              <span className="font-bold text-xl">Lists</span>
              <span className="text-sm text-gray-500">
                {"@" + currentUser?.username}
              </span>
            </div>
            <div className="flex">
              <div className="min-w-[38px] min-h-[38px] max-w-[38px] max-h-[38px] ml-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Icons name="newList" />
              </div>
              <div className="min-w-[38px] min-h-[38px] max-w-[38px] max-h-[38px] ml-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Icons name="burgerMore" />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 mt-4 border-b">
            <span className="font-bold text-xl mb-3">Pinned Lists</span>
            <div className="flex items-center justify-center w-full text-gray-500 h-24 p-4">
              <p>
                Nothing to see here yet — pin your favorite Lists to access them
                quickly.
              </p>
            </div>
          </div>
          <div className="flex flex-col px-4 mt-4">
            <span className="font-bold text-xl mb-3">Your Lists</span>
            <div className="flex items-center justify-center w-full text-gray-500 h-24 p-4">
              <p>
                You haven&apos;t created or followed any Lists. When you do,
                they&apos;ll show up here.
              </p>
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

export default Lists;
