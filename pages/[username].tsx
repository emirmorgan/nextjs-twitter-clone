import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { useAppSelector } from "../utils/hooks";

//Components
import Tweets from "../components/Home/Tweets";
import ListContent from "../components/ListContent";
import DoesntExist from "../components/Profile/DoesntExist";
import EditProfile from "../components/Profile/EditProfile";
import TwitterModal from "../components/TwitterModal";

const Profile = () => {
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);
  const currentUser: any = useAppSelector((state) => state.user.user);
  const { username } = router.query;

  if (!currentUser) {
    return <></>;
  }

  if (currentUser.username !== username) {
    return <DoesntExist />;
  }

  return (
    <>
      <Head>
        <title>
          {currentUser.displayName + " " + "(@" + currentUser.username + ")"} /
          Twitter
        </title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex flex-col">
          <div className="flex flex-col px-3 py-1">
            <span className="font-bold text-xl">{currentUser.displayName}</span>
            <span className="text-sm text-gray-500">
              {currentUser.tweets.length} Tweets
            </span>
          </div>
          <div className="w-full h-44 bg-gray-300"></div>
          <div className="flex flex-col font-chirp">
            <div className="flex px-3 relative">
              <div className="absolute -bottom-4 left-4 border-[4px] border-white min-w-[136px] min-h-[136px] rounded-full">
                <Image
                  className="rounded-full object-cover"
                  fill
                  src={currentUser.photoSrc}
                  alt="Profile Photo"
                />
              </div>
              <div className="ml-auto mt-3">
                <button
                  onClick={() => setModalVisible(true)}
                  className="font-semibold border border-gray-300 rounded-full px-3 py-1.5 hover:bg-gray-200 transition-all ease-in-out"
                >
                  Edit profile
                </button>
              </div>
            </div>
            <div className="flex flex-col px-3 mt-4">
              <div className="flex flex-col mb-3">
                <span className="font-bold text-lg">
                  {currentUser.displayName}
                </span>
                <span className="text-sm text-gray-600">
                  {"@" + currentUser.username}
                </span>
                <p className="mt-2">{currentUser.bio}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  <b className="text-black">{currentUser.following.length}</b>{" "}
                  Following
                </span>
                <span className="text-sm text-gray-600">
                  <b className="text-black">{currentUser.followers.length}</b>{" "}
                  Followers
                </span>
                <span className="text-gray-500 text-sm">
                  Joined December 2022
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center text-center font-semibold border-b mt-3">
              <div className="flex flex-col justify-between items-center px-3 pt-3 flex-1 hover:bg-gray-200 cursor-pointer transition-all ease-linear">
                <span className="mb-3">Tweets</span>
                <div className="bg-twitter w-12 h-1 rounded-full"></div>
              </div>
              <div className="flex flex-col justify-between items-center px-3 pt-3 flex-2 hover:bg-gray-200 text-gray-500 cursor-pointer transition-all ease-linear">
                <span className="mb-3">Tweets & replies</span>
                <div className="w-12 h-1 rounded-full"></div>
              </div>
              <div className="flex flex-col justify-between items-center px-3 pt-3 flex-1 hover:bg-gray-200 text-gray-500 cursor-pointer transition-all ease-linear">
                <span className="mb-3">Media</span>
                <div className="w-12 h-1 rounded-full"></div>
              </div>
              <div className="flex flex-col justify-between items-center px-3 pt-3 flex-1 hover:bg-gray-200 text-gray-500 cursor-pointer transition-all ease-linear">
                <span className="mb-3">Likes</span>
                <div className="w-12 h-1 rounded-full"></div>
              </div>
            </div>
            <Tweets />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
      {isModalVisible ? (
        <TwitterModal title="Edit Profile" setModalVisible={setModalVisible}>
          <EditProfile setModalVisible={setModalVisible} />
        </TwitterModal>
      ) : null}
    </>
  );
};

export default Profile;
