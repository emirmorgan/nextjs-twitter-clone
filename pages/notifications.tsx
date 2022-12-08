import Head from "next/head";

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Notifications / Twitter</title>
      </Head>
      <div className="w-full max-w-[600px] border-x">
        <span>Notifications</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <span>Notifications</span>
      </div>
    </>
  );
};

export default Notifications;