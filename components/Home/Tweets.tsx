import Image from "next/image";
import Link from "next/link";
import { Icons } from "../../assets/Icons";
import { useAppSelector } from "../../utils/hooks";

const Tweets = () => {
  const currentUser: any = useAppSelector((state) => state.user.user);
  return (
    <div className="flex flex-col">
      {currentUser?.tweets.map((item: any, id: number) => (
        <div
          key={id}
          className="flex flex-col hover:bg-gray-100 border-b px-4 py-3"
        >
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
              <p className="break-words">{item.tweet}</p>
              <div className="flex max-w-[420px] justify-between text-gray-600 mt-3">
                <div className="flex items-center gap-1 group hover:text-twitter cursor-pointer">
                  <div className="p-2 rounded-full group-hover:bg-twitter group-hover:bg-opacity-10 transition-all ease-in-out">
                    <div className="min-w-[1.25em] min-h-[1.25em]">
                      <Icons name="comment" />
                    </div>
                  </div>
                  <span className="text-sm">{item.comments}</span>
                </div>
                <div className="flex items-center gap-1 group hover:text-green-500 cursor-pointer">
                  <div className="p-2 rounded-full group-hover:bg-green-400 group-hover:bg-opacity-10 transition-all ease-in-out">
                    <div className="min-w-[1.25em] min-h-[1.25em]">
                      <Icons name="retweet" />
                    </div>
                  </div>
                  <span className="text-sm">{item.retweets}</span>
                </div>
                <div className="flex items-center gap-1 group hover:text-red-500 cursor-pointer">
                  <div className="p-2 rounded-full group-hover:bg-red-500 group-hover:bg-opacity-10 transition-all ease-in-out">
                    <div className="min-w-[1.25em] min-h-[1.25em]">
                      <Icons name="like" />
                    </div>
                  </div>
                  <span className="text-sm">{item.likes}</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="p-2 rounded-full hover:bg-twitter hover:text-twitter hover:bg-opacity-10 transition-all ease-in-out">
                    <div className="min-w-[1.25em] min-h-[1.25em]">
                      <Icons name="share" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
