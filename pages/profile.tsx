import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile / Twitter</title>
      </Head>
      <div className="w-full max-w-[600px] border-x">
        <span>Profile</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <span>Profile</span>
      </div>
    </>
  );
};

export default Profile;
