import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/dashboard" className="flex items-center">
              <span className="self-center text-xl font-semibold font-serif px-3 whitespace-nowrap dark:text-white">
                Chit-Chat
              </span>
            </Link>

            <div className="w-full md:w-auto" id="navbar-default">
              <ul className="flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/organization"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white"
                  >
                    Organizations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/addAIData"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white"
                  >
                    Train Data
                  </Link>
                </li>
                <li>
                  <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Docs
                  </a>
                </li>
                <li>
                  <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </a>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
