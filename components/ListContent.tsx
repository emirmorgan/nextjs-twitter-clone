import { Icons } from "../assets/Icons";

const ListContent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center my-1 bg-gray-100 text-gray-600 rounded-full border border-gray-100 focus-within:border-blue-400 focus-within:text-blue-400 focus-within:bg-white">
        <div className="flex items-center min-w-[34px] min-h-[34px] max-w-[34px] max-h-[34px] pl-4">
          <Icons name="search" />
        </div>
        <input
          className="rounded-full w-full bg-gray-100 p-3 mr-3 focus:outline-none focus-within:bg-white"
          placeholder="Search Twitter"
        ></input>
      </div>
      <div className="flex flex-col bg-gray-50 rounded-xl text-black mt-3">
        <span className="font-bold text-xl px-4 py-3">You might like</span>
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex justify-between items-center px-5">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div className="flex flex-col">
                <div className="w-20 h-2.5 bg-gray-200 rounded-full mb-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center px-5">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div className="flex flex-col">
                <div className="w-20 h-2.5 bg-gray-200 rounded-full mb-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center px-5">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div className="flex flex-col">
                <div className="w-20 h-2.5 bg-gray-200 rounded-full mb-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center px-5">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div className="flex flex-col">
                <div className="w-20 h-2.5 bg-gray-200 rounded-full mb-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-50 rounded-xl text-black mt-4">
        <span className="font-bold text-xl px-4 py-3">Trends for you</span>
        <ul className="flex flex-col gap-4 pt-2 pb-3">
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
    </div>
  );
};

export default ListContent;
