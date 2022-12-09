import Head from "next/head";
import ListContent from "../components/ListContent";

const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <span>Explore</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Explore;
