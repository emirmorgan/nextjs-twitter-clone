import { useState } from "react";
import Image from "next/image";

import { Icons } from "../../assets/Icons";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { sendTweet } from "../../firebase";
import { addTweet } from "../../redux/userSlice";

const SendTweet = () => {
  const dispatch = useAppDispatch();
  const [tweet, setTweet] = useState("");
  const [isEmpty, setEmpty] = useState(true);
  const currentUser: any = useAppSelector((state) => state.user.user);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const comments = Math.floor(Math.random() * 1000);
    const retweets = Math.floor(Math.random() * 1000);
    const likes = Math.floor(Math.random() * 1000);

    sendTweet(currentUser, tweet, comments, retweets, likes);
    dispatch(addTweet({ tweet, comments, retweets, likes }));

    //Reset after submit
    setTweet("");
    setEmpty(true);
  };

  const handleChange = (e: any) => {
    setTweet(e.target.value);

    if (e.target.value.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  return (
    <div className="flex flex-col mt-3 p-4 pt-2">
      <div className="flex">
        <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] relative rounded-full">
          <Image
            className="rounded-full"
            fill
            src={currentUser?.photoSrc}
            alt="Profile Photo"
          />
        </div>
        <input
          className="w-full bg-transparent focus:outline-none placeholder:text-xl py-3 ml-3"
          type="text"
          placeholder="What's happenening?"
          value={tweet}
          onChange={handleChange}
          maxLength={280}
        />
      </div>
      <div className="flex flex-wrap ml-[48px] mt-3">
        <div className="flex gap-1">
          <div className="min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] text-twitter hover:bg-twitter hover:bg-opacity-10 rounded-full cursor-pointer p-2">
            <Icons name="media" />
          </div>
          <div className="min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] text-twitter hover:bg-twitter hover:bg-opacity-10 rounded-full cursor-pointer p-2">
            <Icons name="gif" />
          </div>
          <div className="min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] text-twitter hover:bg-twitter hover:bg-opacity-10 rounded-full cursor-pointer p-2">
            <Icons name="poll" />
          </div>
          <div className="min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] text-twitter hover:bg-twitter hover:bg-opacity-10 rounded-full cursor-pointer p-2">
            <Icons name="emoji" />
          </div>
          <div className="min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] text-twitter hover:bg-twitter hover:bg-opacity-10 rounded-full cursor-pointer p-2">
            <Icons name="schedule" />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isEmpty}
          className="flex items-center justify-center ml-auto max-w-[200px] bg-twitter text-white font-semibold py-2 px-4 rounded-full disabled:bg-opacity-40"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default SendTweet;
