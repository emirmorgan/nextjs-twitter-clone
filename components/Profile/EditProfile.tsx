import Image from "next/image";
import { Icons } from "../../assets/Icons";
import { useAppSelector } from "../../utils/hooks";

const EditProfile = () => {
  const currentUser: any = useAppSelector((state) => state.user.user);

  const handleUpload = () => {};

  return (
    <>
      <div className="flex flex-col mb-16">
        <div className="w-full h-44 bg-gray-300"></div>
        <div className="flex flex-col font-chirp">
          <div className="flex px-3 relative">
            <div className="absolute -bottom-16 left-4 border-[4px] border-white min-w-[116px] min-h-[116px] rounded-full">
              <Image
                className="rounded-full object-cover"
                fill
                src={currentUser?.photoSrc}
                alt="Profile Photo"
              />
              <div className="absolute flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 w-full h-full">
                <div
                  onClick={handleUpload}
                  className="bg-black text-white bg-opacity-70 rounded-full min-w-[36px] max-w-[36px] p-2 hover:bg-opacity-50 cursor-pointer"
                >
                  <Icons name="addPhoto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-3 p-2">
        <div className="flex flex-col rounded border p-1 border-gray-400 focus-within:border-twitter">
          <span className="text-xs text-gray-500 ml-1">Name</span>
          <input
            className="rounded px-1 py-1 focus:outline-none"
            placeholder={currentUser.displayName}
            type="text"
          />
        </div>
        <div className="flex flex-col rounded border p-1 border-gray-400 focus-within:border-twitter">
          <span className="text-xs text-gray-500 ml-1">Username</span>
          <input
            className="rounded px-1 py-1 focus:outline-none "
            placeholder={currentUser.username}
            type="text"
          />
        </div>
        <div className="flex flex-col rounded border p-1 border-gray-400 focus-within:border-twitter">
          <span className="text-xs text-gray-500 ml-1">Bio</span>
          <input
            className="rounded px-1 py-1 focus:outline-none "
            placeholder={currentUser.bio}
            type="text"
          />
        </div>
        <button
          type="submit"
          className="text-white font-bold bg-black rounded-full min-w-[100px] ml-auto py-2 px-3 mb-1 hover:bg-opacity-90"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default EditProfile;
