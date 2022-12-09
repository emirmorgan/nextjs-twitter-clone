import Head from "next/head";
import { Icons } from "../assets/Icons";
import ListContent from "../components/ListContent";

const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
      </Head>
      <div className="w-full h-full min-h-screen max-w-[600px] border-x">
        <div className="flex items-center px-4 py-1">
          <div className="flex items-center w-full bg-gray-100 text-gray-600 rounded-full border ml-1 mr-3 border-gray-100 focus-within:border-blue-400 focus-within:text-blue-400 focus-within:bg-white">
            <div className="flex items-center min-w-[34px] min-h-[34px] max-w-[34px] max-h-[34px] pl-4">
              <Icons name="search" />
            </div>
            <input
              className="rounded-full w-full bg-gray-100 p-3 mr-3 focus:outline-none focus-within:bg-white"
              placeholder="Search Twitter"
            ></input>
          </div>
          <div className="min-w-[38px] min-h-[38px] ml-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <Icons name="settings" />
          </div>
        </div>
        <div className="flex flex-col border-t">
          <span className="font-bold text-xl px-4 py-3">Trends for you</span>
          <ul className="flex flex-col gap-4 pt-2 pb-4">
            <li className="px-4">
              <div className="flex flex-col">
                <div className="w-16 h-2.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-14 h-1.5 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </li>
            <li className="px-4">
              <div className="flex flex-col">
                <div className="w-16 h-2.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-14 h-1.5 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </li>
            <li className="px-4">
              <div className="flex flex-col">
                <div className="w-16 h-2.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-14 h-1.5 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </li>
            <li className="px-4">
              <div className="flex flex-col">
                <div className="w-16 h-2.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-14 h-1.5 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </li>
            <li className="px-4">
              <div className="flex flex-col">
                <div className="w-16 h-2.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-14 h-1.5 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </li>
            <li className="px-4">
              <div className="flex flex-col">
                <div className="w-16 h-2.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-14 h-1.5 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col border-t px-4 py-3">
          <span className="font-bold text-xl pb-3">What&apos;s happening</span>
          <div className="flex items-center gap-12 space-y-8 animate-pulse">
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-28 sm:w-46 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[220px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[180px] mb-2.5"></div>
            </div>
            <div className="flex justify-center items-center w-full min-w-[100px] max-w-[150px] h-24 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-12 space-y-8 animate-pulse">
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-28 sm:w-46 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[220px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[180px] mb-2.5"></div>
            </div>
            <div className="flex justify-center items-center w-full min-w-[100px] max-w-[150px] h-24 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-12 space-y-8 animate-pulse">
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-28 sm:w-46 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[220px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[180px] mb-2.5"></div>
            </div>
            <div className="flex justify-center items-center w-full min-w-[100px] max-w-[150px] h-24 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-12 space-y-8 animate-pulse">
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-28 sm:w-46 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[220px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[180px] mb-2.5"></div>
            </div>
            <div className="flex justify-center items-center w-full min-w-[100px] max-w-[150px] h-24 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-12 space-y-8 animate-pulse">
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-28 sm:w-46 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[220px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[180px] mb-2.5"></div>
            </div>
            <div className="flex justify-center items-center w-full min-w-[100px] max-w-[150px] h-24 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-12 space-y-8 animate-pulse">
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-28 sm:w-46 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[220px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[180px] mb-2.5"></div>
            </div>
            <div className="flex justify-center items-center w-full min-w-[100px] max-w-[150px] h-24 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[350px] mr-[10px]">
        <ListContent />
      </div>
    </>
  );
};

export default Explore;
