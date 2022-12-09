import Head from "next/head";
import Image from "next/image";
import { Icons } from "../assets/Icons";
import ListContent from "../components/ListContent";

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Notifications / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-1">
            <span className="font-bold text-xl p-3">Notifications</span>
            <div className="min-w-[38px] min-h-[38px] ml-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <Icons name="settings" />
            </div>
          </div>
          <div className="flex items-center justify-center text-center font-semibold border-b">
            <div className="flex flex-col justify-between items-center px-3 pt-3 flex-1 hover:bg-gray-200 cursor-pointer">
              <span className="mb-3">All</span>
              <div className="bg-twitter w-12 h-1 rounded-full"></div>
            </div>
            <div className="flex flex-col justify-between items-center px-3 pt-3 flex-1 hover:bg-gray-200 text-gray-500 cursor-pointer">
              <span className="mb-3">Verified</span>
              <div className="w-12 h-1 rounded-full"></div>
            </div>
            <div className="flex flex-col justify-between items-center px-3 pt-3 flex-1 hover:bg-gray-200 text-gray-500 cursor-pointer">
              <span className="mb-3">Mentions</span>
              <div className="w-12 h-1 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <a
              href="https://twitter.com/emirmrg/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex px-3 py-3 hover:bg-gray-100">
                <div className="min-w-[32px] min-h-[32px] text-twitter mr-3">
                  <Icons name="user" />
                </div>
                <div className="flex-col items-center">
                  <div className="relative min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full">
                    <Image
                      className="rounded-full"
                      fill
                      src="https://pbs.twimg.com/profile_images/1598706831618179082/NOPtIHf3_400x400.jpg"
                      alt="Profile photo"
                    />
                  </div>
                  <span>
                    <b>Emir Morgan</b> followed you
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Notifications;
