import Head from "next/head";
import ListContent from "../components/ListContent";

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Notifications / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <span>Notifications</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Notifications;
