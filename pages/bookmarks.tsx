import Head from "next/head";
import { Icons } from "../assets/Icons";
import ListContent from "../components/ListContent";
import { useAppSelector } from "../utils/hooks";

const Bookmarks = () => {
  const currentUser: any = useAppSelector((state) => state.user.user);

  return (
    <>
      <Head>
        <title>Bookmarks / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="flex flex-col">
              <span className="font-bold text-xl">Bookmarks</span>
              <span className="text-gray-500 text-sm">
                {"@" + currentUser?.username}
              </span>
            </div>
            <div className="ml-auto cursor-pointer">
              <Icons name="burgerMore" />
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

export default Bookmarks;
