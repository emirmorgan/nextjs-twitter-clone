import Head from "next/head";

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
        <span>Bookmarks</span>
      </div>
    </>
  );
};

export default Bookmarks;
