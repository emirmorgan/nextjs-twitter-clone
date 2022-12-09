import Head from "next/head";
import Image from "next/image";
import { Icons } from "../assets/Icons";
import ListContent from "../components/ListContent";

const Messages = () => {
  return (
    <>
      <Head>
        <title>Messages / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl px-4 py-3">Messages</span>
            <div className="flex items-center mr-3">
              <div className="min-w-[38px] min-h-[38px] ml-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Icons name="settings" />
              </div>
              <div className="min-w-[38px] min-h-[38px] p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Icons name="newMessage" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 mx-4 border rounded-full text-black border-gray-100 focus-within:border-twitter">
            <div className="flex min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px]">
              <Icons name="search" />
            </div>
            <input
              type="text"
              placeholder="Search Direct Messages"
              className="w-full bg-transparent text-center rounded-full px-3 py-2 focus:outline-none placeholder:text-sm"
            />
          </div>
          <a
            href="https://twitter.com/emirmrg"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex px-3 py-3 mt-3 hover:bg-gray-100">
              <div className="flex items-center">
                <div className="relative min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] rounded-full">
                  <Image
                    className="rounded-full"
                    fill
                    src="https://pbs.twimg.com/profile_images/1598706831618179082/NOPtIHf3_400x400.jpg"
                    alt="Profile photo"
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <div className="flex text-gray-500 text-sm">
                    <span className="text-black">
                      <b>Emir Morgan</b>
                    </span>
                    <span className="ml-1">@emirmrg</span>
                    <span className="ml-1">· From Future</span>
                  </div>
                  <p className="text-gray-500">Hello there!</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Messages;
