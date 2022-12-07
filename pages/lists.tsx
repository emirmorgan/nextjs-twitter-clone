import Head from "next/head";

const Lists = () => {
  return (
    <>
      <Head>
        <title>Lists / Twitter</title>
      </Head>
      <div className="w-full max-w-[600px] border-x">
        <span>Lists</span>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <span>Lists</span>
      </div>
    </>
  );
};

export default Lists;
