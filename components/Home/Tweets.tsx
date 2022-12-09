import Image from "next/image";
import Link from "next/link";
import { Icons } from "../../assets/Icons";
import { useAppSelector } from "../../utils/hooks";

const Tweets = () => {
  const currentUser: any = useAppSelector((state) => state.user.user);
  return (
    <div className="flex flex-col">
      {currentUser?.tweets.map((item: any, id: number) => (
        <div key={id} className="flex flex-col hover:bg-gray-100 px-4 py-3">
          <div className="flex">
            <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] relative rounded-full">
              <Image
                className="rounded-full"
                fill
                src={currentUser?.photoSrc}
                alt="Profile Photo"
              />
            </div>
            <div className="flex-col items-center w-full ml-2">
              <div className="flex items-center">
                <Link href="/profile">
                  <span className="text-lg font-semibold hover:underline">
                    {currentUser?.displayName}
                  </span>
                </Link>
                <Link href="/profile">
                  <span className="text-gray-500 text-sm ml-1">
                    {"@" + currentUser?.username}
                  </span>
                </Link>
                <span className="text-gray-500 text-sm ml-1">· 5min</span>
                <div className="ml-auto cursor-pointer">
                  <Icons name="burgerMore" />
                </div>
              </div>
              <p className=" break-words">{item.tweet}</p>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
