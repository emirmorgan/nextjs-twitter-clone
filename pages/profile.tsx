import Head from "next/head";
import ListContent from "../components/ListContent";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <span>Profile</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Profile;
