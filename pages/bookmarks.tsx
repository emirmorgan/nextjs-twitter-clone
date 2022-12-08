import Head from "next/head";
import ListContent from "../components/ListContent";

const Bookmarks = () => {
  return (
    <>
      <Head>
        <title>Bookmarks / Twitter</title>
      </Head>
      <div className="w-full max-w-[600px] border-x">
        <span>Bookmarks</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Bookmarks;
