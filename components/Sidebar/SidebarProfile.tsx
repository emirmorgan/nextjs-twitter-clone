import Image from "next/image";

import { Icons } from "../../assets/Icons";
import { useAppSelector } from "../../utils/hooks";

const SidebarProfile = () => {
  const currentUser: any = useAppSelector((state) => state.user.user);

  return (
    <div className="my-3 w-full mt-auto hover:bg-gray-200 rounded-full cursor-pointer">
      {currentUser ? (
        <div className="flex justify-center items-center p-2">
          <div className="max-w-[40px] max-h-[40px] min-w-[40px] min-h-[40px] relative rounded-full">
            <Image
              src={currentUser?.photoSrc}
              fill
              alt="Profile picture"
              className="rounded-full"
            />
          </div>
          <div className="hidden xl:flex flex-col mx-3 min-h-[40px]">
            <span className="text-black font-semibold text-[15px]">
              {currentUser?.displayName}
            </span>
            <span className="text-gray-400 text-[15px]">
              {"@" + currentUser?.username}
            </span>
          </div>
          <div className="hidden xl:flex justify-end flex-1">
            <Icons name="burgerMore" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center p-2">
          <svg
            className="xl:mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="hidden xl:block w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
          <div className="hidden xl:block w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      )}
    </div>
  );
};

export default SidebarProfile;
