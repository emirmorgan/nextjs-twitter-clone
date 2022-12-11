import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Icons } from "../../assets/Icons";
import { SidebarItems } from "../../data/helpers";
import { useAppSelector } from "../../utils/hooks";
import SendTweet from "../Home/SendTweet";
import TwitterModal from "../TwitterModal";

import SidebarDropdown from "./SidebarDropdown";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);
  const currentUser: any = useAppSelector((state) => state.user.user);

  const [isModalVisible, setModalVisible] = useState(false);

  if (!currentUser) {
    return (
      <header className="flex flex-col grow shrink-0 basis-auto items-end ml-[76px] sm:ml-[88px] xl:ml-[275px]"></header>
    );
  }

  return (
    <>
      <header className="flex flex-col grow shrink-0 basis-auto items-end ml-[76px] sm:ml-[88px] xl:ml-[275px]">
        <div className="fixed flex flex-col items-center xl:items-start min-w-[68px] sm:w-[88px] xl:w-[275px] h-full px-3">
          <Link href="/home" className="group">
            <div className="flex items-center justify-center xl:justify-start p-3 group-hover:bg-twitter group-hover:bg-opacity-10 rounded-full transition-all ease-linear">
              <div className="text-twitter min-w-[28px] min-h-[28px]">
                <Icons name="twitter" />
              </div>
            </div>
          </Link>
          {SidebarItems.map((item, id) => (
            <Link
              href={item.href === "profile" ? currentUser?.username : item.href}
              key={id}
              className="w-full"
            >
              <div className="flex flex-col items-center xl:items-start group">
                <div className="flex max-w-max p-3 group-hover:bg-black group-hover:bg-opacity-10 rounded-full">
                  <div className="min-w-[28px] min-h-[28px]">
                    <Icons
                      name={
                        router.pathname === "/" + item.href
                          ? item.href + "Active"
                          : item.href
                      }
                    />
                  </div>
                  <div
                    className={
                      "hidden xl:block ml-[20px] mr-[16px] font-chirp text-xl" +
                      (router.pathname === "/" + item.href ? " font-bold" : "")
                    }
                  >
                    <span>{item.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="flex relative">
            <div className="w-full cursor-pointer">
              <div
                className="flex flex-col items-center xl:items-start group"
                onClick={() => setMenuVisible(true)}
              >
                <div className="flex max-w-max p-3 group-hover:bg-black group-hover:bg-opacity-10 rounded-full">
                  <div className="min-w-[28px] min-h-[28px]">
                    <Icons
                      name={
                        router.pathname === "/more" ? "more" + "Active" : "more"
                      }
                    />
                  </div>
                  <div
                    className={
                      "hidden xl:block ml-[20px] mr-[16px] font-chirp text-xl" +
                      (router.pathname === "/more" ? " font-bold" : "")
                    }
                  >
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
            {menuVisible ? (
              <SidebarDropdown
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
              />
            ) : null}
          </div>
          <div
            onClick={() => setModalVisible(true)}
            className="flex justify-center items-center min-h-[52px] min-w-[52px] w-[52px] xl:w-[90%] text-white font-bold bg-twitter rounded-full xl:px-8 mt-2 mb-1 cursor-pointer hover:bg-sky-600 transition-all ease-linear"
          >
            <div className="flex xl:hidden items-center justify-center min-w-[52px] min-h-[52px]">
              <Icons name="tweet" />
            </div>
            <span className="hidden xl:block">Tweet</span>
          </div>
          <SidebarProfile />
        </div>
      </header>
      {isModalVisible ? (
        <TwitterModal title="" setModalVisible={setModalVisible}>
          <SendTweet />
        </TwitterModal>
      ) : null}
    </>
  );
};

export default Sidebar;
