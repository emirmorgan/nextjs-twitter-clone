import Image from "next/image";
import { useState } from "react";
import { Icons } from "../../assets/Icons";
import { editProfile } from "../../firebase";
import { updateProfile } from "../../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const EditProfile = ({ setModalVisible }: any) => {
  const dispatch = useAppDispatch();
  const currentUser: any = useAppSelector((state) => state.user.user);

  const [source, setSource] = useState(currentUser.photoSrc);
  const [name, setName] = useState(currentUser.displayName);
  const [bio, setBio] = useState(currentUser.bio);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const photoSrc = e.target.source.value;
    const displayName = e.target.name.value;
    const bio = e.target.bio.value;

    if (source === "" && source.length === 0) {
      alert("You can't leave the image source is empty.");
    } else if (name === "" && name.length === 0) {
      alert("You can't leave the name is empty.");
    } else {
      editProfile(currentUser, source, name, bio);
      dispatch(updateProfile({ photoSrc, displayName, bio }));

      setModalVisible(false);
    }
  };

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
                <div className="bg-black text-white bg-opacity-70 rounded-full min-w-[36px] max-w-[36px] p-2 hover:bg-opacity-50 cursor-pointer">
                  <Icons name="addPhoto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-2">
        <div className="flex flex-col rounded border p-1 border-gray-400 focus-within:border-twitter">
          <span className="text-xs text-gray-500 ml-1">Photo</span>
          <input
            className="rounded px-1 py-1 focus:outline-none "
            placeholder="Link of the image"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            type="text"
            name="source"
          />
        </div>
        <div className="flex flex-col rounded border p-1 border-gray-400 focus-within:border-twitter">
          <span className="text-xs text-gray-500 ml-1">Name</span>
          <input
            className="rounded px-1 py-1 focus:outline-none"
            placeholder={currentUser.displayName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col rounded border p-1 border-gray-400 focus-within:border-twitter">
          <span className="text-xs text-gray-500 ml-1">Bio</span>
          <input
            className="rounded px-1 py-1 focus:outline-none "
            placeholder={currentUser.bio}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
            name="bio"
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
